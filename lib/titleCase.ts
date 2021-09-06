export const titleCase = (string) => {
  if (string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  return string;
};
