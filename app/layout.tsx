import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const inter = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kévin Abélard | Photographe Vidéaste",
  description: "kevinabelard.fr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
