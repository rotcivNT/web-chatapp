import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.scss";

const vietNam_Pro_Font = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vietNam_Pro_Font.className}>{children}</body>
    </html>
  );
}
