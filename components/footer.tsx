import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold text-foreground">{siteConfig.name}</div>
          <div>{siteConfig.role}</div>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/projects" className="hover:text-foreground">
            Projects
          </Link>
          <Link href="/notes" className="hover:text-foreground">
            Notes
          </Link>
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>
        <div className="text-xs">© {new Date().getFullYear()} {siteConfig.name}</div>
      </div>
    </footer>
  );
}
