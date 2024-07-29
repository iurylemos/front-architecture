"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { RecoilRoot } from "recoil";
import { sharedAuthRoutes } from "../routes/auth.route";
import { SharedHeaderComponent } from "../components/header/header.component";

type RootInfrastructureProps = {
  children: React.ReactNode;
};

export default function RootInfrastructure({
  children,
}: RootInfrastructureProps): JSX.Element {
  const pathname = usePathname();

  return (
    <RecoilRoot>
      {sharedAuthRoutes.find((route) => route === pathname) ? (
        <SharedHeaderComponent />
      ) : null}
      {children}
    </RecoilRoot>
  );
}
