"use client";

import { loginUrl } from "@/app/utils/baseUrl";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signUpSchema = z.object({
  email: z.string().email({ message: "Email required" }),
  password: z.string().min(1, { message: "password required" }),
});

const SignIn = () => {
  const [signInSuccess, setSignInSuccess] = useState(false);

  const router = useRouter();

  const signInUser = async (data: any) => {
    console.log(data);

    try {
      const response = await axios.post(loginUrl, data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (response.status == 200) {
        router.push("/journalBoard");
      }

      setSignInSuccess(true);
    } catch (error) {
      setSignInSuccess(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpSchema) });

  return (
    <div className=" py-10 w-full h-[80vh]">
      <div className="pt-6">
        <h1 className="text-center font-bold text-[2rem]">Sign in</h1>
        <p className="text-sm text-center opacity-70 py-3">
          continue your journalling journey
        </p>
      </div>
      <form
        onSubmit={handleSubmit(signInUser)}
        className="w-full px-3 py-5  flex flex-col justify-center items-center "
      >
        <div className="py-5 w-full max-w-[22em] flex justify-center">
          <p className="px-2">Dont have an account? </p>
          <Link
            href="/auth/signUp"
            className="underline px-2 text-right text-btnColor hover:text-[#27fc83] font-bold"
          >
            Create one
          </Link>
        </div>
        <div className="w-full flex justify-center mb-3">
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Email"
            className="bg-transparent rounded-md comp-border h-fit py-2 px-2 w-full lg:w-[50%] max-w-[22em] "
          />
        </div>
        <div className="w-full flex justify-center mb-3">
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Password"
            className="bg-transparent rounded-md comp-border h-fit py-2 px-2 w-full lg:w-[50%] max-w-[22em] "
          />
        </div>

        <div className="py-2 w-full  flex justify-center">
          <button
            type="submit"
            className="px-2 w-full rounded-md py-2 bg-btnColor max-w-[22em] hover:hover:bg-[#27fc83] hover:text-black text-white"
          >
            Sign in
          </button>
        </div>
        <div className="py-5 max-w-[22em] ">
          <Link
            href="/auth/forgotPassword"
            className="underline text-right text-btnColor hover:text-[#27fc83] font-bold"
          >
            forgot password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
