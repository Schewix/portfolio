import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/70 bg-card/60 p-6 shadow-soft",
        className
      )}
      {...props}
    />
  );
}
