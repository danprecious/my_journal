import Dexie, { type EntityTable } from "dexie";

export interface Journal {
  id: string | null;
  title: string;
  note: string;
  date: string;
  category: string;
  status: string;
}

export const db = new Dexie("JournalDatabase") as Dexie & {
  journals: EntityTable<Journal, "id">;
};

db.version(1).stores({
  journals: "++id, title, note, date, category",
});

export const saveJournal = async (journal: Journal) => {
  try {
    const id = await db.journals.add(journal);
    console.log(id);
    await db.journals.put({ ...journal, id });
  } catch (error) {
    console.log(error);
  }
};




export const retrieveJournal = async () => {
  try {
    const journals = await db.journals.toArray();

    console.log(journals);
    return journals;
  } catch (error) {
    console.log("Error retreiving journal", error);
    throw new Error("Error retrieving journal from localStore")
  }
};

export const retrieveOneJournal = async (id: string) => {
  try {
    const journal = await db.journals.get(id);
    console.log(journal);
    return journal;
  
  } catch (error) {
    console.log("Error retreiving journal", error);
    throw new Error("Error retreiving journal");
  }
};
