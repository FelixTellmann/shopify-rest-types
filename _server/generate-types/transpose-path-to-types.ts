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

export const transposePathToTypes = (
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
  const result = {
    types: [],
    imports: [],
    paths: [],
  };

  routeArray.forEach((route, index) => {
    route.readOnly.unshift("admin_graphql_api_id");
    const initReplace = Object.entries(replacements).find(([k, r]) => r.includes(route.apiName));
    if (!initReplace && !types[route.apiName]) return;
    let apiNamespace = [];
    const objects = [];

    /*= =============== OPEN NAMESPACE ================ */
    apiNamespace.push(`\nexport namespace ${route.name} {\n`);
    objects.push(`    this.${route.apiName}: {\n`);

    route.paths.forEach(({ url, action, comment, query, path, body, examples, ...rest }) => {
      if (!url) return;
      const apiPath = [];

      const pathStr = url
        .replace("/admin/api/#{api_version}/", "")
        .replace(".json", "")
        .replace(/{((\w|_)+)}/gi, (match, group) => {
          const variable = snakeToPascal(group);
          if (!result.types.find((s) => s === `export type ${variable} = number;\n`)) {
            result.types.push(`export type ${variable} = number;\n`);
          }
          return `\${${variable}}`;
        })
        .replace("assets/bg-body.gif", (match) => {
          if (!result.types.find((s) => s === `export type AssetUrl = string;\n`)) {
            result.types.push(`export type AssetUrl = string;\n`);
          }
          return `\${AssetUrl}`;
        });

      const act = action.split("");
      act.length = 3;

      /*= ===============remove plural issue ================ */
      const apiName = filterInconsistencies(pascalToSnake(route.apiName).replace(/y$/, ""));
      const pathTypeArr = pathStr.split("/");
      const isPrimaryType = pathTypeArr[0].includes(apiName);
      const isSecondaryType =
        !isPrimaryType &&
        pathTypeArr.some((segment) => segment.includes(apiName)) &&
        !pathStr.includes("/batch");
      const matchIndex = pathTypeArr.findIndex((segment) => segment.includes(apiName));

      const specialAction =
        pathTypeArr.length > 1 &&
        !pathTypeArr[pathTypeArr.length - 1].includes("${") &&
        !pathTypeArr[pathTypeArr.length - 1].includes(apiName)
          ? pathTypeArr[pathTypeArr.length - 1]
          : "";

      const specialActionSubtype =
        specialAction &&
        !pathTypeArr[pathTypeArr.length - 2].includes("${") &&
        matchIndex !== pathTypeArr.length - 2
          ? pathTypeArr[pathTypeArr.length - 2]
          : "";

      const method = (
        (isPrimaryType || isSecondaryType) && !specialAction
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
          : fixShopifyInconsistency(pathStr)
      ).split("?")[0];

      if (!method) return;

      console.log(
        `${act.join("")}: ${pathStr} - - - ${method} - - ${pascalToSnake(route.apiName)} ${
          isPrimaryType ? "" : isSecondaryType ? " - SECONDARY" : " - do more here"
        }`
      );

      /*= =============== PATH COMMENT ================ */
      if (comment && url) {
        apiPath.push(`  /** `);
        comment = comment.replace(/(\n\s*\n)/gi, "\n");
        comment.split("\n").forEach((comment, i, arr2) => {
          if (i === 0 && i !== arr2.length - 1) {
            apiPath.push(`${comment.trim()}\n`);
          } else if (i === 0 && i === arr2.length - 1) {
            apiPath.push(`${comment.trim()}`);
          } else if (i !== arr2.length - 1) {
            apiPath.push(`    ${comment.trim()}\n`);
          } else {
            apiPath.push(`    ${comment.trim()}`);
          }
        });
        apiPath.push(`  */\n`);
      }

      /*= =============== OPENING ================ */
      apiPath.push(`  export type ${snakeToPascal(method)} = {\n`);
      apiPath.push(`    path: \`${pathStr.split("?")[0]}\`;\n`);
      apiPath.push(`    method: Method.${snakeToPascal(action)};\n`);

      /*= =============== QUERY ================ */
      if (query.length) {
        apiPath.push(`    query: {\n`);
        const queryProps = [];
        query.forEach(({ name, comment }) => {
          if (!queryProps.includes(asKey(name))) {
            if (comment) {
              apiPath.push(`      /** ${comment?.replace(/(\n|(\n\s*\n)|\s\s)/gi, " ")} */\n`);
            }
            apiPath.push(`      ${asKey(name)}?: string;\n`);
            queryProps.push(asKey(name));
          }
        });
        apiPath.push(`    };\n`);
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
          apiPath.push(`    body: {\n`);
          bodyKeys.forEach((key) => {
            const pascalKey = nameSnakeCaseToSingularPascalCase(key);
            const replace = Object.entries(replacements).find(([k, r]) => r.includes(pascalKey));

            const type = types[pascalKey]
              ? pascalKey
              : replace && replace[1].includes(pascalKey)
              ? replace[0]
              : null;

            console.log({ type, pascalKey });
            if (type && route.apiName === pascalKey) {
              const omit = route.readOnly.map((r) => `"${r}"`) ?? [];
              const withRequired = !!route?.required?.length;
              const require = route.required?.map((r) => `"${r}"`) ?? [];
              const readOnlyTypes = `Omit<_${type}, ${[...omit, ...require].join(" | ")}>`;
              const requiredTypes = `Required<Pick<_${type}, ${require.join(" | ")}>>`;
              apiPath.push(
                `      ${key}: ${
                  withRequired ? `${readOnlyTypes} & ${requiredTypes}` : readOnlyTypes
                };\n`
              );
              if (!result.imports.includes(`${type} as _${type}`)) {
                result.imports.push(`${type} as _${type}`);
              }
            } else if (type && route.apiName !== pascalKey) {
              apiPath.push(`      ${key}: _${type};\n`);
              if (!result.imports.includes(`${type} as _${type}`)) {
                result.imports.push(`${type} as _${type}`);
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
                  apiPath.push(`      ${key}?: string;\n`);
                  break;
                }
                case "Processing":
                case "Previewable": {
                  apiPath.push(`      ${key}?: boolean;\n`);
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
                  apiPath.push(`      ${key}?: number;\n`);
                  break;
                }
                case "CreatedAt":
                case "DataUpdatedAt":
                case "PublishedAt":
                case "UpdatedAt": {
                  apiPath.push(`      ${key}?: Date;\n`);
                  break;
                }
                case "CancellationRequest": {
                  apiPath.push(`      ${key}?: {};\n`);
                  break;
                }
                case "RemainingFulfillmentOrder": {
                  apiPath.push(`      ${key}?: any;\n`);
                  break;
                }
                case "FulfillmentRequest": {
                  apiPath.push(`      ${key}?: {\n`);
                  apiPath.push(`          message: string;\n`);
                  apiPath.push(
                    `          fulfillment_order_line_items: { id: number; quantity: number }[];\n`
                  );
                  apiPath.push(`      };\n`);
                  break;
                }
                default: {
                  console.log({ body: pascalKey });
                  break;
                }
              }
            }
          });
          apiPath.push(`    };\n`);
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
          apiPath.push(`    response: {\n`);
          responseKeys.forEach((key) => {
            const pascalKey = nameSnakeCaseToSingularPascalCase(key);
            const replace = Object.entries(replacements).find(([k, r]) => r.includes(pascalKey));

            const type = types[pascalKey]
              ? pascalKey
              : replace && replace[1].includes(pascalKey)
              ? replace[0]
              : null;

            if (type) {
              apiPath.push(`      ${key}: _${type};\n`);
              if (!result.imports.includes(`${type} as _${type}`)) {
                result.imports.push(`${type} as _${type}`);
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
                  apiPath.push(`      ${key}?: string;\n`);
                  break;
                }
                case "Processing":
                case "Previewable": {
                  apiPath.push(`      ${key}?: boolean;\n`);
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
                  apiPath.push(`      ${key}?: number;\n`);
                  break;
                }
                case "CreatedAt":
                case "DataUpdatedAt":
                case "PublishedAt":
                case "UpdatedAt": {
                  apiPath.push(`      ${key}?: Date;\n`);
                  break;
                }
                case "CancellationRequest": {
                  apiPath.push(`      ${key}?: {};\n`);
                  break;
                }
                case "RemainingFulfillmentOrder": {
                  apiPath.push(`      ${key}?: any;\n`);
                  break;
                }
                case "FulfillmentRequest": {
                  apiPath.push(`      ${key}?: {\n`);
                  apiPath.push(`          message: string;\n`);
                  apiPath.push(
                    `          fulfillment_order_line_items: { id: number; quantity: number }[];\n`
                  );
                  apiPath.push(`      };\n`);
                  break;
                }
                default: {
                  console.log({ response: pascalKey });
                  break;
                }
              }
            }
          });
          apiPath.push(`      };\n`);
        }
      }

      apiPath.push(`    }\n\n`);
      apiNamespace = [...apiNamespace, ...apiPath];
    });

    /*= =============== CLOSE NAMESPACE ================ */
    apiNamespace.push(`}\n`);

    result.types = [...result.types, ...apiNamespace];
  });

  if (result.imports.length > 0) {
    result.types.unshift(`import { ${result.imports.join(", ")} } from "./root-types";\n\n`);
  }

  // console.log(result);
  return result;
};
