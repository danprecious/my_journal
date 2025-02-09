"use client";

import { useLiveQuery } from "dexie-react-hooks";

import Link from "next/link";
import React, { useState } from "react";
import { mockHistoryData } from "@/app/types/globalTypes";
import ByInput from "./search/byInput";
import { retrieveJournal } from "@/app/utils/localStoreUtils";

const History: React.FC = () => {
  // const [historyData, setHistoryData] = useState<mockHistoryData>(data);

  const [searchQuery, setSearchQuery] = useState("")
  const journals = useLiveQuery(async () => {
    const journalData = await retrieveJournal();
    return journalData;
  })

  

  return (
    <div className="w-full ">
      <div className="px-1 pb-5 flex justify-center">
        <input
          className="comp-border max-w-[25em] py-2 px-2 rounded-md w-full bg-transparent text-sm"
          placeholder="Search journals..."
        />
      </div>

      <div className="overflow-y-scroll max-h-[70%] min-h-[50%]">
        {journals?.map((journal): React.ReactNode => {
          return (
            <Link
              href={`/journalBoard/viewJournal/${journal.id}`}
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
