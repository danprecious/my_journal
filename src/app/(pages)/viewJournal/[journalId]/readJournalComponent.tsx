"use client"


import { Journal, retrieveOneJournal } from "@/app/utils/localStoreUtils";
import { useLiveQuery } from "dexie-react-hooks";


const ReadJournalComponent: React.FC<{id:string}> = ({id}) => {
  const journal = useLiveQuery(async () => {
    const journal = await retrieveOneJournal(id);
    return journal;
  });


  return (
    <div>
       <h1>{journal?.title}</h1>
       <p>{journal?.note}</p>
    </div>
  )
}

export default ReadJournalComponent;