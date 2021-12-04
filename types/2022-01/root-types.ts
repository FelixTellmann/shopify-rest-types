export type MasterTypes = {
  access_scope: AccessScope[];
  account_activation_url: string[];
  address: Address[];
  admin_graphql_api_id: string[];
  application_charge: ApplicationCharge[];
  application_credit: ApplicationCredit[];
  article: Article[];
  article_id: number[];
  asset: Asset[];
  author: string[];
  balance: Balance[];
  blog: Blog[];
  blog_id: number[];
  body: string[];
  body_html: string[];
  carrier_service: CarrierService[];
  checkout: Checkout[];
  collect: Collect[];
  collection: Collection[];
  collection_listing: CollectionListing[];
  comment: Comment[];
  count: number[];
  country: Country[];
  created_at: string[];
  currency: Currency[];
  custom_collection: CustomCollection[];
  customer: Customer[];
  customer_address: CustomerAddress[];
  customer_invite: EmailMessage[];
  customer_saved_search: CustomerSavedSearch[];
  data_updated_at: string[];
  deprecated_api_call: DeprecatedApiCall[];
  discount_code: DiscountCode[];
  discount_code_creation: DiscountCodeCreation[];
  dispute: Dispute[];
  draft_order: DraftOrder[];
  draft_order_invoice: EmailMessage[];
  email: string[];
  engagement: Engagement[];
  event: Event[];
  fulfillment: Fulfillment[];
  fulfillment_event: FulfillmentEvent[];
  fulfillment_order: FulfillmentOrder[];
  fulfillment_service: FulfillmentService[];
  gift_card: GiftCard[];
  id: (number | string)[];
  image: Image[];
  inventory_item: InventoryItem[];
  inventory_level: InventoryLevel[];
  ip: string[];
  location: Location[];
  locations_for_move: LocationsForMove[];
  marketing_event: MarketingEvent[];
  message: string[];
  metafield: Metafield[];
  mobile_platform_application: MobilePlatformApplication[];
  moved_fulfillment_order: FulfillmentOrder[];
  name: string[];
  notice: string[];
  order: Order[];
  original_fulfillment_order: FulfillmentOrder[];
  page: Page[];
  payment: Payment[];
  payout: Payout[];
  policy: Policy[];
  previewable: boolean[];
  price_rule: PriceRule[];
  processing: boolean[];
  product: Product[];
  product_id: number[];
  product_listing: ProductListing[];
  province: Province[];
  published_at: (null | string)[];
  recurring_application_charge: RecurringApplicationCharge[];
  redirect: Redirect[];
  refund: Refund[];
  remaining_fulfillment_order: null[];
  replacement_fulfillment_order: FulfillmentOrder[];
  report: Report[];
  resource_feedback: ResourceFeedback[];
  risk: Risk[];
  role: string[];
  sales_channel_checkout: SalesChannelCheckout[];
  script_tag: ScriptTag[];
  shipping_rate: ShippingRate[];
  shipping_zone: ShippingZone[];
  shop: Shop[];
  shopify_payments_transaction: ShopifyPaymentsTransaction[];
  smart_collection: SmartCollection[];
  status: string[];
  storefront_access_token: StorefrontAccessToken[];
  submitted_fulfillment_order: FulfillmentOrder[];
  tag: string[];
  tender_transaction: TenderTransaction[];
  theme: Theme[];
  theme_store_id: null[];
  transaction: Transaction[];
  unsubmitted_fulfillment_order: FulfillmentOrder[];
  updated_at: string[];
  usage_charge: UsageCharge[];
  user: User[];
  user_agent: string[];
  variant: Variant[];
  webhook: Webhook[];
};

type TenderTransaction = {
  amount: string;
  currency: string;
  id: number;
  order_id: number;
  payment_details: any;
  payment_method: string;
  processed_at: string;
  remote_reference: string;
  test: boolean;
  user_id: any;
};

type Shop = {
  address1: string;
  address2: string;
  auto_configure_tax_inclusivity: any;
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
  google_apps_domain: any;
  google_apps_login_enabled: any;
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
  source: any;
  tax_shipping: any;
  taxes_included: any;
  timezone: string;
  updated_at: string;
  visitor_tracking_consent_preference: string;
  weight_unit: string;
  zip: string;
};

type ShippingZone = {
  admin_graphql_api_id: string;
  carrier_shipping_rate_providers: {
    carrier_service_id: number;
    flat_modifier: string;
    id: number;
    percent_modifier: any;
    service_filter: {
      "*": string;
    };
    shipping_zone_id: number;
  }[];
  countries: Country[];
  id: number;
  location_group_id: string;
  name: string;
  price_based_shipping_rates: {
    id: number;
    max_order_subtotal: string;
    min_order_subtotal: any;
    name: string;
    price: string;
    shipping_zone_id: number;
  }[];
  profile_id: string;
  weight_based_shipping_rates: {
    id: number;
    name: string;
    price: string;
    shipping_zone_id: number;
    weight_high: number;
    weight_low: number;
  }[];
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
  provinces: Province[];
  shipping_zone_id: number;
  tax: number;
  tax_name: string;
};

type Province = {
  code: string;
  country_id: number;
  id: number;
  name: string;
  shipping_zone_id: number;
  tax: number;
  tax_name: string;
  tax_percentage: number;
  tax_type: string;
};

type ShopifyPaymentsTransaction = {
  amount: string;
  currency: string;
  fee: string;
  id: number;
  net: string;
  payout_id: number;
  payout_status: string;
  processed_at: string;
  source_id: number;
  source_order_id: number;
  source_order_transaction_id: number;
  source_type: string;
  test: boolean;
  type: string;
};

