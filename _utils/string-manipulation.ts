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

export const snakeToCamel = (str) => str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());

export const snakeToPascal = (str) => {
  const camelCase = snakeToCamel(str);
  return camelCase[0].toUpperCase() + camelCase.substr(1);
};

export const pascalToSnake = (str) => {
  return str.replace(/([A-Z])/g, (g) => `_${g.toLowerCase()}`).replace(/^_/, "");
};
