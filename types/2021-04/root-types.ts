type MasterTypes = {
  access_scope: Accessscope[];
  storefront_access_token: Storefrontaccesstoken[];
  report: Report[];
  application_charge: Applicationcharge[];
  application_credit: Applicationcredit[];
  recurring_application_charge: Recurringapplicationcharge[];
  usage_charge: Usagecharge[];
  customer: Customer[];
  account_activation_url: string[];
  customer_invite: Customerinvite[];
  count: number[];
  order: Order[];
  customer_address: Customeraddress[];
  address: Address2[];
  customer_saved_search: Customersavedsearch[];
  data_updated_at: string[];
  deprecated_api_call: Deprecatedapicall[];
  discount_code: Discountcode2[];
  discount_code_creation: Discountcodecreation[];
  price_rule: Pricerule[];
  event: Event[];
  webhook: Webhook[];
  inventory_item: Inventoryitem[];
  inventory_level: Inventorylevel[];
  location: Location[];
  marketing_event: Marketingevent[];
  engagement: Engagement[];
  metafield: Metafield[];
  article: Article[];
  author: string[];
  tag: string[];
  asset: Asset[];
  message: string[];
  blog: Blog[];
  comment: Comment[];
  published_at: (null | string)[];
  status: string[];
  id: (number | string)[];
  body: string[];
  body_html: string[];
  email: string[];
  article_id: number[];
  blog_id: number[];
  created_at: string[];
  updated_at: string[];
  ip: string[];
  user_agent: string[];
  page: Page[];
  redirect: Redirect[];
  script_tag: Scripttag[];
  theme: Theme[];
  name: string[];
  role: string[];
  theme_store_id: null[];
  previewable: boolean[];
  processing: boolean[];
  admin_graphql_api_id: string[];
  checkout: Checkout[];
  draft_order: Draftorder[];
  draft_order_invoice: Customerinvite[];
  notice: string[];
  risk: Risk[];
  refund: Refund2[];
  transaction: Transaction5[];
  gift_card: Giftcard[];
  user: User[];
  collect: Collect[];
  collection: Collection[];
  product: Product[];
  custom_collection: Customcollection[];
  image: Image4[];
  variant: Variant2[];
  smart_collection: Smartcollection[];
  sales_channel_checkout: Saleschannelcheckout[];
  shipping_rate: Shippingrate2[];
  collection_listing: Collectionlisting[];
  product_id: number[];
  mobile_platform_application: Mobileplatformapplication[];
  payment: Payment3[];
  resource_feedback: Resourcefeedback[];
  product_listing: Productlisting[];
  fulfillment_order: Fulfillmentorder[];
  carrier_service: Carrierservice[];
  fulfillment: Fulfillment2[];
  fulfillment_event: Fulfillmentevent[];
  replacement_fulfillment_order: Replacementfulfillmentorder[];
  original_fulfillment_order: Originalfulfillmentorder[];
  moved_fulfillment_order: Movedfulfillmentorder[];
  remaining_fulfillment_order: null[];
  submitted_fulfillment_order: Submittedfulfillmentorder[];
  unsubmitted_fulfillment_order: (Unsubmittedfulfillmentorder | null)[];
  fulfillment_service: Fulfillmentservice[];
  locations_for_move: Locationsformove[];
  balance: Balance[];
  dispute: Dispute[];
  payout: Payout[];
  shopify_payments_transaction: Shopifypaymentstransaction[];
  country: Country[];
  currency: Currency[];
  policy: Policy[];
  province: Provinces3[];
  shipping_zone: Shippingzone[];
  shop: Shop[];
  tender_transaction: Tendertransaction[];
}

type Tendertransaction = {
  id: number;
  order_id: number;
  amount: string;
  currency: string;
  user_id?: any;
  test: boolean;
  processed_at: string;
  remote_reference: string;
  payment_details?: any;
  payment_method: string;
}

type Shop = {
  id: number;
  name: string;
  email: string;
  domain: string;
  province: string;
  country: string;
  address1: string;
  zip: string;
  city: string;
  source?: any;
  phone: string;
  latitude: number;
  longitude: number;
  primary_locale: string;
  address2: string;
  created_at: string;
  updated_at: string;
  country_code: string;
  country_name: string;
  currency: string;
  customer_email: string;
  timezone: string;
  iana_timezone: string;
  shop_owner: string;
  money_format: string;
  money_with_currency_format: string;
  weight_unit: string;
  province_code: string;
  taxes_included?: any;
  auto_configure_tax_inclusivity?: any;
  tax_shipping?: any;
  county_taxes: boolean;
  plan_display_name: string;
  plan_name: string;
  has_discounts: boolean;
  has_gift_cards: boolean;
  myshopify_domain: string;
  google_apps_domain?: any;
  google_apps_login_enabled?: any;
  money_in_emails_format: string;
  money_with_currency_in_emails_format: string;
  eligible_for_payments: boolean;
  requires_extra_payments_agreement: boolean;
  password_enabled: boolean;
  has_storefront: boolean;
  eligible_for_card_reader_giveaway: boolean;
  finances: boolean;
  primary_location_id: number;
  cookie_consent_level: string;
  visitor_tracking_consent_preference: string;
  checkout_api_supported: boolean;
  multi_location_enabled: boolean;
  setup_required: boolean;
  pre_launch_enabled: boolean;
  enabled_presentment_currencies: string[];
}

type Shippingzone = {
  id: number;
  name: string;
  profile_id: string;
  location_group_id: string;
  admin_graphql_api_id: string;
  countries: Country2[];
  weight_based_shipping_rates: Weightbasedshippingrate[];
  price_based_shipping_rates: Pricebasedshippingrate[];
  carrier_shipping_rate_providers: Carriershippingrateprovider[];
}

type Carriershippingrateprovider = {
  id: number;
  carrier_service_id: number;
  flat_modifier: string;
  percent_modifier?: any;
  service_filter: Servicefilter;
  shipping_zone_id: number;
}

type Servicefilter = {
  '*': string;
}

type Pricebasedshippingrate = {
  id: number;
  name: string;
  price: string;
  shipping_zone_id: number;
  min_order_subtotal?: any;
  max_order_subtotal: string;
}

type Weightbasedshippingrate = {
  id: number;
  name: string;
  price: string;
  shipping_zone_id: number;
  weight_low: number;
  weight_high: number;
}

type Country2 = {
  id: number;
  name: string;
  tax: number;
  code: string;
  tax_name: string;
  shipping_zone_id: number;
  provinces: (Province2 | Provinces22)[];
}

type Provinces22 = {
  id: number;
  country_id: number;
  name: string;
  code: string;
  tax: number;
  tax_name?: string;
  tax_type?: string;
  tax_percentage: number;
  shipping_zone_id: number;
}

type Province2 = {
  id: number;
  country_id: number;
  name: string;
  code: string;
  tax: number;
  tax_name?: any;
  tax_type?: any;
  shipping_zone_id: number;
  tax_percentage: number;
}

type Policy = {
  body: string;
  created_at: string;
  updated_at: string;
  handle: string;
  title: string;
  url: string;
}

type Currency = {
  currency: string;
  rate_updated_at: string;
  enabled: boolean;
}

type Country = {
  id: number;
  name: string;
  tax: number;
  code: string;
  tax_name: string;
  provinces: (Province | Provinces2 | Provinces3)[];
}

type Provinces3 = {
  id: number;
  country_id: number;
  name: string;
  code: string;
  tax: number;
  tax_name?: string;
  tax_type?: string;
  shipping_zone_id?: any;
  tax_percentage: number;
}

type Provinces2 = {
  country_id: number;
  tax_name: string;
  id: number;
  name: string;
  code: string;
  tax: number;
  tax_type?: string;
  shipping_zone_id?: any;
  tax_percentage: number;
}

