export const getTypeByName = (name: any) => {
  switch (name) {
    case "applied_discount": {
      return "AppliedDiscount";
    }
    case "applied_discounts": {
      return "AppliedDiscount[]";
    }

    default: {
      return "";
    }
  }
};
