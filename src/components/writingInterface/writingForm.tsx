"use client";
import { formType } from "@/app/types/globalTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { ACTION_SERVER_ACTION } from "next/dist/client/components/router-reducer/router-reducer-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  journalNote: z.string().min(1, { message: "Journal note is required" }),
});

const WritingForm = () => {
  const [error, setError] = useState("");

  const [textAreaActive, setTextAreaActive] = useState(false);

  const submitJournal = async (data: any) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  return (
    <form onSubmit={handleSubmit(submitJournal)} className="w-full">
      <div className="">
        
        
        {!textAreaActive && (
         <p className="mb-5 text-[1.5rem] text-center lg:text-left">"Start Wrting..."</p> 
        )}
        </div>
      <textarea
        id="journalNote"
        {...register("journalNote")}
        onFocus={() => {
          setTextAreaActive(true);
        }}
        className={`resize-none w-full bg-background comp-border outline-none lg:p-md py-1 px-2  lg:rounded-md lg:h-[70vh ${
          textAreaActive ? "h-[70vh] rounded-lg" : "rounded-[2rem]"
        }`}
      />

      <div className="mt-5 flex justify-end lg:block">
        {textAreaActive && (
          <button type="submit" className="btn">
            Save
          </button>
        )}
      </div>
    </form>
  );
};

export default WritingForm;
