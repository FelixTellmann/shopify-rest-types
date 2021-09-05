import type { NextApiRequest, NextApiResponse } from "next";
import data from "data/shopify.json";
import { createRequest } from "../../lib/createRequest";
import JsonToTS from "json-to-ts";
import { titleCase } from "../../lib/titleCase";

type GenerateTypesFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

function cleanTypes(arr: string[]) {
  const returnArr = arr.join("\n\n").split("\n");
  return returnArr
    .map((line) => {
      if (/^interface/.test(line)) {
        console.log(line);
        return line.replace(/^interface\s*([\w\d_]+)\s*{/gim, "export type $1 = {");
      }

      if (/([\w\d]):\s/gi.test(line)) {
        return line.replace(/([\w\d_]):\s/gi, "$1?: ");
      }

      return line;
    })
    .join("\n");
}

export const GenerateTypes: GenerateTypesFunction = async (req, res) => {
  const { name, category, method, endpoint, queryParams, requestBody, requestResponse } = data[45].value.returnData[1];

  const withBody = !!requestBody;
  const withQuery = !!queryParams.length;
  const withReturn = !!requestResponse;

  const body = `${titleCase(method.toLowerCase()) + titleCase(name)}Input`;
  const query = `${titleCase(method.toLowerCase()) + titleCase(name)}Query`;
  const type = `${titleCase(method.toLowerCase()) + titleCase(name)}Return`;

  const bodyType = withBody ? cleanTypes(JsonToTS(requestBody, { rootName: body })) : "";
  const queryType = withQuery ? cleanTypes(JsonToTS(queryParams, { rootName: query })) : "";
  const returnType = withReturn ? cleanTypes(JsonToTS(requestResponse, { rootName: type })) : "";

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
