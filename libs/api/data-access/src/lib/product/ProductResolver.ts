import { Context } from "@boilerplate/shared/types";
import { FindManyProductArgs, Price, Product, ProductPricesArgs } from "@generated/type-graphql";
import { Args, Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";

@Resolver(() => Product)
export class ProductResolver {
  @Query(() => [Product], { nullable: false })
  async products(@Ctx() { prisma }: Context, @Args() args: FindManyProductArgs): Promise<Product[]> {
    return prisma.product.findMany(args);
  }

  @FieldResolver(() => [Price], { nullable: false })
  async prices(
    @Root() product: Product,
    @Ctx() { prisma }: Context,
    @Args() args: ProductPricesArgs,
  ): Promise<Price[]> {
    return prisma.product
      .findUnique({
        where: {
          id: product.id,
        },
      })
      .prices(args);
  }
}
