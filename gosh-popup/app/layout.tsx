import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoshGPT 🤖 - For Gosh Ecosystem Products - Community & Developers ✨",
  description:
    "GoshGPT is an Smart AI chatbot trained on Gosh Blockchain and its ecosystem data to help community and developers understand Gosh.",
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
