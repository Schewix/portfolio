import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx";
import { TagBadge } from "@/components/tag-badge";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { getAllNotes, getNoteBySlug } from "@/lib/content";
import { siteConfig } from "@/config/site";

export const generateStaticParams = async () =>
  getAllNotes().map((note) => ({ slug: note.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const note = getNoteBySlug(params.slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.summary,
    openGraph: {
      title: note.title,
      description: note.summary,
      type: "article",
      url: `${siteConfig.url}${note.url}`
    }
  };
};

export default function NotePage({ params }: { params: { slug: string } }) {
  const note = getNoteBySlug(params.slug);

  if (!note) {
    notFound();
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
      <article className="space-y-8">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Note · {formatDate(note.date)} · {note.readingTime} min read
          </p>
          <h1 className="text-3xl font-semibold">{note.title}</h1>
          <p className="text-lg text-muted-foreground">{note.summary}</p>
          {note.updated ? (
            <p className="text-xs text-muted-foreground">
              Last updated {formatDate(note.updated)}
            </p>
          ) : null}
          <div className="flex flex-wrap gap-2">
            {note.tags.map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
          </div>
        </header>
        <div className="prose prose-neutral dark:prose-invert">
          <Mdx source={note.content} />
        </div>
      </article>

      <aside className="space-y-6">
        {note.toc?.length ? (
          <Card>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contents
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {note.toc.map((item: { value: string; url: string; depth: number }) => (
                <li key={item.url} className={item.depth === 3 ? "pl-3" : ""}>
                  <a href={item.url} className="text-muted-foreground hover:text-foreground">
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        ) : null}
        <Card>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Notes feed
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Subscribe to updates via the RSS feed.
          </p>
          <a href="/rss.xml" className="mt-3 inline-flex text-sm text-accent">
            /rss.xml
          </a>
        </Card>
      </aside>
    </div>
  );
}
