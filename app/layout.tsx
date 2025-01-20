import type { Metadata } from "next";
import "./globals.css";
import {ClientProvider} from "@/components/ClientProvider";

export const metadata: Metadata = {
  title: "Product Listing Platform",
  description: "Product Listing Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
