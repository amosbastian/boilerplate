/* eslint-disable */
import * as graphql from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

const documents = {
  "\n  fragment ProductCardProductFragment on Product {\n    id\n    name\n    metadata\n    prices {\n      currency\n      recurring\n      unitAmount\n    }\n  }\n":
    graphql.ProductCardProductFragmentFragmentDoc,
  "\n  query Products {\n    products {\n      id\n      ...ProductCardProductFragment\n    }\n  }\n":
    graphql.ProductsDocument,
};

export function gql(
  source: "\n  fragment ProductCardProductFragment on Product {\n    id\n    name\n    metadata\n    prices {\n      currency\n      recurring\n      unitAmount\n    }\n  }\n",
): typeof documents["\n  fragment ProductCardProductFragment on Product {\n    id\n    name\n    metadata\n    prices {\n      currency\n      recurring\n      unitAmount\n    }\n  }\n"];
export function gql(
  source: "\n  query Products {\n    products {\n      id\n      ...ProductCardProductFragment\n    }\n  }\n",
): typeof documents["\n  query Products {\n    products {\n      id\n      ...ProductCardProductFragment\n    }\n  }\n"];

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
