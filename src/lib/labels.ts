export const tierLabels = {
  archetype: "Archetype",
  lab: "AI lab",
  "big-tech": "Large tech",
  "hidden-gem": "Hidden gem",
} as const;

export const resourceLabels = {
  repo: "Repo",
  plugin: "Plugin / skills",
  essay: "Essay",
  talk: "Talk",
  thread: "Thread",
  book: "Book",
  course: "Course",
  docs: "Docs",
} as const;

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
