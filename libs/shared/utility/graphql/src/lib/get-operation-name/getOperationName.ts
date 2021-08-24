// https://github.com/tannerlinsley/react-query/discussions/1557
import { DocumentNode, OperationDefinitionNode, visit } from "graphql";

/*
 Get the operationName from a graphql DocumentNode
*/
export const getOperationName = (query: DocumentNode) => {
  let operationName;
  visit(query, {
    OperationDefinition(node: OperationDefinitionNode) {
      operationName = node.name?.value;
    },
  });
  return operationName;
};
