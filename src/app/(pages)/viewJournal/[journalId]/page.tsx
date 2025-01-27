import { UniqueJournalParams } from "@/app/types/globalTypes";
import ReadJournalComponent from "./readJournalComponent";

const ViewJournalEntry = async ({ params }: UniqueJournalParams) => {
  const { journalId } = await params;

  console.log(journalId);

  return (
    <section className="">
      One Journal Entry
      <ReadJournalComponent id={journalId} />
    </section>
  );
};

export default ViewJournalEntry;
