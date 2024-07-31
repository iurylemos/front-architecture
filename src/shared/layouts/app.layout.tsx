import React from "react";
import { GraphQLInfrastructure } from "@/shared/infrastructure/graphql.infrastructure";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps): JSX.Element {
  return (
    <GraphQLInfrastructure>
      <main className="w-full max-w-screen-xl p-4 mx-auto lg:px-12">
        {children}
      </main>
    </GraphQLInfrastructure>
  );
}
