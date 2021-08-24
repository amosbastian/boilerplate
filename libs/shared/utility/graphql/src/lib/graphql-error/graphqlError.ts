// https://github.com/tannerlinsley/react-query/discussions/1557

/*
  GraphqlError that has some additional data on it
*/
export class GraphqlError extends Error {
  public status;
  public operationName;
  public query;
  constructor(message?: string, status?: number, operationName?: string, query?: string) {
    super(message || "Unknown Error");
    this.status = status;
    this.operationName = operationName;
    this.query = query;
  }
}
