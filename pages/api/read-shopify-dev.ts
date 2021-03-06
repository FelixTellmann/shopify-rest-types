import { getApiRoute } from "_server/get-api-route";
import { asTypes, writeTypesToFile } from "_utils/json-to-ts";
import { stripHtml } from "_utils/string-manipulation";
import { SHOPIFY } from "config/shopify";
import JsonToTS from "json-to-ts";
import type { NextApiRequest, NextApiResponse } from "next";

type ReadShopifyDevFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

const getSingularKey = (key: string) => {
  switch (key) {
    case "access_scopes": {
      return "access_scope";
    }
    case "application_charges": {
      return "application_charge";
    }
    case "recurring_application_charges": {
      return "recurring_application_charge";
    }
    case "usage_charges": {
      return "usage_charge";
    }
    case "discount_codes": {
      return "discount_code";
    }
    case "price_rules": {
      return "price_rule";
    }
    case "articles": {
      return "article";
    }
    case "pages": {
      return "page";
    }
    case "themes": {
      return "theme";
    }
    case "images": {
      return "image";
    }
    case "shipping_rates": {
      return "shipping_rate";
    }
    case "provinces": {
      return "province";
    }
    case "fulfillment_services": {
      return "fulfillment_service";
    }
    case "disputes": {
      return "dispute";
    }
    case "shipping_zones": {
      return "shipping_zone";
    }
    case "currencies": {
      return "currency";
    }
    case "policies": {
      return "policy";
    }
    case "countries": {
      return "country";
    }
    case "carrier_services": {
      return "carrier_service";
    }
    default: {
      return key.replace(/e?s$/, "");
    }
  }
};

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
  const navlinks = SHOPIFY.api.rest.nav
    .map(({ children }) => children.map(({ key }) => key))
    .flat();

  for (let i = 0; i < SHOPIFY.api.rest.versions.length; i++) {
    const version = SHOPIFY.api.rest.versions[i];
    const returnArray = [];

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
            .filter(({ response, status }) => {
              if (!/^2/.test(status)) {
                return false;
              }
              try {
                JSON.parse(response.body);
                return response.body !== "{}";
              } catch (err) {
                return false;
              }
            })
            .map(({ response }) => JSON.parse(response.body)),
        })
      );

      const primaryResponsesExamples = paths.reduce((acc, { examples }) => {
        examples.forEach((example) => {
          Object.entries(example).forEach(([key, val]) => {
            if (Array.isArray(val)) {
              key = key.replace(/e?s$/, "");
            }
            const keyParts = key.split("_");

            if (keyParts.every((part) => new RegExp(part, "gi").test(name))) {
              if (Array.isArray(val)) {
                acc = [...acc, ...val];
              } else {
                acc.push(val);
              }
            }
          });
        });

        return acc;
      }, []);

      const repeatedResponsesExamples = paths
        .sort((a, b) => {
          const aArray = a.examples.some((example) =>
            Object.entries(example).some(([key, val]) => Array.isArray(val))
          );
          const bArray = b.examples.some((example) =>
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
            examples.forEach((example) => {
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

      returnArray.push(repeatedResponsesExamples);
    }

    const masterTypes = returnArray.reduce(
      (acc, obj) => {
        Object.entries(obj).forEach(([key, val]) => {
          if (Object.keys(acc).includes(key) && Array.isArray(val)) {
            if (key === "checkout") {
              acc["sales_channel_checkout"] = val;
              return;
            }
            if (key === "transaction") {
              acc["shopify_payments_transaction"] = val;
              return;
            }

            acc[key] = [...acc[key], ...val];
            return;
          }

          acc[key] = val;
        });
        return acc;
      },
      {}
    );

    const types = asTypes(JsonToTS(masterTypes, { rootName: "masterTypes" }));

    writeTypesToFile({ path: `dist/${version}.ts`, types });
  }

  res.status(200).json("success");
};

export default ReadShopifyDev;