type Province = {
  id: number;
  country_id: number;
  name: string;
  code: string;
  tax: number;
  tax_name?: any;
  tax_type?: any;
  shipping_zone_id?: number;
  tax_percentage: number;
}

type Shopifypaymentstransaction = {
  id: number;
  type: string;
  test: boolean;
  payout_id: number;
  payout_status: string;
  currency: string;
  amount: string;
  fee: string;
  net: string;
  source_id?: number;
  source_type?: string;
  source_order_id?: number;
  source_order_transaction_id?: number;
  processed_at: string;
}

type Payout = {
  id: number;
  status: string;
  date: string;
  currency: string;
  amount: string;
  summary: Summary;
}

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
}

type Dispute = {
  id: number;
  order_id?: number;
  type: string;
  amount: string;
  currency: string;
  reason: string;
  network_reason_code: string;
  status: string;
  evidence_due_by: string;
  evidence_sent_on?: string;
  finalized_on?: any;
  initiated_at: string;
}

type Balance = {
  currency: string;
  amount: string;
}

type Locationsformove = {
  location: Location2;
  message: string;
  movable: boolean;
}

type Location2 = {
  id: number;
  name: string;
}

type Fulfillmentservice = {
  id: number;
  name: string;
  email?: any;
  service_name: string;
  handle: string;
  fulfillment_orders_opt_in: boolean;
  include_pending_stock: boolean;
  provider_id?: any;
  location_id: number;
  callback_url?: string;
  tracking_support: boolean;
  inventory_management: boolean;
}

type Unsubmittedfulfillmentorder = {
  id: number;
  shop_id: number;
  order_id: number;
  assigned_location_id: number;
  request_status: string;
  status: string;
  supported_actions: string[];
  destination: Destination;
  origin: Assignedlocation;
  line_items: Lineitem11[];
  outgoing_requests: any[];
  fulfillment_service_handle: string;
}

type Submittedfulfillmentorder = {
  id: number;
  shop_id: number;
  order_id: number;
  assigned_location_id: number;
  request_status: string;
  status: string;
  supported_actions: string[];
  destination: Destination;
  origin: Assignedlocation;
  line_items: Lineitem11[];
  outgoing_requests: Outgoingrequest[];
  fulfillment_service_handle: string;
}

type Movedfulfillmentorder = {
  id: number;
  shop_id: number;
  order_id: number;
  assigned_location_id: number;
  request_status: string;
  status: string;
  supported_actions: string[];
  destination: Destination;
  line_items: Lineitem11[];
  fulfillment_service_handle: string;
  assigned_location: Assignedlocation2;
  merchant_requests: any[];
}

type Assignedlocation2 = {
  address1: string;
  address2?: any;
  city: string;
  country_code: string;
  location_id: number;
  name: string;
  phone?: any;
  province: string;
  zip: string;
}

type Originalfulfillmentorder = {
  id: number;
  shop_id: number;
  order_id: number;
  assigned_location_id: number;
  request_status: string;
  status: string;
  supported_actions: string[];
  destination: Destination;
  line_items: Lineitem11[];
  fulfillment_service_handle: string;
  assigned_location?: Assignedlocation;
  merchant_requests?: any[];
  origin?: Assignedlocation;
  outgoing_requests?: Outgoingrequest[];
}

type Outgoingrequest = {
  message: string;
  request_options: Requestoptions;
  sent_at: string;
  kind: string;
}

type Requestoptions = {
  notify_customer: boolean;
}

type Replacementfulfillmentorder = {
  id: number;
  shop_id: number;
  order_id: number;
  assigned_location_id: number;
  request_status: string;
  status: string;
  supported_actions: string[];
  destination: Destination;
  line_items: Lineitem11[];
  fulfillment_service_handle: string;
  assigned_location: Assignedlocation;
  merchant_requests: any[];
}

type Fulfillmentevent = {
  id: number;
  fulfillment_id: number;
  status: string;
  message?: any;
  happened_at: string;
  city?: any;
  province?: any;
  country?: any;
  zip?: any;
  address1?: any;
  latitude?: any;
  longitude?: any;
  shop_id: number;
  created_at: string;
  updated_at: string;
  estimated_delivery_at?: any;
  order_id: number;
  admin_graphql_api_id: string;
}

type Fulfillment2 = {
  id: number;
  order_id: number;
  status: string;
  created_at: string;
  service: string;
  updated_at: string;
  tracking_company?: string;
  shipment_status?: any;
  location_id: number;
  origin_address?: any;
  line_items: Lineitem12[];
  tracking_number?: string;
  tracking_numbers: string[];
  tracking_url?: string;
  tracking_urls: string[];
  receipt: Receipt3;
  name: string;
  admin_graphql_api_id: string;
}

type Lineitem12 = {
  id: number;
  variant_id: number;
  title: string;
  quantity: number;
  sku: string;
  variant_title: string;
  vendor?: any;
  fulfillment_service: string;
  product_id: number;
  requires_shipping: boolean;
  taxable: boolean;
  gift_card: boolean;
  name: string;
  variant_inventory_management?: string;
  properties: (Noteattribute | Noteattribute)[];
  product_exists: boolean;
  fulfillable_quantity: number;
  grams: number;
  price: string;
  total_discount: string;
  fulfillment_status?: string;
  price_set: Currentsubtotalpriceset;
  total_discount_set: Currentsubtotalpriceset;
  discount_allocations: Discountallocation[];
  duties?: any[];
  admin_graphql_api_id: string;
  tax_lines: (Taxline | Taxlines2)[];
}

type Carrierservice = {
  id: number;
  name: string;
  active: boolean;
  service_discovery: boolean;
  carrier_service_type: string;
  admin_graphql_api_id: string;
  format?: string;
  callback_url?: string;
}

type Fulfillmentorder = {
  id: number;
  shop_id: number;
  order_id: number;
  assigned_location_id: number;
  request_status: string;
  status: string;
  supported_actions: string[];
  destination: Destination;
  line_items: Lineitem11[];
  outgoing_requests?: any[];
  fulfillment_service_handle: string;
  assigned_location?: Assignedlocation;
  origin?: Assignedlocation;
  merchant_requests?: any[];
  fulfill_at?: string;
}

type Assignedlocation = {
  address1?: any;
  address2?: any;
  city?: any;
  country_code: string;
  location_id: number;
  name: string;
  phone?: any;
  province?: any;
  zip?: any;
}

type Lineitem11 = {
  id: number;
  shop_id: number;
  fulfillment_order_id: number;
  quantity: number;
  line_item_id: number;
  inventory_item_id: number;
  fulfillable_quantity: number;
  variant_id: number;
}

type Destination = {
  id: number;
  address1: string;
  address2: string;
  city: string;
  company?: any;
  country: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  province: string;
  zip: string;
}

type Productlisting = {
  product_id: number;
  created_at: string;
  updated_at: string;
  body_html: string;
  handle: string;
  product_type: string;
  title: string;
  vendor: string;
  available: boolean;
  tags: string;
  published_at: string;
  variants: Variant3[];
  images: Image6[];
  options: Option2[];
}

type Option2 = {
  id: number;
  product_id: number;
  name: string;
  position: number;
  values: string[];
}

type Image6 = {
  id: number;
  created_at: string;
  position: number;
  updated_at: string;
  product_id: number;
  src: string;
  variant_ids: number[];
  width: number;
  height: number;
}

type Variant3 = {
  id: number;
  title: string;
  option_values: Optionvalue[];
  price: string;
  formatted_price: string;
  compare_at_price?: any;
  grams: number;
  requires_shipping: boolean;
  sku: string;
  barcode: string;
  taxable: boolean;
  position: number;
  available: boolean;
  inventory_policy: string;
  inventory_quantity: number;
  inventory_management: string;
  fulfillment_service: string;
  weight: number;
  weight_unit: string;
  image_id?: (null | number)[];
  created_at: string;
  updated_at: string;
}

