import { getType } from "./get-type";

export const jsonTypesToStrArray = (types: any) => {
  const resultArray = [];
  Object.entries(types).forEach(([type, obj], index, array) => {
    resultArray.push(`export type ${type.replace(/\s/gi, "").replace(/^\*$/gi, '"*"')} = {\n`);

    if (getType(obj) === "object") {
      if (JSON.stringify(obj) === "{}") {
        resultArray.push(`  [T: string]: unknown;\n`);
      }
      Object.entries(obj).forEach(([key, val]) => {
        if (getType(val) === "object" && val["type"] && val["comment"]) {
          resultArray.push(`  /** `);
          val.comment = val.comment.replace(/(\n\s*\n)/gi, "\n");
          val.comment
            .split("\n")
            .forEach((comment, i, arr) => {
              if (i === 0 && i !== arr.length - 1) {
                resultArray.push(`${comment.trim()}\n`);
              } else if (i === 0 && i === arr.length - 1) {
                resultArray.push(`${comment.trim()}`);
              } else if (i !== arr.length - 1) {
                resultArray.push(`  ${comment.trim()}\n`);
              } else {
                resultArray.push(`  ${comment.trim()}`);
              }
            });
          resultArray.push(`  */\n`);
          resultArray.push(
            `  ${key
              .replace(/^\*$/gi, '"*"')
              .replace(/\s/g, "_")
              .replace(/\?/g, "")}?: ${val.type.replace(/\s/g, "")};\n`
          );
        } else {
          resultArray.push(
            `  ${key
              .replace(/^\*$/gi, '"*"')
              .replace(/\s/g, "_")
              .replace(/\?/g, "")}?: ${val.replace(/\s/g, "")};\n`
          );
        }
      });
    }

    if (index !== array.length - 1) {
      resultArray.push(`};\n\n`);
    } else {
      resultArray.push(`};\n`);
    }
  });
  return resultArray;
};
