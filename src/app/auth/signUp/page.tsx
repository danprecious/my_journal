"use client";

import { signUpUrl } from "@/app/utils/baseUrl";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email required" }),
  password: z.string().min(1, { message: "password required" }),
  confirmPassword: z.string().min(1, { message: "password don't match" }),
});

const SignUp = () => {
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const signUpUser = async (data: any) => {
    console.log(data);

    const { confirmPassword, ...rest } = data;

    console.log(signUpUrl);
    console.log(rest);

    try {
      let response = await axios.post(
        signUpUrl,
        { ...rest },
        
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true 
        }
      ); 

      console.log(response);
      setSignUpSuccess(true);
    } catch (error) {
      console.log("Error signing in");
      setSignUpSuccess(false);
      console.error(error);
      // throw new Error(error)
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpSchema) });

  return (
    <div className=" py-10 w-full h-[80vh]">
      <div className="py-6">
        <h1 className="text-center font-bold text-[2rem]">Create an account</h1>
        <p className="text-sm text-center opacity-70 py-3">
          Begin your journalling journey
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
            placeholder="Your name?"
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
            className="px-2 w-full rounded-md py-2 bg-btnColor hover:bg-[#27fc83]  max-w-[22em] text-white"
          >
            Create account
          </button>
        </div>

        <div className="py-5">
          <p>
            Have an account already?{" "}
            <Link
              href="/auth/signIn"
              className="underline text-btnColor hover:text-[#27fc83] font-bold"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
