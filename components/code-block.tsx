import * as React from "react";
import { cn } from "@/lib/utils";

export function CodeBlock({
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className={cn(
        "not-prose overflow-x-auto rounded-2xl border border-border/70 bg-muted/40 p-4 text-sm",
        className
      )}
      {...props}
    />
  );
}
