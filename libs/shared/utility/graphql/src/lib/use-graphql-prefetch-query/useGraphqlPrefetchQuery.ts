import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import * as React from "react";
import { FetchQueryOptions, useQueryClient } from "react-query";
import { getOperationName } from "../get-operation-name/getOperationName";
import { GraphqlError } from "../graphql-error/graphqlError";
import { graphqlFetch } from "../graphql-fetch/graphqlFetch";

/*
  Graphql wrapper on react-query `queryClient.prefetchQuery`

  export async function getStaticProps() {
    const getThing = useGraphqlPrefetchQuery(GetThingDocument)
  
    return {
      props: {
        dehydratedState: dehydrate(getThing),
      },
    }
  }
*/
export const useGraphqlPrefetchQuery = <TData = any, TVariables = Record<string, any>>(
  operation: TypedDocumentNode<TData, TVariables>,
) => {
  const queryClient = useQueryClient();
  return React.useCallback(
    (variables?: TVariables, options?: FetchQueryOptions<TData, GraphqlError>) => {
      const operationName = getOperationName(operation);
      return queryClient.prefetchQuery<TData, GraphqlError>(
        [operationName, variables ?? {}],
        () => graphqlFetch(operation, variables),
        options,
      );
    },
    [operation, queryClient],
  );
};
