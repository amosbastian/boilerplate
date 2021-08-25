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
  some?: Maybe<AccountWhereInput>;
  none?: Maybe<AccountWhereInput>;
};

export type AccountWhereInput = {
  AND?: Maybe<Array<AccountWhereInput>>;
  OR?: Maybe<Array<AccountWhereInput>>;
  NOT?: Maybe<Array<AccountWhereInput>>;
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  providerType?: Maybe<StringFilter>;
  providerId?: Maybe<StringFilter>;
  providerAccountId?: Maybe<StringFilter>;
  refreshToken?: Maybe<StringNullableFilter>;
  accessToken?: Maybe<StringNullableFilter>;
  accessTokenExpires?: Maybe<DateTimeNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserRelationFilter>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars["Boolean"]>;
  not?: Maybe<NestedBoolFilter>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type EnumPriceTypeFilter = {
  equals?: Maybe<PriceType>;
  in?: Maybe<Array<PriceType>>;
  notIn?: Maybe<Array<PriceType>>;
  not?: Maybe<NestedEnumPriceTypeFilter>;
};

export type EnumSubscriptionStatusFilter = {
  equals?: Maybe<SubscriptionStatus>;
  in?: Maybe<Array<SubscriptionStatus>>;
  notIn?: Maybe<Array<SubscriptionStatus>>;
  not?: Maybe<NestedEnumSubscriptionStatusFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Scalars["Int"]>>;
  notIn?: Maybe<Array<Scalars["Int"]>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  not?: Maybe<NestedIntFilter>;
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
  in?: Maybe<Array<Scalars["DateTime"]>>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars["DateTime"]>;
  in?: Maybe<Array<Scalars["DateTime"]>>;
  notIn?: Maybe<Array<Scalars["DateTime"]>>;
  lt?: Maybe<Scalars["DateTime"]>;
  lte?: Maybe<Scalars["DateTime"]>;
  gt?: Maybe<Scalars["DateTime"]>;
  gte?: Maybe<Scalars["DateTime"]>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type NestedEnumPriceTypeFilter = {
  equals?: Maybe<PriceType>;
  in?: Maybe<Array<PriceType>>;
  notIn?: Maybe<Array<PriceType>>;
  not?: Maybe<NestedEnumPriceTypeFilter>;
};

export type NestedEnumSubscriptionStatusFilter = {
  equals?: Maybe<SubscriptionStatus>;
  in?: Maybe<Array<SubscriptionStatus>>;
  notIn?: Maybe<Array<SubscriptionStatus>>;
  not?: Maybe<NestedEnumSubscriptionStatusFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Scalars["Int"]>>;
  notIn?: Maybe<Array<Scalars["Int"]>>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type Price = {
  __typename?: "Price";
  id: Scalars["String"];
  active: Scalars["Boolean"];
  productId: Scalars["String"];
  unitAmount: Scalars["Int"];
  type: PriceType;
  recurring: Scalars["JSON"];
  metadata: Scalars["JSON"];
  currency: Scalars["String"];
};

export type PriceListRelationFilter = {
  every?: Maybe<PriceWhereInput>;
  some?: Maybe<PriceWhereInput>;
  none?: Maybe<PriceWhereInput>;
};

export type PriceOrderByInput = {
  id?: Maybe<SortOrder>;
  active?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  unitAmount?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  recurring?: Maybe<SortOrder>;
  metadata?: Maybe<SortOrder>;
  currency?: Maybe<SortOrder>;
};

export enum PriceScalarFieldEnum {
  Id = "id",
  Active = "active",
  ProductId = "productId",
  UnitAmount = "unitAmount",
  Type = "type",
  Recurring = "recurring",
  Metadata = "metadata",
  Currency = "currency",
}

export enum PriceType {
  OneTime = "ONE_TIME",
  Recurring = "RECURRING",
}

export type PriceWhereInput = {
  AND?: Maybe<Array<PriceWhereInput>>;
  OR?: Maybe<Array<PriceWhereInput>>;
  NOT?: Maybe<Array<PriceWhereInput>>;
  id?: Maybe<StringFilter>;
  active?: Maybe<BoolFilter>;
  product?: Maybe<ProductRelationFilter>;
  productId?: Maybe<StringFilter>;
  unitAmount?: Maybe<IntFilter>;
  type?: Maybe<EnumPriceTypeFilter>;
  recurring?: Maybe<JsonFilter>;
  metadata?: Maybe<JsonFilter>;
  currency?: Maybe<StringFilter>;
};

export type PriceWhereUniqueInput = {
  id?: Maybe<Scalars["String"]>;
};

export type Product = {
  __typename?: "Product";
  id: Scalars["String"];
  name: Scalars["String"];
  active: Scalars["Boolean"];
  image: Scalars["String"];
  metadata: Scalars["JSON"];
  prices: Array<Price>;
};

export type ProductPricesArgs = {
  where?: Maybe<PriceWhereInput>;
  orderBy?: Maybe<Array<PriceOrderByInput>>;
  cursor?: Maybe<PriceWhereUniqueInput>;
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  distinct?: Maybe<Array<PriceScalarFieldEnum>>;
};

export type ProductOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  active?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  metadata?: Maybe<SortOrder>;
};

export type ProductRelationFilter = {
  is?: Maybe<ProductWhereInput>;
  isNot?: Maybe<ProductWhereInput>;
};

export enum ProductScalarFieldEnum {
  Id = "id",
  Name = "name",
  Active = "active",
  Image = "image",
  Metadata = "metadata",
}

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  NOT?: Maybe<Array<ProductWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  active?: Maybe<BoolFilter>;
  image?: Maybe<StringFilter>;
  metadata?: Maybe<JsonFilter>;
  subscriptions?: Maybe<SubscriptionListRelationFilter>;
  prices?: Maybe<PriceListRelationFilter>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  products: Array<Product>;
  user?: Maybe<User>;
  findFirstUser?: Maybe<User>;
  users: Array<User>;
};

export type QueryProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<Array<ProductOrderByInput>>;
  cursor?: Maybe<ProductWhereUniqueInput>;
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  distinct?: Maybe<Array<ProductScalarFieldEnum>>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryFindFirstUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive",
}