type Optionvalue = {
  option_id: number;
  name: string;
  value: string;
}

type Resourcefeedback = {
  created_at: string;
  updated_at: string;
  resource_id: number;
  resource_type: string;
  resource_updated_at?: string;
  messages: string[];
  feedback_generated_at: string;
  state: string;
}

type Payment3 = {
  id: number;
  unique_token: string;
  payment_processing_error_message?: any;
  next_action?: Nextaction;
  fraudulent?: boolean;
  transaction?: Transaction7;
  credit_card?: Creditcard2;
  checkout: Checkout3;
}

type Checkout3 = {
  completed_at?: any;
  created_at: string;
  currency: string;
  presentment_currency: string;
  customer_id: number;
  customer_locale: string;
  device_id?: any;
  discount_code?: any;
  email: string;
  legal_notice_url?: any;
  location_id?: any;
  name: string;
  note: string;
  note_attributes: Noteattributes2;
  order_id?: any;
  order_status_url?: any;
  order?: any;
  payment_due: string;
  payment_url: string;
  payments: Payment2[];
  phone?: any;
  shopify_payments_account_id?: any;
  privacy_policy_url?: any;
  refund_policy_url?: any;
  requires_shipping: boolean;
  reservation_time_left: number;
  reservation_time?: any;
  source_identifier?: any;
  source_name: string;
  source_url?: any;
  subscription_policy_url?: any;
  subtotal_price: string;
  shipping_policy_url?: any;
  tax_exempt: boolean;
  taxes_included: boolean;
  terms_of_sale_url?: any;
  terms_of_service_url?: any;
  token: string;
  total_price: string;
  total_tax: string;
  total_tip_received: string;
  total_line_items_price: string;
  updated_at: string;
  user_id?: any;
  web_url: string;
  total_duties?: any;
  total_additional_fees?: any;
  line_items: Lineitems2[];
  gift_cards: any[];
  tax_lines: Taxline4[];
  tax_manipulations: any[];
  shipping_line: Shippingline4;
  shipping_rate: Shippingrate;
  shipping_address: Shippingaddress2;
  credit_card: Creditcard3;
  billing_address: Shippingaddress2;
  applied_discount?: any;
}

type Creditcard3 = {
  first_name: string;
  last_name: string;
  first_digits: string;
  last_digits: string;
  brand: string;
  expiry_month: number;
  expiry_year: number;
  customer_id?: number;
}

type Payment2 = {
  id: number;
  unique_token: string;
  payment_processing_error_message?: any;
  fraudulent?: boolean;
  transaction?: Transaction8 | Transaction22 | Transaction6;
  credit_card?: (Creditcard2 | null)[];
}

type Transaction22 = {
  amount: string;
  amount_in?: any;
  amount_out?: any;
  amount_rounding?: any;
  authorization?: any;
  created_at: string;
  currency: string;
  error_code?: any;
  parent_id?: any;
  gateway: string;
  id: number;
  kind: string;
  message?: any;
  status: string;
  test: boolean;
  receipt: Originaddress;
  location_id?: any;
  user_id?: any;
  transaction_group_id?: any;
  device_id?: any;
  payment_details?: any;
}

type Transaction8 = {
  amount: string;
  amount_in?: any;
  amount_out?: any;
  amount_rounding?: any;
  authorization: string;
  created_at: string;
  currency: string;
  error_code?: any;
  parent_id?: any;
  gateway: string;
  id: number;
  kind: string;
  message?: any;
  status: string;
  test: boolean;
}

type Noteattributes2 = {
  'custom engraving': string;
  colour: string;
}

type Creditcard2 = {
  first_name: string;
  last_name: string;
  first_digits: string;
  last_digits: string;
  brand: string;
  expiry_month: number;
  expiry_year: number;
  customer_id: number;
}

type Transaction7 = {
  amount: string;
  amount_in?: any;
  amount_out?: any;
  amount_rounding?: any;
  authorization?: string;
  created_at: string;
  currency: string;
  error_code?: any;
  parent_id?: any;
  gateway: string;
  id: number;
  kind: string;
  message?: any;
  status: string;
  test: boolean;
  receipt?: Originaddress;
  location_id?: any;
  user_id?: any;
  transaction_group_id?: any;
  device_id?: any;
  payment_details?: any;
}

type Nextaction = {
  redirect_url?: any;
}

type Mobileplatformapplication = {
  id: number;
  application_id: string;
  platform: string;
  created_at: string;
  updated_at: string;
  sha256_cert_fingerprints: string[];
  enabled_universal_or_app_links: boolean;
  enabled_shared_webcredentials: boolean;
}

type Collectionlisting = {
  collection_id: number;
  updated_at: string;
  body_html: string;
  default_product_image?: Defaultproductimage;
  handle: string;
  image?: Image5;
  title: string;
  sort_order: string;
  published_at: string;
}

type Image5 = {
  created_at: string;
  src: string;
}

type Defaultproductimage = {
  id: number;
  created_at: string;
  position: number;
  updated_at: string;
  product_id: number;
  src: string;
  variant_ids: any[];
  width: number;
  height: number;
}

type Shippingrate2 = {
  id: string;
  price: string;
  title: string;
  checkout: Checkout2;
  phone_required: boolean;
  delivery_range?: any;
  estimated_time_in_transit?: any;
  handle: string;
}

type Checkout2 = {
  total_tax: string;
  total_price: string;
  subtotal_price: string;
}

type Saleschannelcheckout = {
  completed_at?: string;
  created_at: string;
  currency: string;
  presentment_currency: string;
  customer_id?: number;
  customer_locale: string;
  device_id?: any;
  discount_code?: any;
  email?: string;
  legal_notice_url?: any;
  location_id?: any;
  name: string;
  note: string;
  note_attributes: Noteattributes;
  order_id?: number;
  order_status_url?: string;
  order?: Order2;
  payment_due: string;
  payment_url: string;
  payments: Payment[];
  phone?: any;
  shopify_payments_account_id?: any;
  privacy_policy_url?: any;
  refund_policy_url?: any;
  requires_shipping: boolean;
  reservation_time_left: number;
  reservation_time?: any;
  source_identifier?: any;
  source_name: string;
  source_url?: any;
  subscription_policy_url?: any;
  subtotal_price: string;
  shipping_policy_url?: any;
  tax_exempt: boolean;
  taxes_included: boolean;
  terms_of_sale_url?: any;
  terms_of_service_url?: any;
  token: string;
  total_price: string;
  total_tax: string;
  total_tip_received: string;
  total_line_items_price: string;
  updated_at: string;
  user_id?: any;
  web_url: string;
  total_duties?: any;
  total_additional_fees?: any;
  line_items: (Lineitem10 | Lineitems2)[];
  gift_cards: any[];
  tax_lines: Taxline4[];
  tax_manipulations: any[];
  shipping_line?: Shippingline4;
  shipping_rate?: Shippingrate;
  shipping_address?: Shippingaddress2;
  credit_card?: Creditcard;
  billing_address?: Shippingaddress2;
  applied_discount?: any;
}

type Creditcard = {
  first_name: string;
  last_name: string;
  first_digits: string;
  last_digits: string;
  brand: string;
  expiry_month: number;
  expiry_year: number;
  customer_id?: any;
}

type Shippingaddress2 = {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  company?: any;
  address1: string;
  address2: string;
  city: string;
  province: string;
  province_code: string;
  country: string;
  country_code: string;
  zip: string;
}

type Shippingrate = {
  id: string;
  price: string;
  title: string;
}

type Shippingline4 = {
  handle: string;
  price: string;
  title: string;
  tax_lines: any[];
}

type Taxline4 = {
  price: string;
  rate: number;
  title: string;
  compare_at: number;
}

