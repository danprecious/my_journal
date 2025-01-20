"use client";
import ThemeSwitcher from "@/app/utils/themeSwitcher";
import React, { useState } from "react";
import { BiArrowToBottom } from "react-icons/bi";
import { BsArrow90DegDown } from "react-icons/bs";
import {
  FaAngleDown,
  FaAnglesUp,
  FaAngleUp,
  FaArrowDownAZ,
  FaArrowDownShortWide,
} from "react-icons/fa6";

const Profile = () => {
  const [dropDown, setDropDown] = useState(false);

  const themes = [
    {
      id: "1",
      themeName: "Serpia contrast",
      color: "#D1AF27",
      textColor: "#0a0a0a",
      themeValue: "serpia-contrast"
    },
    {
      id: "2",
      themeName: "Serpia lighter",
      color: "#FFECA1",
      textColor: "#0a0a0a",
      themeValue: "serpia-lighter"
    },

    {
      id: "3",
      themeName: "Dark",
      color: "#0a0a0a",
      textColor: "#F1F1F1",
      themeValue: "dark"
    },

    {
      id: "4",
      themeName: "Grayscale",
      color: "#F1F1F1",
      textColor: "#0a0a0a",
      themeValue: "grayscale"
    },
    {
      id: "5",
      themeName: "Dim",
      color: "#23221C",
      textColor: "#F1F1F1",
      themeValue: "dark-dim"
    },
  ];

  const colors = () => {
    return (
      <div className="">
        <div className="bg-[#23221C] text-[#0a0a0a]"></div>
        <div className="bg-[#F1F1F1] text-[#F1F1F1]"></div>
        <div className="bg-[#0a0a0a]"></div>
        <div className="bg-[#FFECA1]"></div>
        <div className="bg-[#D1AF27]"></div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center my-sm">
      <div className="lg:min-h-[50px] lg:min-w-[50px] rounded-full bg-white flex"></div>

      <div className="my-sm text-center w-full px-2">
        <h3 className="font-bold text-[1.1rem]">Kayode Dan Precious</h3>
        <p className="opacity-60 text-xs pb-2">kdpcoder@gmail.com</p>
        <button className="" onClick={() => setDropDown(!dropDown)}>
         {dropDown ?  <FaAngleUp /> : <FaAngleDown />  } 
        </button>
        {dropDown && (
          <div className="relative w-full">
            <div className="absolute  w-full bg-background z-50 rounded-lg comp-border">
              <div className="text-center w-full py-3 ">
                <p>Themes</p>
              </div>
              <div className="w-full grid grid-cols-2 p-2">
                {themes.map((theme): React.ReactNode => {
                  return (
                    <div
                      key={theme.id}
                      className={`w-full  h-[5em]  bg-[${theme.color}] text-xs text-[${theme.textColor}]`}
                    >
                      <ThemeSwitcher
                        text={theme.themeName}
                        value={theme.themeValue}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
