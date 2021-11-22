import { Context } from "@boilerplate/shared/types";
import { FindUniquePriceArgs, Price, Product } from "@generated/type-graphql";
import { Args, Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";

@Resolver(() => Price)
export class PriceResolver {
  @Query(() => Price, { nullable: true })
  async price(@Ctx() { prisma }: Context, @Args() args: FindUniquePriceArgs): Promise<Omit<Price, "_count"> | null> {
    return prisma.price.findUnique(args);
  }

  @FieldResolver(() => Product, { nullable: true })
  async product(@Root() price: Price, @Ctx() { prisma }: Context): Promise<Omit<Product, "_count"> | null> {
    return prisma.price
      .findUnique({
        where: {
          id: price.id,
        },
      })
      .product({});
  }
}
