import type { CrossLesson } from "./types";

export const crossLessons: CrossLesson[] = [
  {
    slug: "amnesia",
    title: "Treat the agent as a brilliant amnesiac",
    summary:
      "It will not remember the architecture review, the incident, or your taste. Skills, AGENTS.md, and git are the memory.",
    body: "Lauren Tan said it most sharply: agents are new hires in a constant state of amnesia and idiocy. Capable, teachable, and blank every morning. Every serious practitioner independently rediscovered the same compensation — write the culture down where the next session can reload it. pstack, Superpowers, CLAUDE.md, Beads, AGENTS.md, and Ralph's prompt file are all memory prosthetics.",
    heldBy: [
      "lauren-tan",
      "jesse-vincent",
      "steve-yegge",
      "geoffrey-huntley",
      "simon-willison",
    ],
  },
  {
    slug: "trust-before-parallel",
    title: "Do not parallelize agents you do not trust",
    summary:
      "Breadth without a verification gate multiplies slop. Make one agent own a problem end to end, then scale.",
    body: "Lauren's factory only works because pstack makes a single agent rigorous first. Boris one-shots after the plan is good, not before. Dex keeps agents small and focused. The people shipping 200–1,000 PRs a month are not running twenty uncorrelated chat windows. They have a trust gradient: evidence, then autonomy, then parallelism.",
    heldBy: ["lauren-tan", "boris-cherny", "dex-horthy", "jesse-vincent"],
  },
  {
    slug: "intent-is-the-bottleneck",
    title: "Writing code is cheap. Specifying intent is not.",
    summary:
      "Sean Grove's 80/20: the valuable artifact is communication of intent. Code is the compiled output.",
    body: "Once models can produce working programs, the scarce skill is saying what should exist with enough precision that a machine can be wrong in a detectable way. Harper's spec.md, Addy's 15-minute waterfall, Jesse's design chunks the human can actually read, and Hamel's error analysis are all methods for making intent executable.",
    heldBy: [
      "sean-grove",
      "harper-reed",
      "addy-osmani",
      "jesse-vincent",
      "hamel-husain",
    ],
  },
  {
    slug: "filesystem-memory",
    title: "The filesystem is the database",
    summary:
      "Chat history rot is real. Persist state in files, git, and issue graphs. Reset the window often.",
    body: "Ralph throws context away every iteration. Beads stores work as git-backed issues. Tobi's try repo and Guillermo's research folder plus AGENTS.md are the same idea without the theatrics. Simon Willison's definition of an agent — tools in a loop toward a goal — only stays coherent if the goal and the progress live outside the transcript.",
    heldBy: [
      "geoffrey-huntley",
      "steve-yegge",
      "tobi-lutke",
      "guillermo-rauch",
      "simon-willison",
      "dex-horthy",
    ],
  },
  {
    slug: "grep-beats-rag",
    title: "Let the model search. Do not pre-index the universe.",
    summary:
      "Claude Code and Amp both landed here: glob and grep, driven by the model, beat stale vector indexes for code.",
    body: "Boris Cherny has said it repeatedly: they tried RAG, local vector DBs, recursive indexing. Agentic search won. Thorsten Ball's 'emperor has no clothes' post made the same point with three tools. Paul Gauthier uses tree-sitter maps instead of embeddings. Retrieval still has a place for huge stable corpora. For a living repo, the model should go look.",
    heldBy: ["boris-cherny", "thorsten-ball", "paul-gauthier", "thariq-shihipar"],
  },
  {
    slug: "outer-loop",
    title: "You own the outer loop",
    summary:
      "Farm context, pick the next problem, encode taste, review evidence. The factory runs the inner loop.",
    body: "Lauren uses Grok Bot routines to pull Slack bugs, X complaints, and feature ideas into an outer loop, then points cloud agents at the work. Cat and Thariq describe Claude Tag as the org-level outer loop: the team tags work in Slack, owners review the load-bearing diffs. Armin asks the uncomfortable question: when the harness decides 'done,' what is the human for? The honest answer from this set: judgment, stop conditions, and what to point the factory at next.",
    heldBy: [
      "lauren-tan",
      "cat-wu",
      "thariq-shihipar",
      "lee-robinson",
      "armin-ronacher",
    ],
  },
  {
    slug: "less-code",
    title: "The goal is less code, not more",
    summary:
      "Throughput without quality is a team of slop artists. Maximum impact with the least code is the actual objective function.",
    body: "pstack is explicit about this. Armin sees unsupervised loops add fallbacks instead of invariants. Paul Gauthier refuses to turn Aider into an autonomous agent because exploration without a human is expensive and messy. Karpathy named vibe coding so we could distinguish it from production. The gems are not the people generating the most tokens. They are the people deleting them.",
    heldBy: [
      "lauren-tan",
      "armin-ronacher",
      "paul-gauthier",
      "andrej-karpathy",
      "thorsten-ball",
    ],
  },
];

export function getCrossLesson(slug: string) {
  return crossLessons.find((lesson) => lesson.slug === slug);
}
