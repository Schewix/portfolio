import * as React from "react";
import { cn } from "@/lib/utils";

const styles = {
  info: "border-accent/40 bg-accent/10 text-foreground",
  warn: "border-yellow-400/40 bg-yellow-500/10 text-foreground",
  tip: "border-emerald-400/40 bg-emerald-500/10 text-foreground"
};

export function Callout({
  title,
  type = "info",
  children
}: {
  title?: string;
  type?: keyof typeof styles;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "my-6 rounded-2xl border p-4 text-sm leading-relaxed",
        styles[type]
      )}
    >
      {title && <div className="mb-2 font-semibold">{title}</div>}
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
}
