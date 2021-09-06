import fs from "fs";
import path from "path";
import rimraf from "rimraf";

import { clean } from "fx-style/build/src/clean";
import type { NextApiRequest, NextApiResponse } from "next";
import data from "data/shopify.json";
import { createRequest } from "../../lib/createRequest";
import JsonToTS from "json-to-ts";
import { lowerCaseFirstLetter } from "../../lib/lowerCaseFirstLetter";
import { titleCase } from "../../lib/titleCase";

type GenerateTypesFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

function cleanTypes(arr: string[], properties: { [T: string]: string[] }, type: "query" | "input" | "return", name: string) {
  const returnArr = arr.join("\n\n").split("\n");

  const cleanedArr = returnArr.map((line) => {
    const includesTitle = new RegExp(`([^:]*:[^:]*?|[^:]*interface[^:]*|[^:]*type[^:]*)${titleCase(name)}([^:]*?)`, "gi");
    line = line.replace(includesTitle, `$1${titleCase(name)}$2`);

    if (/^interface/.test(line)) {
      if (includesTitle.test(line)) {
        return line.replace(/^interface\s*([\w\d_]+)\s*{/gim, "export type $1 = {");
      }
      return line.replace(/^interface\s*([\w\d_]+)\s*{/gim, "type $1 = {");
    }

    if (/([\w\d]):\s/gi.test(line)) {
      return line.replace(/([\w\d_]):\s/gi, "$1?: ");
    }

    return line;
  });

  if (type === "input") {
    const readOnly = Object.entries(properties)
      .filter(([key, value]) => value.includes("read-only"))
      .map(([key]) => key.toLowerCase());

    const required = Object.entries(properties)
      .filter(([key, value]) => value.includes("required"))
      .map(([key]) => key.toLowerCase());

    return cleanedArr
      .filter((line) => {
        if (/([\w\d_]+)\?:/i.test(line)) {
          if (readOnly.includes(line.replace(/\s*([\w\d_]+)\?:.*/i, "$1").toLowerCase())) {
            return false;
          }
        }
        return true;
      })
      .map((line) => {
        if (/([\w\d_]+)\?:/i.test(line)) {
          if (required.includes(line.replace(/\s*([\w\d_]+)\?:.*/i, "$1").toLowerCase())) {
            return line.replace(/\?:/i, ":");
          }
        }
        return line;
      })
      .join("\n");
  }

  return cleanedArr.join("\n");
}

export const GenerateTypes: GenerateTypesFunction = async (req, res) => {
  rimraf.sync(path.join(process.cwd(), "dist"));

  data.forEach((group) => {
    const properties = group.properties;
    group.returnData.forEach(({ name, category, method, endpoint, queryParams, requestBody, requestResponse }) => {
      try {
        name = lowerCaseFirstLetter(
          name
            .split(" ")
            .map((split) => titleCase(split))
            .join("")
        );

        category = lowerCaseFirstLetter(
          category
            .split(" ")
            .map((split) => titleCase(split))
            .join("")
        );

        if (/\/admin\/api\/2021-07\//gi.test(endpoint) && name !== "assets") {
          // console.log(endpoint);
          let withId = false;
          const test = endpoint
            .replace(/(\/admin\/api\/2021-07\/|\.json)/gi, "")
            .split("?")[0]
            .split("/")
            .reverse()
            .reduce((acc, part, i) => {
              if (acc[1].some((p) => part.toLowerCase().includes(p))) {
                return acc;
              }
              if (/{[\w\d_]*_id}/gi.test(part)) {
                withId = true;
                const specialized = titleCase(part.replace(/[{}]/gi, "")).split("_")[0];
                acc[1].push(specialized.toLowerCase());

                part = `By${specialized}Id`;
              }

              acc[0].push(part);
              console.log(acc[1]);
              return acc;
            }, [[], []])[0]
            .join("");

          console.log((withId ? name : "") + test);
          name = lowerCaseFirstLetter(
            endpoint
              .replace(/(\/admin\/api\/2021-07\/|\.json)/gi, "")
              .split("?")[0]
              .split("/")
              .map((part) => {
                if (/{[\w\d_]*_id}/gi.test(part)) {
                  part = `By${titleCase(part.replace(/[{}]/gi, ""))}`;
                }
                part = part
                  .split("_")
                  .map((p) => titleCase(p))
                  .join("");
                return titleCase(part);
              })
              .join("")
          );
        }

        const withBody = !!requestBody;
        const withQuery = !!queryParams.length;
        const withReturn = !!requestResponse;

        const body = `${titleCase(method.toLowerCase()) + titleCase(name)}Input`;
        const query = `${titleCase(method.toLowerCase()) + titleCase(name)}Query`;
        const type = `${titleCase(method.toLowerCase()) + titleCase(name)}Return`;

        const bodyType = withBody ? cleanTypes(JsonToTS(requestResponse, { rootName: body }), properties, "input", name) : "";
        const queryType = withQuery ? cleanTypes(JsonToTS(queryParams, { rootName: query }), properties, "query", name) : "";
        const returnType = withReturn ? cleanTypes(JsonToTS(requestResponse, { rootName: type }), properties, "return", name) : "";

        const types = createRequest({
          name: name,
          method,
          endpoint,
          withBody,
          withQuery,
          body,
          bodyType: bodyType,
          query,
          queryType: queryType,
          type,
          returnType: returnType,
        });

        const categoryName = category.replace(/APIs/gi, "").trim();

        if (!fs.existsSync(path.join(process.cwd(), "dist"))) {
          fs.mkdirSync(path.join(process.cwd(), "dist"));
        }

        if (categoryName) {
          if (!fs.existsSync(path.join(process.cwd(), "dist", lowerCaseFirstLetter(categoryName)))) {
            fs.mkdirSync(path.join(process.cwd(), "dist", lowerCaseFirstLetter(categoryName)));
          }
          const file = fs.existsSync(`${path.join(process.cwd(), "dist", lowerCaseFirstLetter(categoryName))}\\${method.toLowerCase() + titleCase(name)}.ts`);
          if (file) {
            console.log(endpoint);
            console.log(`${path.join(process.cwd(), "dist", lowerCaseFirstLetter(categoryName))}\\${method.toLowerCase() + titleCase(name)}.ts`);
          }

          fs.writeFileSync(`${path.join(process.cwd(), "dist", lowerCaseFirstLetter(categoryName))}\\${method.toLowerCase() + titleCase(name)}.ts`, types);
        }

        if (!categoryName) {
          if (!fs.existsSync(path.join(process.cwd(), "dist", lowerCaseFirstLetter(name)))) {
            fs.mkdirSync(path.join(process.cwd(), "dist", lowerCaseFirstLetter(name)));
          }
          const file = fs.existsSync(`${path.join(process.cwd(), "dist", lowerCaseFirstLetter(name))}\\${method.toLowerCase() + titleCase(name)}.ts`);
          if (file) {
            console.log(`${path.join(process.cwd(), "dist", lowerCaseFirstLetter(name))}\\${method.toLowerCase() + titleCase(name)}.ts`);
          }

          fs.writeFileSync(`${path.join(process.cwd(), "dist", lowerCaseFirstLetter(name))}\\${method.toLowerCase() + titleCase(name)}.ts`, types);
        }
      } catch (err) {
        console.log(group.index, name, category, method);
        console.log(err.message);
      }
    });
  });

  res.status(200).json({ name: "John Doe" });
};

export default GenerateTypes;
