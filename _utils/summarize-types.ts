import { isIsoDate } from "_utils/date-manipultation";
import { capitalizeFirstLetter } from "_utils/string-manipulation";
import { getSingularKey } from "pages/api/generate-mastertypes";
import { root } from "postcss";

const getType = (input) => {
  if (Array.isArray(input)) {
    return "array";
  }
  if (input === null) {
    return "null";
  }
  if (input === undefined) {
    return "undefined";
  }
  if (isIsoDate(input)) {
    return "Date";
  }
  return typeof input;
};

const getRepeatedType = (arr) => {
  if (arr.every((itm) => getType(itm) === "array")) {
    return "array";
  }
  if (arr.every((itm) => getType(itm) === "null")) {
    return "null";
  }
  if (arr.every((itm) => getType(itm) === "Date")) {
    return "Date";
  }
  if (arr.every((itm) => getType(itm) === "undefined")) {
    return "undefined";
  }
  if (arr.every((itm) => getType(itm) === "object")) {
    return "object";
  }
  if (arr.every((itm) => getType(itm) === "string")) {
    return "string";
  }
  if (arr.every((itm) => getType(itm) === "number")) {
    return "number";
  }
  if (arr.every((itm) => getType(itm) === "function")) {
    return "function";
  }
  if (arr.every((itm) => getType(itm) === "symbol")) {
    return "symbol";
  }
  if (arr.every((itm) => getType(itm) === "bigint")) {
    return "bigint";
  }
  if (arr.every((itm) => getType(itm) === "boolean")) {
    return "boolean";
  }

  console.log(arr);

  if (arr.some((itm) => getType(itm) === "array")) {
    return "array";
  }
  if (arr.some((itm) => getType(itm) === "object")) {
    return "object";
  }
  if (arr.some((itm) => getType(itm) === "Date")) {
    return "Date";
  }
  if (arr.some((itm) => getType(itm) === "boolean")) {
    return "boolean";
  }
  if (arr.some((itm) => getType(itm) === "bigint")) {
    return "bigint";
  }
  if (arr.some((itm) => getType(itm) === "number")) {
    return "number";
  }
  if (arr.some((itm) => getType(itm) === "string")) {
    return "string";
  }
  if (arr.some((itm) => getType(itm) === "function")) {
    return "function";
  }
  if (arr.some((itm) => getType(itm) === "symbol")) {
    return "symbol";
  }
  if (arr.some((itm) => getType(itm) === "null")) {
    return "null";
  }
  if (arr.some((itm) => getType(itm) === "undefined")) {
    return "undefined";
  }

  return "undefined";
};

const typeName = (key) => {
  const singularKey = getSingularKey(key);

  return singularKey
    .split("_")
    .map((part) => capitalizeFirstLetter(part))
    .join("");
};

const getHighestType = (arr: any[]) => {
  const relevantData = arr.filter((item) => item !== "null" && item !== "undefined");

  const ranked = relevantData.reduce(
    (acc, item) => {
      if (acc[item]) {
        acc[item] += 1;
      } else {
        acc[item] = 1;
      }

      return acc;
    },
    {}
  ) as { [T: string]: number };

  const sorted = Object.entries(ranked).sort(([k1, v1], [k2, v2]) => {
    return v2 - v1;
  });

  return sorted[0][0];
};

const percentageConfirmed = (arr: any[], minQuantity = 6): number => {
  if (!Array.isArray(arr)) return 0;
  if (arr.length <= minQuantity) return 0;
  const relevantData = arr.filter((item) => item !== "null" && item !== "undefined");

  const ranked = relevantData.reduce(
    (acc, item) => {
      if (acc[item]) {
        acc[item] += 1;
      } else {
        acc[item] = 1;
      }

      return acc;
    },
    {}
  ) as { [T: string]: number };

  const count = Object.entries(ranked).reduce((acc, [key, val]) => (acc > val ? acc : val), 0);

  return (count / relevantData.length) * 100;
};

const findOverlappingObjects = (rootObject: {}) => {
  const returnObject = {};
  const mappedObject = Object.entries(rootObject);
  mappedObject.forEach(([key, value], index) => {
    if (getType(value) === "object") {
      Object.entries(returnObject).find(([k, v], i, arr) => {
        if (getType(v) === "object") {
          const sameCount = Object.keys(value).reduce(
            (acc, valKey) => {
              if (v[valKey] !== undefined) {
                acc += 1;
              }
              return acc;
            },
            0
          );
          if (sameCount / arr.length > 0.85) {
            console.log("saaaaaaaaaaaaaame");
          }
        }
      });
      returnObject[key] = value;
    }
  });
};

export const sumPathTypes = (endpoints) => {
  const rootObject = {};
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

  endpoints.forEach(({ paths, repeatedResponsesExamples }) => {
    return summarizeTypes(repeatedResponsesExamples);
  });

  Object.keys(rootObject).forEach((parentKey) => {
    if (getType(rootObject[parentKey]) === "object") {
      Object.keys(rootObject[parentKey]).forEach((key) => {
        if (Array.isArray(rootObject[parentKey][key])) {
          if (percentageConfirmed(rootObject[parentKey][key], 0) > 75) {
            rootObject[parentKey][key] = getHighestType(rootObject[parentKey][key]);
          }
        }
      });
    }
  });

  findOverlappingObjects(rootObject);

  return rootObject;
};
