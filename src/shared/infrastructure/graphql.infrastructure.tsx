"use client";

import { ApolloProvider } from "@apollo/client";
import React from "react";
import apolloClient from "@/shared/modules/graphql/apollo.client";

type GraphQLInfrastructureProps = {
  children: React.ReactNode;
};

export function GraphQLInfrastructure({
  children,
}: GraphQLInfrastructureProps): JSX.Element {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
