import axios from "axios";
import { SHOPIFY } from "config/shopify";
import type { NextApiRequest, NextApiResponse } from "next";
import { JSDOM } from "jsdom";

type ReadShopifyDevData = {
  name?: string;
};

type ReadShopifyDevFunction = (
  req: NextApiRequest,
  res: NextApiResponse<ReadShopifyDevData>
) => Promise<void>;

export const ReadShopifyDev: ReadShopifyDevFunction = async (req, res) => {
  const shopify = await axios({
    url: `https://shopify.dev/api/admin-rest/2021-10/resources/product`,
    method: "GET",
  });

  const window = new JSDOM(shopify.data).window;
  const { document, location } = window;

  document
    .querySelectorAll("script")
    .forEach((node) => {
      if (node.textContent.includes("window.RailsData")) {
        console.log(JSON.parse(node.textContent.replace(/^[^{]*/, "").replace(/[^}]*$/, "")));
      }
    });

  res.status(200).json({ name: "John Doe" });
};

export default ReadShopifyDev;
