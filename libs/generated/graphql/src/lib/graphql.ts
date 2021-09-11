/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AccountListRelationFilter = {
  every?: Maybe<AccountWhereInput>;
  none?: Maybe<AccountWhereInput>;
  some?: Maybe<AccountWhereInput>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type AccountWhereInput = {
  AND?: Maybe<Array<AccountWhereInput>>;
  NOT?: Maybe<Array<AccountWhereInput>>;
  OR?: Maybe<Array<AccountWhereInput>>;
  accessToken?: Maybe<StringNullableFilter>;
  accessTokenExpires?: Maybe<DateTimeNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  providerAccountId?: Maybe<StringFilter>;
  providerId?: Maybe<StringFilter>;
  providerType?: Maybe<StringFilter>;
  refreshToken?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars["Boolean"]>;
  not?: Maybe<NestedBoolFilter>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type EnumPriceTypeFilter = {
  equals?: Maybe<PriceType>;
  in?: Maybe<Array<PriceType>>;
  not?: Maybe<NestedEnumPriceTypeFilter>;
  notIn?: Maybe<Array<PriceType>>;
};

export type EnumSubscriptionStatusFilter = {
  equals?: Maybe<SubscriptionStatus>;
  in?: Maybe<Array<SubscriptionStatus>>;
  not?: Maybe<NestedEnumSubscriptionStatusFilter>;
  notIn?: Maybe<Array<SubscriptionStatus>>;
};

export type IntFilter = {
  equals?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Scalars["Int"]>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars["Int"]>>;
};

export type JsonFilter = {
  equals?: Maybe<Scalars["JSON"]>;
  not?: Maybe<Scalars["JSON"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars["Boolean"]>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
};

export type NestedEnumPriceTypeFilter = {
  equals?: Maybe<PriceType>;
  in?: Maybe<Array<PriceType>>;
  not?: Maybe<NestedEnumPriceTypeFilter>;
  notIn?: Maybe<Array<PriceType>>;
};

export type NestedEnumSubscriptionStatusFilter = {
  equals?: Maybe<SubscriptionStatus>;
  in?: Maybe<Array<SubscriptionStatus>>;
  not?: Maybe<NestedEnumSubscriptionStatusFilter>;
  notIn?: Maybe<Array<SubscriptionStatus>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Scalars["Int"]>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars["Int"]>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  equals?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  startsWith?: Maybe<Scalars["String"]>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  equals?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  startsWith?: Maybe<Scalars["String"]>;
};

export type Price = {
  __typename?: "Price";
  active: Scalars["Boolean"];
  currency: Scalars["String"];
  id: Scalars["String"];
  metadata: Scalars["JSON"];
  productId: Scalars["String"];
  recurring: Scalars["JSON"];
  type: PriceType;
  unitAmount: Scalars["Int"];
};

export type PriceListRelationFilter = {
  every?: Maybe<PriceWhereInput>;
  none?: Maybe<PriceWhereInput>;
  some?: Maybe<PriceWhereInput>;
};

export type PriceOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type PriceOrderByWithRelationInput = {
  active?: Maybe<SortOrder>;
  currency?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  metadata?: Maybe<SortOrder>;
  product?: Maybe<ProductOrderByWithRelationInput>;
  productId?: Maybe<SortOrder>;
  recurring?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  unitAmount?: Maybe<SortOrder>;
};

export enum PriceScalarFieldEnum {
  Active = "active",
  Currency = "currency",
  Id = "id",
  Metadata = "metadata",
  ProductId = "productId",
  Recurring = "recurring",
  Type = "type",
  UnitAmount = "unitAmount",
}

export enum PriceType {
  OneTime = "ONE_TIME",
  Recurring = "RECURRING",
}

export type PriceWhereInput = {
  AND?: Maybe<Array<PriceWhereInput>>;
  NOT?: Maybe<Array<PriceWhereInput>>;
  OR?: Maybe<Array<PriceWhereInput>>;
  active?: Maybe<BoolFilter>;
  currency?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  metadata?: Maybe<JsonFilter>;
  product?: Maybe<ProductRelationFilter>;
  productId?: Maybe<StringFilter>;
  recurring?: Maybe<JsonFilter>;
  type?: Maybe<EnumPriceTypeFilter>;
  unitAmount?: Maybe<IntFilter>;
};

export type PriceWhereUniqueInput = {
  id?: Maybe<Scalars["String"]>;
};

export type Product = {
  __typename?: "Product";
  _count?: Maybe<ProductCount>;
  active: Scalars["Boolean"];
  id: Scalars["String"];
  image: Scalars["String"];
  metadata: Scalars["JSON"];
  name: Scalars["String"];
  prices: Array<Price>;
};

export type ProductPricesArgs = {
  cursor?: Maybe<PriceWhereUniqueInput>;
  distinct?: Maybe<Array<PriceScalarFieldEnum>>;
  orderBy?: Maybe<Array<PriceOrderByWithRelationInput>>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
  where?: Maybe<PriceWhereInput>;
};

export type ProductCount = {
  __typename?: "ProductCount";
  prices: Scalars["Int"];
  subscriptions: Scalars["Int"];
};

export type ProductOrderByWithRelationInput = {
  active?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  metadata?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  prices?: Maybe<PriceOrderByRelationAggregateInput>;
  subscriptions?: Maybe<SubscriptionOrderByRelationAggregateInput>;
};

export type ProductRelationFilter = {
  is?: Maybe<ProductWhereInput>;
  isNot?: Maybe<ProductWhereInput>;
};

export enum ProductScalarFieldEnum {
  Active = "active",
  Id = "id",
  Image = "image",
  Metadata = "metadata",
  Name = "name",
}

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>;
  NOT?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  active?: Maybe<BoolFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
  metadata?: Maybe<JsonFilter>;
  name?: Maybe<StringFilter>;
  prices?: Maybe<PriceListRelationFilter>;
  subscriptions?: Maybe<SubscriptionListRelationFilter>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  findFirstUser?: Maybe<User>;
  me?: Maybe<User>;
  products: Array<Product>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
  where?: Maybe<UserWhereInput>;
};

export type QueryProductsArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<Array<ProductScalarFieldEnum>>;
  orderBy?: Maybe<Array<ProductOrderByWithRelationInput>>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
  where?: Maybe<ProductWhereInput>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
  where?: Maybe<UserWhereInput>;
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive",
}

export type RoleListRelationFilter = {
  every?: Maybe<RoleWhereInput>;
  none?: Maybe<RoleWhereInput>;
  some?: Maybe<RoleWhereInput>;
};

export type RoleOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type RoleWhereInput = {
  AND?: Maybe<Array<RoleWhereInput>>;
  NOT?: Maybe<Array<RoleWhereInput>>;
  OR?: Maybe<Array<RoleWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  users?: Maybe<UserListRelationFilter>;
};

export type SessionListRelationFilter = {
  every?: Maybe<SessionWhereInput>;
  none?: Maybe<SessionWhereInput>;
  some?: Maybe<SessionWhereInput>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type SessionWhereInput = {
  AND?: Maybe<Array<SessionWhereInput>>;
  NOT?: Maybe<Array<SessionWhereInput>>;
  OR?: Maybe<Array<SessionWhereInput>>;
  accessToken?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  expires?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  sessionToken?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
};

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export type StringFilter = {
  contains?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  equals?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  startsWith?: Maybe<Scalars["String"]>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  equals?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  startsWith?: Maybe<Scalars["String"]>;
};

export type SubscriptionListRelationFilter = {
  every?: Maybe<SubscriptionWhereInput>;
  none?: Maybe<SubscriptionWhereInput>;
  some?: Maybe<SubscriptionWhereInput>;
};

export type SubscriptionOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type SubscriptionOrderByWithRelationInput = {
  amount?: Maybe<SortOrder>;
  cancelAt?: Maybe<SortOrder>;
  cancelAtPeriodEnd?: Maybe<SortOrder>;
  cancelledAt?: Maybe<SortOrder>;
  created?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  currency?: Maybe<SortOrder>;
  currentPeriodEnd?: Maybe<SortOrder>;
  currentPeriodStart?: Maybe<SortOrder>;
  endedAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  metadata?: Maybe<SortOrder>;
  product?: Maybe<ProductOrderByWithRelationInput>;
  productId?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  trialEnd?: Maybe<SortOrder>;
  trialStart?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  user?: Maybe<UserOrderByWithRelationInput>;
  userId?: Maybe<SortOrder>;
};

export type SubscriptionRelationFilter = {
  is?: Maybe<SubscriptionWhereInput>;
  isNot?: Maybe<SubscriptionWhereInput>;
};

export enum SubscriptionStatus {
  Active = "ACTIVE",
  Cancelled = "CANCELLED",
  Incomplete = "INCOMPLETE",
  IncompleteExpired = "INCOMPLETE_EXPIRED",
  PastDue = "PAST_DUE",
  Trialling = "TRIALLING",
  Unpaid = "UNPAID",
}

export type SubscriptionWhereInput = {
  AND?: Maybe<Array<SubscriptionWhereInput>>;
  NOT?: Maybe<Array<SubscriptionWhereInput>>;
  OR?: Maybe<Array<SubscriptionWhereInput>>;
  amount?: Maybe<IntFilter>;
  cancelAt?: Maybe<DateTimeNullableFilter>;
  cancelAtPeriodEnd?: Maybe<BoolFilter>;
  cancelledAt?: Maybe<DateTimeNullableFilter>;
  created?: Maybe<DateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  currency?: Maybe<StringFilter>;
  currentPeriodEnd?: Maybe<DateTimeFilter>;
  currentPeriodStart?: Maybe<DateTimeFilter>;
  endedAt?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  metadata?: Maybe<JsonFilter>;
  product?: Maybe<ProductRelationFilter>;
  productId?: Maybe<StringFilter>;
  status?: Maybe<EnumSubscriptionStatusFilter>;
  trialEnd?: Maybe<DateTimeNullableFilter>;
  trialStart?: Maybe<DateTimeNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
};

export type User = {
  __typename?: "User";
  _count?: Maybe<UserCount>;
  createdAt: Scalars["DateTime"];
  email?: Maybe<Scalars["String"]>;
  emailVerified?: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  stripeCustomerId?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

export type UserCount = {
  __typename?: "UserCount";
  accounts: Scalars["Int"];
  roles: Scalars["Int"];
  sessions: Scalars["Int"];
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
};

export type UserOrderByWithRelationInput = {
  accounts?: Maybe<AccountOrderByRelationAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  roles?: Maybe<RoleOrderByRelationAggregateInput>;
  sessions?: Maybe<SessionOrderByRelationAggregateInput>;
  stripeCustomerId?: Maybe<SortOrder>;
  subscription?: Maybe<SubscriptionOrderByWithRelationInput>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = "createdAt",
  Email = "email",
  EmailVerified = "emailVerified",
  Id = "id",
  Image = "image",
  Name = "name",
  StripeCustomerId = "stripeCustomerId",
  UpdatedAt = "updatedAt",
}

export type UserUpdateInput = {
  name: Scalars["String"];
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  accounts?: Maybe<AccountListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  roles?: Maybe<RoleListRelationFilter>;
  sessions?: Maybe<SessionListRelationFilter>;
  stripeCustomerId?: Maybe<StringNullableFilter>;
  subscription?: Maybe<SubscriptionRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  stripeCustomerId?: Maybe<Scalars["String"]>;
};

export type ProductCardProductFragmentFragment = {
  __typename?: "Product";
  id: string;
  name: string;
  metadata: any;
  prices: Array<{ __typename?: "Price"; currency: string; recurring: any; unitAmount: number }>;
};

export type ProductsQueryVariables = Exact<{ [key: string]: never }>;

export type ProductsQuery = {
  __typename?: "Query";
  products: Array<{
    __typename?: "Product";
    id: string;
    name: string;
    metadata: any;
    prices: Array<{ __typename?: "Price"; currency: string; recurring: any; unitAmount: number }>;
  }>;
};

export type ProfileSettingsFormUserFragmentFragment = {
  __typename?: "User";
  name?: Maybe<string>;
  email?: Maybe<string>;
  image?: Maybe<string>;
};

export type ProfileSettingsQueryVariables = Exact<{ [key: string]: never }>;

export type ProfileSettingsQuery = {
  __typename?: "Query";
  me?: Maybe<{ __typename?: "User"; name?: Maybe<string>; email?: Maybe<string>; image?: Maybe<string> }>;
};

export type UpdateProfileSettingsMutationVariables = Exact<{
  updateUserData: UserUpdateInput;
}>;

export type UpdateProfileSettingsMutation = {
  __typename?: "Mutation";
  updateUser?: Maybe<{
    __typename?: "User";
    id: string;
    name?: Maybe<string>;
    email?: Maybe<string>;
    image?: Maybe<string>;
  }>;
};

export const ProductCardProductFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductCardProductFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Product" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "metadata" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "prices" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "currency" } },
                { kind: "Field", name: { kind: "Name", value: "recurring" } },
                { kind: "Field", name: { kind: "Name", value: "unitAmount" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductCardProductFragmentFragment, unknown>;
export const ProfileSettingsFormUserFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProfileSettingsFormUserFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "image" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProfileSettingsFormUserFragmentFragment, unknown>;
export const ProductsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Products" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "products" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ProductCardProductFragment" } },
              ],
            },
          },
        ],
      },
    },
    ...ProductCardProductFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
export const ProfileSettingsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ProfileSettings" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "ProfileSettingsFormUserFragment" } },
              ],
            },
          },
        ],
      },
    },
    ...ProfileSettingsFormUserFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<ProfileSettingsQuery, ProfileSettingsQueryVariables>;
export const UpdateProfileSettingsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateProfileSettings" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "updateUserData" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "UserUpdateInput" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "data" },
                value: { kind: "Variable", name: { kind: "Name", value: "updateUserData" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateProfileSettingsMutation, UpdateProfileSettingsMutationVariables>;
