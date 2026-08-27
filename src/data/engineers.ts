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
import { issue09Engineers } from "./issue09";
import { issue10Engineers } from "./issue10";
import { issue11Engineers } from "./issue11";
import { issue12Engineers } from "./issue12";
import { issue13Engineers } from "./issue13";
import { issue14Engineers } from "./issue14";
import { issue15Engineers } from "./issue15";
import { issue16Engineers } from "./issue16";
import { issue17Engineers } from "./issue17";
import { issue18Engineers } from "./issue18";
import { issue19Engineers } from "./issue19";
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
  ...issue09Engineers,
  ...issue10Engineers,
  ...issue11Engineers,
  ...issue12Engineers,
  ...issue13Engineers,
  ...issue14Engineers,
  ...issue15Engineers,
  ...issue16Engineers,
  ...issue17Engineers,
  ...issue18Engineers,
  ...issue19Engineers,
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
