import fs from "fs";

export const asTypes = (strings: string[]) => {
  return strings.map((line) => line.replace(/^interface (\w+)[^{]/i, "type $1 = "));
};

export const writeTypesToFile = ({ path, types }: { path: string; types: string | string[] }) => {
  if (Array.isArray(types)) {
    fs.writeFileSync(path, types.join("\n\n"), { encoding: "utf-8" });
  }
  if (typeof types === "string") {
    fs.writeFileSync(path, types, { encoding: "utf-8" });
  }
};
