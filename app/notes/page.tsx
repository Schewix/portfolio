import Link from "next/link";
import type { Metadata } from "next";
import { Rss, Linkedin } from "lucide-react";
import { NoteCard } from "@/components/note-card";
import { NotesExplorer } from "@/components/notes-explorer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getAllNotes, getNoteTags } from "@/lib/content";
import { siteConfig } from "@/config/site";

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
  const notes = getAllNotes();
  const tags = getNoteTags();

  const recommendedFromConfig = siteConfig.notes.recommendedStart
    .map((slug) => notes.find((note) => note.slug === slug))
    .filter((note): note is NonNullable<typeof note> => Boolean(note));

  const recommended = recommendedFromConfig.length
    ? recommendedFromConfig.slice(0, 2)
    : notes.slice(0, 2);

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-semibold">Field notes</h1>
          <Button asChild variant="secondary" className="h-9 px-3 text-xs">
            <a href="/rss.xml">
              <Rss className="h-3.5 w-3.5" /> RSS
            </a>
          </Button>
        </div>
        <p className="max-w-2xl text-muted-foreground">{siteConfig.copy.notesIntro}</p>
      </header>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_300px] md:items-start">
        <div className="space-y-8">
          {notes.length ? (
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">Pinned / Recommended</h2>
              {recommended.length ? (
                <div className="grid gap-5 xl:grid-cols-2">
                  {recommended.map((note) => (
                    <NoteCard key={note.slug} note={note} />
                  ))}
                </div>
              ) : (
                <Card className="border-dashed border-border/70 bg-card/60 py-6 text-center text-sm text-muted-foreground">
                  Recommended reads appear here once notes are published.
                </Card>
              )}
            </section>
          ) : null}

          <NotesExplorer notes={notes} tags={tags} />
        </div>

        <aside className="space-y-4 md:sticky md:top-24">
          <Card className="space-y-3 border-border/80 bg-card/70">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Subscribe
            </h2>
            <p className="text-sm text-muted-foreground">
              Follow updates via RSS or connect on LinkedIn.
            </p>
            <div className="flex flex-col gap-2">
              <Button asChild variant="secondary" className="justify-start">
                <a href="/rss.xml">
                  <Rss className="h-4 w-4" /> RSS feed
                </a>
              </Button>
              <Button asChild variant="ghost" className="justify-start">
                <Link href={siteConfig.links.linkedin}>
                  <Linkedin className="h-4 w-4" /> Follow on LinkedIn
                </Link>
              </Button>
            </div>
          </Card>

          <Card className="space-y-3 border-border/80 bg-card/70">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Writing cadence
            </h2>
            <p className="text-sm text-muted-foreground">{siteConfig.notes.cadence}</p>
          </Card>

          <Card className="space-y-3 border-border/80 bg-card/70">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Recommended start
            </h2>
            {recommended.length ? (
              <ul className="space-y-2 text-sm">
                {recommended.map((note) => (
                  <li key={note.slug}>
                    <Link href={note.url} className="text-foreground hover:text-accent">
                      {note.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">
                Start with the newest note once published.
              </p>
            )}
          </Card>
        </aside>
      </div>
    </div>
  );
}
