import Image from "next/image";
import ThemeSwitcher from "./utils/themeSwitcher";


export default function Home() {
  return <div className="">
  <ThemeSwitcher value="serpia-contrast" text="Serpia Contrast"/>
  <ThemeSwitcher value="grayscale" text="Grayscale"/>

    Page
  </div>;
}
