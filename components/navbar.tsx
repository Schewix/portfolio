import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandPaletteTrigger } from "@/components/command-palette-trigger";
import { MobileNav } from "@/components/mobile-nav";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/notes", label: "Notes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 bg-card/60 text-accent">
            <span className="block text-[10px] font-semibold leading-none">OS</span>
          </span>
          <span>Ondřej Ševčík</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CommandPaletteTrigger />
          <ThemeToggle />
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
}
