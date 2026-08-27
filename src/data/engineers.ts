import type { Engineer } from "./types";
import { bigTechEngineers } from "./bigtech";
import { gemEngineers } from "./gems";
import { issue02Engineers } from "./issue02";
import { issue03Engineers } from "./issue03";
import { issue04Engineers } from "./issue04";
import { issue05Engineers } from "./issue05";
import { issue06Engineers } from "./issue06";
import { issue07Engineers } from "./issue07";
import { issue08Engineers } from "./issue08";
import { labEngineers } from "./labs";

export const engineers: Engineer[] = [
  ...labEngineers,
  ...gemEngineers,
  ...bigTechEngineers,
  ...issue02Engineers,
  ...issue03Engineers,
  ...issue04Engineers,
  ...issue05Engineers,
  ...issue06Engineers,
  ...issue07Engineers,
  ...issue08Engineers,
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
