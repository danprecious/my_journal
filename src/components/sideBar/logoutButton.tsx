"use client";

import { CiLogout } from "react-icons/ci";
import { logoutUrl } from "@/app/utils/baseUrl";
import axios from "axios";
import { redirect } from "next/navigation";

const LogoutButton = () => {
  const handleLogout = async () => {
    const response = await axios.post(logoutUrl, null, {
      withCredentials: true,
    });

    console.log(response);

    if (response.status == 200) {
      redirect("/auth/signIn");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="flex py-1 px-2 opacity-50 items-center justify-center hover:text-red-500"
    >
      <span className="mr-2">Logout</span>
      <CiLogout />
    </button>
  );
};

export default LogoutButton;
