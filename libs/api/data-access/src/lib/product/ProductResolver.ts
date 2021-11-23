import { Context } from "@boilerplate/shared/types";
import { FindManyProductArgs, FindUniqueProductArgs, Price, Product, ProductPricesArgs } from "@generated/type-graphql";
import { Args, Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";

@Resolver(() => Product)
export class ProductResolver {
  @Query(() => Product, { nullable: true })
  async product(
    @Ctx() { prisma }: Context,
    @Args() args: FindUniqueProductArgs,
  ): Promise<Omit<Product, "_count"> | null> {
    return prisma.product.findUnique(args);
  }

  @Query(() => [Product], { nullable: false })
  async products(@Ctx() { prisma }: Context, @Args() args: FindManyProductArgs): Promise<Omit<Product, "_count">[]> {
    return prisma.product.findMany(args);
  }

  @FieldResolver(() => [Price], { nullable: false })
  async prices(
    @Root() product: Product,
    @Ctx() { prisma }: Context,
    @Args() args: ProductPricesArgs,
  ): Promise<Omit<Price, "_count">[]> {
    return prisma.product
      .findUnique({
        where: {
          id: product.id,
        },
      })
      .prices(args);
  }
}
