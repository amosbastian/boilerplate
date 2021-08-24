import { Context } from "@boilerplate/shared/types";
import { FindManyProductArgs, Price, Product } from "@generated/type-graphql";
import { Args, Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";

@Resolver(() => Product)
export class ProductResolver {
  @Query(() => [Product], { nullable: false })
  async products(@Ctx() { prisma }: Context, @Args() args: FindManyProductArgs): Promise<Product[]> {
    console.log("products");
    return prisma.product.findMany(args);
  }

  @FieldResolver(() => Price, { nullable: false })
  async price(@Root() product: Product, @Ctx() { prisma }: Context): Promise<Price | null> {
    return prisma.product
      .findUnique({
        where: {
          id: product.id,
        },
      })
      .price({});
  }
}