type Lineitems2 = {
  id: string;
  key: string;
  product_id: number;
  variant_id: number;
  sku: string;
  vendor: string;
  title: string;
  variant_title: string;
  image_url: string;
  taxable: boolean;
  requires_shipping: boolean;
  gift_card: boolean;
  price: string;
  compare_at_price?: any;
  line_price: string;
  properties: Originaddress;
  quantity: number;
  grams: number;
  fulfillment_service: string;
  applied_discounts: any[];
  discount_allocations: any[];
  tax_lines: any[];
}

type Lineitem10 = {
  id: number;
  key: number;
  product_id: number;
  variant_id: number;
  sku: string;
  vendor: string;
  title: string;
  variant_title: string;
  image_url: string;
  taxable: boolean;
  requires_shipping: boolean;
  gift_card: boolean;
  price: string;
  compare_at_price?: any;
  line_price: string;
  properties: Originaddress;
  quantity: number;
  grams: number;
  fulfillment_service: string;
  applied_discounts: any[];
  discount_allocations: any[];
  tax_lines: any[];
}

type Payment = {
  id: number;
  unique_token: string;
  payment_processing_error_message?: any;
  fraudulent: boolean;
  transaction: Transaction6;
  credit_card?: any;
}

type Transaction6 = {
  amount: string;
  amount_in?: any;
  amount_out?: any;
  amount_rounding?: any;
  authorization: string;
  created_at: string;
  currency: string;
  error_code?: any;
  parent_id?: any;
  gateway: string;
  id: number;
  kind: string;
  message?: any;
  status: string;
  test: boolean;
  receipt: Receipt;
  location_id?: any;
  user_id?: any;
  transaction_group_id?: any;
  device_id?: any;
  payment_details: Paymentdetails;
}

type Paymentdetails = {
  credit_card_bin?: any;
  avs_result_code?: any;
  cvv_result_code?: any;
  credit_card_number: string;
  credit_card_company: string;
  credit_card_name?: any;
  credit_card_wallet?: any;
  credit_card_expiration_month?: any;
  credit_card_expiration_year?: any;
}

type Order2 = {
  id: number;
  name: string;
  status_url: string;
}

type Noteattributes = {
  'custom engraving'?: string;
  colour?: string;
}

type Smartcollection = {
  id: number;
  handle: string;
  title: string;
  updated_at: string;
  body_html?: string;
  published_at?: string;
  sort_order: string;
  template_suffix?: any;
  disjunctive: boolean;
  rules: Rule[];
  published_scope: string;
  admin_graphql_api_id: string;
  image?: Image2;
  products_count?: number;
}

type Rule = {
  column: string;
  relation: string;
  condition: string;
}

type Variant2 = {
  id: number;
  product_id: number;
  title: string;
  price: string;
  sku: string;
  position: number;
  inventory_policy: string;
  compare_at_price?: string;
  fulfillment_service: string;
  inventory_management: string;
  option1: string;
  option2?: any;
  option3?: any;
  created_at: string;
  updated_at: string;
  taxable: boolean;
  barcode?: string;
  grams: number;
  image_id?: number;
  weight: number;
  weight_unit: string;
  inventory_item_id: number;
  inventory_quantity: number;
  old_inventory_quantity: number;
  presentment_prices: Presentmentprice2[];
  requires_shipping: boolean;
  admin_graphql_api_id: string;
  tax_code?: string;
}

type Presentmentprice2 = {
  price: Shopmoney;
  compare_at_price?: Shopmoney;
}

type Image4 = {
  id: number;
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt?: string;
  width: number;
  height: number;
  src: string;
  variant_ids: number[];
  admin_graphql_api_id: string;
}

type Customcollection = {
  id: number;
  handle: string;
  title: string;
  updated_at: string;
  body_html?: string;
  published_at?: string;
  sort_order: string;
  template_suffix?: any;
  published_scope: string;
  admin_graphql_api_id: string;
  image?: Image2;
  products_count?: number;
}

type Product = {
  id: number;
  title: string;
  body_html?: string;
  vendor?: string;
  product_type?: string;
  created_at?: string;
  handle?: string;
  updated_at?: string;
  published_at?: string;
  template_suffix?: any;
  published_scope?: string;
  tags?: string;
  admin_graphql_api_id?: string;
  options?: Option[];
  images: (Image3 | Images2)[];
  image?: Image3;
  status?: string;
  variants?: Variant[];
}

type Variant = {
  id: number;
  product_id: number;
  title: string;
  price: string;
  sku: string;
  position: number;
  inventory_policy: string;
  compare_at_price?: any;
  fulfillment_service: string;
  inventory_management?: string;
  option1: string;
  option2?: string;
  option3?: any;
  created_at: string;
  updated_at: string;
  taxable: boolean;
  barcode?: string;
  grams: number;
  image_id?: (null | number)[];
  weight: number;
  weight_unit: string;
  inventory_item_id: number;
  inventory_quantity: number;
  old_inventory_quantity: number;
  presentment_prices: Presentmentprice[];
  requires_shipping: boolean;
  admin_graphql_api_id: string;
}

type Presentmentprice = {
  price: Shopmoney;
  compare_at_price?: any;
}

type Images2 = {
  id: number;
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt?: any;
  width: number;
  height: number;
  src: string;
  variant_ids: number[];
  admin_graphql_api_id: string;
}

type Image3 = {
  id: number;
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt?: any;
  width: number;
  height: number;
  src: string;
  variant_ids: any[];
  admin_graphql_api_id: string;
}

type Option = {
  id: number;
  product_id: number;
  name: string;
  position: number;
  values?: string[];
}

type Collection = {
  id: number;
  handle: string;
  title: string;
  updated_at: string;
  body_html: string;
  published_at: string;
  sort_order: string;
  template_suffix?: any;
  products_count: number;
  collection_type: string;
  published_scope: string;
  admin_graphql_api_id: string;
  image: Image2;
}

type Image2 = {
  created_at: string;
  alt: string;
  width: number;
  height: number;
  src: string;
}

type Collect = {
  id: number;
  collection_id: number;
  product_id: number;
  created_at?: string;
  updated_at?: string;
  position: number;
  sort_value: string;
}

type User = {
  id: number;
  first_name: string;
  email: string;
  url: string;
  im?: any;
  screen_name?: any;
  phone?: any;
  last_name: string;
  account_owner: boolean;
  receive_announcements: number;
  bio?: any;
  permissions: string[];
  locale: string;
  user_type: string;
  admin_graphql_api_id: string;
  'tfa_enabled?': boolean;
}

type Giftcard = {
  id: number;
  balance: string;
  created_at: string;
  updated_at: string;
  currency: string;
  initial_value: string;
  disabled_at?: string;
  line_item_id?: any;
  api_client_id?: number;
  user_id?: any;
  customer_id?: any;
  note?: string;
  expires_on?: string;
  template_suffix?: string;
  last_characters: string;
  order_id?: any;
  code?: string;
}

type Transaction5 = {
  id: number;
  order_id: number;
  kind: string;
  gateway: string;
  status: string;
  message?: string;
  created_at: string;
  test: boolean;
  authorization?: string;
  location_id?: any;
  user_id?: any;
  parent_id?: number;
  processed_at: string;
  device_id?: any;
  error_code?: any;
  source_name: string;
  payment_details?: Paymentdetail;
  receipt: Receipt3;
  currency_exchange_adjustment?: any;
  amount: string;
  currency: string;
  admin_graphql_api_id: string;
  authorization_expires_at?: any;
  extended_authorization_attributes?: Originaddress;
}

type Receipt3 = {
  testcase?: boolean;
  authorization?: string;
}

