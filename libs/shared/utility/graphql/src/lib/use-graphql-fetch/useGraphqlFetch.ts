// https://github.com/tannerlinsley/react-query/discussions/1557
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import * as React from "react";
import { FetchQueryOptions, useQueryClient } from "react-query";
import { getOperationName } from "../get-operation-name/getOperationName";
import { GraphqlError } from "../graphql-error/graphqlError";
import { graphqlFetch } from "../graphql-fetch/graphqlFetch";

/*
  Graphql wrapper on react-query `queryClient.fetchQuery`

  const getThing = useGraphqlFetch(GetThingDocument)

  try {
    const response = await getThing({ id: 1 }, { ...fetchQueryOptions })
    console.log(`${response.getThing?.name} was updated`)
  } catch (err) {
    console.error(err)
  }
*/
export const useGraphqlFetch = <TData = any, TVariables = Record<string, any>>(
  operation: TypedDocumentNode<TData, TVariables>,
) => {
  const queryClient = useQueryClient();
  return React.useCallback(
    (variables?: TVariables, options?: FetchQueryOptions<TData, GraphqlError>) => {
      const operationName = getOperationName(operation);
      return queryClient.fetchQuery<TData, GraphqlError>(
        [operationName, variables ?? {}],
        () => graphqlFetch(operation, variables),
        options,
      );
    },
    [operation, queryClient],
  );
};
