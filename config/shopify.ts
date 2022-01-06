export const SHOPIFY = {
  api: {
    rest: {
      fixedTypes: ["admin_graphql_api_id", "updated_at"],
      url: `https://shopify.dev/api/admin-rest`,
      versions: ["2022-01" /*"2021-10"*/ /*, "2021-07", "2021-04"*/],
      nav: [
        {
          key: "access",
          label: "Access",
          children: [
            {
              key: "accessscope",
              label: "AccessScope",
            },
            {
              key: "storefrontaccesstoken",
              label: "StorefrontAccessToken",
            },
          ],
        },
        {
          key: "analytics",
          label: "Analytics",
          children: [
            {
              key: "report",
              label: "Report",
            },
          ],
        },
        {
          key: "billing",
          label: "Billing",
          children: [
            {
              key: "applicationcharge",
              label: "ApplicationCharge",
            },
            {
              key: "applicationcredit",
              label: "ApplicationCredit",
            },
            {
              key: "recurringapplicationcharge",
              label: "RecurringApplicationCharge",
            },
            {
              key: "usagecharge",
              label: "UsageCharge",
            },
          ],
        },
        {
          key: "customers",
          label: "Customers",
          children: [
            {
              key: "customer",
              label: "Customer",
            },
            {
              key: "customer-address",
              label: "Customer Address",
            },
            {
              key: "customersavedsearch",
              label: "CustomerSavedSearch",
            },
          ],
        },
        {
          key: "Deprecated API calls",
          label: "Deprecated API calls",
          children: [
            {
              key: "deprecated-api-calls",
              label: "Deprecated API calls",
            },
          ],
        },
        {
          key: "discounts",
          label: "Discounts",
          children: [
            {
              key: "discountcode",
              label: "DiscountCode",
            },
            {
              key: "pricerule",
              label: "PriceRule",
            },
          ],
        },
        {
          key: "events",
          label: "Events",
          children: [
            {
              key: "event",
              label: "Event",
            },
            {
              key: "webhook",
              label: "Webhook",
            },
          ],
        },
        {
          key: "inventory",
          label: "Inventory",
          children: [
            {
              key: "inventoryitem",
              label: "InventoryItem",
            },
            {
              key: "inventorylevel",
              label: "InventoryLevel",
            },
            {
              key: "location",
              label: "Location",
            },
          ],
        },
        {
          key: "MarketingEvent",
          label: "MarketingEvent",
          children: [
            {
              key: "marketingevent",
              label: "MarketingEvent",
            },
          ],
        },
        {
          key: "Metafield",
          label: "Metafield",
          children: [
            {
              key: "metafield",
              label: "Metafield",
            },
          ],
        },
        {
          key: "online-store",
          label: "Online store",
          children: [
            {
              key: "article",
              label: "Article",
            },
            {
              key: "asset",
              label: "Asset",
            },
            {
              key: "blog",
              label: "Blog",
            },
            {
              key: "comment",
              label: "Comment",
            },
            {
              key: "page",
              label: "Page",
            },
            {
              key: "redirect",
              label: "Redirect",
            },
            {
              key: "scripttag",
              label: "ScriptTag",
            },
            {
              key: "theme",
              label: "Theme",
            },
          ],
        },
        {
          key: "orders",
          label: "Orders",
          children: [
            {
              key: "abandoned-checkouts",
              label: "Abandoned checkouts",
            },
            {
              key: "draftorder",
              label: "DraftOrder",
            },
            {
              key: "order",
              label: "Order",
            },
            {
              key: "order-risk",
              label: "Order Risk",
            },
            {
              key: "refund",
              label: "Refund",
            },
            {
              key: "transaction",
              label: "Transaction",
            },
          ],
        },
        {
          key: "plus",
          label: "Plus",
          children: [
            {
              key: "gift-card",
              label: "Gift Card",
            },
            {
              key: "user",
              label: "User",
            },
          ],
        },
        {
          key: "products",
          label: "Products",
          children: [
            {
              key: "collect",
              label: "Collect",
            },
            {
              key: "collection",
              label: "Collection",
            },
            {
              key: "customcollection",
              label: "CustomCollection",
            },
            {
              key: "product",
              label: "Product",
            },
            {
              key: "product-image",
              label: "Product Image",
            },
            {
              key: "product-variant",
              label: "Product Variant",
            },
            {
              key: "smartcollection",
              label: "SmartCollection",
            },
          ],
        },
        {
          key: "sales-channels",
          label: "Sales channels",
          children: [
            {
              key: "checkout",
              label: "Checkout",
            },
            {
              key: "collectionlisting",
              label: "CollectionListing",
            },
            {
              key: "mobileplatformapplication",
              label: "MobilePlatformApplication",
            },
            {
              key: "payment",
              label: "Payment",
            },
            {
              key: "product-resourcefeedback",
              label: "Product ResourceFeedback",
            },
            {
              key: "productlisting",
              label: "ProductListing",
            },
            {
              key: "resourcefeedback",
              label: "ResourceFeedback",
            },
          ],
        },
        {
          key: "shipping-and-fulfillment",
          label: "Shipping and fulfillment",
          children: [
            {
              key: "assignedfulfillmentorder",
              label: "AssignedFulfillmentOrder",
            },
            {
              key: "cancellationrequest",
              label: "CancellationRequest",
            },
            {
              key: "carrierservice",
              label: "CarrierService",
            },
            {
              key: "fulfillment",
              label: "Fulfillment",
            },
            {
              key: "fulfillmentevent",
              label: "FulfillmentEvent",
            },
            {
              key: "fulfillmentorder",
              label: "FulfillmentOrder",
            },
            {
              key: "fulfillmentrequest",
              label: "FulfillmentRequest",
            },
            {
              key: "fulfillmentservice",
              label: "FulfillmentService",
            },
            {
              key: "locationsformove",
              label: "LocationsForMove",
            },
          ],
        },
        {
          key: "shopify_payments",
          label: "Shopify Payments",
          children: [
            {
              key: "balance",
              label: "Balance",
            },
            {
              key: "dispute",
              label: "Dispute",
            },
            {
              key: "payouts",
              label: "Payouts",
            },
            {
              key: "transactions",
              label: "Transactions",
            },
          ],
        },
        {
          key: "store-properties",
          label: "Store properties",
          children: [
            {
              key: "country",
              label: "Country",
            },
            {
              key: "currency",
              label: "Currency",
            },
            {
              key: "policy",
              label: "Policy",
            },
            {
              key: "province",
              label: "Province",
            },
            {
              key: "shippingzone",
              label: "ShippingZone",
            },
            {
              key: "shop",
              label: "Shop",
            },
          ],
        },
        {
          key: "TenderTransaction",
          label: "TenderTransaction",
          children: [
            {
              key: "tendertransaction",
              label: "TenderTransaction",
            },
          ],
        },
      ],
    },
  },
};
