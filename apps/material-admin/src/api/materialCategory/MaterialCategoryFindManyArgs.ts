import { MaterialCategoryWhereInput } from "./MaterialCategoryWhereInput";
import { MaterialCategoryOrderByInput } from "./MaterialCategoryOrderByInput";

export type MaterialCategoryFindManyArgs = {
  where?: MaterialCategoryWhereInput;
  orderBy?: Array<MaterialCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
