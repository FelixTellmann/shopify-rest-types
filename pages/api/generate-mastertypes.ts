import { cleanUpRootObjects } from "_server/generate-types/clean-up-root-objects";
import { findOverlappingObjects } from "_server/generate-types/find-overlapping-objects";
import { getCorrectName } from "_server/generate-types/get-correct-name";
import { getSingularKey } from "_server/generate-types/get-singular-key";
import { getType } from "_server/generate-types/get-type";
import { sumPathTypes } from "_server/generate-types/summarize-types";
import { getApiRoute } from "_server/get-api-route";
import { stripHtml } from "_utils/string-manipulation";
import { SHOPIFY } from "config/shopify";
import type { NextApiRequest, NextApiResponse } from "next";

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
  const navlinks = /*[
    "product",
    "product-image",
    "product-variant",
    "collection",
    "smartcollection",
  ] ||*/ SHOPIFY.api.rest.nav.map(({ children }) => children.map(({ key }) => key)).flat();

  for (let i = 0; i < SHOPIFY.api.rest.versions.length; i++) {
    const version = SHOPIFY.api.rest.versions[i];
    const routeArray = [];

    for (let i = 0; i < navlinks.length; i++) {
      console.log(i, navlinks[i]);
      const apiData = await getApiRoute({ version, endpoint: navlinks[i] });
      const api = apiData.api.rest_resource;
      const component = api.components[0];

      const apiName = getCorrectName(component.name);
      const name = component.name;
      const props = component.properties;
      const params = component.properties;
      const required = component.required;
      const readOnly = props.filter(({ readOnly }) => readOnly).map(({ name }) => name);
      const example = props.reduce((acc, { name, example }) => ({ ...acc, [name]: example }), {});
      const properties = props.map(({ name, description, type, example }) => ({
        name,
        type,
        exampleType: getType(example),
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
                /* deactivated to test multi object returns */
                /*return !Object.values(JSON.parse(response.body)).some(
                  (obj) => typeof obj !== "object"
                );*/
                return true;
              } catch (err) {
                return false;
              }
            })
            .map(({ request_path, response }) => {
              if (
                request_path === "/admin/api/2021-10/shopify_payments/balance/transactions.json"
              ) {
                const returnData = Object.entries(JSON.parse(response.body)).reduce(
                  (acc, [key, val]) => {
                    if (key === "transactions") {
                      acc["shopify_payment_transactions"] = val;
                      return acc;
                    }
                    acc[key] = val;
                    return acc;
                  },
                  {}
                );

                return {
                  path: request_path,
                  example: returnData,
                };
              }
              return {
                path: request_path,
                example: JSON.parse(response.body),
              };
            }),
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
        apiName,
        paths,
        name,
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
      if (masterTypes[route.apiName]) {
        route.properties.forEach(({ name, type, exampleType, comment }) => {
          if (masterTypes[route.apiName][name]) {
            if (Array.isArray(masterTypes[route.apiName][name]) && (type || exampleType)) {
              masterTypes[route.apiName][name] = type ? type.replace("x-") : exampleType;
            }
            masterTypes[route.apiName][name] = {
              type: masterTypes[route.apiName][name],
              readOnly: route?.readOnly?.includes(name) || false,
              required: route?.required?.includes(name) || false,
              comment: comment.trim(),
            };
          } else {
            console.log("ERROR MISSING TYPE");
          }
        });
      }
      if (!masterTypes[route.apiName]) {
        console.log(route.apiName);
      }
      if (Object.values(replacements).find((r) => r.includes(route.apiName))) {
        console.log(route.apiName, "replacement");
      }
    });

    console.log(routeArray);

    res.status(200).json(masterTypes);
    return;

    // writeTypesToFile({ path: `types/${version}/root-types.ts`, types });
  }

  res.status(200).json("success");
};

export default ReadShopifyDev;
