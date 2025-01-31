import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import SideBar from "@/components/sideBar";
import Logo from "@/components/logo/logo";
import MobileMenuBar from "@/components/mobileMenuBar";
import RegisterWorker from "../utils/registerWorker";

export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" h-[100vh] flex flex-col">
      <RegisterWorker />
      <header className="flex h-[5%] items-center justify-center lg:hidden sticky top-0">
        <Logo />
      </header>
      <div className="flex h-[90%] lg:h-full border-red-700">
        <div className="hidden lg:flex lg:w-[20%] w-0 h-0 lg:h-[100%]">
          <SideBar />
        </div>
        <div className="w-full p-md h-full">{children}</div>
      </div>
      <div className="flex justify-center items-center max-h-[5%] h-[5%] lg:hidden  ">
        <MobileMenuBar />
      </div>
    </main>
  );
}
