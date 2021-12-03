export const stripHtml = (str: string) => {
  if (str && typeof str === "string") {
    return str.replace(/<[^>]*>?/gm, "");
  }
  return "";
};
