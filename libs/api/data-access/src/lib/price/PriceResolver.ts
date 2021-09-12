import { Context } from "@boilerplate/shared/types";
import { Price, UpsertPriceArgs } from "@generated/type-graphql";
import { Args, Authorized, Ctx, Mutation, Resolver } from "type-graphql";

@Resolver(() => Price)
export class PriceResolver {
  @Authorized("Admin")
  @Mutation(() => Price, { nullable: true })
  async upsertPrice(@Ctx() { prisma }: Context, @Args() args: UpsertPriceArgs): Promise<Price> {
    return prisma.price.upsert(args);
  }
}
