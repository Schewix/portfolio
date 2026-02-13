import { Badge } from "@/components/ui/badge";

export function TagBadge({ label }: { label: string }) {
  return (
    <Badge className="border-border/80 bg-muted/65 px-2.5 py-1 text-[11px] tracking-wide">
      {label}
    </Badge>
  );
}
