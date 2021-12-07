import { sumPathTypes } from "_server/generate-types/summarize-types";
import { getApiRoute } from "_server/get-api-route";
import { stripHtml } from "_utils/string-manipulation";
import { SHOPIFY } from "config/shopify";
import type { NextApiRequest, NextApiResponse } from "next";
import { cleanUpRootObjects } from "../../_server/generate-types/clean-up-root-objects";
import { findOverlappingObjects } from "../../_server/generate-types/find-overlapping-objects";
import { getSingularKey } from "../../_server/generate-types/get-singular-key";

type ReadShopifyDevFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

/**
 * Identifying Shopify API Patterns
 *
 * Get '/products.json  ---> List of Items
 * Get '/products/{id}.json ---> Single item
 * Get '/products/count.json ---> Count of items
 * Delete - need path id
 * Put - need path id - need body input (Product)
 * Post - need body input (Product)
 * */
export const ReadShopifyDev: ReadShopifyDevFunction = async (req, res) => {
  const navlinks =
    /*["product", "product-variant"] ||*/
    SHOPIFY.api.rest.nav.map(({ children }) => children.map(({ key }) => key)).flat();

  for (let i = 0; i < SHOPIFY.api.rest.versions.length; i++) {
    const version = SHOPIFY.api.rest.versions[i];
    const routeArray = [];

    for (let i = 0; i < navlinks.length; i++) {
      console.log(i, navlinks[i]);
      const apiData = await getApiRoute({ version, endpoint: navlinks[i] });
      const api = apiData.api.rest_resource;
      const component = api.components[0];

      const name = component.name;
      const props = component.properties;
      const params = component.properties;
      const required = component.required;
      const readOnly = props.filter(({ readOnly }) => readOnly).map(({ name }) => name);
      const example = props.reduce((acc, { name, example }) => ({ ...acc, [name]: example }), {});
      const properties = props.map(({ name, description }) => ({
        name,
        comment: stripHtml(description),
      }));

      const paths = api.paths.map(
        ({ url, action, "x-examples": examples, parameters, description }) => ({
          body: examples
            .filter(({ request }) => {
              try {
                JSON.parse(request.body);
                return request.body !== "{}";
              } catch (err) {
                return false;
              }
            })
            .map(({ request }) => JSON.parse(request.body)),
          requireBody: examples.some(({ request }) => request.body && request.body !== "{}"),
          query: parameters
            .filter((params) => params.in === "query")
            .map(({ name, description }) => ({
              name,
              comment: stripHtml(description),
            })),
          path: parameters
            .filter((params) => params.in === "path")
            .map(({ name, description }) => ({
              name,
              comment: stripHtml(description),
            })),
          action,
          comment: stripHtml(description),
          url,
          examples: examples
            .filter(({ response, status, request_path }) => {
              if (!/^2/.test(status)) {
                return false;
              }

              try {
                JSON.parse(response.body);
                if (response.body === "{}") {
                  return false;
                }
                return !Object.values(JSON.parse(response.body)).some(
                  (obj) => typeof obj !== "object"
                );
              } catch (err) {
                return false;
              }
            })
            .map(({ request_path, response }) => ({
              path: request_path,
              example: JSON.parse(response.body),
            })),
        })
      );

      const repeatedResponsesExamples = paths
        .sort((a, b) => {
          const aArray = a.examples.some(({ example }) =>
            Object.entries(example).some(([key, val]) => Array.isArray(val))
          );
          const bArray = b.examples.some(({ example }) =>
            Object.entries(example).some(([key, val]) => Array.isArray(val))
          );
          if (aArray === bArray) {
            return 0;
          }
          if (bArray) {
            return -1;
          }
          return 1;
        })
        .reduce(
          (acc, { examples }) => {
            examples.forEach(({ example }) => {
              // console.log(Object.keys(example));
              Object.entries(example).forEach(([key, val]) => {
                if (Array.isArray(val)) {
                  key = getSingularKey(key);
                  const accKeys = Object.keys(acc);
                  const accIndex = accKeys.findIndex((accKey) =>
                    new RegExp(`^${key}$`, "gi").test(accKey)
                  );
                  if (accIndex !== -1) {
                    acc[accKeys[accIndex]] = [...acc[accKeys[accIndex]], ...val];
                    return acc;
                  }
                  acc[key] = val;
                  return acc;
                }

                const accKeys = Object.keys(acc);
                const accIndex = accKeys.findIndex((accKey) =>
                  new RegExp(`^${key}$`, "gi").test(accKey)
                );
                if (accIndex !== -1) {
                  acc[accKeys[accIndex]] = [...acc[accKeys[accIndex]], val];
                  return acc;
                }
                acc[key] = [val];
                return acc;
              });
            });

            return acc;
          },
          {}
        );

      routeArray.push({
        paths,
        name,
        props,
        example,
        params,
        required,
        readOnly,
        properties,
        repeatedResponsesExamples,
      });
    }

    const { masterTypes, replacements } = findOverlappingObjects(
      cleanUpRootObjects(sumPathTypes(routeArray))
    );

    routeArray.forEach((route) => {
      if (!masterTypes[route.name]) {
        console.log(route.name);
      }
      if (Object.values(replacements).find((r) => r.includes(route.name))) {
        console.log(route.name, "replacement");
      }
    });

    res.status(200).json(masterTypes);
    return;

    // writeTypesToFile({ path: `types/${version}/root-types.ts`, types });
  }

  res.status(200).json("success");
};

export default ReadShopifyDev;
