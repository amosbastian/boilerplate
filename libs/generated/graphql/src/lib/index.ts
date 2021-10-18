/* eslint-disable */
import * as graphql from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

const documents = {
  "\n  query PlanSettings {\n    me {\n      name\n      email\n      image\n      ...PlanSettingsFormUserFragment\n    }\n    products {\n      id\n      ...PlanSettingsFormProductFragment\n    }\n  }\n":
    graphql.PlanSettingsDocument,
  "\n  query Products {\n    products {\n      id\n      ...ProductCardProductFragment\n    }\n  }\n":
    graphql.ProductsDocument,
  "\n  query ProfileSettings {\n    me {\n      name\n      email\n      image\n      ...ProfileSettingsFormUserFragment\n    }\n  }\n":
    graphql.ProfileSettingsDocument,
  "\n  mutation UpdateProfileSettings($updateUserData: UserUpdateInput!) {\n    updateUser(data: $updateUserData) {\n      id\n      name\n      email\n      image\n    }\n  }\n":
    graphql.UpdateProfileSettingsDocument,
  "\n  mutation UpdateUserProfile($data: UserUpdateInput!) {\n    updateUser(data: $data) {\n      id\n      name\n    }\n  }\n":
    graphql.UpdateUserProfileDocument,
  "\n  query UserWelcome {\n    me {\n      name\n      email\n    }\n  }\n": graphql.UserWelcomeDocument,
  "\n  fragment PlanSettingsFormProductFragment on Product {\n    id\n    name\n    metadata\n    prices {\n      id\n      currency\n      recurring\n      unitAmount\n    }\n  }\n":
    graphql.PlanSettingsFormProductFragmentFragmentDoc,
  "\n  fragment PlanSettingsFormUserFragment on User {\n    id\n    email\n    subscription {\n      id\n      status\n      price {\n        id\n        currency\n        unitAmount\n        recurring\n        product {\n          name\n        }\n      }\n    }\n  }\n":
    graphql.PlanSettingsFormUserFragmentFragmentDoc,
  "\n  fragment ProductCardProductFragment on Product {\n    id\n    name\n    metadata\n    prices {\n      currency\n      recurring\n      unitAmount\n    }\n  }\n":
    graphql.ProductCardProductFragmentFragmentDoc,
  "\n  fragment ProfileSettingsFormUserFragment on User {\n    name\n    email\n    image\n  }\n":
    graphql.ProfileSettingsFormUserFragmentFragmentDoc,
};

export function gql(
  source: "\n  query PlanSettings {\n    me {\n      name\n      email\n      image\n      ...PlanSettingsFormUserFragment\n    }\n    products {\n      id\n      ...PlanSettingsFormProductFragment\n    }\n  }\n",
): typeof documents["\n  query PlanSettings {\n    me {\n      name\n      email\n      image\n      ...PlanSettingsFormUserFragment\n    }\n    products {\n      id\n      ...PlanSettingsFormProductFragment\n    }\n  }\n"];
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
  source: "\n  mutation UpdateUserProfile($data: UserUpdateInput!) {\n    updateUser(data: $data) {\n      id\n      name\n    }\n  }\n",
): typeof documents["\n  mutation UpdateUserProfile($data: UserUpdateInput!) {\n    updateUser(data: $data) {\n      id\n      name\n    }\n  }\n"];
export function gql(
  source: "\n  query UserWelcome {\n    me {\n      name\n      email\n    }\n  }\n",
): typeof documents["\n  query UserWelcome {\n    me {\n      name\n      email\n    }\n  }\n"];
export function gql(
  source: "\n  fragment PlanSettingsFormProductFragment on Product {\n    id\n    name\n    metadata\n    prices {\n      id\n      currency\n      recurring\n      unitAmount\n    }\n  }\n",
): typeof documents["\n  fragment PlanSettingsFormProductFragment on Product {\n    id\n    name\n    metadata\n    prices {\n      id\n      currency\n      recurring\n      unitAmount\n    }\n  }\n"];
export function gql(
  source: "\n  fragment PlanSettingsFormUserFragment on User {\n    id\n    email\n    subscription {\n      id\n      status\n      price {\n        id\n        currency\n        unitAmount\n        recurring\n        product {\n          name\n        }\n      }\n    }\n  }\n",
): typeof documents["\n  fragment PlanSettingsFormUserFragment on User {\n    id\n    email\n    subscription {\n      id\n      status\n      price {\n        id\n        currency\n        unitAmount\n        recurring\n        product {\n          name\n        }\n      }\n    }\n  }\n"];
export function gql(
  source: "\n  fragment ProductCardProductFragment on Product {\n    id\n    name\n    metadata\n    prices {\n      currency\n      recurring\n      unitAmount\n    }\n  }\n",
): typeof documents["\n  fragment ProductCardProductFragment on Product {\n    id\n    name\n    metadata\n    prices {\n      currency\n      recurring\n      unitAmount\n    }\n  }\n"];
export function gql(
  source: "\n  fragment ProfileSettingsFormUserFragment on User {\n    name\n    email\n    image\n  }\n",
): typeof documents["\n  fragment ProfileSettingsFormUserFragment on User {\n    name\n    email\n    image\n  }\n"];

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
