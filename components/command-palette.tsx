"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from "@/components/ui/command";

const navItems = [
  { title: "Home", url: "/" },
  { title: "Projects", url: "/projects" },
  { title: "Notes", url: "/notes" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" }
];

type PaletteItem = {
  title: string;
  url: string;
  type: "Project" | "Note";
};

export function CommandPalette({
  projects,
  notes
}: {
  projects: PaletteItem[];
  notes: PaletteItem[];
}) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    const handleCommandPalette = () => setOpen(true);

    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("command-palette", handleCommandPalette);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("command-palette", handleCommandPalette);
    };
  }, []);

  const navigate = (url: string) => {
    setOpen(false);
    router.push(url);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search projects, notes, or jump to a page" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {navItems.map((item) => (
            <CommandItem key={item.url} onSelect={() => navigate(item.url)}>
              <span>{item.title}</span>
              <span className="text-xs text-muted-foreground">Page</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Projects">
          {projects.map((project) => (
            <CommandItem
              key={project.url}
              onSelect={() => navigate(project.url)}
            >
              <span>{project.title}</span>
              <span className="text-xs text-muted-foreground">Project</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Notes">
          {notes.map((note) => (
            <CommandItem key={note.url} onSelect={() => navigate(note.url)}>
              <span>{note.title}</span>
              <span className="text-xs text-muted-foreground">Note</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
