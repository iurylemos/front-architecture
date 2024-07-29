import React from "react";
import AppLayout from "@/shared/layouts/app.layout";
import { UsersInterface } from "@/subdomains/users/interfaces/users.interface";

export function UsersContainer(): JSX.Element {
  return (
    <AppLayout>
      <UsersInterface />
    </AppLayout>
  );
}
