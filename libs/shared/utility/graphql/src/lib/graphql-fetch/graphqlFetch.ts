// https://github.com/tannerlinsley/react-query/discussions/1557
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { print } from "graphql";
import { getOperationName } from "../get-operation-name/getOperationName";
import { GraphqlError } from "../graphql-error/graphqlError";

let GRAPHQL_ENDPOINT = "";
const getGraphqlEndpoint = () => GRAPHQL_ENDPOINT;
export const setGraphqlEndpoint = (endpoint: string) => (GRAPHQL_ENDPOINT = endpoint);

/*
  Graphql fetch wrapper

  try {
    const res = graphqlFetch(GetThingDocument, { id: 'x' })
    console.log(res.getThing?.name)
  } catch (err) {
    console.err(err)
  }
*/
export const graphqlFetch = async <TData = any, TVariables = Record<string, any>>(
  operation: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
): Promise<TData> => {
  const operationName = getOperationName(operation) || "";
  const query = print(operation);

  const res = await fetch(getGraphqlEndpoint(), {
    headers: { "content-type": "application/json" },
    method: "POST",
    body: JSON.stringify({ operationName, query, variables }),
    credentials: "include",
  });

  // extract the results, catch json parse errors
  let json;
  try {
    json = await res.json();
  } catch (err) {
    throw new GraphqlError(res.statusText, res.status, operationName, query);
  }

  // if not a 20x status code, throw an error
  if (!res.ok) throw new GraphqlError(res.statusText, res.status, operationName, query);

  // graphql errors are an array of errors with a 200 response, pluck the first one
  if (Array.isArray(json.errors)) {
    const [error] = json.errors;
    throw new GraphqlError(error.message, res.status, operationName, query);
  }

  // all is good, return the data property
  return json.data;
};
