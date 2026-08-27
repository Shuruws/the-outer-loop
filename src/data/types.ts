export type EngineerTier = "archetype" | "lab" | "big-tech" | "hidden-gem";

export type ResourceKind =
  | "repo"
  | "plugin"
  | "essay"
  | "talk"
  | "thread"
  | "book"
  | "course"
  | "docs";

export type Lesson = {
  title: string;
  insight: string;
};

export type Resource = {
  name: string;
  kind: ResourceKind;
  url: string;
  note: string;
};

export type Quote = {
  text: string;
  source: string;
  url?: string;
};

export type Engineer = {
  slug: string;
  name: string;
  handle: string;
  title: string;
  company: string;
  previous: string[];
  location?: string;
  tier: EngineerTier;
  schoolIds: string[];
  oneLiner: string;
  superBio: string[];
  whyThisPerson: string;
  collabModel: string;
  reasoningStyle: string;
  coreLessons: Lesson[];
  resources: Resource[];
  quotes: Quote[];
  related: string[];
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
};

export type School = {
  slug: string;
  name: string;
  thesis: string;
  body: string[];
  contrapoint: string;
  engineerSlugs: string[];
};

export type CrossLesson = {
  slug: string;
  title: string;
  summary: string;
  body: string;
  heldBy: string[];
};
