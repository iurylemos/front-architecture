"use client";

import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { RecoilRoot } from "recoil";
import { sharedAuthRoutes } from "../routes/auth.route";
import { SharedHeaderComponent } from "../components/header/header.component";
import { SharedDrawerComponent } from "../components/drawer/drawer.component";

type RootInfrastructureProps = {
  children: React.ReactNode;
};

export default function RootInfrastructure({
  children,
}: RootInfrastructureProps): JSX.Element {
  const pathname: string = usePathname();

  const memoShowHeader: boolean = useMemo(
    () => !!sharedAuthRoutes.find((route) => route === pathname),
    [pathname]
  );

  return (
    <RecoilRoot>
      {memoShowHeader ? (
        <SharedDrawerComponent>
          <SharedHeaderComponent />
          {children}
        </SharedDrawerComponent>
      ) : (
        children
      )}
    </RecoilRoot>
  );
}
