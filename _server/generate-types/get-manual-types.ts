export function getManualTypes(key: string) {
  switch (key) {
    case "option1": {
      return "string";
    }
    case "option2": {
      return "string";
    }
    case "option3": {
      return "string";
    }
    case "source_url": {
      return "string";
    }
    case "graphql_schema_name": {
      return "string";
    }
    case "shopify_payments_account_id": {
      return "number";
    }
    case "transaction_group_id": {
      return "number";
    }
    case "breadcrumb_id": {
      return "number";
    }
    case "destination_location_id": {
      return "number";
    }
    case "origin_location_id": {
      return "number";
    }
    case "requested_fulfillment_service_id": {
      return "number";
    }
    case "delivery_range": {
      return "string";
    }
    case "estimated_time_in_transit": {
      return "string";
    }
    case "credit_card_bin": {
      return "string";
    }
    case "avs_result_code": {
      return "string";
    }
    case "cvv_result_code": {
      return "string";
    }
    case "credit_card_name": {
      return "string";
    }
    case "credit_card_wallet": {
      return "string";
    }
    case "credit_card_expiration_month": {
      return "string";
    }
    case "credit_card_expiration_year": {
      return "string";
    }
    case "shipping_policy_url": {
      return "string";
    }
    case "carrier_identifier": {
      return "string";
    }
    case "delivery_category": {
      return "string";
    }
    case "redirect_url": {
      return "string";
    }
    case "privacy_policy_url": {
      return "string";
    }
    case "accept_language": {
      return "string";
    }
    case "browser_ip": {
      return "string";
    }
    case "session_hash": {
      return "string";
    }
    case "browser_height": {
      return "number";
    }
    case "browser_width": {
      return "number";
    }
    case "unsubscribes_count": {
      return "number";
    }
    case "complaints_count": {
      return "number";
    }
    case "impressions_count": {
      return "number";
    }
    case "comments_count": {
      return "number";
    }
    case "shares_count": {
      return "number";
    }
    case "utc_offset": {
      return "string";
    }
    case "fails_count": {
      return "number";
    }
    case "sends_count": {
      return "number";
    }
    case "unique_views_count": {
      return "number";
    }
    case "unique_clicks_count": {
      return "number";
    }
    case "subscription_policy_url": {
      return "string";
    }
    case "terms_of_sale_url": {
      return "string";
    }
    case "legal_notice_url": {
      return "string";
    }
    case "terms_of_service_url": {
      return "string";
    }
    case "total_additional_fees": {
      return "string";
    }
    case "fetched_at": {
      return "string";
    }
    case "variant_price": {
      return "string";
    }
    case "prerequisite_amount": {
      return "string";
    }
    case "amount_in": {
      return "string";
    }
    case "amount_out": {
      return "string";
    }
    case "percent_modifier": {
      return "string";
    }
    case "amount_rounding": {
      return "string";
    }
    case "min_order_subtotal": {
      return "string";
    }
    case "max_order_subtotal": {
      return "string";
    }
    case "tax_manipulations": {
      return "unknown[]";
    }
    case "additional_fees": {
      return "unknown[]";
    }
    case "logs": {
      return "unknown[]";
    }
    case "channel_liable": {
      return "boolean";
    }
    case "applied_discounts": {
      return "AppliedDiscount[]";
    }
    case "auto_configure_tax_inclusivity": {
      return "unknown";
    }
    case "unit_price_measurement": {
      return "unknown";
    }
    case "rank": {
      return "unknown";
    }
    default: {
      return "any";
    }
  }
}
