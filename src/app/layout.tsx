'use client';

import type { Metadata } from 'next';
import { Tenor_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/ui/components/Header';
import { Menu } from '@/ui/components/Menu';
import { useState } from 'react';

const tenorSans = Tenor_Sans({
  subsets: ['latin'],
  weight: '400',
});

// export const metadata: Metadata = {
//   title: 'Open  Fashion',
//   description: 'Luxury & fashion accessories',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menu, setMenuOpen] = useState(false);

  return (
    <html className="bg-white" lang="pt-br">
      {menu ? <Menu onClickClose={() => setMenuOpen((prev) => !prev)}></Menu> : null}
      <body className={`${tenorSans.className} antialiased`}>
        <Header onClickOpenMenu={() => setMenuOpen(true)} />
        {children}
      </body>
    </html>
  );
}
