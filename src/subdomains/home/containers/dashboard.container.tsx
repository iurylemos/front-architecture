"use client";

import React from "react";
import PublicLayout from "@/shared/layouts/public.layout";
import { DashboardInterface } from "@/subdomains/home/interfaces/dashboard.interface";
import { useRouter } from "next/navigation";
import { SharedHeaderComponent } from "@/shared/components/header/header.component";

export const DashboardContainer: React.FC = (): JSX.Element => {
  const router = useRouter();
  //   const messages = usei18n()
  //   const state = useSelector()

  return (
    <PublicLayout>
      <SharedHeaderComponent />
      <DashboardInterface />
    </PublicLayout>
  );
};
