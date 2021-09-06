import { titleCase } from "./titleCase";

type createRequestFunction = (input: { body: string; bodyType: string; endpoint: string; method: string; name: string; query: string; queryType: string; returnType: string; type: string; withBody: boolean; withQuery: boolean }) => string;

export const createRequest: createRequestFunction = ({ name, method, endpoint, withQuery, query, withBody, body, type, bodyType, returnType, queryType }) => {
  console.log({ name, method, endpoint, withQuery, query, withBody, body, type, bodyType, returnType, queryType });
  const withVariable = /({[\w\d_]+})/i.test(endpoint);
  const variable = endpoint.replace(/^.*?{([\w\d_]+)}.*$/im, "$1");
  const endpointWithVariable = endpoint.replace(/({[\w\d_]+})/i, `\${${variable}}`);

  return `import { ShopifyRest } from "lib/shopify/rest/_api";

export const ${method.toLowerCase() + titleCase(name)} = ShopifyRest<
  ${type},
  ${withBody ? body : "never"},
  ${withVariable ? variable : "never"},
  ${withQuery ? query : "never"},
>("${method}", \`${endpoint}\`);

${withQuery ? queryType : ""}
${withBody ? bodyType : ""}
${returnType}
`;
};
