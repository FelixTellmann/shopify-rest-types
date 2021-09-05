import { titleCase } from "./titleCase";

type createRequestFunction = (input: { body: string; bodyType: string; endpoint: string; method: string; name: string; query: string; queryType: string; returnType: string; type: string; withBody: boolean; withQuery: boolean }) => string;

export const createRequest: createRequestFunction = ({ name, method, endpoint, withQuery, query, withBody, body, type, bodyType, returnType, queryType }) => {
  const withVariable = /({[\w\d_]+})/i.test(endpoint);
  const variable = endpoint.replace(/^.*?{([\w\d_]+)}.*$/im, "$1");
  const endpointWithVariable = endpoint.replace(/({[\w\d_]+})/i, `\${${variable}}`);

  return `import axios from "axios";
${withQuery ? '\nconst qs = (obj) => `?${Object.keys(obj).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`).join("&")}`;' : ""}

type ${titleCase(method.toLowerCase()) + titleCase(name)}Function = (
  shop: string, 
  accessToken: string,${withQuery ? `\n  query?: ${query},` : ""}${withBody ? `\n  body?: ${body},` : ""}
) => Promise<${type}>

export const ${method.toLowerCase() + titleCase(name)}: ${titleCase(method.toLowerCase()) + titleCase(name)}Function = async (shop, accessToken${withQuery ? ", query" : ""}) => {  
  try {
    const { data } = await axios({
      method: "${method}",
      url: \`https://$\{shop}${endpoint}${withQuery ? `$\{query ? qs(query) : ""}` : ""}\`,
      headers: {
        "X-Shopify-Access-Token": accessToken,
        "Content-Type": "application/json",
      },${withBody ? "\n      data: body" : ""}
    });
      
    return data;
  } catch (err) {
    console.log(err)
    return null;
  }
};

${withQuery ? queryType : ""}
${withBody ? bodyType : ""}
${returnType}
`;
};
