import React from "react";
import Profile from "./profile";
import Logo from "../logo/logo";
import History from "./history";

const SideBar = () => {
  return (
    <section className="comp-border rounded-tr-lg rounded-br-lg w-full h-full pt-md">
      <Logo />
      <Profile />
      <History />
    </section>
  );
};

export default SideBar;
