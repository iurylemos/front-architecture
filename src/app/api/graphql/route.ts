import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { DataSourceUsers } from "@/subdomains/users/datasource";
import {
  mergedResolvers,
  typeDefs,
} from "@/shared/modules/graphql/merge.resolver";

const server = new ApolloServer({
  typeDefs,
  resolvers: mergedResolvers,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({
    req,
    res,
    dataSources: {
      users: new DataSourceUsers(),
    },
  }),
});

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
