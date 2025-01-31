import React from "react";
import Profile from "./profile";
import Logo from "../logo/logo";
import History from "./history";
import { mockData } from "@/app/utils/mockData";

const SideBar = () => {
  return (
    <section className="comp-border rounded-tr-lg rounded-br-lg w-full  pt-md">
      <Logo />
      <Profile />
      <History data={mockData} />
    </section>
  );
};

export default SideBar;
