"use client";

import * as React from "react";
import Link from "next/link";
import { FileText, Search, X } from "lucide-react";
import { NoteCard } from "@/components/note-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type NoteItem = {
  title: string;
  slug: string;
  url: string;
  summary: string;
  date: string;
  updated?: string;
  tags: string[];
  readingTime: number;
  content: string;
  toc: { value: string; url: string; depth: number }[];
};

export function NotesExplorer({
  notes,
  tags
}: {
  notes: NoteItem[];
  tags: string[];
}) {
  const [query, setQuery] = React.useState("");
  const [activeTag, setActiveTag] = React.useState<string>("all");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return notes.filter((note) => {
      const matchesTag = activeTag === "all" || note.tags.includes(activeTag);
      const haystack = `${note.title} ${note.summary} ${note.tags.join(" ")}`.toLowerCase();
      const matchesQuery = !q || haystack.includes(q);
      return matchesTag && matchesQuery;
    });
  }, [activeTag, notes, query]);

  if (!notes.length) {
    return (
      <Card className="border-dashed border-border/70 bg-card/60 py-12 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-muted/40">
          <FileText className="h-5 w-5 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold">No notes yet</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
          {siteConfig.notes.cadence} In the meantime, projects are updated more
          frequently and cover the same engineering themes.
        </p>
        <div className="mt-5">
          <Button asChild variant="secondary">
            <Link href="/projects">View projects</Link>
          </Button>
        </div>
      </Card>
    );
  }

  const featured = filtered.slice(0, 3);
  const archive = filtered.slice(3);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <label htmlFor="notes-search" className="sr-only">
          Search notes
        </label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            id="notes-search"
            placeholder="Search by title, tag, or summary"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="flex h-11 w-full rounded-full border border-border/80 bg-card/60 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTag("all")}
            className={`rounded-full border px-3 py-1 text-xs transition ${
              activeTag === "all"
                ? "border-accent/70 bg-accent/15 text-foreground"
                : "border-border/80 bg-muted/50 text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                activeTag === tag
                  ? "border-accent/70 bg-accent/15 text-foreground"
                  : "border-border/80 bg-muted/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
          {(activeTag !== "all" || query.trim()) && (
            <button
              type="button"
              onClick={() => {
                setActiveTag("all");
                setQuery("");
              }}
              className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-card/50 px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
            >
              <X className="h-3 w-3" />
              Clear filters
            </button>
          )}
        </div>
      </div>

      {!filtered.length ? (
        <Card className="border-dashed border-border/70 bg-card/60 py-10 text-center">
          <h2 className="text-lg font-semibold">No notes match your filters</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a broader query or switch back to all tags.
          </p>
        </Card>
      ) : (
        <>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Latest field notes</h2>
            <div className="grid gap-5 xl:grid-cols-2">
              {featured.map((note) => (
                <NoteCard key={note.slug} note={note} />
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Archive</h2>
            {archive.length ? (
              <Card className="border-border/80 bg-card/70">
                <ul className="divide-y divide-border/70">
                  {archive.map((note) => (
                    <li
                      key={note.slug}
                      className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <Link
                          href={note.url}
                          className="text-sm font-medium text-foreground hover:text-accent"
                        >
                          {note.title}
                        </Link>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(note.date)} · {note.readingTime} min read
                          {note.updated ? ` · Updated ${formatDate(note.updated)}` : ""}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {note.tags.slice(0, 2).join(" · ")}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ) : (
              <Card className="border-dashed border-border/70 bg-card/60 py-6 text-center text-sm text-muted-foreground">
                Archive will grow over time as new field notes are published.
              </Card>
            )}
          </section>
        </>
      )}
    </div>
  );
}
