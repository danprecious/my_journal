"use client";
import { formType } from "@/app/types/globalTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  journalNote: z.string().min(1, { message: "Journal note is required" }),
});

const WritingForm = () => {
  const [error, setError] = useState("");

  const submitJournal = async (data: any) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  return (
    <form onSubmit={handleSubmit(submitJournal)} className="w-full h-full">
      <textarea
        id="journalNote"
        {...register("journalNote")}
        className="resize-none w-full bg-background comp-border outline-none p-md rounded-md h-[70vh]"
      />

      <div className="mt-5">
        <button type="submit" className="btn">
          Save
        </button>
      </div>
    </form>
  );
};

export default WritingForm;
