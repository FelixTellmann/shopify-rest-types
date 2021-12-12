import { getType } from "./get-type";

export const findOverlappingObjects = (rootObject) => {
  const returnObject = {};
  const mappedObject = Object.entries(rootObject);
  const replacements: { [T: string]: string[] } = {};

  mappedObject
    .sort(([a], [b]) => a.length - b.length)
    .forEach(([keyA, a]) => {
      if (getType(a) !== "object") return;

      let found = false;

      Object.entries(returnObject).forEach(([keyB, b], i) => {
        if (found || getType(b) !== "object") return;

        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);

        const sameCount = aKeys.reduce(
          (acc, valKey) => {
            if (b[valKey] !== undefined) {
              acc += 1;
            }
            return acc;
          },
          0
        );

        if (sameCount / bKeys.length >= 1 && aKeys.length === bKeys.length) {
          found = true;
          console.log("SAME", keyA, keyB);
          if (replacements[keyB]) {
            replacements[keyB].push(keyA);
          } else {
            replacements[keyB] = [keyA];
          }
          return;
        }
      });

      /*= =============== Check partial match only if no full match exists ================ */
      if (found) return;
      Object.entries(returnObject).forEach(([keyB, b], i) => {
        if (found || getType(b) !== "object") return;

        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);

        const sameCount = aKeys.reduce(
          (acc, valKey) => {
            if (b[valKey] !== undefined) {
              acc += 1;
            }
            return acc;
          },
          0
        );

        if (
          sameCount / bKeys.length >= 0.75 &&
          sameCount === aKeys.length &&
          bKeys.length > 4 &&
          aKeys.length - bKeys.length < 2 &&
          aKeys.length - bKeys.length > -2
        ) {
          /*= =============== All of keys are in object ================ */
          console.log("B Larger than A - All aKeys already in B", keyA, keyB);
          found = true;
          if (replacements[keyB]) {
            replacements[keyB].push(keyA);
          } else {
            replacements[keyB] = [keyA];
          }
          return;
        }

        if (
          sameCount / bKeys.length >= 0.75 &&
          sameCount < aKeys.length &&
          bKeys.length > 4 &&
          aKeys.length - bKeys.length < 2 &&
          aKeys.length - bKeys.length > -2
        ) {
          console.log("A Merge to B POSSIBLE MERGE", keyA, keyB);
          found = true;
          if (replacements[keyB]) {
            replacements[keyB].push(keyA);
          } else {
            replacements[keyB] = [keyA];
          }
          returnObject[keyB] = {
            ...returnObject[keyB],
            ...Object.entries(a).reduce(
              (acc, [key, val]) => {
                if (returnObject[keyB][key] && !Array.isArray(returnObject[keyB][key])) return acc;
                acc[key] = val;
                return acc;
              },
              {}
            ),
          };
          // console.log(returnObject[keyB]);
          return;
        }
      });

      if (found) {
        return;
      } else {
        returnObject[keyA] = a;
      }
    });
  // console.log({ replacements });

  let objectString = JSON.stringify(returnObject);
  Object.entries(replacements).forEach(([key, keyReplacements]) => {
    keyReplacements.forEach((replacement) => {
      const regexp = new RegExp(`"${replacement}([])?"`, "g");
      objectString = objectString.replace(regexp, `"${key}$1"`);
    });
  });

  return { masterTypes: JSON.parse(objectString), replacements };
};
