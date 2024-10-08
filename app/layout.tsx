import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const inter = Kanit({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Tweeter",
  description: "Tweet at me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
