export type MasterTypes = {
  access_scope: Accessscope[];
  account_activation_url: string[];
  address: Address[];
  admin_graphql_api_id: string[];
  application_charge: Applicationcharge[];
  application_credit: Applicationcredit[];
  article: Article[];
  article_id: number[];
  asset: Asset[];
  author: string[];
  balance: Balance[];
  blog: Blog[];
  blog_id: number[];
  body: string[];
  body_html: string[];
  carrier_servic: Carrierservic[];
  carrier_service: Carrierservice[];
  checkout: Checkout[];
  collect: Collect[];
  collection: Collection[];
  collection_listing: Collectionlisting[];
  comment: Comment[];
  count: number[];
  country: Country[];
  created_at: string[];
  currency: Currency[];
  custom_collection: Customcollection[];
  customer: Customer[];
  customer_address: Customeraddress[];
  customer_invite: Customerinvite[];
  customer_saved_search: Customersavedsearch[];
  data_updated_at: string[];
  deprecated_api_call: Deprecatedapicall[];
  discount_code: Discountcode2[];
  discount_code_creation: Discountcodecreation[];
  dispute: Dispute[];
  draft_order: Draftorder[];
  draft_order_invoice: Customerinvite[];
  email: string[];
  engagement: Engagement[];
  event: Event[];
  fulfillment: Fulfillment[];
  fulfillment_event: Fulfillmentevent[];
  fulfillment_order: Fulfillmentorder[];
  fulfillment_service: Fulfillmentservice[];
  gift_card: Giftcard[];
  id: (number | string)[];
  image: Image[];
  inventory_item: Inventoryitem[];
  inventory_level: Inventorylevel[];
  ip: string[];
  location: Location[];
  locations_for_move: Locationsformove[];
  marketing_event: Marketingevent[];
  message: string[];
  metafield: Metafield[];
  mobile_platform_application: Mobileplatformapplication[];
  moved_fulfillment_order: Movedfulfillmentorder[];
  name: string[];
  notice: string[];
  order: Order[];
  original_fulfillment_order: Originalfulfillmentorder[];
  page: Page[];
  payment: Payment[];
  payout: Payout[];
  policy: Policy[];
  previewable: boolean[];
  price_rule: Pricerule[];
  processing: boolean[];
  product: Product[];
  product_id: number[];
  product_listing: Productlisting[];
  province: Provinces3[];
  published_at: (null | string)[];
  recurring_application_charge: Recurringapplicationcharge[];
  redirect: Redirect[];
  refund: Refund2[];
  remaining_fulfillment_order: null[];
  replacement_fulfillment_order: Replacementfulfillmentorder[];
  report: Report[];
  resource_feedback: Resourcefeedback[];
  risk: Risk[];
  role: string[];
  sales_channel_checkout: Saleschannelcheckout[];
  script_tag: Scripttag[];
  shipping_rate: Shippingrate2[];
  shipping_zone: Shippingzone[];
  shop: Shop[];
  shopify_payments_transaction: Shopifypaymentstransaction[];
  smart_collection: Smartcollection[];
  status: string[];
  storefront_access_token: Storefrontaccesstoken[];
  submitted_fulfillment_order: Submittedfulfillmentorder[];
  tag: string[];
  tender_transaction: Tendertransaction[];
  theme: Theme[];
  theme_store_id: null[];
  transaction: Transaction5[];
  unsubmitted_fulfillment_order: (Unsubmittedfulfillmentorder | null)[];
  updated_at: string[];
  usage_charge: Usagecharge[];
  user: User[];
  user_agent: string[];
  variant: Variant2[];
  webhook: Webhook[];
};

type Tendertransaction = {
  amount: string;
  currency: string;
  id: number;
  order_id: number;
  payment_method: string;
  processed_at: string;
  remote_reference: string;
  test: boolean;
  payment_details?: any;
  user_id?: any;
};

type Shop = {
  address1: string;
  address2: string;
  checkout_api_supported: boolean;
  city: string;
  cookie_consent_level: string;
  country: string;
  country_code: string;
  country_name: string;
  county_taxes: boolean;
  created_at: string;
  currency: string;
  customer_email: string;
  domain: string;
  eligible_for_card_reader_giveaway: boolean;
  eligible_for_payments: boolean;
  email: string;
  enabled_presentment_currencies: string[];
  finances: boolean;
  has_discounts: boolean;
  has_gift_cards: boolean;
  has_storefront: boolean;
  iana_timezone: string;
  id: number;
  latitude: number;
  longitude: number;
  money_format: string;
  money_in_emails_format: string;
  money_with_currency_format: string;
  money_with_currency_in_emails_format: string;
  multi_location_enabled: boolean;
  myshopify_domain: string;
  name: string;
  password_enabled: boolean;
  phone: string;
  plan_display_name: string;
  plan_name: string;
  pre_launch_enabled: boolean;
  primary_locale: string;
  primary_location_id: number;
  province: string;
  province_code: string;
  requires_extra_payments_agreement: boolean;
  setup_required: boolean;
  shop_owner: string;
  timezone: string;
  updated_at: string;
  visitor_tracking_consent_preference: string;
  weight_unit: string;
  zip: string;
  auto_configure_tax_inclusivity?: any;
  google_apps_domain?: any;
  google_apps_login_enabled?: any;
  source?: any;
  tax_shipping?: any;
  taxes_included?: any;
};

type Shippingzone = {
  admin_graphql_api_id: string;
  carrier_shipping_rate_providers: Carriershippingrateprovider[];
  countries: Country2[];
  id: number;
  location_group_id: string;
  name: string;
  price_based_shipping_rates: Pricebasedshippingrate[];
  profile_id: string;
  weight_based_shipping_rates: Weightbasedshippingrate[];
};

type Carriershippingrateprovider = {
  carrier_service_id: number;
  flat_modifier: string;
  id: number;
  service_filter: Servicefilter;
  shipping_zone_id: number;
  percent_modifier?: any;
};

type Servicefilter = {
  "*": string;
};

type Pricebasedshippingrate = {
  id: number;
  max_order_subtotal: string;
  name: string;
  price: string;
  shipping_zone_id: number;
  min_order_subtotal?: any;
};

type Weightbasedshippingrate = {
  id: number;
  name: string;
  price: string;
  shipping_zone_id: number;
  weight_high: number;
  weight_low: number;
};

type Country2 = {
  code: string;
  id: number;
  name: string;
  provinces: (Province2 | Provinces22)[];
  shipping_zone_id: number;
  tax: number;
  tax_name: string;
};

type Provinces22 = {
  code: string;
  country_id: number;
  id: number;
  name: string;
  shipping_zone_id: number;
  tax: number;
  tax_percentage: number;
  tax_name?: string;
  tax_type?: string;
};

type Province2 = {
  code: string;
  country_id: number;
  id: number;
  name: string;
  shipping_zone_id: number;
  tax: number;
  tax_percentage: number;
  tax_name?: any;
  tax_type?: any;
};

type Policy = {
  body: string;
  created_at: string;
  handle: string;
  title: string;
  updated_at: string;
  url: string;
};

type Currency = {
  currency: string;
  enabled: boolean;
  rate_updated_at: string;
};

type Country = {
  code: string;
  id: number;
  name: string;
  provinces: (Province | Provinces2 | Provinces3)[];
  tax: number;
  tax_name: string;
};

type Provinces3 = {
  code: string;
  country_id: number;
  id: number;
  name: string;
  tax: number;
  tax_percentage: number;
  shipping_zone_id?: any;
  tax_name?: string;
  tax_type?: string;
};

type Provinces2 = {
  code: string;
  country_id: number;
  id: number;
  name: string;
  tax: number;
  tax_name: string;
  tax_percentage: number;
  shipping_zone_id?: any;
  tax_type?: string;
};

type Province = {
  code: string;
  country_id: number;
  id: number;
  name: string;
  tax: number;
  tax_percentage: number;
  shipping_zone_id?: number;
  tax_name?: any;
  tax_type?: any;
};

