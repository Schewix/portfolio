import Link from "next/link";
import { Card } from "@/components/ui/card";
import { TagBadge } from "@/components/tag-badge";
import { formatDate } from "@/lib/utils";
import type { Note } from "@/lib/content";
import { getCategoryMeta } from "@/lib/category";

export function NoteCard({ note }: { note: Note }) {
  const category = getCategoryMeta(note.tags);
  const CategoryIcon = category.icon;

  return (
    <Card className="group relative flex h-full flex-col gap-4 overflow-hidden border-border/80 bg-card/70 transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow">
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${category.accentClass}`} />
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <CategoryIcon className="h-3.5 w-3.5 text-accent" />
          {formatDate(note.date)}
        </span>
        <span>{note.readingTime} min read</span>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-foreground">
          <Link href={note.url} className="hover:text-accent">
            {note.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{note.summary}</p>
        {note.updated ? (
          <p className="mt-3 text-xs text-muted-foreground">
            Last updated {formatDate(note.updated)}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <TagBadge key={tag} label={tag} />
        ))}
      </div>
    </Card>
  );
}
