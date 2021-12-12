import axios from "axios";
import { ApiTypes } from "types/apiTypes";
import { JSDOM } from "jsdom";

export const getApiRoute = async ({
  version,
  endpoint,
}: {
  endpoint: string;
  version: string;
}): Promise<ApiTypes> => {
  const shopify = await axios({
    url: `https://shopify.dev/api/admin-rest/${version}/resources/${endpoint}`,
    method: "GET",
  });
  console.log({ endpoint });
  const { document } = new JSDOM(shopify.data).window;

  let scriptNode;

  document
    .querySelectorAll("script")
    .forEach((node) => {
      if (node.textContent.includes("window.RailsData")) {
        scriptNode = node;
        return;
      }
    });

  return JSON.parse(scriptNode.textContent.replace(/^[^{]*/, "").replace(/[^}]*$/, ""));
};
