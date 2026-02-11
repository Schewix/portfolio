import type React from "react";
import Link from "next/link";
import { Callout } from "@/components/callout";
import { CodeBlock } from "@/components/code-block";

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
  pre: CodeBlock,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-accent pl-4 text-muted-foreground" {...props} />
  )
};
