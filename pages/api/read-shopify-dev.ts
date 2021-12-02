import { getApiRoute } from "_server/get-api-route";
import { asTypes } from "_utils/json-to-ts";
import * as fs from "fs";
import JsonToTS from "json-to-ts";
import type { NextApiRequest, NextApiResponse } from "next";

type ReadShopifyDevFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export const ReadShopifyDev: ReadShopifyDevFunction = async (req, res) => {
  const apiData = await getApiRoute({ version: "2021-10", endpoint: "product" });
  // const types = asTypes(JsonToTS(apiData, { rootName: "ApiTypes" }));

  apiData.api.rest_resource;
  const params = apiData.api.rest_resource.components[0].properties;
  const required = apiData.api.rest_resource.components[0].required;
  const readOnly = apiData.api.rest_resource.components[0].properties
    .filter(({ readOnly }) => readOnly)
    .map(({ name }) => name);
  const primaryExample = apiData.api.rest_resource.components[0].properties.reduce(
    (acc, { name, example }) => {
      acc[name] = example;
      return acc;
    },
    {}
  );
  const paths = apiData.api.rest_resource.paths.map(({ url, action, "x-examples": examples }) => ({
    action,
    url,
    examples: examples.map(({ response }) => JSON.parse(response.body)),
  }));
  res.status(200).json(paths);
};

export default ReadShopifyDev;
