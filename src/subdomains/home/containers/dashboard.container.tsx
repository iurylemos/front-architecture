"use client";

import AppLayout from "@/shared/layouts/app.layout";
import PublicLayout from "@/shared/layouts/public.layout";
import { DashboardInterface } from "@/subdomains/home/interfaces/dashboard.interface";
import { useRouter } from "next/navigation";
import React from "react";
import { RecoilRoot } from "recoil";

export const DashboardContainer: React.FC = (): JSX.Element => {
  const router = useRouter();
  //   const messages = usei18n()
  //   const state = useSelector()

  return (
    <RecoilRoot>
      <PublicLayout>
        <AppLayout>
          <DashboardInterface />
        </AppLayout>
      </PublicLayout>
    </RecoilRoot>
  );
};
