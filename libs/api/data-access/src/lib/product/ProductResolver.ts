import { Context } from "@boilerplate/shared/types";
import { FindManyProductArgs, Product } from "@generated/type-graphql";
import { Args, Ctx, Query, Resolver } from "type-graphql";

@Resolver(() => Product)
export class ProductResolver {
  @Query(() => [Product], { nullable: false })
  async products(@Ctx() { prisma }: Context, @Args() args: FindManyProductArgs): Promise<Product[]> {
    console.log("products");
    return prisma.product.findMany(args);
  }
}
