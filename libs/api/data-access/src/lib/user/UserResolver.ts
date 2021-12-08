import { Context } from "@boilerplate/shared/types";
import {
  DeleteUserArgs,
  FindFirstUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  Subscription,
  User,
} from "@generated/type-graphql";
import { Args, Authorized, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { UpdateUserArgs } from "./UpdateUserArgs";

@Resolver(() => User)
export class UserResolver {
  @Authorized()
  @Query(() => User, { nullable: true })
  async user(@Ctx() { prisma }: Context, @Args() args: FindUniqueUserArgs): Promise<User | null> {
    return prisma.user.findUnique(args);
  }

  @Authorized()
  @Query(() => User, { nullable: true })
  async findFirstUser(@Ctx() { prisma }: Context, @Args() args: FindFirstUserArgs): Promise<User | null> {
    return prisma.user.findFirst(args);
  }

  @Authorized()
  @Query(() => [User], { nullable: false })
  async users(@Ctx() { prisma }: Context, @Args() args: FindManyUserArgs): Promise<User[]> {
    return prisma.user.findMany(args);
  }

  @Authorized("Admin")
  @Mutation(() => User, { nullable: true })
  async deleteUser(@Ctx() { prisma }: Context, @Args() args: DeleteUserArgs): Promise<User | null> {
    return prisma.user.delete(args);
  }

  @Authorized()
  @Mutation(() => User, { nullable: true })
  async updateUser(@Ctx() { prisma, user }: Context, @Args() args: UpdateUserArgs): Promise<User | null> {
    if (!user) return null;

    return prisma.user.update({ ...args, where: { id: user.id } });
  }

  @Authorized()
  @Query(() => User, { nullable: true })
  async me(@Ctx() { prisma, user }: Context): Promise<User | null> {
    if (!user) return null;

    return prisma.user.findUnique({ where: { id: user.id } });
  }

  @FieldResolver(() => Subscription, { nullable: true })
  async subscription(@Root() user: User, @Ctx() { prisma }: Context): Promise<Subscription | null> {
    return prisma.user
      .findUnique({
        where: {
          id: user.id,
        },
      })
      .subscription({});
  }
}
