import axios from "axios";
import fs from "fs";
import JsonToTS from "json-to-ts";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { JSDOM } from "jsdom";

type IndexFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export const Index: IndexFunction = async (req, res) => {
  const result = await axios({
    method: "GET",
    url: "https://shopify.dev/api/admin/rest/reference/products/product",
  });

  const { document, location } = new JSDOM(result.data).window;
  const dataTable = document.querySelector('[data-version="2021-07"] .api-properties');
  const dataRows = dataTable.querySelectorAll("tr");
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
        [queryRow.querySelector("td").textContent.trim()]: queryRow
          .querySelector("td + td")
          .textContent.trim(),
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

      if (
        !hasError &&
        isSuccessReponse &&
        responseLength >= requestResponseLength &&
        ((method === "POST" && inputLength > bodyLength) || method === "GET")
      ) {
        requestBody = input;
        requestResponse = response.replace(/HTTP\/1\.1 2\d\d.*?\n/i, "");
      }
    });
    console.log(queryParams);
    console.log(method);
    console.log(endpoint);
    console.log(requestBody);
    console.log(requestResponse);

    returnData.push({
      method,
      endpoint,
      queryParams,
      requestBody: requestBody ? JSON.parse(requestBody) : requestBody,
      requestResponse: requestResponse ? JSON.parse(requestResponse) : requestResponse,
    });
  });

  const json = {
    application_charges: [
      {
        id: 675931192,
        name: "iPod Cleaning",
        api_client_id: 755357713,
        price: "5.00",
        status: "accepted",
        return_url: "http://google.com",
        test: null,
        created_at: "2021-07-01T13:58:02-04:00",
        updated_at: "2021-07-01T13:58:02-04:00",
        charge_type: null,
        decorated_return_url: "http://google.com?charge_id=675931192",
      },
      {
        id: 1017262346,
        name: "Create me a logo",
        api_client_id: 755357713,
        price: "123.00",
        status: "accepted",
        return_url: "http://google.com",
        test: null,
        created_at: "2021-07-01T13:58:02-04:00",
        updated_at: "2021-07-01T13:58:02-04:00",
        charge_type: "brokered_service",
        decorated_return_url: "http://google.com?charge_id=1017262346",
      },
    ],
  };

  console.log(JsonToTS(json, { rootName: "Test" }));
  // fs.writeFileSync(`${path.join(process.cwd(), "")}\\Person.ts`, quickt.lines.join("\n"));
  res.status(200).send(JSON.stringify({ returnData, properties }, null, 2));
};

export default Index;
