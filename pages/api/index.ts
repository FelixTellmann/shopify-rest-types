import axios from "axios";
import fs from "fs";
import JsonToTS from "json-to-ts";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { JSDOM } from "jsdom";

type IndexFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
let test = 0;
async function getPageContent(url: any, name = "", category = "") {
  const result = await axios({
    method: "GET",
    url: url,
  });

  const { document, location } = new JSDOM(result.data).window;
  const dataTable = document?.querySelector('[data-version="2021-07"] .api-properties');
  const dataRows = dataTable?.querySelectorAll("tr") || [];
  const properties = {};

  dataRows.forEach((rowNode) => {
    if (rowNode.querySelector("td")) {
      const [title, ...specs] = rowNode
        .querySelector("td")
        .textContent?.trim()
        .split("\n");

      properties[title.trim()] = specs.map((spec) => spec.trim());
    }

    // const info = rowNode.querySelector("td + td .highlight code.javascript").textContent.trim();
    // console.log(info);

    // const title = info.replace(/^"([\w_]+)":.*/, "$1");
    //
    // const apiProperties = rowNode.querySelector("td + td .api-properties-example").innerHTML;
    // rowNode.querySelector("td + td .api-properties-example").innerHTML = "";
    // const comment = rowNode.querySelector("td + td");
    // console.log(comment.textContent.trim());
    // rowNode.querySelector("td + td .api-properties-example").innerHTML = apiProperties;
  });

  const data = document.querySelectorAll('[data-version="2021-07"] .api-endpoint');

  const returnData = [];
  data.forEach((node) => {
    const endpoint = node
      .querySelector(".api-endpoint-request")
      .textContent.trim()
      .replace(/(.|\n)*?(\/admin\/.*)/gi, "$2")
      .split("?")[0];

    const method = node.querySelector(".api-endpoint-request-type").textContent.trim();

    const queryParams = [];
    const queryRows = node.querySelectorAll(".api-endpoint-queryparameters tr");

    queryRows.forEach((queryRow) => {
      queryParams.push({
        [queryRow.querySelector("td").textContent.trim()]: queryRow.querySelector("td + td").textContent.trim(),
      });
    });

    const examples = node.querySelectorAll(".api-endpoint-example");
    let requestBody = "";
    let requestResponse = "";

    examples.forEach((e) => {
      const hasError = e
        .querySelector(".api-endpoint-example-title")
        .textContent.toLowerCase()
        .includes("error");

      const input = e.querySelector(".api-endpoint-example-request pre + pre")?.textContent || "";
      const inputLength = input.split("\n").length;
      const bodyLength = requestBody.split("\n").length;

      const response = e.querySelector(".api-endpoint-example-response pre")?.textContent || "";
      const responseLength = response.split("\n").length;
      const requestResponseLength = requestResponse.split("\n").length;
      const isSuccessReponse = /HTTP\/1\.1 2\d\d/i.test(response);

      if (!hasError && isSuccessReponse && responseLength >= requestResponseLength && ((method === "POST" && inputLength > bodyLength) || method === "GET")) {
        requestBody = input;
        requestResponse = response.replace(/HTTP\/1\.1 2\d\d.*?\n/i, "").replace(/^[^{\s}[\]].*?\n/gim, "");
      }
    });
    returnData.push({
      name,
      category,
      method,
      endpoint,
      queryParams,
      requestBody: requestBody ? JSON.parse(requestBody) : requestBody,
      requestResponse: requestResponse ? JSON.parse(requestResponse) : requestResponse,
    });
  });

  console.log(url, test++);
  return { returnData, properties };
}

async function getCategoryPages(url: any, category = "") {
  const categories = [];
  if (url) {
    const referencePage = await axios({
      method: "GET",
      url: url,
    });

    const { document, location } = new JSDOM(referencePage.data).window;

    const links = document.querySelectorAll(".article--docs > ul a");
    links.forEach((link: HTMLAnchorElement) => {
      if (link.textContent.trim() !== "Shopify Query Language") {
        if (`${link.href}` === "/api/admin/rest/reference/orders/order") {
          categories.push({
            name: link.textContent.trim(),
            url: "http://localhost:63342/shopify-rest-types/order.html?_ijt=q9984ahg9i53k486puatc8nq7u",
            category,
          });
          return;
        }

        categories.push({
          name: link.textContent.trim(),
          url: `https://shopify.dev${link.href}`,
          category,
        });
      }
    });
  }

  return categories.length ? categories : [{ name: category, url }];
}

export const Index: IndexFunction = async (req, res) => {
  const categories = await getCategoryPages("https://shopify.dev/api/admin/rest/reference");

  let result = [];
  if (Array.isArray(categories)) {
    result = await Promise.all(categories.map(({ name, url }) => getCategoryPages(url, name)));
  }

  const promiseArray = result.reduce((acc, arr) => {
    acc = [...acc, ...arr.map(({ name, url, category }) => getPageContent(url, name, category))];
    return acc;
  }, []);

  console.log(promiseArray.length);

  const data = await Promise.all(promiseArray).catch((e) => {
    console.log(e);
  });

  /*const data = await getPageContent(
    "https://shopify.dev/api/admin/rest/reference/orders/order",
    "Order",
    "Orders"
  );*/

  /*console.log(JsonToTS(json, { rootName: "Test" }));*!/*/
  fs.writeFileSync(`${path.join(process.cwd(), "data")}\\shopify.json`, JSON.stringify(data), {
    encoding: "utf-8",
  });
  res.status(200).send(JSON.stringify(data, null, 2));
};

export default Index;
