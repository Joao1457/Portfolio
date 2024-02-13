import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.scss";

const noto_Sans = Noto_Sans({
   subsets: ["latin"],
    weight: ['300', '400', '500', '600']
 });

export const metadata: Metadata = {
  title: "João Paulo ",
  description: "João Paulo desenvolvedor fullstack ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto_Sans.className}>{children}</body>
    </html>
  );
}
