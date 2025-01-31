"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email required" }),
  password: z.string().min(1, { message: "password required" }),
  confirmPassword: z.string().min(1, { message: "password don't match" }),
});

const SignUp = () => {
  const signUpUser = async (data: any) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpSchema) });

  return (
    <div className=" py-10 w-full h-[80vh]">
      <div className="py-6">
        <h1 className="text-center font-bold text-[2rem]">Sign in</h1>
        <p className="text-sm text-center opacity-70 py-3">
          continue your journalling journey
        </p>
      </div>
      <form
        onSubmit={handleSubmit(signUpUser)}
        className="w-full px-3 py-5  flex flex-col justify-center items-center "
      >
        <div className="w-full flex justify-center mb-3">
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Name"
            className="bg-transparent rounded-md comp-border h-fit py-2 px-2 w-full lg:w-[50%] max-w-[22em] "
          />
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
        <div className="w-full flex justify-center mb-3">
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
            placeholder="Confirm password"
            className="bg-transparent rounded-md comp-border h-fit py-2 px-2 w-full lg:w-[50%] max-w-[22em] "
          />
        </div>
        <div className="py-2 w-full  flex justify-center">
          <button
            type="submit"
            className="px-2 w-full rounded-md py-2 bg-backgroundShade max-w-[22em] bg-stone-900 text-white"
          >
            Sign in
          </button>
        </div>

        <div className="py-5">
            <p>Have an account already? <Link href="/signIn" className="underline text-blue-600 font-bold">Sign In</Link></p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
