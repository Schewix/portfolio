"use client";

import * as React from "react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

type NoteItem = {
  title: string;
  url: string;
  summary: string;
  date: string;
  tags: string[];
  readingTime: number;
};

export function NoteSearch({ notes }: { notes: NoteItem[] }) {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return notes;
    return notes.filter((note) => {
      const haystack = `${note.title} ${note.summary} ${note.tags.join(" ")}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [notes, query]);

  return (
    <div className="space-y-6">
      <input
        placeholder="Search notes by title, tag, or summary"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="flex h-11 w-full rounded-full border border-border/70 bg-card/40 px-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((note) => (
          <article
            key={note.url}
            className="rounded-2xl border border-border/70 bg-card/60 p-6 shadow-soft"
          >
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{formatDate(note.date)}</span>
              <span>{note.readingTime} min read</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-foreground">
              <Link href={note.url} className="hover:text-accent">
                {note.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{note.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-border/70 px-3 py-1 text-xs font-medium capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {!filtered.length && (
        <p className="text-sm text-muted-foreground">No notes match this query.</p>
      )}
    </div>
  );
}
