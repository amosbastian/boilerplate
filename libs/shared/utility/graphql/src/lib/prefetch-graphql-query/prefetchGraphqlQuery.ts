import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { FetchQueryOptions, QueryClient } from "react-query";
import { getOperationName } from "../get-operation-name/getOperationName";
import { GraphqlError } from "../graphql-error/graphqlError";
import { graphqlFetch } from "../graphql-fetch/graphqlFetch";

/*
  Graphql wrapper on react-query `queryClient.prefetchQuery`

  export async function getStaticProps() {
    const queryClient = prefetchGraphqlQuery(Query)
  
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    }
  }
*/
export const prefetchGraphqlQuery = async <TData = any, TVariables = Record<string, any>>(
  operation: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  options?: FetchQueryOptions<TData, GraphqlError>,
) => {
  const queryClient = new QueryClient();
  const operationName = getOperationName(operation);

  await queryClient.prefetchQuery<TData, GraphqlError>(
    [operationName, variables ?? {}],
    () => graphqlFetch(operation, variables),
    options,
  );

  return queryClient;
};
