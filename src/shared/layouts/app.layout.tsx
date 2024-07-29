import React from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps): JSX.Element {
  return <main>{children}</main>;
}