type Refund2 = {
  id?: number;
  order_id?: number;
  created_at?: string;
  note?: string;
  user_id?: number;
  processed_at?: string;
  restock?: boolean;
  duties?: any[];
  total_duties_set?: Currentsubtotalpriceset;
  additional_fees?: any[];
  total_additional_fees_set?: Currentsubtotalpriceset;
  admin_graphql_api_id?: string;
  refund_line_items: (Refundlineitem2 | Refundlineitems2 | Refundlineitem3 | Refundlineitems4)[];
  transactions: Transaction4[];
  order_adjustments?: Orderadjustment[];
  shipping?: Shipping;
  currency?: string;
}

type Shipping = {
  amount: string;
  tax: string;
  maximum_refundable: string;
}

type Transaction4 = {
  id?: number;
  order_id: number;
  kind: string;
  gateway: string;
  status?: string;
  message?: string;
  created_at?: string;
  test?: boolean;
  authorization?: string;
  location_id?: any;
  user_id?: any;
  parent_id: number;
  processed_at?: string;
  device_id?: any;
  error_code?: any;
  source_name?: string;
  receipt?: Originaddress;
  currency_exchange_adjustment?: any;
  amount: string;
  currency: string;
  admin_graphql_api_id?: string;
  maximum_refundable?: string;
}

type Refundlineitems4 = {
  quantity: number;
  line_item_id: number;
  location_id?: any;
  restock_type: string;
  price: string;
  subtotal: string;
  total_tax: string;
  discounted_price: string;
  discounted_total_price: string;
  total_cart_discount_amount: string;
}

type Refundlineitems2 = {
  id: number;
  line_item_id: number;
  location_id: number;
  quantity: number;
  restock_type: string;
  subtotal: number;
  subtotal_set: Currentsubtotalpriceset;
  total_tax: number;
  total_tax_set: Currentsubtotalpriceset;
  line_item: Lineitem9;
}

type Lineitem9 = {
  id: number;
  admin_graphql_api_id: string;
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status?: any;
  gift_card: boolean;
  grams: number;
  name: string;
  price: string;
  price_set: Currentsubtotalpriceset;
  product_exists: boolean;
  product_id: number;
  properties: any[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: Currentsubtotalpriceset;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  vendor?: any;
  tax_lines: Taxline[];
  duties: any[];
  discount_allocations: Discountallocation[];
}

type Risk = {
  id: number;
  order_id: number;
  checkout_id?: number;
  source: string;
  score: string;
  recommendation: string;
  display: boolean;
  cause_cancel: boolean;
  message: string;
  merchant_message: string;
}

type Draftorder = {
  id: number;
  note?: string;
  email?: string;
  taxes_included: boolean;
  currency: string;
  invoice_sent_at?: string;
  created_at: string;
  updated_at: string;
  tax_exempt: boolean;
  completed_at?: string;
  name: string;
  status: string;
  line_items: Lineitem8[];
  shipping_address?: Shippingaddress;
  billing_address?: Shippingaddress;
  invoice_url: string;
  applied_discount?: Applieddiscount2;
  order_id?: number;
  shipping_line?: Shippingline3;
  tax_lines: Taxline3[];
  tags: string;
  note_attributes: any[];
  total_price: string;
  subtotal_price: string;
  total_tax: string;
  presentment_currency?: string;
  total_line_items_price_set?: Currentsubtotalpriceset;
  total_price_set?: Currentsubtotalpriceset;
  subtotal_price_set?: Currentsubtotalpriceset;
  total_tax_set?: Currentsubtotalpriceset;
  total_discounts_set?: Currentsubtotalpriceset;
  total_shipping_price_set?: Currentsubtotalpriceset;
  payment_terms?: any;
  admin_graphql_api_id: string;
  customer?: Customer3;
}

type Shippingline3 = {
  title: string;
  custom: boolean;
  handle?: string;
  price: string;
}

type Applieddiscount2 = {
  description: string;
  value: string;
  title?: string;
  amount: string;
  value_type: string;
}

type Shippingaddress = {
  first_name?: string;
  address1: string;
  phone: string;
  city: string;
  zip: string;
  province: string;
  country: string;
  last_name?: string;
  address2: string;
  company?: any;
  latitude?: number;
  longitude?: number;
  name: string;
  country_code: string;
  province_code: string;
}

type Lineitem8 = {
  id: number;
  variant_id?: null | number | number;
  product_id?: null | number | number;
  title: string;
  variant_title?: null | string | string;
  sku?: string;
  vendor?: string;
  quantity: number;
  requires_shipping: boolean;
  taxable: boolean;
  gift_card: boolean;
  fulfillment_service: string;
  grams: number;
  tax_lines: Taxline3[];
  applied_discount?: Applieddiscount;
  name: string;
  properties: any[];
  custom: boolean;
  price: string;
  admin_graphql_api_id: string;
}

type Applieddiscount = {
  description: string;
  value: string;
  title: string;
  amount: string;
  value_type: string;
}

type Taxline3 = {
  rate: number;
  title: string;
  price: string;
}

type Checkout = {
  id: number;
  token: string;
  cart_token: string;
  email: string;
  gateway?: any;
  buyer_accepts_marketing: boolean;
  created_at: string;
  updated_at: string;
  landing_site?: any;
  note?: any;
  note_attributes: Noteattribute[];
  referring_site?: any;
  shipping_lines: Shippingline2[];
  taxes_included: boolean;
  total_weight: number;
  currency: string;
  completed_at?: any;
  closed_at?: any;
  user_id?: any;
  location_id?: any;
  source_identifier?: any;
  source_url?: any;
  device_id?: any;
  phone?: any;
  customer_locale: string;
  line_items: Lineitem7[];
  name: string;
  source?: any;
  abandoned_checkout_url: string;
  discount_codes: Discountcode[];
  tax_lines: Taxline2[];
  source_name: string;
  presentment_currency: string;
  buyer_accepts_sms_marketing: boolean;
  sms_marketing_phone?: any;
  total_discounts: string;
  total_line_items_price: string;
  total_price: string;
  total_tax: string;
  subtotal_price: string;
  total_duties?: any;
  billing_address: Billingaddress2;
  shipping_address: Billingaddress2;
  customer: Customer3;
}

type Customer3 = {
  id: number;
  email: string;
  accepts_marketing: boolean;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  orders_count: number;
  state: string;
  total_spent: string;
  last_order_id: number;
  note?: any;
  verified_email: boolean;
  multipass_identifier?: any;
  tax_exempt: boolean;
  phone: string;
  tags: string;
  last_order_name: string;
  currency: string;
  accepts_marketing_updated_at: string;
  marketing_opt_in_level?: any;
  tax_exemptions: any[];
  admin_graphql_api_id: string;
  default_address: Address2;
}

type Billingaddress2 = {
  first_name: string;
  address1: string;
  phone: string;
  city: string;
  zip: string;
  province: string;
  country: string;
  last_name: string;
  address2: string;
  company?: any;
  latitude: number;
  longitude: number;
  name: string;
  country_code: string;
  province_code: string;
}

type Taxline2 = {
  price: string;
  rate: number;
  title: string;
  channel_liable?: any;
}

type Lineitem7 = {
  applied_discounts: any[];
  discount_allocations: Discountallocation2[];
  key: string;
  destination_location_id?: any;
  fulfillment_service: string;
  gift_card: boolean;
  grams: number;
  origin_location_id?: any;
  presentment_title: string;
  presentment_variant_title: string;
  product_id: number;
  properties?: any;
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: any[];
  taxable: boolean;
  title: string;
  variant_id: number;
  variant_title: string;
  variant_price?: any;
  vendor: string;
  user_id?: any;
  unit_price_measurement?: any;
  rank?: any;
  compare_at_price?: any;
  line_price: string;
  price: string;
}

type Discountallocation2 = {
  id?: any;
  amount: string;
  description?: any;
  created_at?: any;
  application_type: string;
}

type Shippingline2 = {
  title: string;
  price: string;
  code: string;
  source: string;
  applied_discounts: any[];
  id: string;
}

type Theme = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  role: string;
  theme_store_id?: number;
  previewable: boolean;
  processing: boolean;
  admin_graphql_api_id: string;
}

