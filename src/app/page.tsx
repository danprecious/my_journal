import Image from "next/image";
import ThemeSwitcher from "./utils/themeSwitcher";
import SideBar from "@/components/sideBar";
import WritingInterface from "@/components/writingInterface";

export default function Home() {
  return (
    <div className="w-full h-full">
      <WritingInterface />
    </div>
  );
}
