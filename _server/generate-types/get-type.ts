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

export const getTypeAsString = (input) => {
  if (Array.isArray(input)) {
    return `${getRepeatedType(input)}[]`;
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
