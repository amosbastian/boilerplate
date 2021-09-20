import { Context } from "@boilerplate/shared/types";
import { Price, Subscription } from "@generated/type-graphql";
import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";

@Resolver(() => Subscription)
export class SubscriptionResolver {
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
