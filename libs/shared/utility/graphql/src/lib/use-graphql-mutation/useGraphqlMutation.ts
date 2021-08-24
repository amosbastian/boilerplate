// https://github.com/tannerlinsley/react-query/discussions/1557
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { useMutation, UseMutationOptions } from "react-query";
import { GraphqlError } from "../graphql-error/graphqlError";
import { graphqlFetch } from "../graphql-fetch/graphqlFetch";

/*
  Graphql wrapper around react-query `useMutation`.

  const createThing = useGraphlMutation(CreateThingDocument, { ...useMutationOptions })

  try {
    const res = await createThing.mutateAsync({ name: 'me' })
    console.log(`${res.createThing.name} was created`)
  } catch (err) {
    console.error(err)
  }
*/
export const useGraphqlMutation = <TData = any, TVariables = Record<string, any>>(
  operation: TypedDocumentNode<TData, TVariables>,
  options?: UseMutationOptions<TData, GraphqlError, TVariables>,
) => {
  return useMutation((variables?: TVariables) => graphqlFetch(operation, variables), options);
};
