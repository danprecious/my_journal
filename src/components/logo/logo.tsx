import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
      <div className="w-[10px] h-[5px] bg-btnColor rounded-full  px-2 absolute bottom-[-6px] right-0"></div>
        
        <span className="opacity-50 font-semibold">my</span> 
      <span className="text-btnColor font-black text-[1.1rem]">Journal</span>
        </div>
    </div>
  );
};

export default Logo;
