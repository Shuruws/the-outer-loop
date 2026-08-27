import type { Engineer } from "./types";
import { bigTechEngineers } from "./bigtech";
import { gemEngineers } from "./gems";
import { labEngineers } from "./labs";

export const engineers: Engineer[] = [
  ...labEngineers,
  ...gemEngineers,
  ...bigTechEngineers,
];

export function getEngineer(slug: string) {
  return engineers.find((engineer) => engineer.slug === slug);
}

export function engineersBySlug(slugs: string[]) {
  return slugs
    .map((slug) => getEngineer(slug))
    .filter((engineer): engineer is Engineer => Boolean(engineer));
}

export const hiddenGems = engineers.filter(
  (engineer) => engineer.tier === "hidden-gem",
);

export const labPeople = engineers.filter(
  (engineer) => engineer.tier === "lab" || engineer.tier === "archetype",
);
