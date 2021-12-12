import { getRepeatedType } from "_server/generate-types/get-repeated-type";
import { isIsoDate } from "_utils/date-manipultation";

export const getType = (input) => {
  if (Array.isArray(input)) {
    return `array`;
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

const isFlatObject = (object) =>
  Object.entries(object).every(([key, val]) => {
    switch (getType(val)) {
      case "Date":
      case "boolean":
      case "number":
      case "undefined":
      case "null":
      case "bigint":
      case "string": {
        return true;
      }
      case "array": {
        const repeatedType = getRepeatedType(val);
        switch (repeatedType) {
          case "Date":
          case "boolean":
          case "number":
          case "undefined":
          case "null":
          case "bigint":
          case "string": {
            return true;
          }
        }
      }
    }
    return false;
  });

const typedStringObject = (object) => {
  const returnArray = [];
  Object.entries(object).forEach(([key, val]) => {
    returnArray.push(`${key}: ${getTypeAsString(val)},`);
  });
};

export const getTypeAsString = (input) => {
  if (Array.isArray(input)) {
    // console.log(input);
    return `${getRepeatedType(input)}[]`;
  }
  /*if (typeof input === "object") {
    if (isFlatObject(input)) {
      return typedStringObject(input);
    } else {
      console.log("3d");
    }
  }*/
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
