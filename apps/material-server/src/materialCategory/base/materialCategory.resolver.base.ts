/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { MaterialCategory } from "./MaterialCategory";
import { MaterialCategoryCountArgs } from "./MaterialCategoryCountArgs";
import { MaterialCategoryFindManyArgs } from "./MaterialCategoryFindManyArgs";
import { MaterialCategoryFindUniqueArgs } from "./MaterialCategoryFindUniqueArgs";
import { CreateMaterialCategoryArgs } from "./CreateMaterialCategoryArgs";
import { UpdateMaterialCategoryArgs } from "./UpdateMaterialCategoryArgs";
import { DeleteMaterialCategoryArgs } from "./DeleteMaterialCategoryArgs";
import { MaterialCategoryService } from "../materialCategory.service";
@graphql.Resolver(() => MaterialCategory)
export class MaterialCategoryResolverBase {
  constructor(protected readonly service: MaterialCategoryService) {}

  async _materialCategoriesMeta(
    @graphql.Args() args: MaterialCategoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MaterialCategory])
  async materialCategories(
    @graphql.Args() args: MaterialCategoryFindManyArgs
  ): Promise<MaterialCategory[]> {
    return this.service.materialCategories(args);
  }

  @graphql.Query(() => MaterialCategory, { nullable: true })
  async materialCategory(
    @graphql.Args() args: MaterialCategoryFindUniqueArgs
  ): Promise<MaterialCategory | null> {
    const result = await this.service.materialCategory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MaterialCategory)
  async createMaterialCategory(
    @graphql.Args() args: CreateMaterialCategoryArgs
  ): Promise<MaterialCategory> {
    return await this.service.createMaterialCategory({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => MaterialCategory)
  async updateMaterialCategory(
    @graphql.Args() args: UpdateMaterialCategoryArgs
  ): Promise<MaterialCategory | null> {
    try {
      return await this.service.updateMaterialCategory({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => MaterialCategory)
  async deleteMaterialCategory(
    @graphql.Args() args: DeleteMaterialCategoryArgs
  ): Promise<MaterialCategory | null> {
    try {
      return await this.service.deleteMaterialCategory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
