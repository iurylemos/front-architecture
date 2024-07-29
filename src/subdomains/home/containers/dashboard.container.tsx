import React from "react";
import PublicLayout from "@/shared/layouts/public.layout";
import { DashboardInterface } from "@/subdomains/home/interfaces/dashboard.interface";

export const DashboardContainer: React.FC = (): JSX.Element => {
  return (
    <PublicLayout>
      <DashboardInterface />
    </PublicLayout>
  );
};
