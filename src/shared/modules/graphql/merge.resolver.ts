import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import userSchemas from "@/subdomains/users/schemas";
import userResolvers from "@/subdomains/users/resolvers";

const schemas = [userSchemas];
const resolvers = [userResolvers];

export const typeDefs = mergeTypeDefs(schemas);
export const mergedResolvers = mergeResolvers(resolvers);
