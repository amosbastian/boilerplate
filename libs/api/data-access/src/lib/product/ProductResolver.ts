import { Context } from "@boilerplate/shared/types";
import {
  FindManyProductArgs,
  FindUniqueProductArgs,
  Price,
  Product,
  ProductPricesArgs,
  UpsertProductArgs,
} from "@generated/type-graphql";
import { Args, Authorized, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";

@Resolver(() => Product)
export class ProductResolver {
  @Query(() => Product, { nullable: true })
  async product(@Ctx() { prisma }: Context, @Args() args: FindUniqueProductArgs): Promise<Product | null> {
    return prisma.product.findUnique(args);
  }

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

  @Authorized("Admin")
  @Mutation(() => Product, { nullable: true })
  async upsertProduct(@Ctx() { prisma }: Context, @Args() args: UpsertProductArgs): Promise<Product> {
    return prisma.product.upsert(args);
  }
}
