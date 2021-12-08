export function getCorrectName(name: string) {
  switch (name) {
    case "Abandonedcheckouts": {
      return "Checkout";
    }
    case "DeprecatedAPIcalls": {
      return "DeprecatedApiCalls";
    }
    case "OrderRisk": {
      return "Risk";
    }
    case "ProductImage": {
      return "Image";
    }
    case "ProductVariant": {
      return "Variant";
    }
    case "ProductResourceFeedback": {
      return "ResourceFeedback";
    }
    case "AssignedFulfillmentOrder": {
      return "FulfillmentOrder";
    }
    case "CancellationRequest": {
      return "FulfillmentOrder";
    }
    case "FulfillmentRequest": {
      return "FulfillmentOrder";
    }
    case "Payouts": {
      return "Payout";
    }
    case "Transactions": {
      return "ShopifyPaymentTransaction";
    }
  }
  return name;
}
