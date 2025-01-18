"use client";

import { useState } from "react";
import Profile from "../sideBar/profile";

const MobileMenuBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex justify-center items-center flex-col">
      {menuOpen && (
        <div className="absolute bottom-0 bg-green-500 h-[90vh] w-[95vw] rounded-t-[4em] p-md flex justify-center items-center">
          <Profile />
        </div>
      )}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="z-50 rounded-full h-[20px] w-[20px] bg-green-500 hover: "
      ></button>
    </div>
  );
};

export default MobileMenuBar;
