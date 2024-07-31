import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootInfrastructure from "@/shared/infrastructure/root.infrastructure";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CAA Smart",
  description: "Generated by smart caa application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>
        <RootInfrastructure>{children}</RootInfrastructure>
      </body>
    </html>
  );
}
