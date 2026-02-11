import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  const value = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("cs-CZ", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  }).format(value);
}
