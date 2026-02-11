import { Badge } from "@/components/ui/badge";

export function TagBadge({ label }: { label: string }) {
  return <Badge className="capitalize">{label}</Badge>;
}
