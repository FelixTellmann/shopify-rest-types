import { nameSnakeCaseToSingularPascalCase } from "_server/generate-types/name-snake-case-to-singular-pascal-case";
import { pascalToSnake, snakeToCamel, snakeToPascal } from "_utils/string-manipulation";
import camelcase from "camelcase";
import { act } from "react-dom/test-utils";

function asKey(name: string) {
  if (/[^\w_)]/gi.test(name)) {
    return `"${name}"`;
  }
  return name;
}

function actionToKeyword(action: "get" | "put" | "post" | "delete") {
  switch (action) {
    case "delete":
    case "get": {
      return action;
    }
    case "put": {
      return "update";
    }
    case "post": {
      return "create";
    }
  }
}

function filterInconsistencies(str: any) {
  switch (str) {
    case "customer_address": {
      return "address";
    }
    case "fulfillment_event": {
      return "event";
    }
    case "shopify_payment_transaction": {
      return "transaction";
    }
    default: {
      return str;
    }
  }
}

function fixShopifyInconsistency(str: string) {
  switch (str) {
    case "price_rules/${PriceRuleId}/batch": {
      return "createBatch";
    }
    case "price_rules/${PriceRuleId}/batch/${BatchId}": {
      return "getBatchById";
    }
    case "price_rules/${PriceRuleId}/batch/${BatchId}/discount_codes": {
      return "getBatchDiscountCodes";
    }
  }
  return "";
}

