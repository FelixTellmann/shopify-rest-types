import { cleanUpRootObjects } from "_server/generate-types/clean-up-root-objects";
import { findOverlappingObjects } from "_server/generate-types/find-overlapping-objects";
import { getCorrectName } from "_server/generate-types/get-correct-name";
import { getManualTypes } from "_server/generate-types/get-manual-types";
import { getSingularKey } from "_server/generate-types/get-singular-key";
import { getTypeAsString } from "_server/generate-types/get-type";
import { getTypeByName } from "_server/generate-types/get-type-by-name";
import { sumPathTypes } from "_server/generate-types/summarize-types";
import { getApiRoute } from "_server/get-api-route";
import { stripHtml } from "_utils/string-manipulation";
import { SHOPIFY } from "config/shopify";
import type { NextApiRequest, NextApiResponse } from "next";
import { fixShopifyApiErrors } from "../../_server/generate-types/fix-shopify-api-errors";
import { jsonTypesToStrArray } from "../../_server/generate-types/json-types-to-str-array";
import { nameToSnakeCase } from "../../_server/generate-types/name-to-snake-case";
import { writeTypesToFile } from "../../_utils/json-to-ts";

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

  const requestArray = [];

  for (let i = 0; i < SHOPIFY.api.rest.versions.length; i++) {
    const version = SHOPIFY.api.rest.versions[i];
    const routeArray = [];
    for (let i = 0; i < navlinks.length; i++) {
      requestArray.push(getApiRoute({ version, endpoint: navlinks[i] }));
    }

    const apiEndpoints = await Promise.all(requestArray);

    apiEndpoints.forEach((apiData) => {
      console.log(i, navlinks[i]);
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
        exampleType: getTypeAsString(example),
        comment: stripHtml(description),
        example,
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

      // console.log({ name: nameToSnakeCase(name), keys: Object.keys(repeatedResponsesExamples) });

      if (repeatedResponsesExamples[nameToSnakeCase(name)]) {
        repeatedResponsesExamples[nameToSnakeCase(name)].push(example);
      } else {
        console.log(
          `needs Fixing: ${name} - ${nameToSnakeCase(name)} - keys: ${Object.keys(
            repeatedResponsesExamples
          )}}`
        );
      }

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
    });

    const summarizedTypes = sumPathTypes(routeArray);
    //     res.status(200).json({ summarizedTypes });
    // return;
    const cleanedRoot = cleanUpRootObjects(summarizedTypes);

    const { masterTypes, replacements } = findOverlappingObjects(cleanedRoot);

    /*    res.status(200).json({ summarizedTypes, cleanedRoot, masterTypes });
    return;*/
    masterTypes["AppliedDiscount"] = {
      title: "string",
      value: "string",
      amount: "string",
      applicable: "boolean",
      value_type: "string",
      description: "string",
      application_type: "string",
      non_applicable_reason: "string",
    };

    /* TODO: Continue from here! NB object, array, object[] need to be reduced to its actual models*/
    routeArray.forEach((route) => {
      if (masterTypes[route.apiName]) {
        route.properties.forEach(({ name, type, exampleType, comment, example }) => {
          if (masterTypes[route.apiName][name]) {
            if (!masterTypes[route.apiName][name]["type"]) {
              if (Array.isArray(masterTypes[route.apiName][name]) && (type || exampleType)) {
                if (exampleType.includes("object")) {
                  // console.log(route.apiName, name, example, "a", masterTypes[route.apiName][name]);
                }
                /* masterTypes[route.apiName][name] = getTypeByName(name)
                  ? getTypeByName(name)
                  : exampleType
                  ? exampleType === "object"
                    ? example
                    : exampleType === "array"
                    ? example
                    : exampleType === "object[]"
                    ? example
                    : exampleType
                  : type.replace("x-", "");*/
                masterTypes[route.apiName][name] = getTypeByName(name)
                  ? getTypeByName(name)
                  : exampleType
                  ? exampleType === "object"
                    ? exampleType
                    : exampleType === "array"
                    ? exampleType
                    : exampleType === "object[]"
                    ? exampleType
                    : exampleType
                  : type.replace("x-", "");
              }
              masterTypes[route.apiName][name] = {
                type: masterTypes[route.apiName][name],
                readOnly: route?.readOnly?.includes(name) || false,
                required: route?.required?.includes(name) || false,
                comment: comment.trim(),
              };
            }
          } else {
            if (exampleType.includes("object")) {
              // console.log(route.apiName, name, example, "b");
            }
            masterTypes[route.apiName][name] = {
              type: getTypeByName(name)
                ? getTypeByName(name)
                : exampleType
                ? exampleType === "object"
                  ? exampleType
                  : exampleType === "array"
                  ? exampleType
                  : exampleType === "object[]"
                  ? exampleType
                  : exampleType
                : type.replace("x-", ""),
              readOnly: route?.readOnly?.includes(name) || false,
              required: route?.required?.includes(name) || false,
              comment: comment.trim(),
            };
          }
        });
      }
    });

    const subTypes = {};

    for (const key in masterTypes) {
      for (const subKey in masterTypes[key]) {
        if (!subTypes[subKey]) {
          if (!Array.isArray(masterTypes[key][subKey])) {
            subTypes[subKey] = masterTypes[key][subKey];
          }
        }
      }
    }

    for (const key in masterTypes) {
      for (const subKey in masterTypes[key]) {
        if (Array.isArray(masterTypes[key][subKey])) {
          if (subTypes[subKey]) {
            masterTypes[key][subKey] = subTypes[subKey];
          } else {
            masterTypes[key][subKey] = getManualTypes(subKey);
          }
        }
      }
    }

    const types = fixShopifyApiErrors(masterTypes);

    writeTypesToFile({ path: `types/${version}/root-types.ts`, types: jsonTypesToStrArray(types) });

    routeArray.forEach((route) => {
      if (!types[route.apiName]) {
        console.log(route.apiName);
      }
      if (Object.values(replacements).find((r) => r.includes(route.apiName))) {
        console.log(route.apiName, "replacement");
      }
    });

    res.status(200).json(types);
    return;

    // writeTypesToFile({ path: `types/${version}/root-types.ts`, types });
  }

  res.status(200).json("success");
};

export default ReadShopifyDev;