type Scripttag = {
  id: number;
  src: string;
  event: string;
  created_at: string;
  updated_at: string;
  display_scope: string;
  cache?: boolean;
}

type Redirect = {
  id: number;
  path: string;
  target: string;
}

type Page = {
  id: number;
  title: string;
  shop_id: number;
  handle: string;
  body_html: string;
  author: string;
  created_at: string;
  updated_at: string;
  published_at?: string;
  template_suffix?: any;
  admin_graphql_api_id: string;
}

type Comment = {
  id: number;
  body: string;
  body_html: string;
  author: string;
  email: string;
  status: string;
  article_id: number;
  blog_id: number;
  created_at: string;
  updated_at: string;
  ip: string;
  user_agent?: string;
  published_at?: string;
}

type Blog = {
  id: number;
  handle: string;
  title: string;
  updated_at: string;
  commentable: string;
  feedburner?: any;
  feedburner_location?: any;
  created_at: string;
  template_suffix?: any;
  tags: string;
  admin_graphql_api_id: string;
}

type Asset = {
  key: string;
  public_url?: string;
  created_at: string;
  updated_at: string;
  content_type: string;
  size: number;
  checksum?: string;
  theme_id: number;
  value?: string;
}

type Article = {
  id: number;
  title: string;
  created_at: string;
  body_html: string;
  blog_id: number;
  author: string;
  user_id?: number;
  published_at?: string;
  updated_at: string;
  summary_html?: any;
  template_suffix?: any;
  handle: string;
  tags: string;
  admin_graphql_api_id: string;
  image?: Image;
}

type Image = {
  created_at: string;
  alt?: string;
  width: number;
  height: number;
  src: string;
}

type Metafield = {
  id: number;
  namespace: string;
  key: string;
  value: number | string;
  value_type: string;
  description?: string;
  owner_id: number;
  created_at: string;
  updated_at: string;
  owner_resource: string;
  admin_graphql_api_id: string;
  type?: string;
}

type Engagement = {
  occurred_on: string;
  fetched_at?: any;
  views_count: number;
  impressions_count?: any;
  clicks_count: number;
  favorites_count?: number;
  comments_count?: any;
  shares_count?: any;
  ad_spend?: string;
  currency_code?: any;
  is_cumulative: boolean;
  unsubscribes_count?: any;
  complaints_count?: any;
  fails_count?: any;
  sends_count?: any;
  unique_views_count?: any;
  unique_clicks_count?: any;
  utc_offset?: any;
}

type Marketingevent = {
  id: number;
  event_type: string;
  remote_id?: string;
  started_at: string;
  ended_at?: string;
  scheduled_to_end_at?: string;
  budget?: string;
  currency?: string;
  manage_url?: any;
  preview_url?: any;
  utm_campaign: string;
  utm_source: string;
  utm_medium: string;
  budget_type?: string;
  description?: any;
  marketing_channel: string;
  paid: boolean;
  referring_domain: string;
  breadcrumb_id?: any;
  marketing_activity_id?: number;
  admin_graphql_api_id: string;
  marketed_resources: any[];
}

type Location = {
  id: number;
  name: string;
  address1?: string;
  address2?: any;
  city?: string;
  zip?: string;
  province?: string;
  country: string;
  phone?: any;
  created_at: string;
  updated_at: string;
  country_code: string;
  country_name: string;
  province_code?: string;
  legacy: boolean;
  active: boolean;
  admin_graphql_api_id: string;
  localized_country_name?: string;
  localized_province_name?: string;
}

type Inventorylevel = {
  inventory_item_id: number;
  location_id: number;
  available: number;
  updated_at: string;
  admin_graphql_api_id: string;
}

type Inventoryitem = {
  id: number;
  sku: string;
  created_at: string;
  updated_at: string;
  requires_shipping: boolean;
  cost: string;
  country_code_of_origin?: any;
  province_code_of_origin?: any;
  harmonized_system_code?: any;
  tracked: boolean;
  country_harmonized_system_codes: any[];
  admin_graphql_api_id: string;
}

type Webhook = {
  id: number;
  address: string;
  topic: string;
  created_at: string;
  updated_at: string;
  format: string;
  fields: string[];
  metafield_namespaces: any[];
  api_version: string;
  private_metafield_namespaces: any[];
}

type Event = {
  id: number;
  subject_id: number;
  created_at: string;
  subject_type: string;
  verb: string;
  arguments: string[];
  body?: any;
  message: string;
  author: string;
  description: string;
  path: string;
}

type Pricerule = {
  id: number;
  value_type: string;
  value: string;
  customer_selection: string;
  target_type: string;
  target_selection: string;
  allocation_method: string;
  allocation_limit?: number;
  once_per_customer: boolean;
  usage_limit?: number;
  starts_at: string;
  ends_at?: string;
  created_at: string;
  updated_at: string;
  entitled_product_ids: number[];
  entitled_variant_ids: any[];
  entitled_collection_ids: number[];
  entitled_country_ids: any[];
  prerequisite_product_ids: any[];
  prerequisite_variant_ids: any[];
  prerequisite_collection_ids: number[];
  prerequisite_saved_search_ids: number[];
  prerequisite_customer_ids: any[];
  prerequisite_subtotal_range?: Prerequisitesubtotalrange;
  prerequisite_quantity_range?: any;
  prerequisite_shipping_price_range?: any;
  prerequisite_to_entitlement_quantity_ratio: Prerequisitetoentitlementquantityratio;
  prerequisite_to_entitlement_purchase?: Prerequisitetoentitlementpurchase;
  title: string;
  admin_graphql_api_id: string;
}

type Prerequisitetoentitlementpurchase = {
  prerequisite_amount?: any;
}

type Prerequisitetoentitlementquantityratio = {
  prerequisite_quantity?: number;
  entitled_quantity?: number;
}

type Prerequisitesubtotalrange = {
  greater_than_or_equal_to: string;
}

type Discountcodecreation = {
  id: number;
  price_rule_id: number;
  started_at?: any;
  completed_at?: any;
  created_at: string;
  updated_at: string;
  status: string;
  codes_count: number;
  imported_count: number;
  failed_count: number;
  logs: any[];
}

type Discountcode2 = {
  id?: number;
  price_rule_id?: number;
  code: string;
  usage_count?: number;
  created_at?: string;
  updated_at?: string;
  errors?: Originaddress;
}

type Deprecatedapicall = {
  api_type: string;
  description: string;
  documentation_url: string;
  endpoint: string;
  last_call_at: string;
  migration_deadline: string;
  graphql_schema_name?: any;
  version: string;
}

type Customersavedsearch = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  query: string;
}

type Address2 = {
  id: number;
  customer_id: number;
  first_name?: any;
  last_name?: any;
  company?: any;
  address1: string;
  address2: string;
  city: string;
  province: string;
  country: string;
  zip: string;
  phone: string;
  name: string;
  province_code: string;
  country_code: string;
  country_name: string;
  default: boolean;
}

type Customeraddress = {
  id: number;
  customer_id: number;
  first_name?: string;
  last_name?: string;
  company?: string;
  address1: string;
  address2: string;
  city: string;
  province: string;
  country: string;
  zip: string;
  phone: string;
  name: string;
  province_code: string;
  country_code: string;
  country_name: string;
  default: boolean;
}

