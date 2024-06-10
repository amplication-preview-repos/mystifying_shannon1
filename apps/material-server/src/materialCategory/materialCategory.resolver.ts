import * as graphql from "@nestjs/graphql";
import { MaterialCategoryResolverBase } from "./base/materialCategory.resolver.base";
import { MaterialCategory } from "./base/MaterialCategory";
import { MaterialCategoryService } from "./materialCategory.service";

@graphql.Resolver(() => MaterialCategory)
export class MaterialCategoryResolver extends MaterialCategoryResolverBase {
  constructor(protected readonly service: MaterialCategoryService) {
    super(service);
  }
}
