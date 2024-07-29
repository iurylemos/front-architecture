"use client";

import React from "react";
import { RecoilRoot } from "recoil";

type RootInfrastructureProps = {
  children: React.ReactNode;
};

export default function RootInfrastructure({
  children,
}: RootInfrastructureProps): JSX.Element {
  return <RecoilRoot>{children}</RecoilRoot>;
}
