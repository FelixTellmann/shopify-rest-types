export const isIsoDate = (str) => {
  if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{2}:\d{2}/.test(str)) return false;
  return Date.parse(str);
};
