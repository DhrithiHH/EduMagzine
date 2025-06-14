import { Geist, Geist_Mono } from "next/font/google";
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import { Oxanium } from 'next/font/google';
import "@fontsource/anton";

import "./globals.css";
import Navbar from "./components/Navbar"; // ✅ Add this line
import FlyoutNavbar from "./components/Navbar";
import Menu from "@/app/components/menu/menu"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oxanium = Oxanium({
  variable: '--font-oxanium',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Badeen+Display&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`${oxanium.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <Navbar  className='sticky top-0 z-30'/> ✅ Render the Navbar here */}
        {/* <FlyoutNavbar className='sticky top-0 z-30'/> ✅ Render the FlyoutNavbar here */}
        {children}
      </body>
    </html>
  );
}
