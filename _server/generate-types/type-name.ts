import { capitalizeFirstLetter } from "../../_utils/string-manipulation";
import { getSingularKey } from "./get-singular-key";

export const typeName = (key) => {
  const singularKey = getSingularKey(key);

  return singularKey
    .split("_")
    .map((part) => capitalizeFirstLetter(part))
    .join("");
};
