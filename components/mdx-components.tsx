import type React from "react";
import Link from "next/link";
import { Callout } from "@/components/callout";
import { CodeBlock } from "@/components/code-block";

type ModuleCardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
};

function ModulesGrid(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="not-prose my-6 grid gap-4 rounded-2xl border border-border/70 bg-card/30 p-4 md:grid-cols-2"
      {...props}
    />
  );
}

function ModuleCard({ title, children, ...props }: ModuleCardProps) {
  return (
    <section
      className="rounded-xl border border-border/70 bg-card/60 p-4 shadow-sm"
      {...props}
    >
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/90">
        {title}
      </h3>
      <div className="mt-3 text-sm text-muted-foreground [&_li]:ml-4 [&_li]:list-disc [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}

export const mdxComponents = {
  a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (!href) return <a {...props} />;
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          {...props}
        />
      );
    }
    return <Link href={href} {...props} />;
  },
  Callout,
  ModulesGrid,
  ModuleCard,
  pre: CodeBlock,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-accent pl-4 text-muted-foreground" {...props} />
  )
};
