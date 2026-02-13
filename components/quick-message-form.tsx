"use client";

import * as React from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MIN_SUBJECT = 4;
const MIN_BODY = 12;

export function QuickMessageForm({
  email,
  linkedin
}: {
  email: string;
  linkedin: string;
}) {
  const [subject, setSubject] = React.useState("");
  const [body, setBody] = React.useState("");

  const subjectTrimmed = subject.trim();
  const bodyTrimmed = body.trim();
  const isValid =
    subjectTrimmed.length >= MIN_SUBJECT && bodyTrimmed.length >= MIN_BODY;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) return;

    const url = `mailto:${email}?subject=${encodeURIComponent(subjectTrimmed)}&body=${encodeURIComponent(bodyTrimmed)}`;
    window.location.href = url;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="subject"
        placeholder="Subject"
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
      />
      <textarea
        name="body"
        placeholder="Message"
        rows={5}
        value={body}
        onChange={(event) => setBody(event.target.value)}
        className="w-full rounded-2xl border border-border/70 bg-card/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
      <p className="text-xs text-muted-foreground">
        Minimum {MIN_SUBJECT} characters in subject and {MIN_BODY} in body.
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <Button type="submit" disabled={!isValid} className="disabled:opacity-50">
          <Send className="h-4 w-4" /> Open email client
        </Button>
        <Button asChild variant="ghost">
          <a href={linkedin} target="_blank" rel="noreferrer">
            <ArrowUpRight className="h-4 w-4" /> LinkedIn DM
          </a>
        </Button>
      </div>
    </form>
  );
}
