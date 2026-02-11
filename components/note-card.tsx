import Link from "next/link";
import { Card } from "@/components/ui/card";
import { TagBadge } from "@/components/tag-badge";
import { formatDate } from "@/lib/utils";
import type { Note } from "@/lib/content";

export function NoteCard({ note }: { note: Note }) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{formatDate(note.date)}</span>
        <span>{note.readingTime} min read</span>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-foreground">
          <Link href={note.url} className="hover:text-accent">
            {note.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{note.summary}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <TagBadge key={tag} label={tag} />
        ))}
      </div>
    </Card>
  );
}
