export const getHighestType = (arr: any[]) => {
  const relevantData = arr.filter(
    (item) => item !== "null" && item !== "undefined" && item !== "object"
  );

  const ranked = relevantData.reduce(
    (acc, item) => {
      if (acc[item]) {
        acc[item] += 1;
      } else {
        acc[item] = 1;
      }

      return acc;
    },
    {}
  ) as { [T: string]: number };

  const sorted = Object.entries(ranked).sort(([k1, v1], [k2, v2]) => {
    return v2 - v1;
  });

  return sorted[0][0];
};
export const percentageConfirmed = (arr: any[], minQuantity = 6): number => {
  if (!Array.isArray(arr)) return 0;
  if (arr.length <= minQuantity) return 0;
  const relevantData = arr.filter(
    (item) => item !== "null" && item !== "undefined" && item !== "object"
  );

  const ranked = relevantData.reduce(
    (acc, item) => {
      if (acc[item]) {
        acc[item] += 1;
      } else {
        acc[item] = 1;
      }

      return acc;
    },
    {}
  ) as { [T: string]: number };

  const count = Object.entries(ranked).reduce((acc, [key, val]) => (acc > val ? acc : val), 0);

  return (count / relevantData.length) * 100;
};
