export const lowerCaseFirstLetter = (string) => {
  if (string) {
    return string[0].toLowerCase() + string.slice(1);
  }
  return string;
};
