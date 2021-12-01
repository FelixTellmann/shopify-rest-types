import axios from "axios";
import { SHOPIFY } from "config/shopify";
import type { NextApiRequest, NextApiResponse } from "next";

type ReadShopifyDevData = {
  name?: string;
};

type ReadShopifyDevFunction = (
  req: NextApiRequest,
  res: NextApiResponse<ReadShopifyDevData>
) => Promise<void>;

export const ReadShopifyDev: ReadShopifyDevFunction = async (req, res) => {
  const shopify = await axios({
    url: SHOPIFY.api.rest.url,
    method: "GET",
  });

  res.status(200).json({ name: "John Doe" });
};

export default ReadShopifyDev;
