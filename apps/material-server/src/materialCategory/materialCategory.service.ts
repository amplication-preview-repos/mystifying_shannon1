import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaterialCategoryServiceBase } from "./base/materialCategory.service.base";

@Injectable()
export class MaterialCategoryService extends MaterialCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
