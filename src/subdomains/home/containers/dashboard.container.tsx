import React, { Suspense } from "react";
import PublicLayout from "@/shared/layouts/public.layout";
import { DashboardInterface } from "@/subdomains/home/interfaces/dashboard.interface";
import { HomeCarouselComponent } from "@/subdomains/home/components/carousel/carousel.component";
import { SharedLoadingComponent } from "@/shared/components/loading/loading.component";

export function DashboardContainer(): JSX.Element {
  return (
    <PublicLayout>
      <Suspense fallback={<SharedLoadingComponent />}>
        <HomeCarouselComponent />
      </Suspense>
      <DashboardInterface />
    </PublicLayout>
  );
}