type Order = {
  id: number;
  admin_graphql_api_id?: string;
  app_id?: number;
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
  customer_locale?: any;
  device_id?: any;
  discount_codes?: Discountcode[];
  email?: string;
  estimated_taxes?: boolean;
  financial_status?: string;
  fulfillment_status?: string;
  gateway?: string;
  landing_site?: string;
  landing_site_ref?: string;
  location_id?: any;
  name: string;
  note?: string;
  note_attributes?: Noteattribute[];
  number?: number;
  order_number?: number;
  order_status_url?: string;
  original_total_duties_set?: any;
  payment_gateway_names?: string[];
  phone?: string;
  presentment_currency?: string;
  processed_at?: string;
  processing_method?: string;
  reference?: string;
  referring_site?: string;
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
  total_price: string;
  total_price_set?: Currentsubtotalpriceset;
  total_price_usd?: string;
  total_shipping_price_set?: Currentsubtotalpriceset;
  total_tax?: string;
  total_tax_set?: Currentsubtotalpriceset;
  total_tip_received?: string;
  total_weight?: number;
  updated_at?: string;
  user_id?: any;
  billing_address?: Billingaddress;
  customer?: Customer2;
  discount_applications?: (Discountapplication | Discountapplications2)[];
  fulfillments?: (Fulfillment | Fulfillments2 | Fulfillments3)[];
  line_items?: Lineitem4[];
  payment_details?: Paymentdetail;
  refunds?: (Refund | Refunds2 | Refunds3 | Refunds4)[];
  shipping_address?: Billingaddress;
  shipping_lines?: Shippingline[];
}

type Shippingline = {
  id: number;
  carrier_identifier?: any;
  code: string;
  delivery_category?: any;
  discounted_price: string;
  discounted_price_set: Currentsubtotalpriceset;
  phone?: any;
  price: string;
  price_set: Currentsubtotalpriceset;
  requested_fulfillment_service_id?: any;
  source: string;
  title: string;
  tax_lines: any[];
  discount_allocations: any[];
}

type Refunds4 = {
  id: number;
  admin_graphql_api_id: string;
  created_at: string;
  note: string;
  order_id: number;
  processed_at: string;
  restock: boolean;
  total_additional_fees_set: Currentsubtotalpriceset;
  total_duties_set: Currentsubtotalpriceset;
  user_id?: any;
  order_adjustments: Orderadjustment[];
  transactions: Transaction3[];
  refund_line_items: Refundlineitem4[];
  duties: any[];
  additional_fees: any[];
}

type Refundlineitem4 = {
  id: number;
  line_item_id: number;
  location_id?: any;
  quantity: number;
  restock_type: string;
  subtotal: number;
  subtotal_set: Currentsubtotalpriceset;
  total_tax: number;
  total_tax_set: Currentsubtotalpriceset;
  line_item: Lineitem2;
}

type Transaction3 = {
  id: number;
  admin_graphql_api_id: string;
  amount: string;
  authorization?: any;
  created_at: string;
  currency: string;
  device_id?: any;
  error_code?: any;
  gateway: string;
  kind: string;
  location_id?: any;
  message?: string;
  order_id: number;
  parent_id: number;
  processed_at: string;
  receipt: Receipt2;
  source_name: string;
  status: string;
  test: boolean;
  user_id?: any;
}

type Receipt2 = {
  gift_card_id?: number;
  gift_card_last_characters?: string;
}

type Orderadjustment = {
  id: number;
  amount: string;
  amount_set: Currentsubtotalpriceset;
  kind: string;
  order_id: number;
  reason: string;
  refund_id: number;
  tax_amount: string;
  tax_amount_set: Currentsubtotalpriceset;
}

type Refunds3 = {
  id: number;
  admin_graphql_api_id: string;
  created_at: string;
  note: string;
  order_id: number;
  processed_at: string;
  restock: boolean;
  user_id: number;
  order_adjustments: any[];
  transactions: Transaction2[];
  refund_line_items: Refundlineitem3[];
}

type Refundlineitem3 = {
  id: number;
  line_item_id: number;
  location_id: number;
  quantity: number;
  restock_type: string;
  subtotal: number;
  subtotal_set: Currentsubtotalpriceset;
  total_tax: number;
  total_tax_set: Currentsubtotalpriceset;
  line_item: Lineitem6;
}

