import Image from "next/image";
import ThemeSwitcher from "./utils/themeSwitcher";
import SideBar from "@/components/sideBar";
import WritingInterface from "@/components/writingInterface";

export default function Home() {
  return (
    <div className="h-[100vh] overflow-hidden flex">
      <div className="hidden lg:flex w-[20%]  h-full ">
        <SideBar />
      </div>
      <div className="w-full p-md flex">
        <WritingInterface />
        
      </div>
    </div>
  );
}
