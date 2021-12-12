export const fixShopifyApiErrors = (masterTypes: any) => {
  if (masterTypes?.Checkout?.discount_code?.type) {
    masterTypes["Checkout"]["discount_code"]["type"] = "string";
  }
  if (masterTypes?.ShippingZone?.provinces) {
    delete masterTypes?.ShippingZone?.provinces;
  }
  if (masterTypes?.Checkout?.reservation_time?.type) {
    masterTypes["Checkout"]["reservation_time"]["type"] = "string";
  }
  if (masterTypes?.Checkout?.gift_cards?.type) {
    masterTypes["Checkout"]["gift_cards"]["type"] = "CheckoutGiftCard[]";
    masterTypes["CheckoutGiftCard"] = {
      id: "number",
      balance: "string",
      amount_used: "string",
      last_characters: "string",
    };
  }

  return masterTypes;
};
