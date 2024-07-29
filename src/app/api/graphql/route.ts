import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import schemas from "@/subdomains/users/schemas";
import resolvers from "@/subdomains/users/resolvers";
import { DataSourceUsers } from "@/subdomains/users/datasource";

const server = new ApolloServer({
  resolvers,
  typeDefs: schemas,
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
