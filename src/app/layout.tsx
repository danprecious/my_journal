import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sideBar";
import Logo from "@/components/logo/logo";
import MobileMenuBar from "@/components/mobileMenuBar";

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
        <header className="flex p-4 justify-center lg:hidden sticky top-0">
          <Logo />
        </header>
        <div className="  flex h-[80%]">
          <div className="hidden lg:flex w-[20%]  h-full ">
            <SideBar />
          </div>
          <div className="w-full p-md h-full flex">{children}</div>
        </div>
        <div className="flex justify-center lg:hidde border-green-400 border-[5px] border-solid">
          <MobileMenuBar />
        </div>
      </body>
    </html>
  );
}
