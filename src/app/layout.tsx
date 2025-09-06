import type { Metadata } from "next";
import { Geist, Geist_Mono, Tenor_Sans } from "next/font/google";
import "./globals.css";

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: '400'
});


export const metadata: Metadata = {
  title: "Open  Fashion",
  description: "Luxury & fashion accessories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${tenorSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
