import type { NextApiRequest, NextApiResponse } from "next";

import Shopify, { DataType } from "shopify-typed-node-api";
import { Product } from "shopify-typed-node-api/dist/clients/rest/dataTypes";

export const shopify = new Shopify.Clients.Rest(
  process.env.SHOPIFY_SHOP,
  process.env.SHOPIFY_API_PASSWORD
);

type _TestFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export const _Test: _TestFunction = async (req, res) => {
  const data2 = await shopify.get<Product.Get>({
    type: DataType.JSON,
    path: "products",
    data: {
      product: {
        title: "asd",
        variants: [
          {
            id: 123123123,
          },
        ],
      },
    },
  });

  console.log(data2.body.products);

  res.status(200).json({ name: "John Doe" });
};

export default _Test;
