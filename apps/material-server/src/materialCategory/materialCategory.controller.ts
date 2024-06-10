import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MaterialCategoryService } from "./materialCategory.service";
import { MaterialCategoryControllerBase } from "./base/materialCategory.controller.base";

@swagger.ApiTags("materialCategories")
@common.Controller("materialCategories")
export class MaterialCategoryController extends MaterialCategoryControllerBase {
  constructor(protected readonly service: MaterialCategoryService) {
    super(service);
  }
}
