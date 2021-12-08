// https://github.com/tannerlinsley/react-query/discussions/1557
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import * as React from "react";
import { useInfiniteQuery, UseInfiniteQueryOptions } from "react-query";
import { getOperationName } from "../get-operation-name/getOperationName";
import { GraphqlError } from "../graphql-error/graphqlError";
import { graphqlFetch } from "../graphql-fetch/graphqlFetch";

/*
  Graphql wrapper on react-query `useInfiniteQuery`.
  import { getOperationName } from "../get-operation-name/getOperationName";

  const { data, error, isLoading, refetch } = useGraphqlInfiniteQuery(
    SearchThingsDocument,
    { limit: 10, skip: 0 },
    { ...useInfiniteQueryOptions }
  )
*/
export const useGraphqlInfiniteQuery = <TData = any, TVariables = Record<string, any>>(
  operation: TypedDocumentNode<TData, TVariables>,
  variables: TVariables,
  options?: UseInfiniteQueryOptions<TData, GraphqlError>,
) => {
  const operationName = React.useMemo(() => getOperationName(operation), [operation]);
  const queryKey = React.useMemo(() => [operationName, variables ?? {}, "infinite"], [operationName, variables]);

  return useInfiniteQuery(
    queryKey,
    ({ pageParam }) => graphqlFetch(operation, { ...variables, ...pageParam }),
    options as any,
  );
};
