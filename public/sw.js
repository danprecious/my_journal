import axios from "axios";

self.addEventListener("install", (event) => {
  console.log("Service worker is installing");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activating");
});

self.addEventListener("sync", (event) => {
  if (event.tag === "sync-data") {
    console.log("Background sync triggered");
    event.waitUntil(handleBackgroundSync());
  }
});

async function handleBackgroundSync() {
  const journals = await db.journals.where("status").equals("queued").toArray();

  for (const journal of journals) {
    await db.journals.update(journal.id, { status: "processing" });
    const { status, ...journalObject } = journal;
    try {
      await axios({
        method: "POST",
        url: "/",
        data: journalObject,
        headers: { "Content-Type": "application/json" },
      });

      await db.journals.update(journal.id, { status: "completed" });
    } catch (error) {
      console.error("Sync failed", error);
      await db.journals.update(journal.id, { status: "failed" });
    }
  }
}
