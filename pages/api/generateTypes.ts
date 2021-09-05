import { clean } from "fx-style/build/src/clean";
import type { NextApiRequest, NextApiResponse } from "next";
import data from "data/shopify.json";
import { createRequest } from "../../lib/createRequest";
import JsonToTS from "json-to-ts";
import { titleCase } from "../../lib/titleCase";

type GenerateTypesFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

function cleanTypes(arr: string[], properties: { [T: string]: string[] }, type: "query" | "input" | "return") {
  const returnArr = arr.join("\n\n").split("\n");

  const cleanedArr = returnArr.map((line) => {
    if (/^interface/.test(line)) {
      return line.replace(/^interface\s*([\w\d_]+)\s*{/gim, "export type $1 = {");
    }

    if (/([\w\d]):\s/gi.test(line)) {
      return line.replace(/([\w\d_]):\s/gi, "$1?: ");
    }

    return line;
  });

  if (type === "input") {
    const readOnly = Object.entries(properties)
      .filter(([key, value]) => value.includes("read-only"))
      .map(([key]) => key.toLowerCase());

    const required = Object.entries(properties)
      .filter(([key, value]) => value.includes("required"))
      .map(([key]) => key.toLowerCase());

    return cleanedArr
      .filter((line) => {
        if (/([\w\d_]+)\?:/i.test(line)) {
          if (readOnly.includes(line.replace(/\s*([\w\d_]+)\?:.*/i, "$1").toLowerCase())) {
            return false;
          }
        }
        return true;
      })
      .map((line) => {
        if (/([\w\d_]+)\?:/i.test(line)) {
          if (required.includes(line.replace(/\s*([\w\d_]+)\?:.*/i, "$1").toLowerCase())) {
            return line.replace(/\?:/i, ":");
          }
        }
        return line;
      })
      .join("\n");
  }

  return cleanedArr.join("\n");
}

export const GenerateTypes: GenerateTypesFunction = async (req, res) => {
  const { name, category, method, endpoint, queryParams, requestBody, requestResponse } = data[47].value.returnData[1];
  const properties = data[47].value.properties;

  console.log(queryParams);
  const withBody = !!requestBody;
  const withQuery = !!queryParams.length;
  const withReturn = !!requestResponse;

  const body = `${titleCase(method.toLowerCase()) + titleCase(name)}Input`;
  const query = `${titleCase(method.toLowerCase()) + titleCase(name)}Query`;
  const type = `${titleCase(method.toLowerCase()) + titleCase(name)}Return`;

  const bodyType = withBody ? cleanTypes(JsonToTS(requestResponse, { rootName: body }), properties, "input") : "";
  const queryType = withQuery ? cleanTypes(JsonToTS(queryParams, { rootName: query }), properties, "query") : "";
  const returnType = withReturn ? cleanTypes(JsonToTS(requestResponse, { rootName: type }), properties, "return") : "";

  const types = createRequest({
    name: name,
    method,
    endpoint,
    withBody,
    withQuery,
    body,
    bodyType: bodyType,
    query,
    queryType: queryType,
    type,
    returnType: returnType,
  });

  console.log(types);
  res.status(200).json({ name: "John Doe" });
};

export default GenerateTypes;