type Shopifypaymentstransaction = {
  amount: string;
  currency: string;
  fee: string;
  id: number;
  net: string;
  payout_id: number;
  payout_status: string;
  processed_at: string;
  test: boolean;
  type: string;
  source_id?: number;
  source_order_id?: number;
  source_order_transaction_id?: number;
  source_type?: string;
};

type Payout = {
  amount: string;
  currency: string;
  date: string;
  id: number;
  status: string;
  summary: Summary;
};

type Summary = {
  adjustments_fee_amount: string;
  adjustments_gross_amount: string;
  charges_fee_amount: string;
  charges_gross_amount: string;
  refunds_fee_amount: string;
  refunds_gross_amount: string;
  reserved_funds_fee_amount: string;
  reserved_funds_gross_amount: string;
  retried_payouts_fee_amount: string;
  retried_payouts_gross_amount: string;
};

type Dispute = {
  amount: string;
  currency: string;
  evidence_due_by: string;
  id: number;
  initiated_at: string;
  network_reason_code: string;
  reason: string;
  status: string;
  type: string;
  evidence_sent_on?: string;
  finalized_on?: any;
  order_id?: number;
};

type Balance = {
  amount: string;
  currency: string;
};

type Locationsformove = {
  location: Location2;
  message: string;
  movable: boolean;
};

type Location2 = {
  id: number;
  name: string;
};

type Fulfillmentservice = {
  fulfillment_orders_opt_in: boolean;
  handle: string;
  id: number;
  include_pending_stock: boolean;
  inventory_management: boolean;
  location_id: number;
  name: string;
  service_name: string;
  tracking_support: boolean;
  callback_url?: string;
  email?: any;
  provider_id?: any;
};

type Unsubmittedfulfillmentorder = {
  assigned_location_id: number;
  destination: Destination;
  fulfillment_service_handle: string;
  id: number;
  line_items: Lineitem11[];
  order_id: number;
  origin: Assignedlocation;
  outgoing_requests: any[];
  request_status: string;
  shop_id: number;
  status: string;
  supported_actions: string[];
};

type Submittedfulfillmentorder = {
  assigned_location_id: number;
  destination: Destination;
  fulfillment_service_handle: string;
  id: number;
  line_items: Lineitem11[];
  order_id: number;
  origin: Assignedlocation;
  outgoing_requests: Outgoingrequest[];
  request_status: string;
  shop_id: number;
  status: string;
  supported_actions: string[];
};

type Movedfulfillmentorder = {
  assigned_location: Assignedlocation2;
  assigned_location_id: number;
  destination: Destination;
  fulfillment_service_handle: string;
  id: number;
  line_items: Lineitem11[];
  merchant_requests: any[];
  order_id: number;
  request_status: string;
  shop_id: number;
  status: string;
  supported_actions: string[];
};

type Assignedlocation2 = {
  address1: string;
  city: string;
  country_code: string;
  location_id: number;
  name: string;
  province: string;
  zip: string;
  address2?: any;
  phone?: any;
};

type Originalfulfillmentorder = {
  assigned_location_id: number;
  destination: Destination;
  fulfillment_service_handle: string;
  id: number;
  line_items: Lineitem11[];
  order_id: number;
  request_status: string;
  shop_id: number;
  status: string;
  supported_actions: string[];
  assigned_location?: Assignedlocation;
  merchant_requests?: any[];
  origin?: Assignedlocation;
  outgoing_requests?: Outgoingrequest[];
};

type Outgoingrequest = {
  kind: string;
  message: string;
  request_options: Requestoptions;
  sent_at: string;
};

type Requestoptions = {
  notify_customer: boolean;
};

type Replacementfulfillmentorder = {
  assigned_location: Assignedlocation;
  assigned_location_id: number;
  destination: Destination;
  fulfillment_service_handle: string;
  id: number;
  line_items: Lineitem11[];
  merchant_requests: any[];
  order_id: number;
  request_status: string;
  shop_id: number;
  status: string;
  supported_actions: string[];
};

type Fulfillmentevent = {
  admin_graphql_api_id: string;
  created_at: string;
  fulfillment_id: number;
  happened_at: string;
  id: number;
  order_id: number;
  shop_id: number;
  status: string;
  updated_at: string;
  address1?: any;
  city?: any;
  country?: any;
  estimated_delivery_at?: any;
  latitude?: any;
  longitude?: any;
  message?: any;
  province?: any;
  zip?: any;
};

type Fulfillment2 = {
  admin_graphql_api_id: string;
  created_at: string;
  id: number;
  line_items: Lineitem12[];
  location_id: number;
  name: string;
  order_id: number;
  receipt: Receipt3;
  service: string;
  status: string;
  tracking_numbers: string[];
  tracking_urls: string[];
  updated_at: string;
  origin_address?: any;
  shipment_status?: any;
  tracking_company?: string;
  tracking_number?: string;
  tracking_url?: string;
};

