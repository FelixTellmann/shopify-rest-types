export type ApiTypes = {
  api: Api;
  features: string[];
};

type Api = {
  current_stable_version: string;
  rest_resource: Restresource;
  selectable_versions: string[];
};

type Restresource = {
  components: Component[];
  info: Info;
  openapi: string;
  paths: Path[];
  supported: boolean;
  versions: string[];
  "x-shopify-meta": Xshopifymeta;
};

type Xshopifymeta = {
  api_versioning: boolean;
  channels: boolean;
  file_name: string;
  gid: string;
  glossary: boolean;
  hidden: boolean;
  keywords: string[];
  "legacy-urls": string[];
  meta_description: string;
  postman_group: string;
  shopify_plus: boolean;
  "usage-notes"?: any;
  weight?: any;
};

type Component = {
  name: string;
  properties: Property[];
  required: string[];
  title: string;
  type: string;
};

type Property = {
  description: string;
  example: Example[] | Example2 | Example3[] | number | string;
  name: string;
  type: string;
  format?: string;
  items?: Items;
  readOnly?: boolean;
};

type Items = {
  type: string;
};

type Example3 = {
  barcode: string;
  created_at: string;
  fulfillment_service: string;
  grams: number;
  id: number;
  inventory_item_id: number;
  inventory_management: string;
  inventory_policy: string;
  inventory_quantity: number;
  option1: string;
  position: number;
  price: number;
  product_id: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  updated_at: string;
  weight: number;
  weight_unit: string;
  compare_at_price?: any;
};

type Example2 = {
  id: number;
  name: string;
  position: number;
  product_id: number;
  values: string[];
};

type Example = {
  created_at: string;
  height: number;
  id: number;
  position: number;
  product_id: number;
  src: string;
  updated_at: string;
  variant_ids: Headers[];
  width: number;
};

type Path = {
  action: string;
  description: string;
  operationId: string;
  parameters: Parameter[];
  responses: Responses;
  summary: string;
  url: string;
  "x-examples": Xexample[];
};

type Xexample = {
  codeSamples: CodeSample[];
  name: string;
  request: Request;
  request_method: string;
  request_path: string;
  request_query: string;
  response: Request;
  status: string;
};

type CodeSample = {
  example_code: string;
  language: string;
};

type Request = {
  action: string;
  body: string;
  headers: Headers;
};

type Headers = {};

type Parameter = {
  in: string;
  name: string;
  schema: Schema;
  description?: string;
  examples?: Examples4;
  required?: boolean;
};

type Examples4 = {
  active?: Any;
  any?: Any;
  archived?: Any;
  draft?: Any;
  published?: Any;
  unpublished?: Any;
};

type Any = {
  summary: string;
  value: string;
};

type Schema = {
  type: string;
  default?: number | string;
  maximum?: number;
};

type Responses = {
  "200"?: _200;
  "201"?: _201;
  "422"?: _422;
};

type _422 = {
  content: Content3;
  description: string;
};

type Content3 = {
  "application/json": Applicationjson3;
};

type Applicationjson3 = {
  examples: Examples3;
};

type Examples3 = {
  "Creating a product without a title will return an error": RetrieveAllProducts;
};

type _201 = {
  content: Content2;
  description: string;
};

type Content2 = {
  "application/json": Applicationjson2;
};

type Applicationjson2 = {
  examples: Examples2;
};

type Examples2 = {
  "Create a new draft product": RetrieveAllProducts;
  "Create a new product with multiple product variants": RetrieveAllProducts;
  "Create a new product with multiple product variants and multiple options": RetrieveAllProducts;
  "Create a new product with the default product variant": RetrieveAllProducts;
  "Create a new product with the default variant and a product image that will be downloaded by Shopify": RetrieveAllProducts;
  "Create a new product with the default variant and base64 encoded image": RetrieveAllProducts;
  "Create a new unpublished product": RetrieveAllProducts;
  "Create a product with a metafield": RetrieveAllProducts;
  "Create a product with an SEO title and description": RetrieveAllProducts;
};

type _200 = {
  content: Content;
  description: string;
};

type Content = {
  "application/json": Applicationjson;
};

type Applicationjson = {
  examples: Examples;
};

type Examples = {
  "Add a metafield to an existing product"?: RetrieveAllProducts;
  "Delete a product along with all its variants and images"?: RetrieveAllProducts;
  "Hide a published product by changing the published attribute to false"?: RetrieveAllProducts;
  "Retrieve a count of all products"?: RetrieveAllProducts;
  "Retrieve a count of all products of a given collection"?: RetrieveAllProducts;
  "Retrieve a list of specific products"?: RetrieveAllProducts;
  "Retrieve a single product by ID"?: RetrieveAllProducts;
  "Retrieve all products"?: RetrieveAllProducts;
  "Retrieve all products after the specified ID"?: RetrieveAllProducts;
  "Retrieve all products that belong to a certain collection"?: RetrieveAllProducts;
  "Retrieve all products with prices in selected presentment currencies"?: RetrieveAllProducts;
  "Retrieve all products, showing only some attributes"?: RetrieveAllProducts;
  "Retrieve only particular fields from a single product"?: RetrieveAllProducts;
  "Show a hidden product by changing the published attribute to true"?: RetrieveAllProducts;
  "Update a product and one of its variants"?: RetrieveAllProducts;
  "Update a product by adding a new product image"?: RetrieveAllProducts;
  "Update a product by clearing product images"?: RetrieveAllProducts;
  "Update a product by reordering the product images"?: RetrieveAllProducts;
  "Update a product by reordering the product variants"?: RetrieveAllProducts;
  "Update a product's SEO title and description"?: RetrieveAllProducts;
  "Update a product's status"?: RetrieveAllProducts;
  "Update a product's tags"?: RetrieveAllProducts;
  "Update a product's title"?: RetrieveAllProducts;
};

type RetrieveAllProducts = {
  value: string;
};

type Info = {
  description: string;
  parameters: string;
  property: string;
  title: string;
  version: string;
  "x-description-list"?: any;
};
