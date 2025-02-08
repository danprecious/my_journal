"use client";

import Link from "next/link";
import { CiWifiOff } from "react-icons/ci";
import { FaBell, FaChalkboardUser } from "react-icons/fa6";
import { motion } from "motion/react";

export default function Home() {
  const features = [
    {
      id: 1,
      title: "Offline-first",
      icon: <CiWifiOff />,
      description:
        "Your internet speed should not affect your journalling experience. Write your journals anytime, anywhere, with any device.",
    },
    {
      id: 2,
      title: "Custom reminders",
      icon: <FaBell />,
      description:
        "Stay consistent with your journalling routine. Set reminders and receive prompts to write your journals on time, every time.",
    },
    {
      id: 3,
      title: "Seamless Experience",
      icon: <FaChalkboardUser />,
      description:
        "Journalling made simple and intuitive. Open the app, focus on your thoughts, and write without distractions or delays.",
    },
  ];

  return (
    <section className="w-full min-h-[95vh]  flex items-center justify-center flex-col px-2 py-16">
      <div className="text-center lg:w-[80%]  flex justify-center my-14 lg:my-5 py-5 lg:py-2 items-center flex-col">
        <h1 className="font-black lg:text-[3.5rem]  lg:px-20  text-[2.5rem]">
          Level up your journalling <span className="">experience</span>
        </h1>
        <p className="mb-5 opacity-70 text-sm">
          ... journaling can be so much better
        </p>

        <Link
          href="/auth/signUp"
          className="  px-8 py-2 bg-btnColor text-sm rounded-2xl text-background hover:bg-btnColor/10"
        >
          start journalling
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3  lg:my-5 lg:gap-x-10 lg:gap-y-2  gap-10 p-2 lg:px-32 w-full lg:w-fit">
        <h2 className="lg:hidden">Features</h2>
        {features.map((feature) => {
          return (
            <div key={feature.id} className="relative  w-full flex justify-center items-center gradient-con">
             

              <div className="bg-background  rounded-2xl min-h-[12em] px-4 py-5  flex flex-col items-center justify-center ">
                <div className="text-[2rem]">{feature.icon}</div>
                <h4 className="text-center font-semibold w py-3">
                  {feature.title}
                </h4>
                <p className="text-center text-xs w">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="h-[50em]"></div> */}
    </section>
  );
}
