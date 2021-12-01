import Shopify from "@shopify/shopify-api";
import { GraphqlClient } from "@shopify/shopify-api/dist/clients/graphql";
import { StorefrontClient } from "@shopify/shopify-api/dist/clients/graphql/storefront_client";
import { HttpClient } from "@shopify/shopify-api/dist/clients/http_client/http_client";
import { DeleteRequestParams, GetRequestParams, PostRequestParams, PutRequestParams, RequestParams, RequestReturn } from "@shopify/shopify-api/dist/clients/http_client/types";
import { RestClient } from "@shopify/shopify-api/dist/clients/rest/rest_client";

export type ReturnType<T = unknown> = RequestReturn & {
  body: T;
};

export type Override<What, With> = Omit<What, keyof With> & With;

export type HTTPClientType = Override<
  HttpClient,
  {
    /**
     * Performs a DELETE request on the given path.
     */
    delete<T = unknown>(params: DeleteRequestParams): Promise<ReturnType<T>>;
    /**
     * Performs a GET request on the given path.
     */
    get<T = unknown>(params: GetRequestParams): Promise<ReturnType<T>>;
    /**
     * Performs a POST request on the given path.
     */
    post<T = unknown>(params: PostRequestParams): Promise<ReturnType<T>>;
    /**
     * Performs a PUT request on the given path.
     */
    put<T = unknown>(params: PutRequestParams): Promise<ReturnType<T>>;
  }
>;

export const shopify = new Shopify.Clients.Rest(
  process.env.SHOPIFY_SHOP,
  process.env.SHOPIFY_API_PASSWORD
) as RestClient & HTTPClientType;

async function getProducts() {
  const test = await shopify.get<{ width: number }>({
    path: "products",
  });
}
