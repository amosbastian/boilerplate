import { Context } from "@boilerplate/shared/types";
import { FindUniqueSubscriptionArgs, Price, Subscription } from "@generated/type-graphql";
import { Args, Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";

@Resolver(() => Subscription)
export class SubscriptionResolver {
  @Query(() => Subscription, { nullable: true })
  async subscription(
    @Ctx() { prisma }: Context,
    @Args() args: FindUniqueSubscriptionArgs,
  ): Promise<Subscription | null> {
    return prisma.subscription.findUnique(args);
  }

  @FieldResolver(() => Price, { nullable: true })
  async price(@Root() subscription: Subscription, @Ctx() { prisma }: Context): Promise<Price | null> {
    return prisma.subscription
      .findUnique({
        where: {
          id: subscription.id,
        },
      })
      .price({});
  }
}
