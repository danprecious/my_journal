import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sideBar";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-textColor`}
      >
        <div className="h-[100vh] overflow-hidden flex">
          <div className="hidden lg:flex w-[20%]  h-full ">
            <SideBar />
          </div>
          <div className="w-full p-md flex">{children}</div>
        </div>
      </body>
    </html>
  );
}
