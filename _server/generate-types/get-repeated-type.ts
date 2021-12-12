import { getType } from "./get-type";

export const getRepeatedType = (arr) => {
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

  console.log({ getRepeatedType: arr });

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
