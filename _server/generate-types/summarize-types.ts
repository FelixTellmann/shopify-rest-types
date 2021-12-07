import { getRepeatedType } from "./get-repeated-type";
import { getType } from "./get-type";
import { typeName } from "./type-name";

export const sumPathTypes = (endpoints) => {
  const rootObject: unknown = {};
  const summarizeTypes = (input, parentKey = "", root = true) => {
    const type = getType(input);
    switch (type) {
      case "string":
      case "null":
      case "undefined":
      case "number":
      case "bigint":
      case "Date":
      case "boolean": {
        return type;
      }

      case "object": {
        if (root) {
          Object.entries(input).forEach(([key, val]) => {
            if (!rootObject[typeName(key)]) {
              rootObject[typeName(key)] = summarizeTypes(val, key, true);
            }
          });
        }

        if (!root) {
          if (!rootObject[typeName(parentKey)]) {
            const newRootObject = {};
            Object.entries(input).forEach(([key, val]) => {
              newRootObject[key] = [summarizeTypes(val, key, false)];
            });
            rootObject[typeName(parentKey)] = newRootObject;
            return `${typeName(parentKey)}`;
          }

          if (rootObject[typeName(parentKey)]) {
            Object.entries(input).forEach(([key, val]) => {
              if (rootObject[typeName(parentKey)][key]) {
                if (Array.isArray(rootObject[typeName(parentKey)][key])) {
                  rootObject[typeName(parentKey)][key].push(summarizeTypes(val, key, false));
                }
              }
              if (!rootObject[typeName(parentKey)][key]) {
                rootObject[typeName(parentKey)][key] = [summarizeTypes(val, key, false)];
              }
            });
            return `${typeName(parentKey)}`;
          }
        }

        break;
      }

      case "array": {
        const repeatedType = getRepeatedType(input);
        switch (repeatedType) {
          case "string":
          case "null":
          case "undefined":
          case "number":
          case "bigint":
          case "Date":
          case "boolean": {
            return repeatedType;
          }

          case "object": {
            input = input.filter((obj) => getType(obj) === "object");
            if (root) {
              const repeatableObjects = {};
              input.forEach((obj) => {
                Object.entries(obj).forEach(([key, val]) => {
                  if (repeatableObjects[key]) {
                    if (Array.isArray(repeatableObjects[key])) {
                      repeatableObjects[key].push(summarizeTypes(val, key, false));
                    }
                    repeatableObjects[key].push(summarizeTypes(val, key, false));
                  }
                  if (!repeatableObjects[key]) {
                    repeatableObjects[key] = [summarizeTypes(val, key, false)];
                  }
                });
              });
              return repeatableObjects;
            }

            if (!root) {
              if (!rootObject[typeName(parentKey)]) {
                const repeatableObjects = {};
                input.forEach((obj) => {
                  Object.entries(obj).forEach(([key, val]) => {
                    if (repeatableObjects[key]) {
                      if (Array.isArray(repeatableObjects[key])) {
                        repeatableObjects[key].push(summarizeTypes(val, key, false));
                      }
                    }
                    if (!repeatableObjects[key]) {
                      repeatableObjects[key] = [summarizeTypes(val, key, false)];
                    }
                  });
                });
                rootObject[typeName(parentKey)] = repeatableObjects;
                return `${typeName(parentKey)}[]`;
              }

              if (rootObject[typeName(parentKey)]) {
                input.forEach((obj) => {
                  Object.entries(obj).forEach(([key, val]) => {
                    if (rootObject[typeName(parentKey)][key]) {
                      if (Array.isArray(rootObject[typeName(parentKey)][key])) {
                        rootObject[typeName(parentKey)][key].push(summarizeTypes(val, key, false));
                      }
                    }
                    if (!rootObject[typeName(parentKey)][key]) {
                      rootObject[typeName(parentKey)][key] = [summarizeTypes(val, key, false)];
                    }
                  });
                });
                return `${typeName(parentKey)}[]`;
              }
            }
          }
        }
      }
    }

    if (!root) {
      return "undefined";
    }

    // console.log(rootObject);
    return rootObject;
  };

  endpoints.forEach(({ repeatedResponsesExamples }) => {
    summarizeTypes(repeatedResponsesExamples);
  });

  return rootObject;
};
