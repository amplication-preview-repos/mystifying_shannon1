import { MaterialCategory as TMaterialCategory } from "../api/materialCategory/MaterialCategory";

export const MATERIALCATEGORY_TITLE_FIELD = "name";

export const MaterialCategoryTitle = (record: TMaterialCategory): string => {
  return record.name?.toString() || String(record.id);
};