type Lineitem6 = {
  id: number;
  admin_graphql_api_id: string;
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status?: any;
  gift_card: boolean;
  grams: number;
  name: string;
  price: string;
  price_set: Currentsubtotalpriceset;
  product_exists: boolean;
  product_id: number;
  properties: Noteattribute[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: Currentsubtotalpriceset;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  vendor?: any;
  tax_lines: Taxlines2[];
  discount_allocations: Discountallocation[];
}

type Refunds2 = {
  id: number;
  admin_graphql_api_id: string;
  created_at: string;
  note: string;
  order_id: number;
  processed_at: string;
  restock: boolean;
  total_additional_fees_set: Currentsubtotalpriceset;
  total_duties_set: Currentsubtotalpriceset;
  user_id: number;
  order_adjustments: any[];
  transactions: Transaction2[];
  refund_line_items: Refundlineitem2[];
  duties: any[];
  additional_fees: any[];
}

type Refundlineitem2 = {
  id: number;
  line_item_id: number;
  location_id: number;
  quantity: number;
  restock_type: string;
  subtotal: number;
  subtotal_set: Currentsubtotalpriceset;
  total_tax: number;
  total_tax_set: Currentsubtotalpriceset;
  line_item: Lineitem5;
}

type Transaction2 = {
  id: number;
  admin_graphql_api_id: string;
  amount: string;
  authorization: string;
  created_at: string;
  currency: string;
  device_id?: any;
  error_code?: any;
  gateway: string;
  kind: string;
  location_id?: any;
  message?: any;
  order_id: number;
  parent_id: number;
  processed_at: string;
  receipt: Originaddress;
  source_name: string;
  status: string;
  test: boolean;
  user_id?: any;
}

type Refund = {
  id: number;
  admin_graphql_api_id: string;
  created_at: string;
  note?: any;
  order_id: number;
  processed_at: string;
  restock: boolean;
  total_additional_fees_set: Currentsubtotalpriceset;
  total_duties_set: Currentsubtotalpriceset;
  user_id?: any;
  order_adjustments: any[];
  transactions: Transaction[];
  refund_line_items: Refundlineitem[];
  duties: any[];
  additional_fees: any[];
}

type Refundlineitem = {
  id: number;
  line_item_id: number;
  location_id?: any;
  quantity: number;
  restock_type: string;
  subtotal: number;
  subtotal_set: Currentsubtotalpriceset;
  total_tax: number;
  total_tax_set: Currentsubtotalpriceset;
  line_item: Lineitem5;
}

type Lineitem5 = {
  id: number;
  admin_graphql_api_id: string;
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status?: any;
  gift_card: boolean;
  grams: number;
  name: string;
  price: string;
  price_set: Currentsubtotalpriceset;
  product_exists: boolean;
  product_id: number;
  properties: Noteattribute[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: Currentsubtotalpriceset;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  vendor?: any;
  tax_lines: Taxline[];
  duties: any[];
  discount_allocations: Discountallocation[];
}

type Transaction = {
  id: number;
  admin_graphql_api_id: string;
  amount: string;
  authorization?: any;
  created_at: string;
  currency: string;
  device_id?: any;
  error_code?: any;
  gateway: string;
  kind: string;
  location_id?: any;
  message: string;
  order_id: number;
  parent_id: number;
  processed_at: string;
  receipt: Originaddress;
  source_name: string;
  status: string;
  test: boolean;
  user_id?: any;
}

type Paymentdetail = {
  credit_card_bin?: any;
  avs_result_code?: any;
  cvv_result_code?: any;
  credit_card_number: string;
  credit_card_company: string;
  credit_card_name?: any;
  credit_card_wallet?: any;
  credit_card_expiration_month?: any;
  credit_card_expiration_year?: any;
}

type Lineitem4 = {
  id: number;
  admin_graphql_api_id: string;
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status?: string;
  gift_card: boolean;
  grams: number;
  name: string;
  price: string;
  price_set: Currentsubtotalpriceset;
  product_exists: boolean;
  product_id?: number;
  properties: Noteattribute[][];
  quantity: number;
  requires_shipping: boolean;
  sku?: string;
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: Currentsubtotalpriceset;
  variant_id?: number;
  variant_inventory_management?: string;
  variant_title?: string;
  vendor?: string;
  tax_lines: (Taxline | Taxline | Taxlines2)[];
  duties?: any[];
  discount_allocations: Discountallocation[];
}

type Fulfillments3 = {
  id: number;
  admin_graphql_api_id: string;
  created_at: string;
  location_id: number;
  name: string;
  order_id: number;
  receipt: Receipt;
  service: string;
  shipment_status?: any;
  status: string;
  tracking_company: string;
  tracking_number: string;
  tracking_numbers: string[];
  tracking_url: string;
  tracking_urls: string[];
  updated_at: string;
  line_items: Lineitem3[];
}

type Lineitem3 = {
  id: number;
  admin_graphql_api_id: string;
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status?: any;
  gift_card: boolean;
  grams: number;
  name: string;
  price: string;
  price_set: Currentsubtotalpriceset;
  product_exists: boolean;
  product_id: number;
  properties: Noteattribute[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: Currentsubtotalpriceset;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  vendor?: any;
  tax_lines: Taxlines2[];
  discount_allocations: Discountallocation[];
}

type Fulfillments2 = {
  id: number;
  admin_graphql_api_id: string;
  created_at: string;
  location_id: number;
  name: string;
  order_id: number;
  origin_address: Originaddress;
  receipt: Receipt;
  service: string;
  shipment_status?: any;
  status: string;
  tracking_company: string;
  tracking_number: string;
  tracking_numbers: string[];
  tracking_url: string;
  tracking_urls: string[];
  updated_at: string;
  line_items: Lineitem2[];
}

type Lineitem2 = {
  id: number;
  admin_graphql_api_id: string;
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status?: any;
  gift_card: boolean;
  grams: number;
  name: string;
  price: string;
  price_set: Currentsubtotalpriceset;
  product_exists: boolean;
  product_id: number;
  properties: Noteattribute[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: Currentsubtotalpriceset;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  vendor?: any;
  tax_lines: Taxline[];
  duties: any[];
  discount_allocations: Discountallocation[];
}

type Discountallocation = {
  amount: string;
  amount_set: Currentsubtotalpriceset;
  discount_application_index: number;
}

type Receipt = {
  testcase: boolean;
  authorization: string;
}

type Fulfillment = {
  id: number;
  admin_graphql_api_id: string;
  created_at: string;
  location_id: number;
  name: string;
  order_id: number;
  origin_address: Originaddress;
  receipt: Originaddress;
  service: string;
  shipment_status?: any;
  status: string;
  tracking_company?: any;
  tracking_number?: any;
  tracking_numbers: any[];
  tracking_url?: any;
  tracking_urls: any[];
  updated_at: string;
  line_items: Lineitem[];
}

type Lineitem = {
  id: number;
  admin_graphql_api_id: string;
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status: string;
  gift_card: boolean;
  grams: number;
  name: string;
  price: string;
  price_set: Currentsubtotalpriceset;
  product_exists: boolean;
  product_id: number;
  properties: any[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: Currentsubtotalpriceset;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  vendor: string;
  tax_lines: any[];
  duties: any[];
  discount_allocations: any[];
}

type Originaddress = {
}

type Discountapplications2 = {
  target_type: string;
  type: string;
  value: string;
  value_type: string;
  allocation_method: string;
  target_selection: string;
  title: string;
  description: string;
}

type Discountapplication = {
  target_type: string;
  type: string;
  value: string;
  value_type: string;
  allocation_method: string;
  target_selection: string;
  code: string;
}

type Customer2 = {
  id: number;
  email: string;
  accepts_marketing: boolean;
  created_at: string;
  updated_at: string;
  first_name?: string;
  last_name?: string;
  orders_count: number;
  state: string;
  total_spent: string;
  last_order_id: number;
  note?: any;
  verified_email: boolean;
  multipass_identifier?: any;
  tax_exempt: boolean;
  phone?: string;
  tags: string;
  last_order_name: string;
  currency: string;
  accepts_marketing_updated_at: string;
  marketing_opt_in_level?: any;
  tax_exemptions: any[];
  admin_graphql_api_id: string;
  default_address?: Address;
}

type Billingaddress = {
  first_name: string;
  address1: string;
  phone: string;
  city: string;
  zip: string;
  province: string;
  country: string;
  last_name: string;
  address2?: string;
  company?: any;
  latitude?: number;
  longitude?: number;
  name: string;
  country_code: string;
  province_code: string;
}

type Taxlines2 = {
  price: string;
  rate: number;
  title: string;
  price_set: Currentsubtotalpriceset;
}

type Taxline = {
  price: string;
  rate: number;
  title: string;
  price_set: Currentsubtotalpriceset;
  channel_liable?: any;
}

type Noteattribute = {
  name: string;
  value: string;
}

type Discountcode = {
  code: string;
  amount: string;
  type: string;
}

type Currentsubtotalpriceset = {
  shop_money: Shopmoney;
  presentment_money: Shopmoney;
}

type Shopmoney = {
  amount: string;
  currency_code: string;
}

type Clientdetail = {
  accept_language?: any;
  browser_height?: any;
  browser_ip: string;
  browser_width?: any;
  session_hash?: any;
  user_agent?: any;
}

type Customerinvite = {
  to: string;
  from: string;
  subject: string;
  custom_message: string;
  bcc: string[];
}

type Customer = {
  id: number;
  email: string;
  accepts_marketing: boolean;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  orders_count: number;
  state: string;
  total_spent: string;
  last_order_id?: number;
  note?: string;
  verified_email: boolean;
  multipass_identifier?: any;
  tax_exempt: boolean;
  phone: string;
  tags: string;
  last_order_name?: string;
  currency: string;
  addresses: Address[];
  accepts_marketing_updated_at: string;
  marketing_opt_in_level?: string;
  tax_exemptions: any[];
  admin_graphql_api_id: string;
  default_address: Address;
}

type Address = {
  id: number;
  customer_id: number;
  first_name?: string;
  last_name?: string;
  company?: any;
  address1: string;
  address2?: string;
  city: string;
  province: string;
  country: string;
  zip: string;
  phone: string;
  name: string;
  province_code: string;
  country_code: string;
  country_name: string;
  default: boolean;
}

type Usagecharge = {
  id: number;
  description: string;
  price: string;
  created_at: string;
  billing_on: string;
  balance_used: number;
  balance_remaining: number;
  risk_level: number;
}

type Recurringapplicationcharge = {
  id: number;
  name: string;
  api_client_id: number;
  price: string;
  status: string;
  return_url: string;
  billing_on?: string;
  created_at: string;
  updated_at: string;
  test?: boolean;
  activated_on?: string;
  cancelled_on?: any;
  trial_days: number;
  trial_ends_on?: string;
  decorated_return_url: string;
  confirmation_url?: string;
  capped_amount?: string;
  balance_used?: number;
  balance_remaining?: number;
  risk_level?: number;
  update_capped_amount_url?: string;
}

type Applicationcredit = {
  id: number;
  amount: string;
  description: string;
  test?: boolean;
}

type Applicationcharge = {
  id: number;
  name: string;
  api_client_id: number;
  price: string;
  status: string;
  return_url: string;
  test?: boolean;
  created_at: string;
  updated_at: string;
  charge_type?: string;
  decorated_return_url: string;
  confirmation_url?: string;
}

type Report = {
  id: number;
  name?: string;
  shopify_ql: string;
  updated_at?: string;
  category?: string;
}

type Storefrontaccesstoken = {
  access_token: string;
  access_scope: string;
  created_at: string;
  id: number;
  admin_graphql_api_id: string;
  title: string;
}

type Accessscope = {
  handle: string;
}