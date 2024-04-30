import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compleo",
  description: "Make your life more productive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
    >
      <body
        className={inter.className}
        suppressHydrationWarning={true}
      >
        {children}
        <link
          rel="icon"
          href="/images/compleo.png"
          sizes="any"
        />
      </body>
    </html>
  );
}
