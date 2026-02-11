import type { Metadata } from "next";
import { NoteSearch } from "@/components/note-search";
import { getAllNotes } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Engineering notes on reliability, automation, observability, and platform design.",
  openGraph: {
    title: "Notes",
    description:
      "Engineering notes on reliability, automation, observability, and platform design.",
    url: `${siteConfig.url}/notes`
  }
};

export default function NotesPage() {
  const notes = getAllNotes().map((note) => ({
    title: note.title,
    url: note.url,
    summary: note.summary,
    date: note.date,
    tags: note.tags,
    readingTime: note.readingTime
  }));

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Notes</h1>
        <p className="text-muted-foreground">
          Field notes from reliability engineering, automation experiments, and
          platform design.
        </p>
      </div>

      <NoteSearch notes={notes} />
    </div>
  );
}
