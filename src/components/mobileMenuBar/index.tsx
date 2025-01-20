"use client";

import { useState } from "react";
import Profile from "../sideBar/profile";

const MobileMenuBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex justify-center items-center flex-col">
      {menuOpen && (
        <div className="absolute bottom-0 bg-backgroundShade comp-border h-[90vh] w-[95vw] rounded-t-[4em] p-md flex justify-center items-center">
          <Profile />

          
        </div>
      )}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="z-50 rounded-[5em] h-[15px] w-[50px] bg-backgroundShade comp-border hover: "
      ></button>
    </div>
  );
};

export default MobileMenuBar;