type Lineitem12 = {
  admin_graphql_api_id: string;
  discount_allocations: Discountallocation[];
  fulfillable_quantity: number;
  fulfillment_service: string;
  gift_card: boolean;
  grams: number;
  id: number;
  name: string;
  price: string;
  price_set: Currentsubtotalpriceset;
  product_exists: boolean;
  product_id: number;
  properties: (Noteattribute | Noteattribute)[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: (Taxline | Taxlines2)[];
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: Currentsubtotalpriceset;
  variant_id: number;
  variant_title: string;
  duties?: any[];
  fulfillment_status?: string;
  variant_inventory_management?: string;
  vendor?: any;
};

type Carrierservic = {
  active: boolean;
  admin_graphql_api_id: string;
  carrier_service_type: string;
  id: number;
  name: string;
  service_discovery: boolean;
  callback_url?: string;
  format?: string;
};

type Carrierservice = {
  active: boolean;
  admin_graphql_api_id: string;
  callback_url: string;
  carrier_service_type: string;
  format: string;
  id: number;
  name: string;
  service_discovery: boolean;
};

type Fulfillmentorder = {
  assigned_location_id: number;
  destination: Destination;
  id: number;
  line_items: Lineitem11[];
  order_id: number;
  request_status: string;
  shop_id: number;
  status: string;
  supported_actions: string[];
  assigned_location?: Assignedlocation;
  delivery_method?: any;
  fulfill_at?: string;
  fulfillment_holds?: Fulfillmenthold[];
  fulfillment_service_handle?: string;
  international_duties?: Internationalduties;
  merchant_requests?: any[];
  origin?: Assignedlocation;
  outgoing_requests?: any[];
};

type Fulfillmenthold = {
  reason: string;
  reason_notes: string;
};

type Internationalduties = {
  incoterm: string;
};

type Assignedlocation = {
  country_code: string;
  location_id: number;
  name: string;
  address1?: any;
  address2?: any;
  city?: any;
  phone?: any;
  province?: any;
  zip?: any;
};

type Lineitem11 = {
  fulfillable_quantity: number;
  fulfillment_order_id: number;
  id: number;
  inventory_item_id: number;
  line_item_id: number;
  quantity: number;
  shop_id: number;
  variant_id: number;
};

type Destination = {
  address1: string;
  address2: string;
  city: string;
  country: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  phone: string;
  province: string;
  zip: string;
  company?: any;
};

type Productlisting = {
  available: boolean;
  body_html: string;
  created_at: string;
  handle: string;
  images: Image6[];
  options: Option2[];
  product_id: number;
  product_type: string;
  published_at: string;
  tags: string;
  title: string;
  updated_at: string;
  variants: Variant3[];
  vendor: string;
};

type Option2 = {
  id: number;
  name: string;
  position: number;
  product_id: number;
  values: string[];
};

type Image6 = {
  created_at: string;
  height: number;
  id: number;
  position: number;
  product_id: number;
  src: string;
  updated_at: string;
  variant_ids: number[];
  width: number;
};

type Variant3 = {
  available: boolean;
  barcode: string;
  created_at: string;
  formatted_price: string;
  fulfillment_service: string;
  grams: number;
  id: number;
  inventory_management: string;
  inventory_policy: string;
  inventory_quantity: number;
  option_values: Optionvalue[];
  position: number;
  price: string;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  updated_at: string;
  weight: number;
  weight_unit: string;
  compare_at_price?: any;
  image_id?: (null | number)[];
};

type Optionvalue = {
  name: string;
  option_id: number;
  value: string;
};

type Resourcefeedback = {
  created_at: string;
  feedback_generated_at: string;
  messages: string[];
  resource_id: number;
  resource_type: string;
  state: string;
  updated_at: string;
  resource_updated_at?: string;
};

type Payment3 = {
  checkout: Checkout3;
  id: number;
  unique_token: string;
  credit_card?: Creditcard2;
  fraudulent?: boolean;
  next_action?: Nextaction;
  payment_processing_error_message?: any;
  transaction?: Transaction7;
};

type Checkout3 = {
  billing_address: Shippingaddress2;
  created_at: string;
  credit_card: Creditcard3;
  currency: string;
  customer_id: number;
  customer_locale: string;
  email: string;
  gift_cards: any[];
  line_items: Lineitems2[];
  name: string;
  note: string;
  note_attributes: Noteattributes2;
  payment_due: string;
  payment_url: string;
  payments: Payment2[];
  presentment_currency: string;
  requires_shipping: boolean;
  reservation_time_left: number;
  shipping_address: Shippingaddress2;
  shipping_line: Shippingline4;
  shipping_rate: Shippingrate;
  source_name: string;
  subtotal_price: string;
  tax_exempt: boolean;
  tax_lines: Taxline4[];
  tax_manipulations: any[];
  taxes_included: boolean;
  token: string;
  total_line_items_price: string;
  total_price: string;
  total_tax: string;
  total_tip_received: string;
  updated_at: string;
  web_url: string;
  applied_discount?: any;
  completed_at?: any;
  device_id?: any;
  discount_code?: any;
  legal_notice_url?: any;
  location_id?: any;
  order?: any;
  order_id?: any;
  order_status_url?: any;
  phone?: any;
  privacy_policy_url?: any;
  refund_policy_url?: any;
  reservation_time?: any;
  shipping_policy_url?: any;
  shopify_payments_account_id?: any;
  source_identifier?: any;
  source_url?: any;
  subscription_policy_url?: any;
  terms_of_sale_url?: any;
  terms_of_service_url?: any;
  total_additional_fees?: any;
  total_duties?: any;
  user_id?: any;
};

type Creditcard3 = {
  brand: string;
  expiry_month: number;
  expiry_year: number;
  first_digits: string;
  first_name: string;
  last_digits: string;
  last_name: string;
  customer_id?: number;
};

type Payment2 = {
  id: number;
  unique_token: string;
  credit_card?: (Creditcard2 | null)[];
  fraudulent?: boolean;
  payment_processing_error_message?: any;
  transaction?: Transaction8 | Transaction22 | Transaction6;
};

type Transaction22 = {
  amount: string;
  created_at: string;
  currency: string;
  gateway: string;
  id: number;
  kind: string;
  receipt: Originaddress;
  status: string;
  test: boolean;
  amount_in?: any;
  amount_out?: any;
  amount_rounding?: any;
  authorization?: any;
  device_id?: any;
  error_code?: any;
  location_id?: any;
  message?: any;
  parent_id?: any;
  payment_details?: any;
  transaction_group_id?: any;
  user_id?: any;
};

type Transaction8 = {
  amount: string;
  authorization: string;
  created_at: string;
  currency: string;
  gateway: string;
  id: number;
  kind: string;
  status: string;
  test: boolean;
  amount_in?: any;
  amount_out?: any;
  amount_rounding?: any;
  error_code?: any;
  message?: any;
  parent_id?: any;
};

type Noteattributes2 = {
  colour: string;
  "custom engraving": string;
};

type Creditcard2 = {
  brand: string;
  customer_id: number;
  expiry_month: number;
  expiry_year: number;
  first_digits: string;
  first_name: string;
  last_digits: string;
  last_name: string;
};

type Transaction7 = {
  amount: string;
  created_at: string;
  currency: string;
  gateway: string;
  id: number;
  kind: string;
  status: string;
  test: boolean;
  amount_in?: any;
  amount_out?: any;
  amount_rounding?: any;
  authorization?: string;
  device_id?: any;
  error_code?: any;
  location_id?: any;
  message?: any;
  parent_id?: any;
  payment_details?: any;
  receipt?: Originaddress;
  transaction_group_id?: any;
  user_id?: any;
};

type Nextaction = {
  redirect_url?: any;
};

type Mobileplatformapplication = {
  application_id: string;
  created_at: string;
  enabled_shared_webcredentials: boolean;
  enabled_universal_or_app_links: boolean;
  id: number;
  platform: string;
  sha256_cert_fingerprints: string[];
  updated_at: string;
};

type Collectionlisting = {
  body_html: string;
  collection_id: number;
  handle: string;
  published_at: string;
  sort_order: string;
  title: string;
  updated_at: string;
  default_product_image?: Defaultproductimage;
  image?: Image5;
};

type Image5 = {
  created_at: string;
  src: string;
};

type Defaultproductimage = {
  created_at: string;
  height: number;
  id: number;
  position: number;
  product_id: number;
  src: string;
  updated_at: string;
  variant_ids: any[];
  width: number;
};

type Shippingrate2 = {
  checkout: Checkout2;
  handle: string;
  id: string;
  phone_required: boolean;
  price: string;
  title: string;
  delivery_range?: any;
  estimated_time_in_transit?: any;
};

type Checkout2 = {
  subtotal_price: string;
  total_price: string;
  total_tax: string;
};

type Saleschannelcheckout = {
  created_at: string;
  currency: string;
  customer_locale: string;
  gift_cards: any[];
  line_items: (Lineitem10 | Lineitems2)[];
  name: string;
  note: string;
  note_attributes: Noteattributes;
  payment_due: string;
  payment_url: string;
  payments: Payment[];
  presentment_currency: string;
  requires_shipping: boolean;
  reservation_time_left: number;
  source_name: string;
  subtotal_price: string;
  tax_exempt: boolean;
  tax_lines: Taxline4[];
  tax_manipulations: any[];
  taxes_included: boolean;
  token: string;
  total_line_items_price: string;
  total_price: string;
  total_tax: string;
  total_tip_received: string;
  updated_at: string;
  web_url: string;
  applied_discount?: any;
  billing_address?: Shippingaddress2;
  completed_at?: string;
  credit_card?: Creditcard;
  customer_id?: number;
  device_id?: any;
  discount_code?: any;
  email?: string;
  legal_notice_url?: any;
  location_id?: any;
  order?: Order2;
  order_id?: number;
  order_status_url?: string;
  phone?: any;
  privacy_policy_url?: any;
  refund_policy_url?: any;
  reservation_time?: any;
  shipping_address?: Shippingaddress2;
  shipping_line?: Shippingline4;
  shipping_policy_url?: any;
  shipping_rate?: Shippingrate;
  shopify_payments_account_id?: any;
  source_identifier?: any;
  source_url?: any;
  subscription_policy_url?: any;
  terms_of_sale_url?: any;
  terms_of_service_url?: any;
  total_additional_fees?: any;
  total_duties?: any;
  user_id?: any;
};

type Creditcard = {
  brand: string;
  expiry_month: number;
  expiry_year: number;
  first_digits: string;
  first_name: string;
  last_digits: string;
  last_name: string;
  customer_id?: any;
};

type Shippingaddress2 = {
  address1: string;
  address2: string;
  city: string;
  country: string;
  country_code: string;
  first_name: string;
  id: number;
  last_name: string;
  phone: string;
  province: string;
  province_code: string;
  zip: string;
  company?: any;
};

type Shippingrate = {
  id: string;
  price: string;
  title: string;
};

type Shippingline4 = {
  handle: string;
  price: string;
  tax_lines: any[];
  title: string;
};

type Taxline4 = {
  compare_at: number;
  price: string;
  rate: number;
  title: string;
};

type Lineitems2 = {
  applied_discounts: any[];
  discount_allocations: any[];
  fulfillment_service: string;
  gift_card: boolean;
  grams: number;
  id: string;
  image_url: string;
  key: string;
  line_price: string;
  price: string;
  product_id: number;
  properties: Originaddress;
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: any[];
  taxable: boolean;
  title: string;
  variant_id: number;
  variant_title: string;
  vendor: string;
  compare_at_price?: any;
};

type Lineitem10 = {
  applied_discounts: any[];
  discount_allocations: any[];
  fulfillment_service: string;
  gift_card: boolean;
  grams: number;
  id: number;
  image_url: string;
  key: number;
  line_price: string;
  price: string;
  product_id: number;
  properties: Originaddress;
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: any[];
  taxable: boolean;
  title: string;
  variant_id: number;
  variant_title: string;
  vendor: string;
  compare_at_price?: any;
};

type Payment = {
  fraudulent: boolean;
  id: number;
  transaction: Transaction6;
  unique_token: string;
  credit_card?: any;
  payment_processing_error_message?: any;
};

type Transaction6 = {
  amount: string;
  authorization: string;
  created_at: string;
  currency: string;
  gateway: string;
  id: number;
  kind: string;
  payment_details: Paymentdetails;
  receipt: Receipt;
  status: string;
  test: boolean;
  amount_in?: any;
  amount_out?: any;
  amount_rounding?: any;
  device_id?: any;
  error_code?: any;
  location_id?: any;
  message?: any;
  parent_id?: any;
  transaction_group_id?: any;
  user_id?: any;
};

type Paymentdetails = {
  credit_card_company: string;
  credit_card_number: string;
  avs_result_code?: any;
  credit_card_bin?: any;
  credit_card_expiration_month?: any;
  credit_card_expiration_year?: any;
  credit_card_name?: any;
  credit_card_wallet?: any;
  cvv_result_code?: any;
};

type Order2 = {
  id: number;
  name: string;
  status_url: string;
};

type Noteattributes = {
  colour?: string;
  "custom engraving"?: string;
};

type Smartcollection = {
  admin_graphql_api_id: string;
  disjunctive: boolean;
  handle: string;
  id: number;
  published_scope: string;
  rules: Rule[];
  sort_order: string;
  title: string;
  updated_at: string;
  body_html?: string;
  image?: Image2;
  products_count?: number;
  published_at?: string;
  template_suffix?: any;
};

type Rule = {
  column: string;
  condition: string;
  relation: string;
};

type Variant2 = {
  admin_graphql_api_id: string;
  created_at: string;
  fulfillment_service: string;
  grams: number;
  id: number;
  inventory_item_id: number;
  inventory_management: string;
  inventory_policy: string;
  inventory_quantity: number;
  old_inventory_quantity: number;
  option1: string;
  position: number;
  presentment_prices: Presentmentprice2[];
  price: string;
  product_id: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  updated_at: string;
  weight: number;
  weight_unit: string;
  barcode?: string;
  compare_at_price?: string;
  image_id?: number;
  option2?: any;
  option3?: any;
  tax_code?: string;
};

type Presentmentprice2 = {
  price: Shopmoney;
  compare_at_price?: Shopmoney;
};

type Image4 = {
  admin_graphql_api_id: string;
  created_at: string;
  height: number;
  id: number;
  position: number;
  product_id: number;
  src: string;
  updated_at: string;
  variant_ids: number[];
  width: number;
  alt?: string;
};

type Customcollection = {
  admin_graphql_api_id: string;
  handle: string;
  id: number;
  published_scope: string;
  sort_order: string;
  title: string;
  updated_at: string;
  body_html?: string;
  image?: Image2;
  products_count?: number;
  published_at?: string;
  template_suffix?: any;
};

type Product = {
  id: number;
  images: (Image3 | Images2)[];
  title: string;
  admin_graphql_api_id?: string;
  body_html?: string;
  created_at?: string;
  handle?: string;
  image?: Image3;
  options?: Option[];
  product_type?: string;
  published_at?: string;
  published_scope?: string;
  status?: string;
  tags?: string;
  template_suffix?: any;
  updated_at?: string;
  variants?: Variant[];
  vendor?: string;
};

type Variant = {
  admin_graphql_api_id: string;
  created_at: string;
  fulfillment_service: string;
  grams: number;
  id: number;
  inventory_item_id: number;
  inventory_policy: string;
  inventory_quantity: number;
  old_inventory_quantity: number;
  option1: string;
  position: number;
  presentment_prices: Presentmentprice[];
  price: string;
  product_id: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  updated_at: string;
  weight: number;
  weight_unit: string;
  barcode?: string;
  compare_at_price?: any;
  image_id?: (null | number)[];
  inventory_management?: string;
  option2?: string;
  option3?: any;
};

type Presentmentprice = {
  price: Shopmoney;
  compare_at_price?: any;
};

type Images2 = {
  admin_graphql_api_id: string;
  created_at: string;
  height: number;
  id: number;
  position: number;
  product_id: number;
  src: string;
  updated_at: string;
  variant_ids: number[];
  width: number;
  alt?: any;
};

type Image3 = {
  admin_graphql_api_id: string;
  created_at: string;
  height: number;
  id: number;
  position: number;
  product_id: number;
  src: string;
  updated_at: string;
  variant_ids: any[];
  width: number;
  alt?: any;
};

type Option = {
  id: number;
  name: string;
  position: number;
  product_id: number;
  values?: string[];
};

type Collection = {
  admin_graphql_api_id: string;
  body_html: string;
  collection_type: string;
  handle: string;
  id: number;
  image: Image2;
  products_count: number;
  published_at: string;
  published_scope: string;
  sort_order: string;
  title: string;
  updated_at: string;
  template_suffix?: any;
};

type Image2 = {
  alt: string;
  created_at: string;
  height: number;
  src: string;
  width: number;
};

type Collect = {
  collection_id: number;
  id: number;
  position: number;
  product_id: number;
  sort_value: string;
  created_at?: string;
  updated_at?: string;
};

type User = {
  account_owner: boolean;
  admin_graphql_api_id: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  locale: string;
  permissions: string[];
  receive_announcements: number;
  "tfa_enabled?": boolean;
  url: string;
  user_type: string;
  bio?: any;
  im?: any;
  phone?: any;
  screen_name?: any;
};

type Giftcard = {
  balance: string;
  created_at: string;
  currency: string;
  id: number;
  initial_value: string;
  last_characters: string;
  updated_at: string;
  api_client_id?: number;
  code?: string;
  customer_id?: any;
  disabled_at?: string;
  expires_on?: string;
  line_item_id?: any;
  note?: string;
  order_id?: any;
  template_suffix?: string;
  user_id?: any;
};

type Transaction5 = {
  admin_graphql_api_id: string;
  amount: string;
  created_at: string;
  currency: string;
  gateway: string;
  id: number;
  kind: string;
  order_id: number;
  processed_at: string;
  receipt: Receipt3;
  source_name: string;
  status: string;
  test: boolean;
  authorization?: string;
  authorization_expires_at?: any;
  currency_exchange_adjustment?: any;
  device_id?: any;
  error_code?: any;
  extended_authorization_attributes?: Originaddress;
  location_id?: any;
  message?: string;
  parent_id?: number;
  payment_details?: Paymentdetail;
  user_id?: any;
};

type Receipt3 = {
  authorization?: string;
  testcase?: boolean;
};

type Refund2 = {
  refund_line_items: (Refundlineitem2 | Refundlineitems2 | Refundlineitem3 | Refundlineitems4)[];
  transactions: Transaction4[];
  additional_fees?: any[];
  admin_graphql_api_id?: string;
  created_at?: string;
  currency?: string;
  duties?: any[];
  id?: number;
  note?: string;
  order_adjustments?: Orderadjustment[];
  order_id?: number;
  processed_at?: string;
  restock?: boolean;
  shipping?: Shipping;
  total_additional_fees_set?: Currentsubtotalpriceset;
  total_duties_set?: Currentsubtotalpriceset;
  user_id?: number;
};

type Shipping = {
  amount: string;
  maximum_refundable: string;
  tax: string;
};

type Transaction4 = {
  amount: string;
  currency: string;
  gateway: string;
  kind: string;
  order_id: number;
  parent_id: number;
  admin_graphql_api_id?: string;
  authorization?: string;
  created_at?: string;
  currency_exchange_adjustment?: any;
  device_id?: any;
  error_code?: any;
  id?: number;
  location_id?: any;
  maximum_refundable?: string;
  message?: string;
  processed_at?: string;
  receipt?: Originaddress;
  source_name?: string;
  status?: string;
  test?: boolean;
  user_id?: any;
};

type Refundlineitems4 = {
  discounted_price: string;
  discounted_total_price: string;
  line_item_id: number;
  price: string;
  quantity: number;
  restock_type: string;
  subtotal: string;
  total_cart_discount_amount: string;
  total_tax: string;
  location_id?: any;
};

type Refundlineitems2 = {
  id: number;
  line_item: Lineitem9;
  line_item_id: number;
  location_id: number;
  quantity: number;
  restock_type: string;
  subtotal: number;
  subtotal_set: Currentsubtotalpriceset;
  total_tax: number;
  total_tax_set: Currentsubtotalpriceset;
};

type Lineitem9 = {
  admin_graphql_api_id: string;
  discount_allocations: Discountallocation[];
  duties: any[];
  fulfillable_quantity: number;
  fulfillment_service: string;
  gift_card: boolean;
  grams: number;
  id: number;
  name: string;
  price: string;
  price_set: Currentsubtotalpriceset;
  product_exists: boolean;
  product_id: number;
  properties: any[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: Taxline[];
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: Currentsubtotalpriceset;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  fulfillment_status?: any;
  vendor?: any;
};

type Risk = {
  cause_cancel: boolean;
  display: boolean;
  id: number;
  merchant_message: string;
  message: string;
  order_id: number;
  recommendation: string;
  score: string;
  source: string;
  checkout_id?: number;
};

type Draftorder = {
  admin_graphql_api_id: string;
  created_at: string;
  currency: string;
  id: number;
  invoice_url: string;
  line_items: Lineitem8[];
  name: string;
  note_attributes: any[];
  status: string;
  subtotal_price: string;
  tags: string;
  tax_exempt: boolean;
  tax_lines: Taxline3[];
  taxes_included: boolean;
  total_price: string;
  total_tax: string;
  updated_at: string;
  applied_discount?: Applieddiscount2;
  billing_address?: Shippingaddress;
  completed_at?: string;
  customer?: Customer3;
  email?: string;
  invoice_sent_at?: string;
  note?: string;
  order_id?: number;
  payment_terms?: any;
  presentment_currency?: string;
  shipping_address?: Shippingaddress;
  shipping_line?: Shippingline3;
  subtotal_price_set?: Currentsubtotalpriceset;
  total_discounts_set?: Currentsubtotalpriceset;
  total_line_items_price_set?: Currentsubtotalpriceset;
  total_price_set?: Currentsubtotalpriceset;
  total_shipping_price_set?: Currentsubtotalpriceset;
  total_tax_set?: Currentsubtotalpriceset;
};

type Shippingline3 = {
  custom: boolean;
  price: string;
  title: string;
  handle?: string;
};

type Applieddiscount2 = {
  amount: string;
  description: string;
  value: string;
  value_type: string;
  title?: string;
};

type Shippingaddress = {
  address1: string;
  address2: string;
  city: string;
  country: string;
  country_code: string;
  name: string;
  phone: string;
  province: string;
  province_code: string;
  zip: string;
  company?: any;
  first_name?: string;
  last_name?: string;
  latitude?: number;
  longitude?: number;
};

type Lineitem8 = {
  admin_graphql_api_id: string;
  custom: boolean;
  fulfillment_service: string;
  gift_card: boolean;
  grams: number;
  id: number;
  name: string;
  price: string;
  properties: any[];
  quantity: number;
  requires_shipping: boolean;
  tax_lines: Taxline3[];
  taxable: boolean;
  title: string;
  applied_discount?: Applieddiscount;
  product_id?: null | number | number;
  sku?: string;
  variant_id?: null | number | number;
  variant_title?: null | string | string;
  vendor?: string;
};

type Applieddiscount = {
  amount: string;
  description: string;
  title: string;
  value: string;
  value_type: string;
};

type Taxline3 = {
  price: string;
  rate: number;
  title: string;
};

type Checkout = {
  abandoned_checkout_url: string;
  billing_address: Billingaddress2;
  buyer_accepts_marketing: boolean;
  buyer_accepts_sms_marketing: boolean;
  cart_token: string;
  created_at: string;
  currency: string;
  customer: Customer3;
  customer_locale: string;
  discount_codes: Discountcode[];
  email: string;
  id: number;
  line_items: Lineitem7[];
  name: string;
  note_attributes: Noteattribute[];
  presentment_currency: string;
  shipping_address: Billingaddress2;
  shipping_lines: Shippingline2[];
  source_name: string;
  subtotal_price: string;
  tax_lines: Taxline2[];
  taxes_included: boolean;
  token: string;
  total_discounts: string;
  total_line_items_price: string;
  total_price: string;
  total_tax: string;
  total_weight: number;
  updated_at: string;
  closed_at?: any;
  completed_at?: any;
  device_id?: any;
  gateway?: any;
  landing_site?: any;
  location_id?: any;
  note?: any;
  phone?: any;
  referring_site?: any;
  sms_marketing_phone?: any;
  source?: any;
  source_identifier?: any;
  source_url?: any;
  total_duties?: any;
  user_id?: any;
};

type Customer3 = {
  accepts_marketing: boolean;
  accepts_marketing_updated_at: string;
  admin_graphql_api_id: string;
  created_at: string;
  currency: string;
  default_address: Address2;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  last_order_id: number;
  last_order_name: string;
  orders_count: number;
  phone: string;
  state: string;
  tags: string;
  tax_exempt: boolean;
  tax_exemptions: any[];
  total_spent: string;
  updated_at: string;
  verified_email: boolean;
  marketing_opt_in_level?: any;
  multipass_identifier?: any;
  note?: any;
};

type Billingaddress2 = {
  address1: string;
  address2: string;
  city: string;
  country: string;
  country_code: string;
  first_name: string;
  last_name: string;
  latitude: number;
  longitude: number;
  name: string;
  phone: string;
  province: string;
  province_code: string;
  zip: string;
  company?: any;
};

type Taxline2 = {
  price: string;
  rate: number;
  title: string;
  channel_liable?: any;
};

type Lineitem7 = {
  applied_discounts: any[];
  discount_allocations: Discountallocation2[];
  fulfillment_service: string;
  gift_card: boolean;
  grams: number;
  key: string;
  line_price: string;
  presentment_title: string;
  presentment_variant_title: string;
  price: string;
  product_id: number;
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: any[];
  taxable: boolean;
  title: string;
  variant_id: number;
  variant_title: string;
  vendor: string;
  compare_at_price?: any;
  destination_location_id?: any;
  origin_location_id?: any;
  properties?: any;
  rank?: any;
  unit_price_measurement?: any;
  user_id?: any;
  variant_price?: any;
};

type Discountallocation2 = {
  amount: string;
  application_type: string;
  created_at?: any;
  description?: any;
  id?: any;
};

type Shippingline2 = {
  applied_discounts: any[];
  code: string;
  id: string;
  price: string;
  source: string;
  title: string;
};

type Theme = {
  admin_graphql_api_id: string;
  created_at: string;
  id: number;
  name: string;
  previewable: boolean;
  processing: boolean;
  role: string;
  updated_at: string;
  theme_store_id?: number;
};

type Scripttag = {
  created_at: string;
  display_scope: string;
  event: string;
  id: number;
  src: string;
  updated_at: string;
  cache?: boolean;
};

type Redirect = {
  id: number;
  path: string;
  target: string;
};

type Page = {
  admin_graphql_api_id: string;
  author: string;
  body_html: string;
  created_at: string;
  handle: string;
  id: number;
  shop_id: number;
  title: string;
  updated_at: string;
  published_at?: string;
  template_suffix?: any;
};

type Comment = {
  article_id: number;
  author: string;
  blog_id: number;
  body: string;
  body_html: string;
  created_at: string;
  email: string;
  id: number;
  ip: string;
  status: string;
  updated_at: string;
  published_at?: string;
  user_agent?: string;
};

type Blog = {
  admin_graphql_api_id: string;
  commentable: string;
  created_at: string;
  handle: string;
  id: number;
  tags: string;
  title: string;
  updated_at: string;
  feedburner?: any;
  feedburner_location?: any;
  template_suffix?: any;
};

type Asset = {
  content_type: string;
  created_at: string;
  key: string;
  size: number;
  theme_id: number;
  updated_at: string;
  checksum?: string;
  public_url?: string;
  value?: string;
};

type Article = {
  admin_graphql_api_id: string;
  author: string;
  blog_id: number;
  body_html: string;
  created_at: string;
  handle: string;
  id: number;
  tags: string;
  title: string;
  updated_at: string;
  image?: Image;
  published_at?: string;
  summary_html?: any;
  template_suffix?: any;
  user_id?: number;
};

type Image = {
  created_at: string;
  height: number;
  src: string;
  width: number;
  alt?: string;
};

type Metafield = {
  admin_graphql_api_id: string;
  created_at: string;
  id: number;
  key: string;
  namespace: string;
  owner_id: number;
  owner_resource: string;
  type: string;
  updated_at: string;
  value: number | string;
  value_type: string;
  description?: string;
};

type Engagement = {
  clicks_count: number;
  is_cumulative: boolean;
  occurred_on: string;
  views_count: number;
  ad_spend?: string;
  comments_count?: any;
  complaints_count?: any;
  currency_code?: any;
  fails_count?: any;
  favorites_count?: number;
  fetched_at?: any;
  impressions_count?: any;
  sends_count?: any;
  shares_count?: any;
  unique_clicks_count?: any;
  unique_views_count?: any;
  unsubscribes_count?: any;
  utc_offset?: any;
};

type Marketingevent = {
  admin_graphql_api_id: string;
  event_type: string;
  id: number;
  marketed_resources: any[];
  marketing_channel: string;
  paid: boolean;
  referring_domain: string;
  started_at: string;
  utm_campaign: string;
  utm_medium: string;
  utm_source: string;
  breadcrumb_id?: any;
  budget?: string;
  budget_type?: string;
  currency?: string;
  description?: any;
  ended_at?: string;
  manage_url?: any;
  marketing_activity_id?: number;
  preview_url?: any;
  remote_id?: string;
  scheduled_to_end_at?: string;
};

type Location = {
  active: boolean;
  admin_graphql_api_id: string;
  country: string;
  country_code: string;
  country_name: string;
  created_at: string;
  id: number;
  legacy: boolean;
  name: string;
  updated_at: string;
  address1?: string;
  address2?: any;
  city?: string;
  localized_country_name?: string;
  localized_province_name?: string;
  phone?: any;
  province?: string;
  province_code?: string;
  zip?: string;
};

type Inventorylevel = {
  admin_graphql_api_id: string;
  available: number;
  inventory_item_id: number;
  location_id: number;
  updated_at: string;
};

type Inventoryitem = {
  admin_graphql_api_id: string;
  cost: string;
  country_harmonized_system_codes: any[];
  created_at: string;
  id: number;
  requires_shipping: boolean;
  sku: string;
  tracked: boolean;
  updated_at: string;
  country_code_of_origin?: any;
  harmonized_system_code?: any;
  province_code_of_origin?: any;
};

type Webhook = {
  address: string;
  api_version: string;
  created_at: string;
  fields: string[];
  format: string;
  id: number;
  metafield_namespaces: any[];
  private_metafield_namespaces: any[];
  topic: string;
  updated_at: string;
};

type Event = {
  arguments: string[];
  author: string;
  created_at: string;
  description: string;
  id: number;
  message: string;
  path: string;
  subject_id: number;
  subject_type: string;
  verb: string;
  body?: any;
};

type Pricerule = {
  admin_graphql_api_id: string;
  allocation_method: string;
  created_at: string;
  customer_selection: string;
  entitled_collection_ids: number[];
  entitled_country_ids: any[];
  entitled_product_ids: number[];
  entitled_variant_ids: any[];
  id: number;
  once_per_customer: boolean;
  prerequisite_collection_ids: number[];
  prerequisite_customer_ids: any[];
  prerequisite_product_ids: any[];
  prerequisite_saved_search_ids: number[];
  prerequisite_to_entitlement_quantity_ratio: Prerequisitetoentitlementquantityratio;
  prerequisite_variant_ids: any[];
  starts_at: string;
  target_selection: string;
  target_type: string;
  title: string;
  updated_at: string;
  value: string;
  value_type: string;
  allocation_limit?: number;
  ends_at?: string;
  prerequisite_quantity_range?: any;
  prerequisite_shipping_price_range?: any;
  prerequisite_subtotal_range?: Prerequisitesubtotalrange;
  prerequisite_to_entitlement_purchase?: Prerequisitetoentitlementpurchase;
  usage_limit?: number;
};

type Prerequisitetoentitlementpurchase = {
  prerequisite_amount?: any;
};

type Prerequisitetoentitlementquantityratio = {
  entitled_quantity?: number;
  prerequisite_quantity?: number;
};

type Prerequisitesubtotalrange = {
  greater_than_or_equal_to: string;
};

type Discountcodecreation = {
  codes_count: number;
  created_at: string;
  failed_count: number;
  id: number;
  imported_count: number;
  logs: any[];
  price_rule_id: number;
  status: string;
  updated_at: string;
  completed_at?: any;
  started_at?: any;
};

type Discountcode2 = {
  code: string;
  created_at?: string;
  errors?: Originaddress;
  id?: number;
  price_rule_id?: number;
  updated_at?: string;
  usage_count?: number;
};

type Deprecatedapicall = {
  api_type: string;
  description: string;
  documentation_url: string;
  endpoint: string;
  last_call_at: string;
  migration_deadline: string;
  version: string;
  graphql_schema_name?: any;
};

type Customersavedsearch = {
  created_at: string;
  id: number;
  name: string;
  query: string;
  updated_at: string;
};

type Address2 = {
  address1: string;
  address2: string;
  city: string;
  country: string;
  country_code: string;
  country_name: string;
  customer_id: number;
  default: boolean;
  id: number;
  name: string;
  phone: string;
  province: string;
  province_code: string;
  zip: string;
  company?: any;
  first_name?: any;
  last_name?: any;
};

type Customeraddress = {
  address1: string;
  address2: string;
  city: string;
  country: string;
  country_code: string;
  country_name: string;
  customer_id: number;
  default: boolean;
  id: number;
  name: string;
  phone: string;
  province: string;
  province_code: string;
  zip: string;
  company?: string;
  first_name?: string;
  last_name?: string;
};

type Order = {
  id: number;
  name: string;
  total_price: string;
  admin_graphql_api_id?: string;
  app_id?: number;
  billing_address?: Billingaddress;
  browser_ip?: string;
  buyer_accepts_marketing?: boolean;
  cancel_reason?: any;
  cancelled_at?: any;
  cart_token?: string;
  checkout_id?: number;
  checkout_token?: string;
  client_details?: Clientdetail;
  closed_at?: string;
  confirmed?: boolean;
  contact_email?: string;
  created_at?: string;
  currency?: string;
  current_subtotal_price?: string;
  current_subtotal_price_set?: Currentsubtotalpriceset;
  current_total_discounts?: string;
  current_total_discounts_set?: Currentsubtotalpriceset;
  current_total_duties_set?: any;
  current_total_price?: string;
  current_total_price_set?: Currentsubtotalpriceset;
  current_total_tax?: string;
  current_total_tax_set?: Currentsubtotalpriceset;
  customer?: Customer2;
  customer_locale?: any;
  device_id?: any;
  discount_applications?: (Discountapplication | Discountapplications2)[];
  discount_codes?: Discountcode[];
  email?: string;
  estimated_taxes?: boolean;
  financial_status?: string;
  fulfillment_status?: string;
  fulfillments?: (Fulfillment | Fulfillments2 | Fulfillments3)[];
  gateway?: string;
  landing_site?: string;
  landing_site_ref?: string;
  line_items?: Lineitem4[];
  location_id?: any;
  note?: string;
  note_attributes?: Noteattribute[];
  number?: number;
  order_number?: number;
  order_status_url?: string;
  original_total_duties_set?: any;
  payment_details?: Paymentdetail;
  payment_gateway_names?: string[];
  phone?: string;
  presentment_currency?: string;
  processed_at?: string;
  processing_method?: string;
  reference?: string;
  referring_site?: string;
  refunds?: (Refund | Refunds2 | Refunds3 | Refunds4)[];
  shipping_address?: Billingaddress;
  shipping_lines?: Shippingline[];
  source_identifier?: string;
  source_name?: string;
  source_url?: any;
  subtotal_price?: string;
  subtotal_price_set?: Currentsubtotalpriceset;
  tags?: string;
  tax_lines?: (Taxline | Taxlines2)[];
  taxes_included?: boolean;
  test?: boolean;
  token?: string;
  total_discounts?: string;
  total_discounts_set?: Currentsubtotalpriceset;
  total_line_items_price?: string;
  total_line_items_price_set?: Currentsubtotalpriceset;
  total_outstanding?: string;
  total_price_set?: Currentsubtotalpriceset;
  total_price_usd?: string;
  total_shipping_price_set?: Currentsubtotalpriceset;
  total_tax?: string;
  total_tax_set?: Currentsubtotalpriceset;
  total_tip_received?: string;
  total_weight?: number;
  updated_at?: string;
  user_id?: any;
};

type Shippingline = {
  code: string;
  discount_allocations: any[];
  discounted_price: string;
  discounted_price_set: Currentsubtotalpriceset;
  id: number;
  price: string;
  price_set: Currentsubtotalpriceset;
  source: string;
  tax_lines: any[];
  title: string;
  carrier_identifier?: any;
  delivery_category?: any;
  phone?: any;
  requested_fulfillment_service_id?: any;
};

type Refunds4 = {
  additional_fees: any[];
  admin_graphql_api_id: string;
  created_at: string;
  duties: any[];
  id: number;
  note: string;
  order_adjustments: Orderadjustment[];
  order_id: number;
  processed_at: string;
  refund_line_items: Refundlineitem4[];
  restock: boolean;
  total_additional_fees_set: Currentsubtotalpriceset;
  total_duties_set: Currentsubtotalpriceset;
  transactions: Transaction3[];
  user_id?: any;
};

type Refundlineitem4 = {
  id: number;
  line_item: Lineitem2;
  line_item_id: number;
  quantity: number;
  restock_type: string;
  subtotal: number;
  subtotal_set: Currentsubtotalpriceset;
  total_tax: number;
  total_tax_set: Currentsubtotalpriceset;
  location_id?: any;
};

type Transaction3 = {
  admin_graphql_api_id: string;
  amount: string;
  created_at: string;
  currency: string;
  gateway: string;
  id: number;
  kind: string;
  order_id: number;
  parent_id: number;
  processed_at: string;
  receipt: Receipt2;
  source_name: string;
  status: string;
  test: boolean;
  authorization?: any;
  device_id?: any;
  error_code?: any;
  location_id?: any;
  message?: string;
  user_id?: any;
};

type Receipt2 = {
  gift_card_id?: number;
  gift_card_last_characters?: string;
};

type Orderadjustment = {
  amount: string;
  amount_set: Currentsubtotalpriceset;
  id: number;
  kind: string;
  order_id: number;
  reason: string;
  refund_id: number;
  tax_amount: string;
  tax_amount_set: Currentsubtotalpriceset;
};

type Refunds3 = {
  admin_graphql_api_id: string;
  created_at: string;
  id: number;
  note: string;
  order_adjustments: any[];
  order_id: number;
  processed_at: string;
  refund_line_items: Refundlineitem3[];
  restock: boolean;
  transactions: Transaction2[];
  user_id: number;
};

type Refundlineitem3 = {
  id: number;
  line_item: Lineitem6;
  line_item_id: number;
  location_id: number;
  quantity: number;
  restock_type: string;
  subtotal: number;
  subtotal_set: Currentsubtotalpriceset;
  total_tax: number;
  total_tax_set: Currentsubtotalpriceset;
};

type Lineitem6 = {
  admin_graphql_api_id: string;
  discount_allocations: Discountallocation[];
  fulfillable_quantity: number;
  fulfillment_service: string;
  gift_card: boolean;
  grams: number;
  id: number;
  name: string;
  price: string;
  price_set: Currentsubtotalpriceset;
  product_exists: boolean;
  product_id: number;
  properties: Noteattribute[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: Taxlines2[];
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: Currentsubtotalpriceset;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  fulfillment_status?: any;
  vendor?: any;
};

type Refunds2 = {
  additional_fees: any[];
  admin_graphql_api_id: string;
  created_at: string;
  duties: any[];
  id: number;
  note: string;
  order_adjustments: any[];
  order_id: number;
  processed_at: string;
  refund_line_items: Refundlineitem2[];
  restock: boolean;
  total_additional_fees_set: Currentsubtotalpriceset;
  total_duties_set: Currentsubtotalpriceset;
  transactions: Transaction2[];
  user_id: number;
};

type Refundlineitem2 = {
  id: number;
  line_item: Lineitem5;
  line_item_id: number;
  location_id: number;
  quantity: number;
  restock_type: string;
  subtotal: number;
  subtotal_set: Currentsubtotalpriceset;
  total_tax: number;
  total_tax_set: Currentsubtotalpriceset;
};

type Transaction2 = {
  admin_graphql_api_id: string;
  amount: string;
  authorization: string;
  created_at: string;
  currency: string;
  gateway: string;
  id: number;
  kind: string;
  order_id: number;
  parent_id: number;
  processed_at: string;
  receipt: Originaddress;
  source_name: string;
  status: string;
  test: boolean;
  device_id?: any;
  error_code?: any;
  location_id?: any;
  message?: any;
  user_id?: any;
};

type Refund = {
  additional_fees: any[];
  admin_graphql_api_id: string;
  created_at: string;
  duties: any[];
  id: number;
  order_adjustments: any[];
  order_id: number;
  processed_at: string;
  refund_line_items: Refundlineitem[];
  restock: boolean;
  total_additional_fees_set: Currentsubtotalpriceset;
  total_duties_set: Currentsubtotalpriceset;
  transactions: Transaction[];
  note?: any;
  user_id?: any;
};

type Refundlineitem = {
  id: number;
  line_item: Lineitem5;
  line_item_id: number;
  quantity: number;
  restock_type: string;
  subtotal: number;
  subtotal_set: Currentsubtotalpriceset;
  total_tax: number;
  total_tax_set: Currentsubtotalpriceset;
  location_id?: any;
};

type Lineitem5 = {
  admin_graphql_api_id: string;
  discount_allocations: Discountallocation[];
  duties: any[];
  fulfillable_quantity: number;
  fulfillment_service: string;
  gift_card: boolean;
  grams: number;
  id: number;
  name: string;
  price: string;
  price_set: Currentsubtotalpriceset;
  product_exists: boolean;
  product_id: number;
  properties: Noteattribute[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: Taxline[];
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: Currentsubtotalpriceset;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  fulfillment_status?: any;
  vendor?: any;
};

type Transaction = {
  admin_graphql_api_id: string;
  amount: string;
  created_at: string;
  currency: string;
  gateway: string;
  id: number;
  kind: string;
  message: string;
  order_id: number;
  parent_id: number;
  processed_at: string;
  receipt: Originaddress;
  source_name: string;
  status: string;
  test: boolean;
  authorization?: any;
  device_id?: any;
  error_code?: any;
  location_id?: any;
  user_id?: any;
};

type Paymentdetail = {
  credit_card_company: string;
  credit_card_number: string;
  avs_result_code?: any;
  credit_card_bin?: any;
  credit_card_expiration_month?: any;
  credit_card_expiration_year?: any;
  credit_card_name?: any;
  credit_card_wallet?: any;
  cvv_result_code?: any;
};

type Lineitem4 = {
  admin_graphql_api_id: string;
  discount_allocations: Discountallocation[];
  fulfillable_quantity: number;
  fulfillment_service: string;
  gift_card: boolean;
  grams: number;
  id: number;
  name: string;
  price: string;
  price_set: Currentsubtotalpriceset;
  product_exists: boolean;
  properties: Noteattribute[][];
  quantity: number;
  requires_shipping: boolean;
  tax_lines: (Taxline | Taxline | Taxlines2)[];
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: Currentsubtotalpriceset;
  duties?: any[];
  fulfillment_status?: string;
  product_id?: number;
  sku?: string;
  variant_id?: number;
  variant_inventory_management?: string;
  variant_title?: string;
  vendor?: string;
};

type Fulfillments3 = {
  admin_graphql_api_id: string;
  created_at: string;
  id: number;
  line_items: Lineitem3[];
  location_id: number;
  name: string;
  order_id: number;
  receipt: Receipt;
  service: string;
  status: string;
  tracking_company: string;
  tracking_number: string;
  tracking_numbers: string[];
  tracking_url: string;
  tracking_urls: string[];
  updated_at: string;
  shipment_status?: any;
};

type Lineitem3 = {
  admin_graphql_api_id: string;
  discount_allocations: Discountallocation[];
  fulfillable_quantity: number;
  fulfillment_service: string;
  gift_card: boolean;
  grams: number;
  id: number;
  name: string;
  price: string;
  price_set: Currentsubtotalpriceset;
  product_exists: boolean;
  product_id: number;
  properties: Noteattribute[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: Taxlines2[];
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: Currentsubtotalpriceset;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  fulfillment_status?: any;
  vendor?: any;
};

type Fulfillments2 = {
  admin_graphql_api_id: string;
  created_at: string;
  id: number;
  line_items: Lineitem2[];
  location_id: number;
  name: string;
  order_id: number;
  origin_address: Originaddress;
  receipt: Receipt;
  service: string;
  status: string;
  tracking_company: string;
  tracking_number: string;
  tracking_numbers: string[];
  tracking_url: string;
  tracking_urls: string[];
  updated_at: string;
  shipment_status?: any;
};

type Lineitem2 = {
  admin_graphql_api_id: string;
  discount_allocations: Discountallocation[];
  duties: any[];
  fulfillable_quantity: number;
  fulfillment_service: string;
  gift_card: boolean;
  grams: number;
  id: number;
  name: string;
  price: string;
  price_set: Currentsubtotalpriceset;
  product_exists: boolean;
  product_id: number;
  properties: Noteattribute[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: Taxline[];
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: Currentsubtotalpriceset;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  fulfillment_status?: any;
  vendor?: any;
};

type Discountallocation = {
  amount: string;
  amount_set: Currentsubtotalpriceset;
  discount_application_index: number;
};

type Receipt = {
  authorization: string;
  testcase: boolean;
};

type Fulfillment = {
  admin_graphql_api_id: string;
  created_at: string;
  id: number;
  line_items: Lineitem[];
  location_id: number;
  name: string;
  order_id: number;
  origin_address: Originaddress;
  receipt: Originaddress;
  service: string;
  status: string;
  tracking_numbers: any[];
  tracking_urls: any[];
  updated_at: string;
  shipment_status?: any;
  tracking_company?: any;
  tracking_number?: any;
  tracking_url?: any;
};

type Lineitem = {
  admin_graphql_api_id: string;
  discount_allocations: any[];
  duties: any[];
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status: string;
  gift_card: boolean;
  grams: number;
  id: number;
  name: string;
  price: string;
  price_set: Currentsubtotalpriceset;
  product_exists: boolean;
  product_id: number;
  properties: any[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: any[];
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: Currentsubtotalpriceset;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  vendor: string;
};

type Originaddress = {};

type Discountapplications2 = {
  allocation_method: string;
  description: string;
  target_selection: string;
  target_type: string;
  title: string;
  type: string;
  value: string;
  value_type: string;
};

type Discountapplication = {
  allocation_method: string;
  code: string;
  target_selection: string;
  target_type: string;
  type: string;
  value: string;
  value_type: string;
};

type Customer2 = {
  accepts_marketing: boolean;
  accepts_marketing_updated_at: string;
  admin_graphql_api_id: string;
  created_at: string;
  currency: string;
  email: string;
  id: number;
  last_order_id: number;
  last_order_name: string;
  orders_count: number;
  state: string;
  tags: string;
  tax_exempt: boolean;
  tax_exemptions: any[];
  total_spent: string;
  updated_at: string;
  verified_email: boolean;
  default_address?: Address;
  first_name?: string;
  last_name?: string;
  marketing_opt_in_level?: any;
  multipass_identifier?: any;
  note?: any;
  phone?: string;
};

type Billingaddress = {
  address1: string;
  city: string;
  country: string;
  country_code: string;
  first_name: string;
  last_name: string;
  name: string;
  phone: string;
  province: string;
  province_code: string;
  zip: string;
  address2?: string;
  company?: any;
  latitude?: number;
  longitude?: number;
};

type Taxlines2 = {
  price: string;
  price_set: Currentsubtotalpriceset;
  rate: number;
  title: string;
};

type Taxline = {
  price: string;
  price_set: Currentsubtotalpriceset;
  rate: number;
  title: string;
  channel_liable?: any;
};

type Noteattribute = {
  name: string;
  value: string;
};

type Discountcode = {
  amount: string;
  code: string;
  type: string;
};

type Currentsubtotalpriceset = {
  presentment_money: Shopmoney;
  shop_money: Shopmoney;
};

type Shopmoney = {
  amount: string;
  currency_code: string;
};

type Clientdetail = {
  browser_ip: string;
  accept_language?: any;
  browser_height?: any;
  browser_width?: any;
  session_hash?: any;
  user_agent?: any;
};

type Customerinvite = {
  bcc: string[];
  custom_message: string;
  from: string;
  subject: string;
  to: string;
};

type Customer = {
  accepts_marketing: boolean;
  accepts_marketing_updated_at: string;
  addresses: Address[];
  admin_graphql_api_id: string;
  created_at: string;
  currency: string;
  default_address: Address;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  orders_count: number;
  phone: string;
  state: string;
  tags: string;
  tax_exempt: boolean;
  tax_exemptions: any[];
  total_spent: string;
  updated_at: string;
  verified_email: boolean;
  last_order_id?: number;
  last_order_name?: string;
  marketing_opt_in_level?: string;
  multipass_identifier?: any;
  note?: string;
};

type Address = {
  address1: string;
  city: string;
  country: string;
  country_code: string;
  country_name: string;
  customer_id: number;
  default: boolean;
  id: number;
  name: string;
  phone: string;
  province: string;
  province_code: string;
  zip: string;
  address2?: string;
  company?: any;
  first_name?: string;
  last_name?: string;
};

type Usagecharge = {
  balance_remaining: number;
  balance_used: number;
  billing_on: string;
  created_at: string;
  description: string;
  id: number;
  price: string;
  risk_level: number;
};

type Recurringapplicationcharge = {
  api_client_id: number;
  created_at: string;
  decorated_return_url: string;
  id: number;
  name: string;
  price: string;
  return_url: string;
  status: string;
  trial_days: number;
  updated_at: string;
  activated_on?: string;
  balance_remaining?: number;
  balance_used?: number;
  billing_on?: string;
  cancelled_on?: any;
  capped_amount?: string;
  confirmation_url?: string;
  risk_level?: number;
  test?: boolean;
  trial_ends_on?: string;
  update_capped_amount_url?: string;
};

type Applicationcredit = {
  amount: string;
  description: string;
  id: number;
  test?: boolean;
};

type Applicationcharge = {
  api_client_id: number;
  created_at: string;
  decorated_return_url: string;
  id: number;
  name: string;
  price: string;
  return_url: string;
  status: string;
  updated_at: string;
  charge_type?: string;
  confirmation_url?: string;
  test?: boolean;
};

type Report = {
  id: number;
  shopify_ql: string;
  category?: string;
  name?: string;
  updated_at?: string;
};

type Storefrontaccesstoken = {
  access_scope: string;
  access_token: string;
  admin_graphql_api_id: string;
  created_at: string;
  id: number;
  title: string;
};

type Accessscope = {
  handle: string;
};
