import { Module } from "@nestjs/common";
import { MaterialCategoryModuleBase } from "./base/materialCategory.module.base";
import { MaterialCategoryService } from "./materialCategory.service";
import { MaterialCategoryController } from "./materialCategory.controller";
import { MaterialCategoryResolver } from "./materialCategory.resolver";

@Module({
  imports: [MaterialCategoryModuleBase],
  controllers: [MaterialCategoryController],
  providers: [MaterialCategoryService, MaterialCategoryResolver],
  exports: [MaterialCategoryService],
})
export class MaterialCategoryModule {}
