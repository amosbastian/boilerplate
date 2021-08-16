import { Context } from "@boilerplate/shared/types";
import { DeleteUserArgs, FindFirstUserArgs, FindManyUserArgs, FindUniqueUserArgs, User } from "@generated/type-graphql";
import { Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
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
}