export const pathsTypesToStrArray = (
  types: { [x: string]: any },
  routeArray: {
    apiName: string;
    paths: {
      url;
      body: { [T: string]: any }[];
      action;
      comment;
      query: { name: string; comment?: string }[];
      path;
      examples;
    }[];
    name: any;
    example: any;
    params: any;
    required: any;
    readOnly: any;
    properties: any;
    repeatedResponsesExamples: any[];
  }[],
  replacements: { [p: string]: string[] }
) => {
  const requestTypes = {
    types: [],
    objects: [],
    get: [],
    put: [],
    post: [],
    delete: [],
    imports: {
      get: [],
      put: [],
      post: [],
      delete: [],
    },
    pathTypes: {
      get: [],
      put: [],
      post: [],
      delete: [],
    },
  };

  requestTypes.get.push(`export type GetPaths =\n`);
  requestTypes.put.push(`export type PutPaths =\n`);
  requestTypes.post.push(`export type PostPaths =\n`);
  requestTypes.delete.push(`export type DeletePaths =\n`);

  routeArray.forEach((route) => {
    route.readOnly.unshift("admin_graphql_api_id");
    const initReplace = Object.entries(replacements).find(([k, r]) => r.includes(route.apiName));
    if (initReplace || types[route.apiName]) {
      const types = [];
      const objects = [];

      types.push(`  ${route.apiName}: {\n`);
      objects.push(`    this.${route.apiName}: {\n`);

      route.paths.forEach(({ url, action, comment, query, path, body, examples, ...rest }) => {
        if (!requestTypes[action]) return;
        const arr = [];

        /*= =============== OPENING ================ */
        arr.push(`  | {\n`);

        /*= =============== PATH COMMENT ================ */
        if (comment && url) {
          arr.push(`      /** `);
          types.push(`    /** `);
          comment = comment.replace(/(\n\s*\n)/gi, "\n");
          comment
            .split("\n")
            .forEach((comment, i, arr2) => {
              if (i === 0 && i !== arr2.length - 1) {
                arr.push(`${comment.trim()}\n`);
                types.push(`${comment.trim()}\n`);
              } else if (i === 0 && i === arr2.length - 1) {
                arr.push(`${comment.trim()}`);
                types.push(`${comment.trim()}`);
              } else if (i !== arr2.length - 1) {
                arr.push(`      ${comment.trim()}\n`);
                types.push(`    ${comment.trim()}\n`);
              } else {
                arr.push(`      ${comment.trim()}`);
                types.push(`    ${comment.trim()}`);
              }
            });
          arr.push(`  */\n`);
          types.push(`  */\n`);
        }

        /*= =============== PATH ================ */
        if (url) {
          const pathType = url
            .replace("/admin/api/#{api_version}/", "")
            .replace(".json", "")
            .replace(/{((\w|_)+)}/gi, (match, group) => {
              const variable = snakeToPascal(group);
              if (
                !requestTypes.pathTypes[action].find(
                  (s) => s === `export type ${variable} = number;\n`
                )
              ) {
                requestTypes.pathTypes[action].push(`export type ${variable} = number;\n`);
              }
              return `\${${variable}}`;
            })
            .replace("assets/bg-body.gif", (match) => {
              if (
                !requestTypes.pathTypes[action].find(
                  (s) => s === `export type AssetUrl = string;\n`
                )
              ) {
                requestTypes.pathTypes[action].push(`export type AssetUrl = string;\n`);
              }
              return `\${AssetUrl}`;
            });

          /*============================================================================
            # WEIRD STUFF HERE FOR NOW !!!!!!!!!!!!!
              -  TODO: REMOVE LATER
          ==============================================================================*/
          const action2 = action.split("");
          action2.length = 3;
          // console.log(pathType.match(/\${\w+}/gi));
          /*= ===============remove plural issue ================ */
          const apiName = filterInconsistencies(pascalToSnake(route.apiName).replace(/y$/, ""));
          const pathTypeArr = pathType.split("/");
          const isPrimaryType = pathTypeArr[0].includes(apiName);
          const isSecondaryType = !isPrimaryType &&
          pathTypeArr.some((segment) => segment.includes(apiName)) &&
          !pathType.includes("/batch");
          const matchIndex = pathTypeArr.findIndex((segment) => segment.includes(apiName));

          const specialAction = pathTypeArr.length > 1 &&
          !pathTypeArr[pathTypeArr.length - 1].includes("${") &&
          !pathTypeArr[pathTypeArr.length - 1].includes(apiName)
            ? pathTypeArr[pathTypeArr.length - 1]
            : "";

          const specialActionSubtype = specialAction &&
          !pathTypeArr[pathTypeArr.length - 2].includes("${") &&
          matchIndex !== pathTypeArr.length - 2
            ? pathTypeArr[pathTypeArr.length - 2]
            : "";

          const method = (isPrimaryType || isSecondaryType) && !specialAction
            ? snakeToCamel(
                `${actionToKeyword(action)}${
                  pathTypeArr[matchIndex + 1] && /\${\w+}/gi.test(pathTypeArr[matchIndex + 1])
                    ? "ById"
                    : ""
                }`
              )
            : (isPrimaryType || isSecondaryType) && specialAction
            ? snakeToCamel(
                `${specialActionSubtype ? `${specialActionSubtype}_` : ""}${specialAction}${
                  pathTypeArr[matchIndex + 1] &&
                  /\${\w+}/gi.test(pathTypeArr[matchIndex + 1]) &&
                  !specialActionSubtype
                    ? "ById"
                    : ""
                }`
              )
            : fixShopifyInconsistency(pathType);

          console.log(
            `${action2.join("")}: ${pathType} - - - ${method} - - ${pascalToSnake(route.apiName)} ${
              isPrimaryType ? "" : isSecondaryType ? " - SECONDARY" : " - do more here"
            }`
          );
          arr.push(`      path: \`${pathType}\`;\n`);
          types.push(`    ${method}: `);
          objects.push(
            `      ${method}: (params) => this.request({...params, path: '${pathType}', type: DataType.JSON, method: Method.Get} as RequestParams)`
          );
        }

        /*= =============== QUERY ================ */
        if (query.length) {
          arr.push(`      query: {\n`);
          const queryProps = [];
          query.forEach(({ name, comment }) => {
            if (!queryProps.includes(asKey(name))) {
              if (comment) {
                arr.push(`        /** ${comment?.replace(/(\n|(\n\s*\n)|\s\s)/gi, " ")} */\n`);
              }
              arr.push(`        ${asKey(name)}?: string;\n`);
              queryProps.push(asKey(name));
            }
          });
          arr.push(`      };\n`);
        }

        /*= =============== BODY ================ */
        if ((action === "put" || action === "post") && body?.length) {
          const bodyKeys = [];
          body.forEach((obj) => {
            Object.keys(obj).forEach((key) => {
              if (!bodyKeys.includes(key)) {
                bodyKeys.push(key);
              }
            });
          });
          if (bodyKeys.length) {
            arr.push(`      body: {\n`);
            bodyKeys.forEach((key) => {
              const pascalKey = nameSnakeCaseToSingularPascalCase(key);
              const replace = Object.entries(replacements).find(([k, r]) => r.includes(pascalKey));

              const type = types[pascalKey]
                ? pascalKey
                : replace && replace[1].includes(pascalKey)
                ? replace[0]
                : null;

              if (type && route.apiName === pascalKey) {
                const omit = route.readOnly.map((r) => `"${r}"`) ?? [];
                const withRequired = !!route?.required?.length;
                const require = route.required?.map((r) => `"${r}"`) ?? [];
                const readOnlyTypes = `Omit<${type}, ${[...omit, ...require].join(" | ")}>`;
                const requiredTypes = `Required<Pick<${type}, ${require.join(" | ")}>>`;
                arr.push(
                  `        ${key}: ${
                    withRequired ? `${readOnlyTypes} & ${requiredTypes}` : readOnlyTypes
                  };\n`
                );
                if (!requestTypes.imports[action].includes(type)) {
                  requestTypes.imports[action].push(type);
                }
              } else if (type && route.apiName !== pascalKey) {
                arr.push(`        ${key}: ${type};\n`);
                if (!requestTypes.imports[action].includes(type)) {
                  requestTypes.imports[action].push(type);
                }
              } else {
                switch (pascalKey) {
                  case "AdminGraphqlApiId":
                  case "UserAgent":
                  case "Ip":
                  case "Email":
                  case "Body":
                  case "Status":
                  case "Role":
                  case "Message":
                  case "Notice":
                  case "Name":
                  case "Tag":
                  case "Author":
                  case "AccountActivationUrl":
                  case "BodyHtml": {
                    arr.push(`        ${key}?: string;\n`);
                    break;
                  }
                  case "Processing":
                  case "Previewable": {
                    arr.push(`        ${key}?: boolean;\n`);
                    break;
                  }
                  case "Id":
                  case "ProductId":
                  case "BlogId":
                  case "ThemeStoreId":
                  case "Available":
                  case "InventoryItemId":
                  case "AvailableAdjustment":
                  case "LocationId":
                  case "ArticleId":
                  case "Count": {
                    arr.push(`        ${key}?: number;\n`);
                    break;
                  }
                  case "CreatedAt":
                  case "DataUpdatedAt":
                  case "PublishedAt":
                  case "UpdatedAt": {
                    arr.push(`        ${key}?: Date;\n`);
                    break;
                  }
                  case "CancellationRequest": {
                    arr.push(`        ${key}?: {};\n`);
                    break;
                  }
                  case "RemainingFulfillmentOrder": {
                    arr.push(`        ${key}?: any;\n`);
                    break;
                  }
                  case "FulfillmentRequest": {
                    arr.push(`        ${key}?: {\n`);
                    arr.push(`          message: string;\n`);
                    arr.push(
                      `          fulfillment_order_line_items: { id: number; quantity: number }[];\n`
                    );
                    arr.push(`        };\n`);
                    break;
                  }
                  default: {
                    console.log({ body: pascalKey });
                    break;
                  }
                }
              }
            });
            arr.push(`      };\n`);
          }
        }

        /*= =============== RESPONSE ================ */
        if (examples?.length) {
          const responseKeys = [];
          examples.forEach(({ path, example }) => {
            Object.keys(example).forEach((key) => {
              if (!responseKeys.includes(key)) {
                responseKeys.push(key);
              }
            });
          });
          if (responseKeys.length) {
            arr.push(`      response: {\n`);
            responseKeys.forEach((key) => {
              const pascalKey = nameSnakeCaseToSingularPascalCase(key);
              const replace = Object.entries(replacements).find(([k, r]) => r.includes(pascalKey));
              const type = types[pascalKey]
                ? pascalKey
                : replace && replace[1].includes(pascalKey)
                ? replace[0]
                : null;

              if (type) {
                arr.push(`        ${key}: ${type};\n`);
                if (!requestTypes.imports[action].includes(type)) {
                  requestTypes.imports[action].push(type);
                }
              } else {
                switch (pascalKey) {
                  case "AdminGraphqlApiId":
                  case "UserAgent":
                  case "Ip":
                  case "Email":
                  case "Body":
                  case "Status":
                  case "Role":
                  case "Message":
                  case "Notice":
                  case "Name":
                  case "Tag":
                  case "Author":
                  case "AccountActivationUrl":
                  case "BodyHtml": {
                    arr.push(`        ${key}?: string;\n`);
                    break;
                  }
                  case "Processing":
                  case "Previewable": {
                    arr.push(`        ${key}?: boolean;\n`);
                    break;
                  }
                  case "Id":
                  case "ProductId":
                  case "BlogId":
                  case "ThemeStoreId":
                  case "Available":
                  case "InventoryItemId":
                  case "AvailableAdjustment":
                  case "LocationId":
                  case "ArticleId":
                  case "Count": {
                    arr.push(`        ${key}?: number;\n`);
                    break;
                  }
                  case "CreatedAt":
                  case "DataUpdatedAt":
                  case "PublishedAt":
                  case "UpdatedAt": {
                    arr.push(`        ${key}?: Date;\n`);
                    break;
                  }
                  case "CancellationRequest": {
                    arr.push(`        ${key}?: {};\n`);
                    break;
                  }
                  case "RemainingFulfillmentOrder": {
                    arr.push(`        ${key}?: any;\n`);
                    break;
                  }
                  case "FulfillmentRequest": {
                    arr.push(`        ${key}?: {\n`);
                    arr.push(`          message: string;\n`);
                    arr.push(
                      `          fulfillment_order_line_items: { id: number; quantity: number }[];\n`
                    );
                    arr.push(`        };\n`);
                    break;
                  }
                  default: {
                    console.log({ response: pascalKey });
                    break;
                  }
                }
              }
            });
            arr.push(`      };\n`);
          }
        }

        arr.push(`    }\n`);
        requestTypes[action] = [...requestTypes[action], ...arr];
      });
    }
  });

  requestTypes.get = [...requestTypes.pathTypes.get, "\n\n", ...requestTypes.get];
  requestTypes.put = [...requestTypes.pathTypes.put, "\n\n", ...requestTypes.put];
  requestTypes.post = [...requestTypes.pathTypes.post, "\n\n", ...requestTypes.post];
  requestTypes.delete = [...requestTypes.pathTypes.delete, "\n\n", ...requestTypes.delete];

  if (requestTypes.imports.get.length > 0) {
    requestTypes.get.unshift(
      `import { ${requestTypes.imports.get.join(", ")} } from "./root-types";\n\n`
    );
  }
  if (requestTypes.imports.put.length > 0) {
    requestTypes.put.unshift(
      `import { ${requestTypes.imports.put.join(", ")} } from "./root-types";\n\n`
    );
  }
  if (requestTypes.imports.post.length > 0) {
    requestTypes.post.unshift(
      `import { ${requestTypes.imports.post.join(", ")} } from "./root-types";\n\n`
    );
  }
  if (requestTypes.imports.delete.length > 0) {
    requestTypes.delete.unshift(
      `import { ${requestTypes.imports.delete.join(", ")} } from "./root-types";\n\n`
    );
  }

  // console.log(requestTypes);
  return requestTypes;
};
