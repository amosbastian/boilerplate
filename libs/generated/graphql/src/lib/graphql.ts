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

export type AccountCreateManyUserInput = {
  accessToken?: Maybe<Scalars["String"]>;
  accessTokenExpires?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["String"]>;
  providerAccountId: Scalars["String"];
  providerId: Scalars["String"];
  providerType: Scalars["String"];
  refreshToken?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars["Boolean"]>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: Maybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  accessToken?: Maybe<Scalars["String"]>;
  accessTokenExpires?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["String"]>;
  providerAccountId: Scalars["String"];
  providerId: Scalars["String"];
  providerType: Scalars["String"];
  refreshToken?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AccountListRelationFilter = {
  every?: Maybe<AccountWhereInput>;
  none?: Maybe<AccountWhereInput>;
  some?: Maybe<AccountWhereInput>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type AccountProviderIdProviderAccountIdCompoundUniqueInput = {
  providerAccountId: Scalars["String"];
  providerId: Scalars["String"];
};

export type AccountScalarWhereInput = {
  AND?: Maybe<Array<AccountScalarWhereInput>>;
  NOT?: Maybe<Array<AccountScalarWhereInput>>;
  OR?: Maybe<Array<AccountScalarWhereInput>>;
  accessToken?: Maybe<StringNullableFilter>;
  accessTokenExpires?: Maybe<DateTimeNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  providerAccountId?: Maybe<StringFilter>;
  providerId?: Maybe<StringFilter>;
  providerType?: Maybe<StringFilter>;
  refreshToken?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type AccountUpdateManyMutationInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  providerId?: Maybe<StringFieldUpdateOperationsInput>;
  providerType?: Maybe<StringFieldUpdateOperationsInput>;
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: Maybe<AccountCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: Maybe<Array<AccountScalarWhereInput>>;
  disconnect?: Maybe<Array<AccountWhereUniqueInput>>;
  set?: Maybe<Array<AccountWhereUniqueInput>>;
  update?: Maybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  accessToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  accessTokenExpires?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  providerId?: Maybe<StringFieldUpdateOperationsInput>;
  providerType?: Maybe<StringFieldUpdateOperationsInput>;
  refreshToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
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

export type AccountWhereUniqueInput = {
  id?: Maybe<Scalars["String"]>;
  providerId_providerAccountId?: Maybe<AccountProviderIdProviderAccountIdCompoundUniqueInput>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars["Boolean"]>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars["Boolean"]>;
  not?: Maybe<NestedBoolFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars["DateTime"]>;
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

export type EnumPriceTypeFieldUpdateOperationsInput = {
  set?: Maybe<PriceType>;
};

export type EnumPriceTypeFilter = {
  equals?: Maybe<PriceType>;
  in?: Maybe<Array<PriceType>>;
  not?: Maybe<NestedEnumPriceTypeFilter>;
  notIn?: Maybe<Array<PriceType>>;
};

export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
  set?: Maybe<SubscriptionStatus>;
};

export type EnumSubscriptionStatusFilter = {
  equals?: Maybe<SubscriptionStatus>;
  in?: Maybe<Array<SubscriptionStatus>>;
  not?: Maybe<NestedEnumSubscriptionStatusFilter>;
  notIn?: Maybe<Array<SubscriptionStatus>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars["Int"]>;
  divide?: Maybe<Scalars["Int"]>;
  increment?: Maybe<Scalars["Int"]>;
  multiply?: Maybe<Scalars["Int"]>;
  set?: Maybe<Scalars["Int"]>;
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

export type JsonNullableFilter = {
  equals?: Maybe<Scalars["JSON"]>;
  not?: Maybe<Scalars["JSON"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  upsertPrice?: Maybe<Price>;
  upsertProduct?: Maybe<Product>;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
};

export type MutationUpsertPriceArgs = {
  create: PriceCreateInput;
  update: PriceUpdateInput;
  where: PriceWhereUniqueInput;
};

export type MutationUpsertProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
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

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars["DateTime"]>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars["String"]>;
};

export type Price = {
  __typename?: "Price";
  _count?: Maybe<PriceCount>;
  active: Scalars["Boolean"];
  currency: Scalars["String"];
  id: Scalars["String"];
  metadata: Scalars["JSON"];
  product?: Maybe<Product>;
  productId: Scalars["String"];
  recurring: Scalars["JSON"];
  type: PriceType;
  unitAmount: Scalars["Int"];
};

export type PriceCount = {
  __typename?: "PriceCount";
  subscriptions: Scalars["Int"];
};

export type PriceCreateInput = {
  active: Scalars["Boolean"];
  currency: Scalars["String"];
  id: Scalars["String"];
  metadata: Scalars["JSON"];
  product: ProductCreateNestedOneWithoutPricesInput;
  recurring: Scalars["JSON"];
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutPriceInput>;
  type: PriceType;
  unitAmount: Scalars["Int"];
};

export type PriceCreateManyProductInput = {
  active: Scalars["Boolean"];
  currency: Scalars["String"];
  id: Scalars["String"];
  metadata: Scalars["JSON"];
  recurring: Scalars["JSON"];
  type: PriceType;
  unitAmount: Scalars["Int"];
};

export type PriceCreateManyProductInputEnvelope = {
  data: Array<PriceCreateManyProductInput>;
  skipDuplicates?: Maybe<Scalars["Boolean"]>;
};

export type PriceCreateNestedManyWithoutProductInput = {
  connect?: Maybe<Array<PriceWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PriceCreateOrConnectWithoutProductInput>>;
  create?: Maybe<Array<PriceCreateWithoutProductInput>>;
  createMany?: Maybe<PriceCreateManyProductInputEnvelope>;
};

export type PriceCreateOrConnectWithoutProductInput = {
  create: PriceCreateWithoutProductInput;
  where: PriceWhereUniqueInput;
};

export type PriceCreateWithoutProductInput = {
  active: Scalars["Boolean"];
  currency: Scalars["String"];
  id: Scalars["String"];
  metadata: Scalars["JSON"];
  recurring: Scalars["JSON"];
  subscriptions?: Maybe<SubscriptionCreateNestedManyWithoutPriceInput>;
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
  subscriptions?: Maybe<SubscriptionOrderByRelationAggregateInput>;
  type?: Maybe<SortOrder>;
  unitAmount?: Maybe<SortOrder>;
};

export type PriceRelationFilter = {
  is?: Maybe<PriceWhereInput>;
  isNot?: Maybe<PriceWhereInput>;
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

export type PriceScalarWhereInput = {
  AND?: Maybe<Array<PriceScalarWhereInput>>;
  NOT?: Maybe<Array<PriceScalarWhereInput>>;
  OR?: Maybe<Array<PriceScalarWhereInput>>;
  active?: Maybe<BoolFilter>;
  currency?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  metadata?: Maybe<JsonFilter>;
  productId?: Maybe<StringFilter>;
  recurring?: Maybe<JsonFilter>;
  type?: Maybe<EnumPriceTypeFilter>;
  unitAmount?: Maybe<IntFilter>;
};

export enum PriceType {
  OneTime = "ONE_TIME",
  Recurring = "RECURRING",
}

export type PriceUpdateInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  metadata?: Maybe<Scalars["JSON"]>;
  product?: Maybe<ProductUpdateOneRequiredWithoutPricesInput>;
  recurring?: Maybe<Scalars["JSON"]>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutPriceInput>;
  type?: Maybe<EnumPriceTypeFieldUpdateOperationsInput>;
  unitAmount?: Maybe<IntFieldUpdateOperationsInput>;
};

export type PriceUpdateManyMutationInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  metadata?: Maybe<Scalars["JSON"]>;
  recurring?: Maybe<Scalars["JSON"]>;
  type?: Maybe<EnumPriceTypeFieldUpdateOperationsInput>;
  unitAmount?: Maybe<IntFieldUpdateOperationsInput>;
};

export type PriceUpdateManyWithWhereWithoutProductInput = {
  data: PriceUpdateManyMutationInput;
  where: PriceScalarWhereInput;
};

export type PriceUpdateManyWithoutProductInput = {
  connect?: Maybe<Array<PriceWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<PriceCreateOrConnectWithoutProductInput>>;
  create?: Maybe<Array<PriceCreateWithoutProductInput>>;
  createMany?: Maybe<PriceCreateManyProductInputEnvelope>;
  delete?: Maybe<Array<PriceWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PriceScalarWhereInput>>;
  disconnect?: Maybe<Array<PriceWhereUniqueInput>>;
  set?: Maybe<Array<PriceWhereUniqueInput>>;
  update?: Maybe<Array<PriceUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<PriceUpdateManyWithWhereWithoutProductInput>>;
  upsert?: Maybe<Array<PriceUpsertWithWhereUniqueWithoutProductInput>>;
};

export type PriceUpdateWithWhereUniqueWithoutProductInput = {
  data: PriceUpdateWithoutProductInput;
  where: PriceWhereUniqueInput;
};

export type PriceUpdateWithoutProductInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  currency?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  metadata?: Maybe<Scalars["JSON"]>;
  recurring?: Maybe<Scalars["JSON"]>;
  subscriptions?: Maybe<SubscriptionUpdateManyWithoutPriceInput>;
  type?: Maybe<EnumPriceTypeFieldUpdateOperationsInput>;
  unitAmount?: Maybe<IntFieldUpdateOperationsInput>;
};

export type PriceUpsertWithWhereUniqueWithoutProductInput = {
  create: PriceCreateWithoutProductInput;
  update: PriceUpdateWithoutProductInput;
  where: PriceWhereUniqueInput;
};

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
  subscriptions?: Maybe<SubscriptionListRelationFilter>;
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
  description?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  image?: Maybe<Scalars["String"]>;
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
};

export type ProductCreateInput = {
  active: Scalars["Boolean"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  image?: Maybe<Scalars["String"]>;
  metadata: Scalars["JSON"];
  name: Scalars["String"];
  prices?: Maybe<PriceCreateNestedManyWithoutProductInput>;
};

export type ProductCreateNestedOneWithoutPricesInput = {
  connect?: Maybe<ProductWhereUniqueInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutPricesInput>;
  create?: Maybe<ProductCreateWithoutPricesInput>;
};

export type ProductCreateOrConnectWithoutPricesInput = {
  create: ProductCreateWithoutPricesInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutPricesInput = {
  active: Scalars["Boolean"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  image?: Maybe<Scalars["String"]>;
  metadata: Scalars["JSON"];
  name: Scalars["String"];
};

export type ProductOrderByWithRelationInput = {
  active?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  metadata?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  prices?: Maybe<PriceOrderByRelationAggregateInput>;
};

export type ProductRelationFilter = {
  is?: Maybe<ProductWhereInput>;
  isNot?: Maybe<ProductWhereInput>;
};

export enum ProductScalarFieldEnum {
  Active = "active",
  Description = "description",
  Id = "id",
  Image = "image",
  Metadata = "metadata",
  Name = "name",
}

export type ProductUpdateInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: Maybe<Scalars["JSON"]>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  prices?: Maybe<PriceUpdateManyWithoutProductInput>;
};

export type ProductUpdateOneRequiredWithoutPricesInput = {
  connect?: Maybe<ProductWhereUniqueInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutPricesInput>;
  create?: Maybe<ProductCreateWithoutPricesInput>;
  update?: Maybe<ProductUpdateWithoutPricesInput>;
  upsert?: Maybe<ProductUpsertWithoutPricesInput>;
};

export type ProductUpdateWithoutPricesInput = {
  active?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  metadata?: Maybe<Scalars["JSON"]>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ProductUpsertWithoutPricesInput = {
  create: ProductCreateWithoutPricesInput;
  update: ProductUpdateWithoutPricesInput;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>;
  NOT?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  active?: Maybe<BoolFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringNullableFilter>;
  metadata?: Maybe<JsonFilter>;
  name?: Maybe<StringFilter>;
  prices?: Maybe<PriceListRelationFilter>;
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

export type RoleCreateNestedManyWithoutUsersInput = {
  connect?: Maybe<Array<RoleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RoleCreateOrConnectWithoutUsersInput>>;
  create?: Maybe<Array<RoleCreateWithoutUsersInput>>;
};

export type RoleCreateOrConnectWithoutUsersInput = {
  create: RoleCreateWithoutUsersInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateWithoutUsersInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  name: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type RoleListRelationFilter = {
  every?: Maybe<RoleWhereInput>;
  none?: Maybe<RoleWhereInput>;
  some?: Maybe<RoleWhereInput>;
};

export type RoleOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type RoleScalarWhereInput = {
  AND?: Maybe<Array<RoleScalarWhereInput>>;
  NOT?: Maybe<Array<RoleScalarWhereInput>>;
  OR?: Maybe<Array<RoleScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type RoleUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RoleUpdateManyWithWhereWithoutUsersInput = {
  data: RoleUpdateManyMutationInput;
  where: RoleScalarWhereInput;
};

export type RoleUpdateManyWithoutUsersInput = {
  connect?: Maybe<Array<RoleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RoleCreateOrConnectWithoutUsersInput>>;
  create?: Maybe<Array<RoleCreateWithoutUsersInput>>;
  delete?: Maybe<Array<RoleWhereUniqueInput>>;
  deleteMany?: Maybe<Array<RoleScalarWhereInput>>;
  disconnect?: Maybe<Array<RoleWhereUniqueInput>>;
  set?: Maybe<Array<RoleWhereUniqueInput>>;
  update?: Maybe<Array<RoleUpdateWithWhereUniqueWithoutUsersInput>>;
  updateMany?: Maybe<Array<RoleUpdateManyWithWhereWithoutUsersInput>>;
  upsert?: Maybe<Array<RoleUpsertWithWhereUniqueWithoutUsersInput>>;
};

export type RoleUpdateWithWhereUniqueWithoutUsersInput = {
  data: RoleUpdateWithoutUsersInput;
  where: RoleWhereUniqueInput;
};

export type RoleUpdateWithoutUsersInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RoleUpsertWithWhereUniqueWithoutUsersInput = {
  create: RoleCreateWithoutUsersInput;
  update: RoleUpdateWithoutUsersInput;
  where: RoleWhereUniqueInput;
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

export type RoleWhereUniqueInput = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

export type SessionCreateManyUserInput = {
  accessToken: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  expires: Scalars["DateTime"];
  id?: Maybe<Scalars["String"]>;
  sessionToken: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars["Boolean"]>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: Maybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  accessToken: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  expires: Scalars["DateTime"];
  id?: Maybe<Scalars["String"]>;
  sessionToken: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type SessionListRelationFilter = {
  every?: Maybe<SessionWhereInput>;
  none?: Maybe<SessionWhereInput>;
  some?: Maybe<SessionWhereInput>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type SessionScalarWhereInput = {
  AND?: Maybe<Array<SessionScalarWhereInput>>;
  NOT?: Maybe<Array<SessionScalarWhereInput>>;
  OR?: Maybe<Array<SessionScalarWhereInput>>;
  accessToken?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  expires?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  sessionToken?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type SessionUpdateManyMutationInput = {
  accessToken?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: Maybe<SessionCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SessionScalarWhereInput>>;
  disconnect?: Maybe<Array<SessionWhereUniqueInput>>;
  set?: Maybe<Array<SessionWhereUniqueInput>>;
  update?: Maybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  accessToken?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
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

export type SessionWhereUniqueInput = {
  accessToken?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  sessionToken?: Maybe<Scalars["String"]>;
};

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars["String"]>;
};

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

export type Subscription = {
  __typename?: "Subscription";
  cancelAt?: Maybe<Scalars["DateTime"]>;
  cancelAtPeriodEnd: Scalars["Boolean"];
  cancelledAt?: Maybe<Scalars["DateTime"]>;
  createdAt: Scalars["DateTime"];
  currentPeriodEnd: Scalars["DateTime"];
  currentPeriodStart: Scalars["DateTime"];
  endedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  metadata: Scalars["JSON"];
  price?: Maybe<Price>;
  priceId: Scalars["String"];
  status: SubscriptionStatus;
  trialEnd?: Maybe<Scalars["DateTime"]>;
  trialStart?: Maybe<Scalars["DateTime"]>;
  updatedAt: Scalars["DateTime"];
  userId: Scalars["String"];
};

export type SubscriptionCreateManyPriceInput = {
  cancelAt?: Maybe<Scalars["DateTime"]>;
  cancelAtPeriodEnd: Scalars["Boolean"];
  cancelledAt?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  currentPeriodEnd: Scalars["DateTime"];
  currentPeriodStart: Scalars["DateTime"];
  endedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  metadata: Scalars["JSON"];
  status: SubscriptionStatus;
  trialEnd?: Maybe<Scalars["DateTime"]>;
  trialStart?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userId: Scalars["String"];
};

export type SubscriptionCreateManyPriceInputEnvelope = {
  data: Array<SubscriptionCreateManyPriceInput>;
  skipDuplicates?: Maybe<Scalars["Boolean"]>;
};

export type SubscriptionCreateNestedManyWithoutPriceInput = {
  connect?: Maybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SubscriptionCreateOrConnectWithoutPriceInput>>;
  create?: Maybe<Array<SubscriptionCreateWithoutPriceInput>>;
  createMany?: Maybe<SubscriptionCreateManyPriceInputEnvelope>;
};

export type SubscriptionCreateOrConnectWithoutPriceInput = {
  create: SubscriptionCreateWithoutPriceInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionCreateWithoutPriceInput = {
  cancelAt?: Maybe<Scalars["DateTime"]>;
  cancelAtPeriodEnd: Scalars["Boolean"];
  cancelledAt?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  currentPeriodEnd: Scalars["DateTime"];
  currentPeriodStart: Scalars["DateTime"];
  endedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  metadata: Scalars["JSON"];
  status: SubscriptionStatus;
  trialEnd?: Maybe<Scalars["DateTime"]>;
  trialStart?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  user: UserCreateNestedOneWithoutSubscriptionInput;
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
  cancelAt?: Maybe<SortOrder>;
  cancelAtPeriodEnd?: Maybe<SortOrder>;
  cancelledAt?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  currentPeriodEnd?: Maybe<SortOrder>;
  currentPeriodStart?: Maybe<SortOrder>;
  endedAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  metadata?: Maybe<SortOrder>;
  price?: Maybe<PriceOrderByWithRelationInput>;
  priceId?: Maybe<SortOrder>;
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

export type SubscriptionScalarWhereInput = {
  AND?: Maybe<Array<SubscriptionScalarWhereInput>>;
  NOT?: Maybe<Array<SubscriptionScalarWhereInput>>;
  OR?: Maybe<Array<SubscriptionScalarWhereInput>>;
  cancelAt?: Maybe<DateTimeNullableFilter>;
  cancelAtPeriodEnd?: Maybe<BoolFilter>;
  cancelledAt?: Maybe<DateTimeNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  currentPeriodEnd?: Maybe<DateTimeFilter>;
  currentPeriodStart?: Maybe<DateTimeFilter>;
  endedAt?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  metadata?: Maybe<JsonFilter>;
  priceId?: Maybe<StringFilter>;
  status?: Maybe<EnumSubscriptionStatusFilter>;
  trialEnd?: Maybe<DateTimeNullableFilter>;
  trialStart?: Maybe<DateTimeNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
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

export type SubscriptionUpdateManyMutationInput = {
  cancelAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  cancelAtPeriodEnd?: Maybe<BoolFieldUpdateOperationsInput>;
  cancelledAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currentPeriodEnd?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currentPeriodStart?: Maybe<DateTimeFieldUpdateOperationsInput>;
  endedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  metadata?: Maybe<Scalars["JSON"]>;
  status?: Maybe<EnumSubscriptionStatusFieldUpdateOperationsInput>;
  trialEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  trialStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubscriptionUpdateManyWithWhereWithoutPriceInput = {
  data: SubscriptionUpdateManyMutationInput;
  where: SubscriptionScalarWhereInput;
};

export type SubscriptionUpdateManyWithoutPriceInput = {
  connect?: Maybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SubscriptionCreateOrConnectWithoutPriceInput>>;
  create?: Maybe<Array<SubscriptionCreateWithoutPriceInput>>;
  createMany?: Maybe<SubscriptionCreateManyPriceInputEnvelope>;
  delete?: Maybe<Array<SubscriptionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SubscriptionScalarWhereInput>>;
  disconnect?: Maybe<Array<SubscriptionWhereUniqueInput>>;
  set?: Maybe<Array<SubscriptionWhereUniqueInput>>;
  update?: Maybe<Array<SubscriptionUpdateWithWhereUniqueWithoutPriceInput>>;
  updateMany?: Maybe<Array<SubscriptionUpdateManyWithWhereWithoutPriceInput>>;
  upsert?: Maybe<Array<SubscriptionUpsertWithWhereUniqueWithoutPriceInput>>;
};

export type SubscriptionUpdateWithWhereUniqueWithoutPriceInput = {
  data: SubscriptionUpdateWithoutPriceInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpdateWithoutPriceInput = {
  cancelAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  cancelAtPeriodEnd?: Maybe<BoolFieldUpdateOperationsInput>;
  cancelledAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currentPeriodEnd?: Maybe<DateTimeFieldUpdateOperationsInput>;
  currentPeriodStart?: Maybe<DateTimeFieldUpdateOperationsInput>;
  endedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  metadata?: Maybe<Scalars["JSON"]>;
  status?: Maybe<EnumSubscriptionStatusFieldUpdateOperationsInput>;
  trialEnd?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  trialStart?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutSubscriptionInput>;
};

export type SubscriptionUpsertWithWhereUniqueWithoutPriceInput = {
  create: SubscriptionCreateWithoutPriceInput;
  update: SubscriptionUpdateWithoutPriceInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionWhereInput = {
  AND?: Maybe<Array<SubscriptionWhereInput>>;
  NOT?: Maybe<Array<SubscriptionWhereInput>>;
  OR?: Maybe<Array<SubscriptionWhereInput>>;
  cancelAt?: Maybe<DateTimeNullableFilter>;
  cancelAtPeriodEnd?: Maybe<BoolFilter>;
  cancelledAt?: Maybe<DateTimeNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  currentPeriodEnd?: Maybe<DateTimeFilter>;
  currentPeriodStart?: Maybe<DateTimeFilter>;
  endedAt?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  metadata?: Maybe<JsonFilter>;
  price?: Maybe<PriceRelationFilter>;
  priceId?: Maybe<StringFilter>;
  status?: Maybe<EnumSubscriptionStatusFilter>;
  trialEnd?: Maybe<DateTimeNullableFilter>;
  trialStart?: Maybe<DateTimeNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
};

export type SubscriptionWhereUniqueInput = {
  id?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  _count?: Maybe<UserCount>;
  billingAddress?: Maybe<Scalars["JSON"]>;
  createdAt: Scalars["DateTime"];
  email?: Maybe<Scalars["String"]>;
  emailVerified?: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  paymentMethod?: Maybe<Scalars["JSON"]>;
  stripeCustomerId?: Maybe<Scalars["String"]>;
  subscription?: Maybe<Subscription>;
  updatedAt: Scalars["DateTime"];
};

export type UserCount = {
  __typename?: "UserCount";
  accounts: Scalars["Int"];
  roles: Scalars["Int"];
  sessions: Scalars["Int"];
};

export type UserCreateNestedOneWithoutSubscriptionInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSubscriptionInput>;
  create?: Maybe<UserCreateWithoutSubscriptionInput>;
};

export type UserCreateOrConnectWithoutSubscriptionInput = {
  create: UserCreateWithoutSubscriptionInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutSubscriptionInput = {
  accounts?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  billingAddress?: Maybe<Scalars["JSON"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  email?: Maybe<Scalars["String"]>;
  emailVerified?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  paymentMethod?: Maybe<Scalars["JSON"]>;
  roles?: Maybe<RoleCreateNestedManyWithoutUsersInput>;
  sessions?: Maybe<SessionCreateNestedManyWithoutUserInput>;
  stripeCustomerId?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
};

export type UserOrderByWithRelationInput = {
  accounts?: Maybe<AccountOrderByRelationAggregateInput>;
  billingAddress?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  paymentMethod?: Maybe<SortOrder>;
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
  BillingAddress = "billingAddress",
  CreatedAt = "createdAt",
  Email = "email",
  EmailVerified = "emailVerified",
  Id = "id",
  Image = "image",
  Name = "name",
  PaymentMethod = "paymentMethod",
  StripeCustomerId = "stripeCustomerId",
  UpdatedAt = "updatedAt",
}

export type UserUpdateInput = {
  name: Scalars["String"];
};

export type UserUpdateOneRequiredWithoutSubscriptionInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSubscriptionInput>;
  create?: Maybe<UserCreateWithoutSubscriptionInput>;
  update?: Maybe<UserUpdateWithoutSubscriptionInput>;
  upsert?: Maybe<UserUpsertWithoutSubscriptionInput>;
};

export type UserUpdateWithoutSubscriptionInput = {
  accounts?: Maybe<AccountUpdateManyWithoutUserInput>;
  billingAddress?: Maybe<Scalars["JSON"]>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  paymentMethod?: Maybe<Scalars["JSON"]>;
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>;
  sessions?: Maybe<SessionUpdateManyWithoutUserInput>;
  stripeCustomerId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutSubscriptionInput = {
  create: UserCreateWithoutSubscriptionInput;
  update: UserUpdateWithoutSubscriptionInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  accounts?: Maybe<AccountListRelationFilter>;
  billingAddress?: Maybe<JsonNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  paymentMethod?: Maybe<JsonNullableFilter>;
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

export type PlanSettingsQueryVariables = Exact<{ [key: string]: never }>;

export type PlanSettingsQuery = {
  __typename?: "Query";
  me?:
    | {
        __typename?: "User";
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
        id: string;
        subscription?:
          | {
              __typename?: "Subscription";
              id: string;
              status: SubscriptionStatus;
              price?:
                | {
                    __typename?: "Price";
                    id: string;
                    currency: string;
                    unitAmount: number;
                    recurring: any;
                    product?: { __typename?: "Product"; name: string } | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  products: Array<{
    __typename?: "Product";
    id: string;
    name: string;
    metadata: any;
    prices: Array<{ __typename?: "Price"; id: string; currency: string; recurring: any; unitAmount: number }>;
  }>;
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

export type ProfileSettingsQueryVariables = Exact<{ [key: string]: never }>;

export type ProfileSettingsQuery = {
  __typename?: "Query";
  me?:
    | {
        __typename?: "User";
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | null
    | undefined;
};

export type UpdateProfileSettingsMutationVariables = Exact<{
  updateUserData: UserUpdateInput;
}>;

export type UpdateProfileSettingsMutation = {
  __typename?: "Mutation";
  updateUser?:
    | {
        __typename?: "User";
        id: string;
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | null
    | undefined;
};

export type UpdateUserProfileMutationVariables = Exact<{
  data: UserUpdateInput;
}>;

export type UpdateUserProfileMutation = {
  __typename?: "Mutation";
  updateUser?: { __typename?: "User"; id: string; name?: string | null | undefined } | null | undefined;
};

export type UserWelcomeQueryVariables = Exact<{ [key: string]: never }>;

export type UserWelcomeQuery = {
  __typename?: "Query";
  me?: { __typename?: "User"; name?: string | null | undefined; email?: string | null | undefined } | null | undefined;
};

export type PlanSettingsFormProductFragmentFragment = {
  __typename?: "Product";
  id: string;
  name: string;
  metadata: any;
  prices: Array<{ __typename?: "Price"; id: string; currency: string; recurring: any; unitAmount: number }>;
};

export type PlanSettingsFormUserFragmentFragment = {
  __typename?: "User";
  id: string;
  email?: string | null | undefined;
  subscription?:
    | {
        __typename?: "Subscription";
        id: string;
        status: SubscriptionStatus;
        price?:
          | {
              __typename?: "Price";
              id: string;
              currency: string;
              unitAmount: number;
              recurring: any;
              product?: { __typename?: "Product"; name: string } | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type ProductCardProductFragmentFragment = {
  __typename?: "Product";
  id: string;
  name: string;
  metadata: any;
  prices: Array<{ __typename?: "Price"; currency: string; recurring: any; unitAmount: number }>;
};

export type ProfileSettingsFormUserFragmentFragment = {
  __typename?: "User";
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

export const PlanSettingsFormProductFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PlanSettingsFormProductFragment" },
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
                { kind: "Field", name: { kind: "Name", value: "id" } },
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
} as unknown as DocumentNode<PlanSettingsFormProductFragmentFragment, unknown>;
export const PlanSettingsFormUserFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PlanSettingsFormUserFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "subscription" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "price" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "currency" } },
                      { kind: "Field", name: { kind: "Name", value: "unitAmount" } },
                      { kind: "Field", name: { kind: "Name", value: "recurring" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "product" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PlanSettingsFormUserFragmentFragment, unknown>;
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
export const PlanSettingsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "PlanSettings" },
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
                { kind: "FragmentSpread", name: { kind: "Name", value: "PlanSettingsFormUserFragment" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "products" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "PlanSettingsFormProductFragment" } },
              ],
            },
          },
        ],
      },
    },
    ...PlanSettingsFormUserFragmentFragmentDoc.definitions,
    ...PlanSettingsFormProductFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<PlanSettingsQuery, PlanSettingsQueryVariables>;
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
export const UpdateUserProfileDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateUserProfile" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "data" } },
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
                value: { kind: "Variable", name: { kind: "Name", value: "data" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;
export const UserWelcomeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "UserWelcome" },
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
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserWelcomeQuery, UserWelcomeQueryVariables>;
