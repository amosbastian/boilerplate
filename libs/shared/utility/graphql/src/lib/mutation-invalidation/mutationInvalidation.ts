/*
  Map of mutations to queries that should be invalidated
  {
    'createUser': ['getUser', 'searchUsers']
  }
*/
export const GraphqlMutationInvalidations: Map<string, Set<string>> = new Map();

/*
  Add a mutation and associated queries to the map

  addGraphqlMutationInvalidations({
    'createUser': ['getUser', 'searchUsers']
  })
*/
export const addGraphqlMutationInvalidations = (map: Record<string, string[]>) => {
  Object.entries(map).forEach(([mutationName, queries]) => {
    const set = GraphqlMutationInvalidations.get(mutationName) || new Set();
    queries.forEach((query) => set.add(query));
    GraphqlMutationInvalidations.set(mutationName, set);
  });
};
