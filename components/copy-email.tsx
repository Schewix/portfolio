"use client";

import * as React from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setCopied(false);
        setShowToast(false);
      }, 2200);
    } catch {
      setCopied(false);
      setShowToast(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className="rounded-full border border-border/70 bg-card/40 px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground"
      >
        {copied ? "Copied" : "Copy email"}
      </button>
      {showToast ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-4 top-20 z-50 rounded-xl border border-border/80 bg-card/95 px-4 py-2 text-xs text-foreground shadow-soft"
        >
          Email copied to clipboard.
        </div>
      ) : null}
    </>
  );
}
