import { getApiRoute } from "_server/get-api-route";
import { asTypes } from "_utils/json-to-ts";
import { SHOPIFY } from "config/shopify";
import { SpecialProduct } from "dist/test";
import * as fs from "fs";
import JsonToTS from "json-to-ts";
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
  const navlinks = ["carrierservice"] ||
  SHOPIFY.api.rest.nav.map(({ children }) => children.map(({ key }) => key)).flat();
  const returnArray = [];

  for (let i = 0; i < navlinks.length; i++) {
    console.log(i, navlinks[i]);
    const apiData = await getApiRoute({ version: "2021-10", endpoint: navlinks[i] });
    const api = apiData.api.rest_resource;

    const paths = api.paths.map(({ "x-examples": examples }) =>
      examples
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
        .map(({ response }) => JSON.parse(response.body))
    );

    const primaryModelArray = paths.flat();

    returnArray.push(...primaryModelArray);
  }

  const data = returnArray
    .sort((obj) => {})
    .reduce(
      (acc, obj) => {
        Object.entries(obj).forEach(([key, val]) => {
          if (acc[key] && typeof val === "object" && !Array.isArray(acc[key])) {
            acc[key] = { ...acc[key], ...val };
            return acc;
          }

          if (acc[key] && typeof val === "object" && Array.isArray(acc[key])) {
            acc[key].push(val);
            return acc;
          }

          const found = returnArray.find((obj) => {
            const otherKey = Object.keys(obj)[0];
            return (
              otherKey.includes(key) &&
              otherKey.length > key.length &&
              otherKey.length - key.length <= 2
            );
          });

          if (found && Array.isArray(Object.entries(found)[0][1])) {
            acc[Object.entries(found)[0][0]] = Object.entries(found)[0][1];
            acc[Object.entries(found)[0][0]].push(val);
          }

          if (!acc[key] && typeof val === "object") {
            acc[key] = val;
            return acc;
          }
        });
        return acc;
      },
      {}
    );

  res.status(200).json(data);
};

export default ReadShopifyDev;
