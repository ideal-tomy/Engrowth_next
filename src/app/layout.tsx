import type { Metadata } from "next";
import localFont from 'next/font/local'; // next/font/local をインポート
import "./globals.css";
import Navigation from "@/components/Navigation";

// ローカルの Noto Serif JP フォントの設定
const notoSerifJp = localFont({
  src: [
    {
      path: '../fonts/NotoSerifJP-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/NotoSerifJP-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-noto-serif-jp', // CSS変数名を指定
});

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
    <html lang="ja" className={`${notoSerifJp.variable}`}> {/* classNameにCSS変数を適用 */}
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
