"use client";

import React from "react";
import AppLayout from "@/shared/layouts/app.layout";
import PublicLayout from "@/shared/layouts/public.layout";
import { DashboardInterface } from "@/subdomains/home/interfaces/dashboard.interface";
import { useRouter } from "next/navigation";

export const DashboardContainer: React.FC = (): JSX.Element => {
  const router = useRouter();
  //   const messages = usei18n()
  //   const state = useSelector()

  return (
    <PublicLayout>
      <AppLayout>
        <DashboardInterface />
      </AppLayout>
    </PublicLayout>
  );
};