type Payout = {
  amount: string;
  currency: string;
  date: string;
  id: number;
  status: string;
  summary: {
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
};

type Dispute = {
  amount: string;
  currency: string;
  evidence_due_by: string;
  evidence_sent_on: string;
  finalized_on: any;
  id: number;
  initiated_at: string;
  network_reason_code: string;
  order_id: number;
  reason: string;
  status: string;
  type: string;
};

type Balance = {
  amount: string;
  currency: string;
};

type LocationsForMove = {
  location: {
    id: number;
    name: string;
  };
  message: string;
  movable: boolean;
};

type FulfillmentService = {
  callback_url: string;
  email: any;
  fulfillment_orders_opt_in: boolean;
  handle: string;
  id: number;
  include_pending_stock: boolean;
  inventory_management: boolean;
  location_id: number;
  name: string;
  provider_id: any;
  service_name: string;
  tracking_support: boolean;
};

type OutgoingRequest = {
  kind: string;
  message: string;
  request_options: {
    notify_customer: boolean;
  };
  sent_at: string;
};

type FulfillmentEvent = {
  address1: any;
  admin_graphql_api_id: string;
  city: any;
  country: any;
  created_at: string;
  estimated_delivery_at: any;
  fulfillment_id: number;
  happened_at: string;
  id: number;
  latitude: any;
  longitude: any;
  message: any;
  order_id: number;
  province: any;
  shop_id: number;
  status: string;
  updated_at: string;
  zip: any;
};

type CarrierService = {
  active: boolean;
  admin_graphql_api_id: string;
  callback_url: string;
  carrier_service_type: string;
  format: string;
  id: number;
  name: string;
  service_discovery: boolean;
};

type FulfillmentOrder = {
  assigned_location: AssignedLocation;
  assigned_location_id: number;
  delivery_method: any;
  destination: Destination;
  fulfill_at: string;
  fulfillment_holds: {
    reason: string;
    reason_notes: string;
  }[];
  fulfillment_service_handle: string;
  id: number;
  international_duties: {
    incoterm: string;
  };
  line_items: LineItem[];
  merchant_requests: any[];
  order_id: number;
  origin: AssignedLocation;
  outgoing_requests: OutgoingRequest[];
  request_status: string;
  shop_id: number;
  status: string;
  supported_actions: string[];
};

type AssignedLocation = {
  address1: string;
  address2: string;
  city: string;
  country_code: string;
  location_id: number;
  name: string;
  phone: string;
  province: string;
  zip: string;
};

type Destination = {
  address1: string;
  address2: string;
  city: string;
  company: string;
  country: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  phone: string;
  province: string;
  zip: string;
};

type ProductListing = {
  available: boolean;
  body_html: string;
  created_at: string;
  handle: string;
  images: Image[];
  options: Option[];
  product_id: number;
  product_type: string;
  published_at: string;
  tags: string;
  title: string;
  updated_at: string;
  variants: Variant[];
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
  compare_at_price: any;
  created_at: string;
  formatted_price: string;
  fulfillment_service: string;
  grams: number;
  id: number;
  image_id: (null | number)[];
  inventory_management: string;
  inventory_policy: string;
  inventory_quantity: number;
  option_values: OptionValue[];
  position: number;
  price: string;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  updated_at: string;
  weight: number;
  weight_unit: string;
};

type OptionValue = {
  name: string;
  option_id: number;
  value: string;
};

type ResourceFeedback = {
  created_at: string;
  feedback_generated_at: string;
  messages: string[];
  resource_id: number;
  resource_type: string;
  resource_updated_at: string;
  state: string;
  updated_at: string;
};

type Payment = {
  checkout: Checkout;
  credit_card: CreditCard;
  fraudulent: boolean;
  id: number;
  next_action: {
    redirect_url: any;
  };
  payment_processing_error_message: any;
  transaction: Transaction;
  unique_token: string;
};

type Checkout3 = {
  applied_discount: any;
  billing_address: ShippingAddress;
  completed_at: any;
  created_at: string;
  credit_card: Creditcard;
  currency: string;
  customer_id: number;
  customer_locale: string;
  device_id: any;
  discount_code: any;
  email: string;
  gift_cards: any[];
  legal_notice_url: any;
  line_items: LineItem[];
  location_id: any;
  name: string;
  note: string;
  note_attributes: NoteAttributes;
  order: any;
  order_id: any;
  order_status_url: any;
  payment_due: string;
  payment_url: string;
  payments: Payment[];
  phone: any;
  presentment_currency: string;
  privacy_policy_url: any;
  refund_policy_url: any;
  requires_shipping: boolean;
  reservation_time: any;
  reservation_time_left: number;
  shipping_address: ShippingAddress;
  shipping_line: ShippingLine;
  shipping_policy_url: any;
  shipping_rate: ShippingRate;
  shopify_payments_account_id: any;
  source_identifier: any;
  source_name: string;
  source_url: any;
  subscription_policy_url: any;
  subtotal_price: string;
  tax_exempt: boolean;
  tax_lines: TaxLine[];
  tax_manipulations: any[];
  taxes_included: boolean;
  terms_of_sale_url: any;
  terms_of_service_url: any;
  token: string;
  total_additional_fees: any;
  total_duties: any;
  total_line_items_price: string;
  total_price: string;
  total_tax: string;
  total_tip_received: string;
  updated_at: string;
  user_id: any;
  web_url: string;
};

type Creditcard3 = {
  brand: string;
  customer_id: number;
  expiry_month: number;
  expiry_year: number;
  first_digits: string;
  first_name: string;
  last_digits: string;
  last_name: string;
};

type Payment2 = {
  credit_card: (CreditCard | null)[];
  fraudulent: boolean;
  id: number;
  payment_processing_error_message: any;
  transaction: Transaction;
  unique_token: string;
};

type Transaction22 = {
  amount: string;
  amount_in: any;
  amount_out: any;
  amount_rounding: any;
  authorization: any;
  created_at: string;
  currency: string;
  device_id: any;
  error_code: any;
  gateway: string;
  id: number;
  kind: string;
  location_id: any;
  message: any;
  parent_id: any;
  payment_details: any;
  receipt: EmptyObject;
  status: string;
  test: boolean;
  transaction_group_id: any;
  user_id: any;
};

type Transaction8 = {
  amount: string;
  amount_in: any;
  amount_out: any;
  amount_rounding: any;
  authorization: string;
  created_at: string;
  currency: string;
  error_code: any;
  gateway: string;
  id: number;
  kind: string;
  message: any;
  parent_id: any;
  status: string;
  test: boolean;
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
  amount_in: any;
  amount_out: any;
  amount_rounding: any;
  authorization: string;
  created_at: string;
  currency: string;
  device_id: any;
  error_code: any;
  gateway: string;
  id: number;
  kind: string;
  location_id: any;
  message: any;
  parent_id: any;
  payment_details: any;
  receipt: EmptyObject;
  status: string;
  test: boolean;
  transaction_group_id: any;
  user_id: any;
};

type NextAction = {
  redirect_url: any;
};

type MobilePlatformApplication = {
  application_id: string;
  created_at: string;
  enabled_shared_webcredentials: boolean;
  enabled_universal_or_app_links: boolean;
  id: number;
  platform: string;
  sha256_cert_fingerprints: string[];
  updated_at: string;
};

type CollectionListing = {
  body_html: string;
  collection_id: number;
  default_product_image: DefaultProductImage;
  handle: string;
  image: Image;
  published_at: string;
  sort_order: string;
  title: string;
  updated_at: string;
};

type DefaultProductImage = {
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

type Shippingrate2 = {
  checkout: Checkout;
  delivery_range: any;
  estimated_time_in_transit: any;
  handle: string;
  id: string;
  phone_required: boolean;
  price: string;
  title: string;
};

type Checkout2 = {
  subtotal_price: string;
  total_price: string;
  total_tax: string;
};

type SalesChannelCheckout = {
  applied_discount: any;
  billing_address: ShippingAddress;
  completed_at: string;
  created_at: string;
  credit_card: CreditCard;
  currency: string;
  customer_id: number;
  customer_locale: string;
  device_id: any;
  discount_code: any;
  email: string;
  gift_cards: any[];
  legal_notice_url: any;
  line_items: LineItem[];
  location_id: any;
  name: string;
  note: string;
  note_attributes: NoteAttributes;
  order: Order;
  order_id: number;
  order_status_url: string;
  payment_due: string;
  payment_url: string;
  payments: Payment[];
  phone: any;
  presentment_currency: string;
  privacy_policy_url: any;
  refund_policy_url: any;
  requires_shipping: boolean;
  reservation_time: any;
  reservation_time_left: number;
  shipping_address: ShippingAddress;
  shipping_line: ShippingLine;
  shipping_policy_url: string;
  shipping_rate: ShippingRate;
  shopify_payments_account_id: any;
  source_identifier: any;
  source_name: string;
  source_url: any;
  subscription_policy_url: any;
  subtotal_price: string;
  tax_exempt: boolean;
  tax_lines: TaxLine[];
  tax_manipulations: any[];
  taxes_included: boolean;
  terms_of_sale_url: any;
  terms_of_service_url: any;
  token: string;
  total_additional_fees: any;
  total_duties: any;
  total_line_items_price: string;
  total_price: string;
  total_tax: string;
  total_tip_received: string;
  updated_at: string;
  user_id: any;
  web_url: string;
};

type CreditCard = {
  brand: string;
  customer_id: any;
  expiry_month: number;
  expiry_year: number;
  first_digits: string;
  first_name: string;
  last_digits: string;
  last_name: string;
};

type Shippingaddress2 = {
  address1: string;
  address2: string;
  city: string;
  company: any;
  country: string;
  country_code: string;
  first_name: string;
  id: number;
  last_name: string;
  phone: string;
  province: string;
  province_code: string;
  zip: string;
};

type ShippingRate = {
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
  compare_at_price: any;
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
  properties: EmptyObject;
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: any[];
  taxable: boolean;
  title: string;
  variant_id: number;
  variant_title: string;
  vendor: string;
};

type Lineitem10 = {
  applied_discounts: any[];
  compare_at_price: any;
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
  properties: EmptyObject;
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: any[];
  taxable: boolean;
  title: string;
  variant_id: number;
  variant_title: string;
  vendor: string;
};

type Transaction6 = {
  amount: string;
  amount_in: any;
  amount_out: any;
  amount_rounding: any;
  authorization: string;
  created_at: string;
  currency: string;
  device_id: any;
  error_code: any;
  gateway: string;
  id: number;
  kind: string;
  location_id: any;
  message: any;
  parent_id: any;
  payment_details: PaymentDetails;
  receipt: Receipt;
  status: string;
  test: boolean;
  transaction_group_id: any;
  user_id: any;
};

type PaymentDetails = {
  avs_result_code: any;
  credit_card_bin: any;
  credit_card_company: string;
  credit_card_expiration_month: any;
  credit_card_expiration_year: any;
  credit_card_name: any;
  credit_card_number: string;
  credit_card_wallet: any;
  cvv_result_code: any;
};

type Order2 = {
  id: number;
  name: string;
  status_url: string;
};

type NoteAttributes = {
  colour: string;
  "custom engraving": string;
};

type SmartCollection = {
  admin_graphql_api_id: string;
  body_html: string;
  disjunctive: boolean;
  handle: string;
  id: number;
  image: Image;
  products_count: number;
  published_at: string;
  published_scope: string;
  rules: Rule[];
  sort_order: string;
  template_suffix: any;
  title: string;
  updated_at: string;
};

type Rule = {
  column: string;
  condition: string;
  relation: string;
};

type Variant2 = {
  admin_graphql_api_id: string;
  barcode: string;
  compare_at_price: string;
  created_at: string;
  fulfillment_service: string;
  grams: number;
  id: number;
  image_id: number;
  inventory_item_id: number;
  inventory_management: string;
  inventory_policy: string;
  inventory_quantity: number;
  old_inventory_quantity: number;
  option1: string;
  option2: any;
  option3: any;
  position: number;
  presentment_prices: PresentmentPrice[];
  price: string;
  product_id: number;
  requires_shipping: boolean;
  sku: string;
  tax_code: string;
  taxable: boolean;
  title: string;
  updated_at: string;
  weight: number;
  weight_unit: string;
};

type Presentmentprice2 = {
  compare_at_price: ShopMoney;
  price: ShopMoney;
};

type Image4 = {
  admin_graphql_api_id: string;
  alt: string;
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

type CustomCollection = {
  admin_graphql_api_id: string;
  body_html: string;
  handle: string;
  id: number;
  image: Image;
  products_count: number;
  published_at: string;
  published_scope: string;
  sort_order: string;
  template_suffix: any;
  title: string;
  updated_at: string;
};

type Product = {
  admin_graphql_api_id: string;
  body_html: string;
  created_at: string;
  handle: string;
  id: number;
  image: Image;
  images: Image[];
  options: Option[];
  product_type: string;
  published_at: string;
  published_scope: string;
  status: string;
  tags: string;
  template_suffix: any;
  title: string;
  updated_at: string;
  variants: Variant[];
  vendor: string;
};

type Variant = {
  admin_graphql_api_id: string;
  barcode: string;
  compare_at_price: any;
  created_at: string;
  fulfillment_service: string;
  grams: number;
  id: number;
  image_id: (null | number)[];
  inventory_item_id: number;
  inventory_management: string;
  inventory_policy: string;
  inventory_quantity: number;
  old_inventory_quantity: number;
  option1: string;
  option2: string;
  option3: any;
  position: number;
  presentment_prices: PresentmentPrice[];
  price: string;
  product_id: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  updated_at: string;
  weight: number;
  weight_unit: string;
};

type PresentmentPrice = {
  compare_at_price: any;
  price: ShopMoney;
};

type Images2 = {
  admin_graphql_api_id: string;
  alt: any;
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

type Image3 = {
  admin_graphql_api_id: string;
  alt: any;
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

type Option = {
  id: number;
  name: string;
  position: number;
  product_id: number;
  values: string[];
};

type Collection = {
  admin_graphql_api_id: string;
  body_html: string;
  collection_type: string;
  handle: string;
  id: number;
  image: Image;
  products_count: number;
  published_at: string;
  published_scope: string;
  sort_order: string;
  template_suffix: any;
  title: string;
  updated_at: string;
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
  created_at: string;
  id: number;
  position: number;
  product_id: number;
  sort_value: string;
  updated_at: string;
};

type User = {
  account_owner: boolean;
  admin_graphql_api_id: string;
  bio: any;
  email: string;
  first_name: string;
  id: number;
  im: any;
  last_name: string;
  locale: string;
  permissions: string[];
  phone: any;
  receive_announcements: number;
  screen_name: any;
  "tfa_enabled?": boolean;
  url: string;
  user_type: string;
};

type GiftCard = {
  api_client_id: number;
  balance: string;
  code: string;
  created_at: string;
  currency: string;
  customer_id: any;
  disabled_at: string;
  expires_on: string;
  id: number;
  initial_value: string;
  last_characters: string;
  line_item_id: any;
  note: string;
  order_id: any;
  template_suffix: string;
  updated_at: string;
  user_id: any;
};

type Transaction5 = {
  admin_graphql_api_id: string;
  amount: string;
  authorization: string;
  authorization_expires_at: any;
  created_at: string;
  currency: string;
  currency_exchange_adjustment: any;
  device_id: any;
  error_code: any;
  extended_authorization_attributes: EmptyObject;
  gateway: string;
  id: number;
  kind: string;
  location_id: any;
  message: string;
  order_id: number;
  parent_id: number;
  payment_details: PaymentDetail;
  processed_at: string;
  receipt: Receipt;
  source_name: string;
  status: string;
  test: boolean;
  user_id: any;
};

type Receipt3 = {
  authorization: string;
  testcase: boolean;
};

type Refund2 = {
  additional_fees: any[];
  admin_graphql_api_id: string;
  created_at: string;
  currency: string;
  duties: any[];
  id: number;
  note: string;
  order_adjustments: OrderAdjustment[];
  order_id: number;
  processed_at: string;
  refund_line_items: RefundLineItem[];
  restock: boolean;
  shipping: Shipping;
  total_additional_fees_set: PresentmentMoney;
  total_duties_set: PresentmentMoney;
  transactions: Transaction[];
  user_id: number;
};

type Shipping = {
  amount: string;
  maximum_refundable: string;
  tax: string;
};

type Transaction4 = {
  admin_graphql_api_id: string;
  amount: string;
  authorization: string;
  created_at: string;
  currency: string;
  currency_exchange_adjustment: any;
  device_id: any;
  error_code: any;
  gateway: string;
  id: number;
  kind: string;
  location_id: any;
  maximum_refundable: string;
  message: string;
  order_id: number;
  parent_id: number;
  processed_at: string;
  receipt: EmptyObject;
  source_name: string;
  status: string;
  test: boolean;
  user_id: any;
};

type Refundlineitems4 = {
  discounted_price: string;
  discounted_total_price: string;
  line_item_id: number;
  location_id: any;
  price: string;
  quantity: number;
  restock_type: string;
  subtotal: string;
  total_cart_discount_amount: string;
  total_tax: string;
};

type Refundlineitems2 = {
  id: number;
  line_item: LineItem;
  line_item_id: number;
  location_id: number;
  quantity: number;
  restock_type: string;
  subtotal: number;
  subtotal_set: PresentmentMoney;
  total_tax: number;
  total_tax_set: PresentmentMoney;
};

type Lineitem9 = {
  admin_graphql_api_id: string;
  discount_allocations: DiscountAllocation[];
  duties: any[];
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status: any;
  gift_card: boolean;
  grams: number;
  id: number;
  name: string;
  price: string;
  price_set: PresentmentMoney;
  product_exists: boolean;
  product_id: number;
  properties: any[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: TaxLine[];
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: PresentmentMoney;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  vendor: any;
};

type Risk = {
  cause_cancel: boolean;
  checkout_id: number;
  display: boolean;
  id: number;
  merchant_message: string;
  message: string;
  order_id: number;
  recommendation: string;
  score: string;
  source: string;
};

type DraftOrder = {
  admin_graphql_api_id: string;
  applied_discount: AppliedDiscount;
  billing_address: ShippingAddress;
  completed_at: string;
  created_at: string;
  currency: string;
  customer: Customer;
  email: string;
  id: number;
  invoice_sent_at: string;
  invoice_url: string;
  line_items: LineItem[];
  name: string;
  note: string;
  note_attributes: any[];
  order_id: number;
  payment_terms: any;
  presentment_currency: string;
  shipping_address: ShippingAddress;
  shipping_line: ShippingLine;
  status: string;
  subtotal_price: string;
  subtotal_price_set: PresentmentMoney;
  tags: string;
  tax_exempt: boolean;
  tax_lines: TaxLine[];
  taxes_included: boolean;
  total_discounts_set: PresentmentMoney;
  total_line_items_price_set: PresentmentMoney;
  total_price: string;
  total_price_set: PresentmentMoney;
  total_shipping_price_set: PresentmentMoney;
  total_tax: string;
  total_tax_set: PresentmentMoney;
  updated_at: string;
};

type Shippingline3 = {
  custom: boolean;
  handle: string;
  price: string;
  title: string;
};

type Applieddiscount2 = {
  amount: string;
  description: string;
  title: string;
  value: string;
  value_type: string;
};

type ShippingAddress = {
  address1: string;
  address2: string;
  city: string;
  company: any;
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
};

type Lineitem8 = {
  admin_graphql_api_id: string;
  applied_discount: AppliedDiscount;
  custom: boolean;
  fulfillment_service: string;
  gift_card: boolean;
  grams: number;
  id: number;
  name: string;
  price: string;
  product_id: null | number | number;
  properties: any[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: TaxLine[];
  taxable: boolean;
  title: string;
  variant_id: null | number | number;
  variant_title: null | string | string;
  vendor: string;
};

type AppliedDiscount = {
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
  billing_address: BillingAddress;
  buyer_accepts_marketing: boolean;
  buyer_accepts_sms_marketing: boolean;
  cart_token: string;
  closed_at: any;
  completed_at: any;
  created_at: string;
  currency: string;
  customer: Customer;
  customer_locale: string;
  device_id: any;
  discount_codes: DiscountCode[];
  email: string;
  gateway: any;
  id: number;
  landing_site: any;
  line_items: LineItem[];
  location_id: any;
  name: string;
  note: any;
  note_attributes: NoteAttribute[];
  phone: any;
  presentment_currency: string;
  referring_site: any;
  shipping_address: BillingAddress;
  shipping_lines: ShippingLine[];
  sms_marketing_phone: any;
  source: any;
  source_identifier: any;
  source_name: string;
  source_url: any;
  subtotal_price: string;
  tax_lines: TaxLine[];
  taxes_included: boolean;
  token: string;
  total_discounts: string;
  total_duties: any;
  total_line_items_price: string;
  total_price: string;
  total_tax: string;
  total_weight: number;
  updated_at: string;
  user_id: any;
};

type Customer3 = {
  accepts_marketing: boolean;
  accepts_marketing_updated_at: string;
  admin_graphql_api_id: string;
  created_at: string;
  currency: string;
  default_address: Address;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  last_order_id: number;
  last_order_name: string;
  marketing_opt_in_level: any;
  multipass_identifier: any;
  note: any;
  orders_count: number;
  phone: string;
  state: string;
  tags: string;
  tax_exempt: boolean;
  tax_exemptions: any[];
  total_spent: string;
  updated_at: string;
  verified_email: boolean;
};

type Billingaddress2 = {
  address1: string;
  address2: string;
  city: string;
  company: any;
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
};

type Taxline2 = {
  channel_liable: any;
  price: string;
  rate: number;
  title: string;
};

type Lineitem7 = {
  applied_discounts: any[];
  compare_at_price: any;
  destination_location_id: any;
  discount_allocations: DiscountAllocation[];
  fulfillment_service: string;
  gift_card: boolean;
  grams: number;
  key: string;
  line_price: string;
  origin_location_id: any;
  presentment_title: string;
  presentment_variant_title: string;
  price: string;
  product_id: number;
  properties: any;
  quantity: number;
  rank: any;
  requires_shipping: boolean;
  sku: string;
  tax_lines: any[];
  taxable: boolean;
  title: string;
  unit_price_measurement: any;
  user_id: any;
  variant_id: number;
  variant_price: any;
  variant_title: string;
  vendor: string;
};

type Discountallocation2 = {
  amount: string;
  application_type: string;
  created_at: any;
  description: any;
  id: any;
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
  theme_store_id: number;
  updated_at: string;
};

type ScriptTag = {
  cache: boolean;
  created_at: string;
  display_scope: string;
  event: string;
  id: number;
  src: string;
  updated_at: string;
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
  published_at: string;
  shop_id: number;
  template_suffix: any;
  title: string;
  updated_at: string;
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
  published_at: string;
  status: string;
  updated_at: string;
  user_agent: string;
};

type Blog = {
  admin_graphql_api_id: string;
  commentable: string;
  created_at: string;
  feedburner: any;
  feedburner_location: any;
  handle: string;
  id: number;
  tags: string;
  template_suffix: any;
  title: string;
  updated_at: string;
};

type Asset = {
  checksum: string;
  content_type: string;
  created_at: string;
  key: string;
  public_url: string;
  size: number;
  theme_id: number;
  updated_at: string;
  value: string;
};

type Article = {
  admin_graphql_api_id: string;
  author: string;
  blog_id: number;
  body_html: string;
  created_at: string;
  handle: string;
  id: number;
  image: Image;
  published_at: string;
  summary_html: any;
  tags: string;
  template_suffix: any;
  title: string;
  updated_at: string;
  user_id: number;
};

type Image = {
  alt: string;
  created_at: string;
  height: number;
  src: string;
  width: number;
};

type Metafield = {
  admin_graphql_api_id: string;
  created_at: string;
  description: string;
  id: number;
  key: string;
  namespace: string;
  owner_id: number;
  owner_resource: string;
  type: string;
  updated_at: string;
  value: number | string;
  value_type: string;
};

type Engagement = {
  ad_spend: string;
  clicks_count: number;
  comments_count: any;
  complaints_count: any;
  currency_code: any;
  fails_count: any;
  favorites_count: number;
  fetched_at: any;
  impressions_count: any;
  is_cumulative: boolean;
  occurred_on: string;
  sends_count: any;
  shares_count: any;
  unique_clicks_count: any;
  unique_views_count: any;
  unsubscribes_count: any;
  utc_offset: any;
  views_count: number;
};

type MarketingEvent = {
  admin_graphql_api_id: string;
  breadcrumb_id: any;
  budget: string;
  budget_type: string;
  currency: string;
  description: any;
  ended_at: string;
  event_type: string;
  id: number;
  manage_url: any;
  marketed_resources: any[];
  marketing_activity_id: number;
  marketing_channel: string;
  paid: boolean;
  preview_url: any;
  referring_domain: string;
  remote_id: string;
  scheduled_to_end_at: string;
  started_at: string;
  utm_campaign: string;
  utm_medium: string;
  utm_source: string;
};

type Location = {
  active: boolean;
  address1: string;
  address2: any;
  admin_graphql_api_id: string;
  city: string;
  country: string;
  country_code: string;
  country_name: string;
  created_at: string;
  id: number;
  legacy: boolean;
  localized_country_name: string;
  localized_province_name: string;
  name: string;
  phone: any;
  province: string;
  province_code: string;
  updated_at: string;
  zip: string;
};

type InventoryLevel = {
  admin_graphql_api_id: string;
  available: number;
  inventory_item_id: number;
  location_id: number;
  updated_at: string;
};

type InventoryItem = {
  admin_graphql_api_id: string;
  cost: string;
  country_code_of_origin: any;
  country_harmonized_system_codes: any[];
  created_at: string;
  harmonized_system_code: any;
  id: number;
  province_code_of_origin: any;
  requires_shipping: boolean;
  sku: string;
  tracked: boolean;
  updated_at: string;
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
  body: any;
  created_at: string;
  description: string;
  id: number;
  message: string;
  path: string;
  subject_id: number;
  subject_type: string;
  verb: string;
};

type PriceRule = {
  admin_graphql_api_id: string;
  allocation_limit: number;
  allocation_method: string;
  created_at: string;
  customer_selection: string;
  ends_at: string;
  entitled_collection_ids: number[];
  entitled_country_ids: any[];
  entitled_product_ids: number[];
  entitled_variant_ids: any[];
  id: number;
  once_per_customer: boolean;
  prerequisite_collection_ids: number[];
  prerequisite_customer_ids: any[];
  prerequisite_product_ids: any[];
  prerequisite_quantity_range: any;
  prerequisite_saved_search_ids: number[];
  prerequisite_shipping_price_range: any;
  prerequisite_subtotal_range: {
    greater_than_or_equal_to: string;
  };
  prerequisite_to_entitlement_purchase: {
    prerequisite_amount: any;
  };
  prerequisite_to_entitlement_quantity_ratio: {
    entitled_quantity: number;
    prerequisite_quantity: number;
  };
  prerequisite_variant_ids: any[];
  starts_at: string;
  target_selection: string;
  target_type: string;
  title: string;
  updated_at: string;
  usage_limit: number;
  value: string;
  value_type: string;
};

type DiscountCodeCreation = {
  codes_count: number;
  completed_at: any;
  created_at: string;
  failed_count: number;
  id: number;
  imported_count: number;
  logs: any[];
  price_rule_id: number;
  started_at: any;
  status: string;
  updated_at: string;
};

type DiscountCode = {
  code: string;
  created_at: string;
  errors: EmptyObject;
  id: number;
  price_rule_id: number;
  updated_at: string;
  usage_count: number;
};

type DeprecatedApiCall = {
  api_type: string;
  description: string;
  documentation_url: string;
  endpoint: string;
  graphql_schema_name: any;
  last_call_at: string;
  migration_deadline: string;
  version: string;
};

type CustomerSavedSearch = {
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
  company: any;
  country: string;
  country_code: string;
  country_name: string;
  customer_id: number;
  default: boolean;
  first_name: any;
  id: number;
  last_name: any;
  name: string;
  phone: string;
  province: string;
  province_code: string;
  zip: string;
};

type CustomerAddress = {
  address1: string;
  address2: string;
  city: string;
  company: string;
  country: string;
  country_code: string;
  country_name: string;
  customer_id: number;
  default: boolean;
  first_name: string;
  id: number;
  last_name: string;
  name: string;
  phone: string;
  province: string;
  province_code: string;
  zip: string;
};

type Order = {
  admin_graphql_api_id: string;
  app_id: number;
  billing_address: BillingAddress;
  browser_ip: string;
  buyer_accepts_marketing: boolean;
  cancel_reason: any;
  cancelled_at: any;
  cart_token: string;
  checkout_id: number;
  checkout_token: string;
  client_details: ClientDetail;
  closed_at: string;
  confirmed: boolean;
  contact_email: string;
  created_at: string;
  currency: string;
  current_subtotal_price: string;
  current_subtotal_price_set: PresentmentMoney;
  current_total_discounts: string;
  current_total_discounts_set: PresentmentMoney;
  current_total_duties_set: any;
  current_total_price: string;
  current_total_price_set: PresentmentMoney;
  current_total_tax: string;
  current_total_tax_set: PresentmentMoney;
  customer: Customer;
  customer_locale: any;
  device_id: any;
  discount_applications: DiscountApplication[];
  discount_codes: DiscountCode[];
  email: string;
  estimated_taxes: boolean;
  financial_status: string;
  fulfillment_status: string;
  fulfillments: Fulfillment[];
  gateway: string;
  id: number;
  landing_site: string;
  landing_site_ref: string;
  line_items: LineItem[];
  location_id: any;
  name: string;
  note: string;
  note_attributes: NoteAttribute[];
  number: number;
  order_number: number;
  order_status_url: string;
  original_total_duties_set: any;
  payment_details: PaymentDetail;
  payment_gateway_names: string[];
  phone: string;
  presentment_currency: string;
  processed_at: string;
  processing_method: string;
  reference: string;
  referring_site: string;
  refunds: Refund[];
  shipping_address: BillingAddress;
  shipping_lines: ShippingLine[];
  source_identifier: string;
  source_name: string;
  source_url: any;
  subtotal_price: string;
  subtotal_price_set: PresentmentMoney;
  tags: string;
  tax_lines: TaxLine[];
  taxes_included: boolean;
  test: boolean;
  token: string;
  total_discounts: string;
  total_discounts_set: PresentmentMoney;
  total_line_items_price: string;
  total_line_items_price_set: PresentmentMoney;
  total_outstanding: string;
  total_price: string;
  total_price_set: PresentmentMoney;
  total_price_usd: string;
  total_shipping_price_set: PresentmentMoney;
  total_tax: string;
  total_tax_set: PresentmentMoney;
  total_tip_received: string;
  total_weight: number;
  updated_at: string;
  user_id: any;
};

type ShippingLine = {
  carrier_identifier: any;
  code: string;
  delivery_category: any;
  discount_allocations: any[];
  discounted_price: string;
  discounted_price_set: PresentmentMoney;
  id: number;
  phone: any;
  price: string;
  price_set: PresentmentMoney;
  requested_fulfillment_service_id: any;
  source: string;
  tax_lines: any[];
  title: string;
};

type Refunds4 = {
  additional_fees: any[];
  admin_graphql_api_id: string;
  created_at: string;
  duties: any[];
  id: number;
  note: string;
  order_adjustments: OrderAdjustment[];
  order_id: number;
  processed_at: string;
  refund_line_items: RefundLineItem[];
  restock: boolean;
  total_additional_fees_set: PresentmentMoney;
  total_duties_set: PresentmentMoney;
  transactions: Transaction[];
  user_id: any;
};

type Refundlineitem4 = {
  id: number;
  line_item: LineItem;
  line_item_id: number;
  location_id: any;
  quantity: number;
  restock_type: string;
  subtotal: number;
  subtotal_set: PresentmentMoney;
  total_tax: number;
  total_tax_set: PresentmentMoney;
};

type Transaction3 = {
  admin_graphql_api_id: string;
  amount: string;
  authorization: any;
  created_at: string;
  currency: string;
  device_id: any;
  error_code: any;
  gateway: string;
  id: number;
  kind: string;
  location_id: any;
  message: string;
  order_id: number;
  parent_id: number;
  processed_at: string;
  receipt: Receipt;
  source_name: string;
  status: string;
  test: boolean;
  user_id: any;
};

type Receipt2 = {
  gift_card_id: number;
  gift_card_last_characters: string;
};

type OrderAdjustment = {
  amount: string;
  amount_set: PresentmentMoney;
  id: number;
  kind: string;
  order_id: number;
  reason: string;
  refund_id: number;
  tax_amount: string;
  tax_amount_set: PresentmentMoney;
};

type Refunds3 = {
  admin_graphql_api_id: string;
  created_at: string;
  id: number;
  note: string;
  order_adjustments: any[];
  order_id: number;
  processed_at: string;
  refund_line_items: RefundLineItem[];
  restock: boolean;
  transactions: Transaction[];
  user_id: number;
};

type Refundlineitem3 = {
  id: number;
  line_item: LineItem;
  line_item_id: number;
  location_id: number;
  quantity: number;
  restock_type: string;
  subtotal: number;
  subtotal_set: PresentmentMoney;
  total_tax: number;
  total_tax_set: PresentmentMoney;
};

type Lineitem6 = {
  admin_graphql_api_id: string;
  discount_allocations: DiscountAllocation[];
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status: any;
  gift_card: boolean;
  grams: number;
  id: number;
  name: string;
  price: string;
  price_set: PresentmentMoney;
  product_exists: boolean;
  product_id: number;
  properties: NoteAttribute[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: TaxLine[];
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: PresentmentMoney;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  vendor: any;
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
  refund_line_items: RefundLineItem[];
  restock: boolean;
  total_additional_fees_set: PresentmentMoney;
  total_duties_set: PresentmentMoney;
  transactions: Transaction[];
  user_id: number;
};

type Refundlineitem2 = {
  id: number;
  line_item: LineItem;
  line_item_id: number;
  location_id: number;
  quantity: number;
  restock_type: string;
  subtotal: number;
  subtotal_set: PresentmentMoney;
  total_tax: number;
  total_tax_set: PresentmentMoney;
};

type Transaction2 = {
  admin_graphql_api_id: string;
  amount: string;
  authorization: string;
  created_at: string;
  currency: string;
  device_id: any;
  error_code: any;
  gateway: string;
  id: number;
  kind: string;
  location_id: any;
  message: any;
  order_id: number;
  parent_id: number;
  processed_at: string;
  receipt: EmptyObject;
  source_name: string;
  status: string;
  test: boolean;
  user_id: any;
};

type Refund = {
  additional_fees: any[];
  admin_graphql_api_id: string;
  created_at: string;
  duties: any[];
  id: number;
  note: any;
  order_adjustments: any[];
  order_id: number;
  processed_at: string;
  refund_line_items: RefundLineItem[];
  restock: boolean;
  total_additional_fees_set: PresentmentMoney;
  total_duties_set: PresentmentMoney;
  transactions: Transaction[];
  user_id: any;
};

type RefundLineItem = {
  id: number;
  line_item: LineItem;
  line_item_id: number;
  location_id: any;
  quantity: number;
  restock_type: string;
  subtotal: number;
  subtotal_set: PresentmentMoney;
  total_tax: number;
  total_tax_set: PresentmentMoney;
};

type Lineitem5 = {
  admin_graphql_api_id: string;
  discount_allocations: DiscountAllocation[];
  duties: any[];
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status: any;
  gift_card: boolean;
  grams: number;
  id: number;
  name: string;
  price: string;
  price_set: PresentmentMoney;
  product_exists: boolean;
  product_id: number;
  properties: NoteAttribute[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: TaxLine[];
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: PresentmentMoney;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  vendor: any;
};

type Transaction = {
  admin_graphql_api_id: string;
  amount: string;
  authorization: any;
  created_at: string;
  currency: string;
  device_id: any;
  error_code: any;
  gateway: string;
  id: number;
  kind: string;
  location_id: any;
  message: string;
  order_id: number;
  parent_id: number;
  processed_at: string;
  receipt: EmptyObject;
  source_name: string;
  status: string;
  test: boolean;
  user_id: any;
};

type PaymentDetail = {
  avs_result_code: any;
  credit_card_bin: any;
  credit_card_company: string;
  credit_card_expiration_month: any;
  credit_card_expiration_year: any;
  credit_card_name: any;
  credit_card_number: string;
  credit_card_wallet: any;
  cvv_result_code: any;
};

type Lineitem4 = {
  admin_graphql_api_id: string;
  discount_allocations: DiscountAllocation[];
  duties: any[];
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status: string;
  gift_card: boolean;
  grams: number;
  id: number;
  name: string;
  price: string;
  price_set: PresentmentMoney;
  product_exists: boolean;
  product_id: number;
  properties: NoteAttribute[][];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: TaxLine[];
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: PresentmentMoney;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  vendor: string;
};

type Fulfillments3 = {
  admin_graphql_api_id: string;
  created_at: string;
  id: number;
  line_items: LineItem[];
  location_id: number;
  name: string;
  order_id: number;
  receipt: Receipt;
  service: string;
  shipment_status: any;
  status: string;
  tracking_company: string;
  tracking_number: string;
  tracking_numbers: string[];
  tracking_url: string;
  tracking_urls: string[];
  updated_at: string;
};

type Lineitem3 = {
  admin_graphql_api_id: string;
  discount_allocations: DiscountAllocation[];
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status: any;
  gift_card: boolean;
  grams: number;
  id: number;
  name: string;
  price: string;
  price_set: PresentmentMoney;
  product_exists: boolean;
  product_id: number;
  properties: NoteAttribute[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: TaxLine[];
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: PresentmentMoney;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  vendor: any;
};

type Fulfillments2 = {
  admin_graphql_api_id: string;
  created_at: string;
  id: number;
  line_items: LineItem[];
  location_id: number;
  name: string;
  order_id: number;
  origin_address: EmptyObject;
  receipt: Receipt;
  service: string;
  shipment_status: any;
  status: string;
  tracking_company: string;
  tracking_number: string;
  tracking_numbers: string[];
  tracking_url: string;
  tracking_urls: string[];
  updated_at: string;
};

type Lineitem2 = {
  admin_graphql_api_id: string;
  discount_allocations: DiscountAllocation[];
  duties: any[];
  fulfillable_quantity: number;
  fulfillment_service: string;
  fulfillment_status: any;
  gift_card: boolean;
  grams: number;
  id: number;
  name: string;
  price: string;
  price_set: PresentmentMoney;
  product_exists: boolean;
  product_id: number;
  properties: NoteAttribute[];
  quantity: number;
  requires_shipping: boolean;
  sku: string;
  tax_lines: TaxLine[];
  taxable: boolean;
  title: string;
  total_discount: string;
  total_discount_set: PresentmentMoney;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  vendor: any;
};

type DiscountAllocation = {
  amount: string;
  amount_set: PresentmentMoney;
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
  line_items: LineItem[];
  location_id: number;
  name: string;
  order_id: number;
  origin_address: EmptyObject;
  receipt: EmptyObject;
  service: string;
  shipment_status: any;
  status: string;
  tracking_company: any;
  tracking_number: any;
  tracking_numbers: any[];
  tracking_url: any;
  tracking_urls: any[];
  updated_at: string;
};

type LineItem = {
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
  price_set: PresentmentMoney;
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
  total_discount_set: PresentmentMoney;
  variant_id: number;
  variant_inventory_management: string;
  variant_title: string;
  vendor: string;
};

type EmptyObject = {};

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

type DiscountApplication = {
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
  default_address: Address;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  last_order_id: number;
  last_order_name: string;
  marketing_opt_in_level: any;
  multipass_identifier: any;
  note: any;
  orders_count: number;
  phone: string;
  state: string;
  tags: string;
  tax_exempt: boolean;
  tax_exemptions: any[];
  total_spent: string;
  updated_at: string;
  verified_email: boolean;
};

type BillingAddress = {
  address1: string;
  address2: string;
  city: string;
  company: any;
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
};

type Taxlines2 = {
  price: string;
  price_set: PresentmentMoney;
  rate: number;
  title: string;
};

type TaxLine = {
  channel_liable: any;
  price: string;
  price_set: PresentmentMoney;
  rate: number;
  title: string;
};

type NoteAttribute = {
  name: string;
  value: string;
};

type Discountcode = {
  amount: string;
  code: string;
  type: string;
};

type PresentmentMoney = {
  presentment_money: ShopMoney;
  shop_money: ShopMoney;
};

type ShopMoney = {
  amount: string;
  currency_code: string;
};

type ClientDetail = {
  accept_language: any;
  browser_height: any;
  browser_ip: string;
  browser_width: any;
  session_hash: any;
  user_agent: any;
};

type EmailMessage = {
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
  last_order_id: number;
  last_order_name: string;
  marketing_opt_in_level: string;
  multipass_identifier: any;
  note: string;
  orders_count: number;
  phone: string;
  state: string;
  tags: string;
  tax_exempt: boolean;
  tax_exemptions: any[];
  total_spent: string;
  updated_at: string;
  verified_email: boolean;
};

type Address = {
  address1: string;
  address2: string;
  city: string;
  company: any;
  country: string;
  country_code: string;
  country_name: string;
  customer_id: number;
  default: boolean;
  first_name: string;
  id: number;
  last_name: string;
  name: string;
  phone: string;
  province: string;
  province_code: string;
  zip: string;
};

type UsageCharge = {
  balance_remaining: number;
  balance_used: number;
  billing_on: string;
  created_at: string;
  description: string;
  id: number;
  price: string;
  risk_level: number;
};

type RecurringApplicationCharge = {
  activated_on: string;
  api_client_id: number;
  balance_remaining: number;
  balance_used: number;
  billing_on: string;
  cancelled_on: any;
  capped_amount: string;
  confirmation_url: string;
  created_at: string;
  decorated_return_url: string;
  id: number;
  name: string;
  price: string;
  return_url: string;
  risk_level: number;
  status: string;
  test: boolean;
  trial_days: number;
  trial_ends_on: string;
  update_capped_amount_url: string;
  updated_at: string;
};

type ApplicationCredit = {
  amount: string;
  description: string;
  id: number;
  test: boolean;
};

type ApplicationCharge = {
  api_client_id: number;
  charge_type: string;
  confirmation_url: string;
  created_at: string;
  decorated_return_url: string;
  id: number;
  name: string;
  price: string;
  return_url: string;
  status: string;
  test: boolean;
  updated_at: string;
};

type Report = {
  category: string;
  id: number;
  name: string;
  shopify_ql: string;
  updated_at: string;
};

type StorefrontAccessToken = {
  access_scope: string;
  access_token: string;
  admin_graphql_api_id: string;
  created_at: string;
  id: number;
  title: string;
};

type AccessScope = {
  handle: string;
};
