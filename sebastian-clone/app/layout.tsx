// app/layout.tsx

import './globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

// Load the Inter font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sebastian Clone',
  description: 'A clone of Sebastian Martinez homepage',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
