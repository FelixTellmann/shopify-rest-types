import type { NextApiRequest, NextApiResponse } from "next";
import Shopify, { DataType } from "../../../shopify-node-api/src/index";

export const shopify = new Shopify.Clients.TypedRest(
  process.env.SHOPIFY_SHOP,
  process.env.SHOPIFY_API_PASSWORD
);

type _TestFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export const _Test: _TestFunction = async (req, res) => {
  const data2 = await shopify.Product.get();

  res.status(200).json({ name: "John Doe" });
};

export default _Test;
