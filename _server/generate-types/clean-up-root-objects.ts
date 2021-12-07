import { getHighestType, percentageConfirmed } from "./get-highest-type";
import { getType } from "./get-type";

export const cleanUpRootObjects = (rootObject) => {
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
  return rootObject;
};
