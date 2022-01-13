import "reflect-metadata";
import { createTestContext, mockFunction, RoleFactory, UserFactory } from "@boilerplate/api/test";
import { getUserFromContext } from "@boilerplate/api/utility";
import { gql } from "apollo-server-express";

jest.mock("../../../../utility/src/lib/get-user-from-context/getUserFromContext");

const mockedGetUserFromContext = mockFunction(getUserFromContext);
const ctx = createTestContext();

describe("UserResolver", () => {
  describe("user", () => {
    it("should return the user matching the given filter", async () => {
      const user = await UserFactory.create(ctx.prisma);
      mockedGetUserFromContext.mockResolvedValueOnce(user as any);

      const UserQuery = gql`
        query User($where: UserWhereUniqueInput!) {
          user(where: $where) {
            id
          }
        }
      `;

      const queryResult = await ctx.client.query(UserQuery, { variables: { where: { id: user.id } } });

      expect(queryResult).toEqual({
        data: {
          user: {
            id: user.id,
          },
        },
      });
    });
  });

  describe("findFirstUser", () => {
    it("should return the first user matching the given filter", async () => {
      const user = await UserFactory.create(ctx.prisma);
      mockedGetUserFromContext.mockResolvedValueOnce(user as any);

      const FindFirstUserQuery = gql`
        query FindFirstUser($where: UserWhereInput!) {
          findFirstUser(where: $where) {
            id
          }
        }
      `;

      const queryResult = await ctx.client.query(FindFirstUserQuery, {
        variables: { where: { id: { equals: user.id } } },
      });

      expect(queryResult).toEqual({
        data: {
          findFirstUser: {
            id: user.id,
          },
        },
      });
    });
  });

  describe("users", () => {
    it("should return a list of users matching the given filter", async () => {
      const user1 = await UserFactory.create(ctx.prisma);
      const user2 = await UserFactory.create(ctx.prisma);
      mockedGetUserFromContext.mockResolvedValueOnce(user1 as any);

      const UsersQuery = gql`
        query Users {
          users {
            id
          }
        }
      `;

      const queryResult = await ctx.client.query(UsersQuery);

      expect(queryResult).toEqual({
        data: {
          users: expect.arrayContaining([{ id: user1.id }, { id: user2.id }]),
        },
      });
    });
  });

  describe("deleteUser", () => {
    it("should delete the user matching the given filter", async () => {
      const adminRole = await RoleFactory.create(ctx.prisma, { data: { name: "Admin" } });
      const user = await UserFactory.create(ctx.prisma, {
        data: { roles: { connect: [{ id: adminRole.id }] } },
        include: { roles: true },
      });

      mockedGetUserFromContext.mockResolvedValueOnce(user as any);

      const DeleteUserMutation = gql`
        mutation DeleteUser($where: UserWhereUniqueInput!) {
          deleteUser(where: $where) {
            id
          }
        }
      `;

      const mutationResult = await ctx.client.mutate(DeleteUserMutation, { variables: { where: { id: user.id } } });
      const deletedUser = await ctx.prisma.user.findUnique({ where: { id: user.id } });

      expect(mutationResult).toEqual({
        data: {
          deleteUser: {
            id: user.id,
          },
        },
      });
      expect(deletedUser).toBeNull();
    });
  });

  describe("updateUser", () => {
    it("should update the user making the request", async () => {
      const newName = "New Name";
      const user = await UserFactory.create(ctx.prisma);
      mockedGetUserFromContext.mockResolvedValueOnce(user as any);

      const UpdateUserMutation = gql`
        mutation UpdateUser($data: UserUpdateInput!) {
          updateUser(data: $data) {
            id
            name
          }
        }
      `;

      const mutationResult = await ctx.client.mutate(UpdateUserMutation, { variables: { data: { name: newName } } });
      const updatedUser = await ctx.prisma.user.findUnique({ where: { id: user.id } });

      expect(mutationResult).toEqual({
        data: {
          updateUser: {
            id: user.id,
            name: newName,
          },
        },
      });
      expect(updatedUser?.name).toEqual(newName);
    });
  });

  describe("me", () => {
    it("should return the user making the request", async () => {
      const user = await UserFactory.create(ctx.prisma);
      mockedGetUserFromContext.mockResolvedValueOnce(user as any);

      const MeQuery = gql`
        query Me {
          me {
            id
          }
        }
      `;

      const queryResult = await ctx.client.query(MeQuery);

      expect(queryResult).toEqual({
        data: {
          me: {
            id: user.id,
          },
        },
      });
    });
  });
});
