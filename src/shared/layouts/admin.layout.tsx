import React from "react";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({
  children,
}: AdminLayoutProps): JSX.Element {
  return <main>{children}</main>;
}
