"use client"

import Link from "next/link";
import React, { useState } from "react";
import { mockHistoryData } from "@/app/types/globalTypes";
import ByInput from "./search/byInput";


const History: React.FC<mockHistoryData> = ({data}) => {

  // const [historyData, setHistoryData] = useState<mockHistoryData>(data);


  return (
    <div className="w-full min-w-full">

    <div className="px-1 pb-5 flex justify-center">
      <ByInput />
    </div>

      <div className="overflow-y-scroll">


      {data.map((journal): React.ReactNode => {
        return (
          <Link
            href={`/viewJournal/${journal.id}`}
            key={journal.id}
            className=" py-3 px-2 flex border-y-[1px] border-solid border-stone-500 border-opacity-10 w-full hover:opacity-75 hover:border-opacity-100 "
          >
            <p className="text-sm">{journal.title}</p>
            {/* <p className='text-xs'>{journal.date}</p> */}
          </Link>
        );
      })}
          </div>
    </div>
  );
};

export default History;
