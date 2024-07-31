import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { RootInfrastructure } from "@/shared/infrastructure/root.infrastructure";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CAA Smart",
  description: "Smart CAA application",
  icons: {
    icon: ["/icons/favicon.ico?v=4"],
    apple: ["/icons/apple-touch-icon.png?v=4"],
    shortcut: ["/icons/apple-touch-icon.png"],
  },
  manifest: "/icons/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} bg-slate-50`}>
        <RootInfrastructure>{children}</RootInfrastructure>
      </body>
    </html>
  );
}
