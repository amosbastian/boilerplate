import "reflect-metadata";
import { PriceResolver, ProductResolver, UserResolver } from "@boilerplate/api/data-access";
import "dotenv/config";
import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { authChecker } from "../auth-checker/authChecker";

export const createSchema = async (): Promise<GraphQLSchema> => {
  const schema = await buildSchema({
    resolvers: [PriceResolver, ProductResolver, UserResolver],
    authChecker,
    validate: false,
  });

  return schema;
};
