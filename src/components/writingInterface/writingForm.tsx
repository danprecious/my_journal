"use client";
import { formType } from "@/app/types/globalTypes";
import { retrieveJournal, retrieveOneJournal, saveJournal } from "@/app/utils/localStoreUtils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ACTION_SERVER_ACTION } from "next/dist/client/components/router-reducer/router-reducer-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  note: z.string().min(1, { message: "Journal note is required" }),
});

const WritingForm = () => {
  const [error, setError] = useState("");

  const [textAreaActive, setTextAreaActive] = useState(false);

  const submitJournal = async (data: any) => {
    console.log(data);

    const dateObject = new Date();
    // const datee = date.getDate() + Math.random();
const note: string = data.note;
    console.log(dateObject.toDateString());

    const title = note.slice(0, 15);
    const category = "life";
    const dateId = Date.now().toString(36);
    const date = dateObject.toLocaleString();

    const journal = {id: dateId, title, note, date, category};

    await saveJournal(journal);
    // await retrieveJournal();
    // await retrieveOneJournal("m6dr5gzy");


  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  return (
    <form onSubmit={handleSubmit(submitJournal)} className="w-full justify-center  flex-col items-center">
      <div className="">
        
        
        {!textAreaActive && (
         <p className="mb-10 text-[1.5rem] text-center ">Start Writing...</p> 
        )}
        </div>
     <div className="flex justify-center w-full">
       <textarea
        id="note"
        {...register("note")}
        onFocus={() => {
          setTextAreaActive(true);
        }}
        className={`resize-none w-full bg-background comp-border outline-none py-1 px-2  lg:h-[70vh ${
          textAreaActive ? "h-[70vh]  lg-w-[100%]" : "rounded-[2rem]  lg:w-[90%] transition-all h-[2.5em]"
        }`}
        />
        </div>

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
