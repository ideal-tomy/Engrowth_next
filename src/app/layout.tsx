import type { Metadata } from "next";
import { notoSans, notoSerif } from "@/fonts";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Engrowth",
  description: "Engrowth - あなたの成長をサポート",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen bg-gray-50">
        {children}
        </main>
      </body>
    </html>
  );
}
