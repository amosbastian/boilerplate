/* eslint-disable */
import * as graphql from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

const documents = {
  "\n  fragment PlanCardProductFragment on Product {\n    id\n    name\n    metadata\n    price {\n      currency\n      unitAmount\n    }\n  }\n":
    graphql.PlanCardProductFragmentFragmentDoc,
  "\n  query Products {\n    products {\n      id\n      ...PlanCardProductFragment\n    }\n  }\n":
    graphql.ProductsDocument,
};

export function gql(
  source: "\n  fragment PlanCardProductFragment on Product {\n    id\n    name\n    metadata\n    price {\n      currency\n      unitAmount\n    }\n  }\n",
): typeof documents["\n  fragment PlanCardProductFragment on Product {\n    id\n    name\n    metadata\n    price {\n      currency\n      unitAmount\n    }\n  }\n"];
export function gql(
  source: "\n  query Products {\n    products {\n      id\n      ...PlanCardProductFragment\n    }\n  }\n",
): typeof documents["\n  query Products {\n    products {\n      id\n      ...PlanCardProductFragment\n    }\n  }\n"];

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
