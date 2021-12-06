export const stripHtml = (str: string) => {
  if (str && typeof str === "string") {
    return str.replace(/<[^>]*>?/gm, "");
  }
  return "";
};

export const capitalizeFirstLetter = (string) => {
  if (string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  return string;
};

export const lowerCaseFirstLetter = (string) => {
  if (string) {
    return string[0].toLowerCase() + string.slice(1);
  }
  return string;
};
