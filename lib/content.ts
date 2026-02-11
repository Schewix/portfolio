import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import GithubSlugger from "github-slugger";

export type TocItem = {
  value: string;
  url: string;
  depth: number;
};

export type Project = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  summary: string;
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
  content: string;
  readingTime: number;
  toc: TocItem[];
  url: string;
};

export type Note = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  summary: string;
  content: string;
  readingTime: number;
  toc: TocItem[];
  url: string;
};

const contentRoot = path.join(process.cwd(), "content");
const projectsDir = path.join(contentRoot, "projects");
const notesDir = path.join(contentRoot, "notes");

const buildToc = (raw: string): TocItem[] => {
  const slugger = new GithubSlugger();
  const lines = raw.split(/\r?\n/);
  const toc: TocItem[] = [];

  for (const line of lines) {
    if (!line.startsWith("##")) continue;
    const match = /^(#{2,3})\s+(.+)/.exec(line);
    if (!match) continue;
    const depth = match[1].length;
    const value = match[2].trim();
    const url = `#${slugger.slug(value)}`;
    toc.push({ value, url, depth });
  }

  return toc;
};

const getMdxFiles = (dir: string) =>
  fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.join(dir, file));

const normalizeTags = (value: unknown): string[] => {
  if (!Array.isArray(value)) return [];
  return value.map((tag) => String(tag));
};

const parseDate = (value: unknown, fallback: string) =>
  typeof value === "string" && value.trim().length ? value : fallback;

const readProject = (filePath: string): Project => {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const slug = typeof data.slug === "string"
    ? data.slug
    : path.basename(filePath, ".mdx");
  const date = parseDate(data.date, new Date().toISOString());

  return {
    title: String(data.title ?? "Untitled project"),
    slug,
    date,
    tags: normalizeTags(data.tags),
    summary: String(data.summary ?? ""),
    repoUrl: data.repoUrl ? String(data.repoUrl) : undefined,
    liveUrl: data.liveUrl ? String(data.liveUrl) : undefined,
    featured: Boolean(data.featured),
    content,
    readingTime: Math.ceil(readingTime(content).minutes),
    toc: buildToc(content),
    url: `/projects/${slug}`
  };
};

const readNote = (filePath: string): Note => {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const slug = typeof data.slug === "string"
    ? data.slug
    : path.basename(filePath, ".mdx");
  const date = parseDate(data.date, new Date().toISOString());

  return {
    title: String(data.title ?? "Untitled note"),
    slug,
    date,
    tags: normalizeTags(data.tags),
    summary: String(data.summary ?? ""),
    content,
    readingTime: Math.ceil(readingTime(content).minutes),
    toc: buildToc(content),
    url: `/notes/${slug}`
  };
};

export const getAllProjects = () =>
  getMdxFiles(projectsDir)
    .map(readProject)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

export const getFeaturedProjects = () =>
  getAllProjects().filter((project) => project.featured);

export const getAllNotes = () =>
  getMdxFiles(notesDir)
    .map(readNote)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

export const getLatestNotes = (count = 3) => getAllNotes().slice(0, count);

export const getProjectBySlug = (slug: string) =>
  getAllProjects().find((project) => project.slug === slug);

export const getNoteBySlug = (slug: string) =>
  getAllNotes().find((note) => note.slug === slug);

export const getProjectTags = () => {
  const tags = new Set<string>();
  getAllProjects().forEach((project) =>
    project.tags.forEach((tag) => tags.add(tag))
  );
  return Array.from(tags).sort();
};

export const getNoteTags = () => {
  const tags = new Set<string>();
  getAllNotes().forEach((note) =>
    note.tags.forEach((tag) => tags.add(tag))
  );
  return Array.from(tags).sort();
};
