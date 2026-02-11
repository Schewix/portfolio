"use client";

import * as React from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-full border border-border/70 bg-card/40 px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground"
    >
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