export type RoleListRelationFilter = {
  every?: Maybe<RoleWhereInput>;
  some?: Maybe<RoleWhereInput>;
  none?: Maybe<RoleWhereInput>;
};

export type RoleWhereInput = {
  AND?: Maybe<Array<RoleWhereInput>>;
  OR?: Maybe<Array<RoleWhereInput>>;
  NOT?: Maybe<Array<RoleWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  users?: Maybe<UserListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SessionListRelationFilter = {
  every?: Maybe<SessionWhereInput>;
  some?: Maybe<SessionWhereInput>;
  none?: Maybe<SessionWhereInput>;
};

export type SessionWhereInput = {
  AND?: Maybe<Array<SessionWhereInput>>;
  OR?: Maybe<Array<SessionWhereInput>>;
  NOT?: Maybe<Array<SessionWhereInput>>;
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
  expires?: Maybe<DateTimeFilter>;
  sessionToken?: Maybe<StringFilter>;
  accessToken?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserRelationFilter>;
};

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export type StringFilter = {
  equals?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Scalars["String"]>>;
  notIn?: Maybe<Array<Scalars["String"]>>;
  lt?: Maybe<Scalars["String"]>;
  lte?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  gte?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  startsWith?: Maybe<Scalars["String"]>;
  endsWith?: Maybe<Scalars["String"]>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type SubscriptionListRelationFilter = {
  every?: Maybe<SubscriptionWhereInput>;
  some?: Maybe<SubscriptionWhereInput>;
  none?: Maybe<SubscriptionWhereInput>;
};

export type SubscriptionRelationFilter = {
  is?: Maybe<SubscriptionWhereInput>;
  isNot?: Maybe<SubscriptionWhereInput>;
};

export enum SubscriptionStatus {
  Active = "ACTIVE",
  PastDue = "PAST_DUE",
  Unpaid = "UNPAID",
  Cancelled = "CANCELLED",
  Incomplete = "INCOMPLETE",
  IncompleteExpired = "INCOMPLETE_EXPIRED",
  Trialling = "TRIALLING",
}

export type SubscriptionWhereInput = {
  AND?: Maybe<Array<SubscriptionWhereInput>>;
  OR?: Maybe<Array<SubscriptionWhereInput>>;
  NOT?: Maybe<Array<SubscriptionWhereInput>>;
  id?: Maybe<StringFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
  product?: Maybe<ProductRelationFilter>;
  productId?: Maybe<StringFilter>;
  status?: Maybe<EnumSubscriptionStatusFilter>;
  amount?: Maybe<IntFilter>;
  created?: Maybe<DateTimeFilter>;
  currency?: Maybe<StringFilter>;
  cancelAtPeriodEnd?: Maybe<BoolFilter>;
  currentPeriodEnd?: Maybe<DateTimeFilter>;
  currentPeriodStart?: Maybe<DateTimeFilter>;
  trialStart?: Maybe<DateTimeNullableFilter>;
  trialEnd?: Maybe<DateTimeNullableFilter>;
  cancelAt?: Maybe<DateTimeNullableFilter>;
  cancelledAt?: Maybe<DateTimeNullableFilter>;
  endedAt?: Maybe<DateTimeNullableFilter>;
  metadata?: Maybe<JsonFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type User = {
  __typename?: "User";
  id: Scalars["String"];
  stripeCustomerId?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  emailVerified?: Maybe<Scalars["DateTime"]>;
  image?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  stripeCustomerId?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Id = "id",
  StripeCustomerId = "stripeCustomerId",
  Name = "name",
  Email = "email",
  EmailVerified = "emailVerified",
  Image = "image",
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
}

export type UserUpdateInput = {
  name: Scalars["String"];
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  stripeCustomerId?: Maybe<StringNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  image?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  subscription?: Maybe<SubscriptionRelationFilter>;
  accounts?: Maybe<AccountListRelationFilter>;
  sessions?: Maybe<SessionListRelationFilter>;
  roles?: Maybe<RoleListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars["String"]>;
  stripeCustomerId?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
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
