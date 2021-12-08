// https://github.com/tannerlinsley/react-query/discussions/1557
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import * as React from "react";
import { useQuery, UseQueryOptions } from "react-query";
import { getOperationName } from "../get-operation-name/getOperationName";
import { GraphqlError } from "../graphql-error/graphqlError";
import { graphqlFetch } from "../graphql-fetch/graphqlFetch";

/*
  Graphql wrapper on react-query `useQuery`

  const { data, isLoading, error, refetch } = useGraphqlQuery(
    GetThingDocument,
    { id: 1 },
    { ...useQueryOptions }
  )
*/
export const useGraphqlQuery = <TData = any, TVariables = Record<string, any>>(
  operation: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: UseQueryOptions<TData, GraphqlError>,
) => {
  const operationName = React.useMemo(() => getOperationName(operation), [operation]);
  const queryKey = React.useMemo(() => [operationName, variables ?? {}], [operationName, variables]);

  return useQuery(queryKey, () => graphqlFetch(operation, variables), options as any);
};
