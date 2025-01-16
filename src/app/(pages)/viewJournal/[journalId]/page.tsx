

import { UniqueJournalParams } from "@/app/types/globalTypes";




const ViewJournalEntry = ({params}: UniqueJournalParams ) => {

    console.log(params.journalId);

  return (
  <section className="">
    One Journal Entry
  </section>
  )
}

export default ViewJournalEntry
