export const getSingularKey = (key: string) => {
  switch (key) {
    case "rules": {
      return "rule";
    }
    case "access_scopes": {
      return "access_scope";
    }
    case "address": {
      return "address";
    }
    case "shipping_lines": {
      return "shipping_line";
    }
    case "duties": {
      return "duty";
    }
    case "note_attributes": {
      return "note_attribute";
    }
    case "billing_address": {
      return "billing_address";
    }
    case "customer_address": {
      return "customer_address";
    }
    case "shipping_address": {
      return "shipping_address";
    }
    case "application_charges": {
      return "application_charge";
    }
    case "recurring_application_charges": {
      return "recurring_application_charge";
    }
    case "usage_charges": {
      return "usage_charge";
    }
    case "discount_codes": {
      return "discount_code";
    }
    case "price_rules": {
      return "price_rule";
    }
    case "deprecated_api_calls": {
      return "deprecated_api_calls";
    }
    case "tax_lines": {
      return "tax_line";
    }
    case "origin_addresses": {
      return "origin_address";
    }
    case "default_addresses": {
      return "default_address";
    }
    case "default_address": {
      return "default_address";
    }
    case "origin_address": {
      return "origin_address";
    }
    case "articles": {
      return "article";
    }
    case "pages": {
      return "page";
    }
    case "themes": {
      return "theme";
    }
    case "images": {
      return "image";
    }
    case "shipping_rates": {
      return "shipping_rate";
    }
    case "provinces": {
      return "province";
    }
    case "fulfillment_services": {
      return "fulfillment_service";
    }
    case "disputes": {
      return "dispute";
    }
    case "shipping_zones": {
      return "shipping_zone";
    }
    case "currencies": {
      return "currency";
    }
    case "Status": {
      return "Status";
    }
    case "policies": {
      return "policy";
    }
    case "properties": {
      return "property";
    }
    case "countries": {
      return "country";
    }
    case "carrier_services": {
      return "carrier_service";
    }
    case "presentment_prices": {
      return "presentment_price";
    }
    default: {
      return key.replace(/e?s$/, "");
    }
  }
};
