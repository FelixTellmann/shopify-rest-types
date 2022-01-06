import { ShippingAddress, Collection } from "./root-types";

export type ReportId = number;
export type RecurringApplicationChargeId = number;
export type CustomerId = number;
export type AddressId = number;
export type CustomerSavedSearchId = number;
export type PriceRuleId = number;
export type DiscountCodeId = number;
export type WebhookId = number;
export type InventoryItemId = number;
export type MarketingEventId = number;
export type MetafieldId = number;
export type BlogId = number;
export type ArticleId = number;
export type ThemeId = number;
export type CommentId = number;
export type PageId = number;
export type RedirectId = number;
export type ScriptTagId = number;
export type DraftOrderId = number;
export type OrderId = number;
export type RiskId = number;
export type GiftCardId = number;
export type CustomCollectionId = number;
export type ProductId = number;
export type ImageId = number;
export type VariantId = number;
export type SmartCollectionId = number;
export type Token = number;
export type CollectionListingId = number;
export type MobilePlatformApplicationId = number;
export type ProductListingId = number;
export type CarrierServiceId = number;
export type FulfillmentId = number;
export type FulfillmentServiceId = number;
export type CountryId = number;
export type ProvinceId = number;


export type PutPaths =
  | {
      /** Updates a report  */
      path: `reports/${ReportId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates the capped amount of an active recurring application charge. Note that you cannot use this endpoint to update  an [Annual subscription](https://shopify.dev/apps/billing/subscriptions/annual#limitations).  */
      path: `recurring_application_charges/${RecurringApplicationChargeId}/customize?recurring_application_charge[capped_amount]=200`;
      response: {
      };
    }
  | {
      /** Updates a customer.  */
      path: `customers/${CustomerId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates an existing customer address.  */
      path: `customers/${CustomerId}/addresses/${AddressId}`;
      body: {
      };
      response: {
        customer_address: ShippingAddress;
      };
    }
  | {
      /** Performs bulk operations for multiple customer addresses.  */
      path: `customers/${CustomerId}/addresses/set?address_ids[]=1053317294&amp;operation=destroy`;
      query: {
        /** Performs bulk operations for customer addresses specified by a comma-separated list of IDs. */
        "address_ids[]"?: string;
        /** Operation to perform by keyword (for example, destroy) */
        operation?: string;
      };
    }
  | {
      /** Sets the default address for a customer.  */
      path: `customers/${CustomerId}/addresses/${AddressId}/default`;
      response: {
        customer_address: ShippingAddress;
      };
    }
  | {
      /** Updates a customer saved search.  */
      path: `customer_saved_searches/${CustomerSavedSearchId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates an existing discount code  */
      path: `price_rules/${PriceRuleId}/discount_codes/${DiscountCodeId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates an existing a price rule  */
      path: `price_rules/${PriceRuleId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Update a webhook subscription's topic or address URIs  */
      path: `webhooks/${WebhookId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates an existing inventory item  */
      path: `inventory_items/${InventoryItemId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates a marketing event  */
      path: `marketing_events/${MarketingEventId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates a metafield.  */
      path: `metafields/${MetafieldId}`;
      body: {
      };
      response: {
      };
    }
  | {
      path: `blogs/${BlogId}/articles/${ArticleId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Creates or updates an asset for a theme.
      In the PUT request, you can include the src or source_key property to create the asset from an existing file.  */
      path: `themes/${ThemeId}/assets`;
      query: {
        /** The path within the theme to an existing asset. Include in the body of the PUT request to create a duplicate asset. */
        source_key?: string;
        /** The source URL of an image. Include in the body of the PUT request to upload the image to Shopify. */
        src?: string;
      };
      body: {
      };
      response: {
      };
    }
  | {
      /** Update a blog  */
      path: `blogs/${BlogId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates a comment of an article  */
      path: `comments/${CommentId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates a page  */
      path: `pages/${PageId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates an existing redirect  */
      path: `redirects/${RedirectId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates a script tag  */
      path: `script_tags/${ScriptTagId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates an existing theme.  */
      path: `themes/${ThemeId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates a draft order  */
      path: `draft_orders/${DraftOrderId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Completes a draft order.
      Using the DraftOrder resource, you can create a draft order and transition it to an order.
      The following flows are supported:
      Create a draft order that calculates taxes and totals
      but accept payment from the customer outside of Shopify.
      Create a draft order and send an invoice to the customer.
        */
      path: `draft_orders/${DraftOrderId}/complete`;
      query: {
        payment_pending?: string;
      };
      response: {
      };
    }
  | {
      /** This operation allows for updating properties of an order including `buyer_accepts_marketing`, `email`, `phone`, `note`, `tags`, `metafields` and `shipping_address_attributes`. It is not for editing the items of an order.  */
      path: `orders/${OrderId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates an order risk
      Note
      You cannot modify an order risk that was created by another application.
        */
      path: `orders/${OrderId}/risks/${RiskId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates an existing gift card.
      The gift card's balance can't be changed via the API. You can change only the expiry date, note, and template suffix.  */
      path: `gift_cards/${GiftCardId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates an existing custom collection  */
      path: `custom_collections/${CustomCollectionId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Update a product  */
      path: `products/${ProductId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Modify an existing product image  */
      path: `products/${ProductId}/images/${ImageId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates an existing product variant  */
      path: `variants/${VariantId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates an existing smart collection  */
      path: `smart_collections/${SmartCollectionId}`;
      body: {
        smart_collection: Omit<Collection, "admin_graphql_api_id" | "updated_at" | "rules" | "title"> & Required<Pick<Collection, "rules" | "title">>;
      };
      response: {
        smart_collection: Collection;
      };
    }
  | {
      /** Updates the ordering type of products in a smart collection  */
      path: `smart_collections/${SmartCollectionId}/order?products[]=921728736&amp;products[]=632910392`;
      query: {
        /** An array of product IDs, in the order that you want them to appear at the top of the collection. When products is specified but empty, any previously sorted products are cleared. */
        products?: string;
        /** The type of sorting to apply. Valid values are listed in the Properties section above. */
        sort_order?: string;
      };
    }
  | {
      /** Modifies an existing checkout  */
      path: `checkouts/${Token}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Create a collection listing to publish a collection to your app  */
      path: `collection_listings/${CollectionListingId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Update a mobile platform application  */
      path: `mobile_platform_applications/${MobilePlatformApplicationId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Create a product listing to publish a product to your app  */
      path: `product_listings/${ProductListingId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Updates a carrier service. Only the app that creates a carrier service can update it.  */
      path: `carrier_services/${CarrierServiceId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** Update information associated with a fulfillment  */
      path: `orders/${OrderId}/fulfillments/${FulfillmentId}`;
      body: {
      };
      response: {
      };
    }
  | {
      path: `fulfillment_services/${FulfillmentServiceId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** 
      Caution
      As of version 2020-10, the tax field is deprecated.
      Updates an existing country.  */
      path: `countries/${CountryId}`;
      body: {
      };
      response: {
      };
    }
  | {
      /** 
      Caution
      As of version 2020-10, the tax field is deprecated.
      Updates an existing province for a country.  */
      path: `countries/${CountryId}/provinces/${ProvinceId}`;
      body: {
      };
      response: {
      };
    }
