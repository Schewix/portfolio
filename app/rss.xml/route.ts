import { getAllNotes } from "@/lib/content";
import { buildRss } from "@/lib/rss";

export const runtime = "nodejs";

export async function GET() {
  const notes = getAllNotes();
  const body = buildRss(notes);

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
}
