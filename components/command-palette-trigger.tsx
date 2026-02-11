"use client";

import { Command } from "lucide-react";

export function CommandPaletteTrigger() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("command-palette"))}
      className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground transition hover:text-foreground"
      aria-label="Open command palette"
    >
      <Command className="h-3.5 w-3.5" />
      <span>⌘K</span>
    </button>
  );
}
