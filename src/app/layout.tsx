import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sideBar";
import Logo from "@/components/logo/logo";
import MobileMenuBar from "@/components/mobileMenuBar";
import RegisterWorker from "./utils/registerWorker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "myJournal",
  description: "Keep track of your days!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background border-green-800 text-textColor`}
      >
        {children}
      </body>
    </html>
  );
}
