import React from "react";

type PublicLayoutProps = {
  children: React.ReactNode;
};

export default function PublicLayout({
  children,
}: PublicLayoutProps): JSX.Element {
  return <main className="w-full max-w-screen-xl mx-auto">{children}</main>;
}
