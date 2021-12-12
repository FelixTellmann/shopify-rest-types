export const nameToSnakeCase = (name: string) => {
  switch (name) {
    case "ProductVariant": {
      return "variant";
    }
    case "ProductImage": {
      return "image";
    }
    case "DeprecatedAPIcalls": {
      return "deprecated_api_calls";
    }
    case "Abandonedcheckouts": {
      return "INCONSISTENT_API";
    }
    case "Dispute": {
      return "INCONSISTENT_API";
    }
    case "StorefrontAccessToken": {
      return "INCONSISTENT_API";
    }
    case "ProductResourceFeedback": {
      return "resource_feedback";
    }
    case "AssignedFulfillmentOrder": {
      return "fulfillment_order";
    }
    case "CancellationRequest": {
      return "fulfillment_order";
    }
    case "FulfillmentRequest": {
      return "fulfillment_order";
    }
    case "Transactions": {
      return "INCONSISTENT_API";
      // return "shopify_payment_transaction";
    }
    case "Policy": {
      return "INCONSISTENT_API";
      // return "shopify_payment_transaction";
    }
    case "ShippingZone": {
      return "INCONSISTENT_API";
      // return "shopify_payment_transaction";
    }
    case "Checkout": {
      return "INCONSISTENT_API";
      // return "shopify_payment_transaction";
    }
    case "CollectionListing": {
      return "INCONSISTENT_API";
      // return "shopify_payment_transaction";
    }
    case "OrderRisk": {
      return "risk";
      // return "shopify_payment_transaction";
    }
    case "Payouts": {
      return "payout";
    }
    default: {
      return name.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`).replace(/^_/, "");
    }
  }
};

/*
Hi,

  Please have a look at your "The Checkout object".
  The data in the example is all wrapped in individual Objects instead of direct data for each property, as seen in the example below. This is inconsistent with the rest of the API documentation.

  You can contact me at felix@tellmann.co.za for more info if needed.
*/
