import { getSingularKey } from "_server/generate-types/get-singular-key";
import { snakeToPascal } from "_utils/string-manipulation";

export const nameSnakeCaseToSingularPascalCase = (name: string) => {
  switch (name) {
    default: {
      return snakeToPascal(getSingularKey(name));
    }
  }
};
