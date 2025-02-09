import React from "react";
import Profile from "./profile";
import Logo from "../logo/logo";
import History from "./history";
import { mockData } from "@/app/utils/mockData";
import LogoutButton from "./logoutButton";

const SideBar = () => {
  

  return (
    <section className="comp-border rounded-tr-lg rounded-br-lg w-full h-full flex flex-col  pt-md">
      <Logo />
      <Profile />
      <History  />
      <LogoutButton />
    </section>
  );
};

export default SideBar;
