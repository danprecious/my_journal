"use client";

import { useLiveQuery } from "dexie-react-hooks";

import Link from "next/link";
import React, { useState } from "react";
import { mockHistoryData } from "@/app/types/globalTypes";
import ByInput from "./search/byInput";
import { retrieveJournal } from "@/app/utils/localStoreUtils";

const History: React.FC<mockHistoryData> = ({ data }) => {
  // const [historyData, setHistoryData] = useState<mockHistoryData>(data);

  const journals = useLiveQuery(async () => {
    const journalData = await retrieveJournal();
    // console.log(journalData);
    return journalData;
  })

  // console.log(journals);

  return (
    <div className="w-full min-w-full">
      <div className="px-1 pb-5 flex justify-center">
        <input
          className="comp-border max-w-[25em] py-2 px-2 rounded-md w-full bg-transparent text-sm"
          placeholder="Search journals..."
        />
      </div>

      <div className="overflow-y-scroll">
        {journals?.map((journal): React.ReactNode => {
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
