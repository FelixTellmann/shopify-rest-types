import type { NextApiRequest, NextApiResponse } from "next";

type ReadShopifyDevData = {
  name?: string;
};

type ReadShopifyDevFunction = (
  req: NextApiRequest,
  res: NextApiResponse<ReadShopifyDevData>
) => Promise<void>;

export const ReadShopifyDev: ReadShopifyDevFunction = async (req, res) => {
  res.status(200).json({ name: "John Doe" });
};

export default ReadShopifyDev;
