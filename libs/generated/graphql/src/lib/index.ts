/* eslint-disable */
import * as graphql from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

const documents = {
  "\n  query Products {\n    products {\n      id\n      ...ProductCardProductFragment\n    }\n  }\n":
    graphql.ProductsDocument,
  "\n  query ProfileSettings {\n    me {\n      name\n      email\n      image\n      ...ProfileSettingsFormUserFragment\n    }\n  }\n":
    graphql.ProfileSettingsDocument,
  "\n  mutation UpdateProfileSettings($updateUserData: UserUpdateInput!) {\n    updateUser(data: $updateUserData) {\n      id\n      name\n      email\n      image\n    }\n  }\n":
    graphql.UpdateProfileSettingsDocument,
  "\n  fragment ProductCardProductFragment on Product {\n    id\n    name\n    metadata\n    prices {\n      currency\n      recurring\n      unitAmount\n    }\n  }\n":
    graphql.ProductCardProductFragmentFragmentDoc,
  "\n  fragment ProfileSettingsFormUserFragment on User {\n    name\n    email\n    image\n  }\n":
    graphql.ProfileSettingsFormUserFragmentFragmentDoc,
  "\n  mutation UpsertPrice($where: PriceWhereUniqueInput!, $create: PriceCreateInput!, $update: PriceUpdateInput!) {\n    upsertPrice(where: $where, create: $create, update: $update) {\n      id\n    }\n  }\n":
    graphql.UpsertPriceDocument,
  "\n  mutation UpsertProduct($where: ProductWhereUniqueInput!, $create: ProductCreateInput!, $update: ProductUpdateInput!) {\n    upsertProduct(where: $where, create: $create, update: $update) {\n      id\n    }\n  }\n":
    graphql.UpsertProductDocument,
  "\n  mutation UpdateUserSubscription($data: UserUpdateInput!) {\n    updateUser(data: $data) {\n      id\n      subscription {\n        id\n      }\n    }\n  }\n":
    graphql.UpdateUserSubscriptionDocument,
};

export function gql(
  source: "\n  query Products {\n    products {\n      id\n      ...ProductCardProductFragment\n    }\n  }\n",
): typeof documents["\n  query Products {\n    products {\n      id\n      ...ProductCardProductFragment\n    }\n  }\n"];
export function gql(
  source: "\n  query ProfileSettings {\n    me {\n      name\n      email\n      image\n      ...ProfileSettingsFormUserFragment\n    }\n  }\n",
): typeof documents["\n  query ProfileSettings {\n    me {\n      name\n      email\n      image\n      ...ProfileSettingsFormUserFragment\n    }\n  }\n"];
export function gql(
  source: "\n  mutation UpdateProfileSettings($updateUserData: UserUpdateInput!) {\n    updateUser(data: $updateUserData) {\n      id\n      name\n      email\n      image\n    }\n  }\n",
): typeof documents["\n  mutation UpdateProfileSettings($updateUserData: UserUpdateInput!) {\n    updateUser(data: $updateUserData) {\n      id\n      name\n      email\n      image\n    }\n  }\n"];
export function gql(
  source: "\n  fragment ProductCardProductFragment on Product {\n    id\n    name\n    metadata\n    prices {\n      currency\n      recurring\n      unitAmount\n    }\n  }\n",
): typeof documents["\n  fragment ProductCardProductFragment on Product {\n    id\n    name\n    metadata\n    prices {\n      currency\n      recurring\n      unitAmount\n    }\n  }\n"];
export function gql(
  source: "\n  fragment ProfileSettingsFormUserFragment on User {\n    name\n    email\n    image\n  }\n",
): typeof documents["\n  fragment ProfileSettingsFormUserFragment on User {\n    name\n    email\n    image\n  }\n"];
export function gql(
  source: "\n  mutation UpsertPrice($where: PriceWhereUniqueInput!, $create: PriceCreateInput!, $update: PriceUpdateInput!) {\n    upsertPrice(where: $where, create: $create, update: $update) {\n      id\n    }\n  }\n",
): typeof documents["\n  mutation UpsertPrice($where: PriceWhereUniqueInput!, $create: PriceCreateInput!, $update: PriceUpdateInput!) {\n    upsertPrice(where: $where, create: $create, update: $update) {\n      id\n    }\n  }\n"];
export function gql(
  source: "\n  mutation UpsertProduct($where: ProductWhereUniqueInput!, $create: ProductCreateInput!, $update: ProductUpdateInput!) {\n    upsertProduct(where: $where, create: $create, update: $update) {\n      id\n    }\n  }\n",
): typeof documents["\n  mutation UpsertProduct($where: ProductWhereUniqueInput!, $create: ProductCreateInput!, $update: ProductUpdateInput!) {\n    upsertProduct(where: $where, create: $create, update: $update) {\n      id\n    }\n  }\n"];
export function gql(
  source: "\n  mutation UpdateUserSubscription($data: UserUpdateInput!) {\n    updateUser(data: $data) {\n      id\n      subscription {\n        id\n      }\n    }\n  }\n",
): typeof documents["\n  mutation UpdateUserSubscription($data: UserUpdateInput!) {\n    updateUser(data: $data) {\n      id\n      subscription {\n        id\n      }\n    }\n  }\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never;
