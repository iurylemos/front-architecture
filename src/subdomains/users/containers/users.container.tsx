"use client";

import React from "react";
import AppLayout from "@/shared/layouts/app.layout";
import { useRouter } from "next/navigation";
import { UsersInterface } from "@/subdomains/users/interfaces/users.interface";
import { SharedHeaderComponent } from "@/shared/components/header/header.component";

export function UsersContainer(): JSX.Element {
  const router = useRouter();
  //   const messages = usei18n()
  //   const state = useSelector()

  return (
    <AppLayout>
      <SharedHeaderComponent />
      <UsersInterface />
    </AppLayout>
  );
}
