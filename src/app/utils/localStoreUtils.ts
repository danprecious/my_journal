import Dexie, { type EntityTable } from "dexie";

export interface Journal {
  id: string;
  title: string;
  note: string;
  date: string;
  category: string;
}

const db = new Dexie("JournalDatabase") as Dexie & {
  journals: EntityTable<Journal, "id">;
};

db.version(1).stores({
  friends: "++id, name, age",
});

export const saveJournal = async (journal: Journal) => {
  try {
    const id = await db.journals.add(journal);
  } catch (error) {}
};

export const retrieveJournal = () => {};
