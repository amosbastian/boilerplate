import { Context } from "@boilerplate/shared/types";
import { Price, Product, UpsertPriceArgs } from "@generated/type-graphql";
import { Args, Authorized, Ctx, FieldResolver, Mutation, Resolver, Root } from "type-graphql";

@Resolver(() => Price)
export class PriceResolver {
  @Authorized("Admin")
  @Mutation(() => Price, { nullable: true })
  async upsertPrice(@Ctx() { prisma }: Context, @Args() args: UpsertPriceArgs): Promise<Price> {
    return prisma.price.upsert(args);
  }

  @FieldResolver(() => Product, { nullable: true })
  async product(@Root() price: Price, @Ctx() { prisma }: Context): Promise<Product | null> {
    return prisma.price
      .findUnique({
        where: {
          id: price.id,
        },
      })
      .product({});
  }
}
