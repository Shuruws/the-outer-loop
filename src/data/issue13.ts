import type { Engineer } from "./types";

export const issue13Engineers: Engineer[] = [
  {
    slug: "solomon-hykes",
    name: "Solomon Hykes",
    handle: "solomonstre",
    title: "Founder",
    company: "Dagger",
    previous: ["Founder, Docker"],
    location: "Paris / San Francisco",
    tier: "hidden-gem",
    schoolIds: ["harness-loops", "own-the-context", "verify-or-do-not-ship"],
    oneLiner:
      "The Docker founder who named the missing primitive: agents need container use. Isolate each coding agent in its own container and git branch, watch the log, drop into the terminal, merge only what you like.",
    superBio: [
      "Solomon Hykes already taught the industry to put software in containers. The AI Engineer talk Containing Agent Chaos and the Dagger blog are the same lesson pointed at coding agents. One agent is magic. Ten agents on your laptop is YOLO mode: they overwrite files, fight dependencies, and you spend the day cleaning the battlefield. The other failure is Prompt and Pray: a black-box cloud agent you cannot enter, cannot tool, cannot run on your own iron. The missing primitive is what he jokes they had to invent after computer use and browser use — container use. An MCP server plus CLI. Each task gets a fresh container and a git branch. Your working tree stays clean. Parallel attempts of the same prompt become merge candidates.",
      "The stealable craft is the inspection surface, not the marketing. cu watch is git log --graph on the container-use remotes. git log --notes=container-use is every command the agent actually ran, not what it claimed. cu terminal drops you into the stuck loop with files, processes, and env vars still there. cu merge / apply / discard is the human outer loop. Restrict Claude Code to only the container-use MCP tools if you want the agent physically unable to touch the host. The same environment definition runs on the laptop and in CI because it is Dagger under the hood. Pair with Zach Bruggeman (Modal sandboxes at Ramp) and Alistair (Stripe 10-second boxes). Solomon is the person who will tell you isolation is a git workflow, not a vibe.",
      "Famous-founder inclusion is the Tobi rule: personal workflow as a teachable tool. You can install container-use tonight and keep Cursor or Claude Code. You do not have to adopt the Dagger engine as a religion.",
    ],
    whyThisPerson:
      "Primary talk plus an MCP you can wire in one command. Isolation-as-git-branch is stealable even if you never write a Dagger function.",
    collabModel:
      "Add container-use as MCP. Optional CLAUDE.md rules. Agent creates an environment per task. Watch logs. Attach when stuck. Diff the branch. Merge or throw the container away.",
    reasoningStyle:
      "Background work needs guardrails and a way in. Containers isolate execution. Git isolates state. The human keeps optionality: intervene, choose among parallel attempts, run the same env in CI.",
    coreLessons: [
      {
        title: "Agents need container use",
        insight:
          "Computer use and browser use were named. The missing one is a sandbox the agent can create, run, and discard. Without it you get YOLO on the host or a black box in the cloud.",
      },
      {
        title: "Isolation is a git branch",
        insight:
          "Each environment is a remote you can log, diff, checkout, and merge with the tools you already have. State lives in git, not in the chat.",
      },
      {
        title: "Watch what it ran, not what it claimed",
        insight:
          "cu watch and git notes are the audit trail. If it is stuck, attach to the container. Intervention beats another round of Prompt and Pray.",
      },
    ],
    resources: [
      {
        name: "Containing Agent Chaos",
        kind: "talk",
        url: "https://ai.engineer/talks/containing-agent-chaos",
        note: "Primary. YOLO vs Prompt-and-Pray, Container Use demo with Claude Code.",
      },
      {
        name: "Containing Agent Chaos (blog)",
        kind: "essay",
        url: "https://dagger.io/blog/agent-container-use/",
        note: "Isolation, cu watch, terminal attach, git-backed merge.",
      },
      {
        name: "dagger/container-use",
        kind: "repo",
        url: "https://github.com/dagger/container-use",
        note: "MCP server + CLI. claude mcp add container-use -- container-use stdio.",
      },
    ],
    quotes: [
      {
        text: "One AI coding agent is magic. … Ten? Chaos ensues.",
        source: "Containing Agent Chaos, Dagger blog",
        url: "https://dagger.io/blog/agent-container-use/",
      },
      {
        text: "You can't easily intervene, use your own tools, or run it on your own infrastructure. You lose control.",
        source: "Containing Agent Chaos, Dagger blog",
        url: "https://dagger.io/blog/agent-container-use/",
      },
    ],
    related: ["zach-bruggeman", "alistair-gray", "geoffrey-huntley", "ryan-cooke"],
    twitter: "https://x.com/solomonstre",
    github: "https://github.com/shykes",
    website: "https://dagger.io",
  },
  {
    slug: "angie-jones",
    name: "Angie Jones",
    handle: "techgirl1908",
    title: "VP of Developer Experience",
    company: "Agentic AI Foundation",
    previous: [
      "VP of Developer Relations, Block",
      "Head of Developer Relations, Applitools",
    ],
    location: "United States",
    tier: "hidden-gem",
    schoolIds: ["encode-judgment", "plan-then-oneshot", "spec-is-the-code"],
    oneLiner:
      "The Block / AAIF engineer who packaged HumanLayer's RPI as Goose recipes: research with no opinions, plan until it is mechanical, implement in a fresh session — and fell asleep while the agent finished 32 files.",
    superBio: [
      "Angie Jones spent years teaching testers and then scaled AI enablement across Block's engineering org. Luke Alvoeiro created Goose and later told the Factory Missions story. Angie's dump is the recipe layer: she took Dex Horthy / HumanLayer's Research → Plan → Implement pattern and made it four installable Goose recipes plus slash commands. The tutorial is a real removal — Tool Selection Strategy across Rust, TypeScript, config, tests, and docs. Research 9 minutes, plan 4, implement 39. Fifty-two minutes. PR 6250: build green, the review agent had zero comments. LinkedIn: she used the same pattern on a 32-file feature and the agent ran almost an hour with no drift.",
      "The discipline is the steal. Research documents what exists: no opinions, no plan, no critique. Three subagents in parallel (locator, analyzer, pattern-finder) write thoughts/research/. You review. New session for plan: read the research, ask clarifying questions, offer design options, emit a phased plan with file paths, snippets, automated success criteria, and checkboxes. New session for implement: boring on purpose. 'I fell asleep while goose was running it. Implementation should feel mechanical. If it feels creative, something upstream is missing.' Context filled mid-run; checkboxes in the plan file let it compact and resume. /iterate_plan patches the plan instead of starting over. One goal per session.",
      "Credit stays with HumanLayer for naming RPI. Angie is the person who encoded it as recipes you can curl into ~/.config/goose/recipes and who published the hour-long 32-file receipts. Pair with Dex (the pattern) and Matt (grill then spec). She is now VP of Developer Experience at the Agentic AI Foundation (MCP, Goose, AGENTS.md).",
    ],
    whyThisPerson:
      "RPI as a personal, measured Goose workflow — not Factory product, not 12-factor theory. Fresh-session phases and 'mechanical implement' are stealable in any harness.",
    collabModel:
      "Complex change: /research_codebase, human reviews the map. /create_plan in a new session, human reviews the contract. /implement_plan and walk away. /iterate_plan if the contract is wrong. Skip RPI for small work.",
    reasoningStyle:
      "Planning without research is assumption. Implementation without a plan is live interpretation. Artifacts on disk are the context. Speed is the wrong metric for a 32-file change.",
    coreLessons: [
      {
        title: "Research has no opinions",
        insight:
          "Document what exists. Do not suggest, critique, or plan. Catching a wrong topic in research is cheap. Catching it in a half-written diff is not.",
      },
      {
        title: "Implementation should feel mechanical",
        insight:
          "If the agent is being creative, the plan is incomplete. A good plan is executable by a stranger in a fresh window. Checkboxes survive compaction.",
      },
      {
        title: "One goal per session",
        insight:
          "Research, plan, and implement do not share a context window. The plan file is the handoff. Iterate the plan; do not restart the movie.",
      },
    ],
    resources: [
      {
        name: "Research → Plan → Implement Pattern",
        kind: "docs",
        url: "https://github.com/aaif-goose/goose/blob/main/documentation/docs/tutorials/rpi.md",
        note: "Primary. Recipes, 32-file removal, 52-minute receipts, mechanical implement.",
      },
      {
        name: "HumanLayer RPI (source pattern)",
        kind: "essay",
        url: "https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/ace-fca.md",
        note: "Dex's original RPI. Angie packages it; she does not claim the name.",
      },
      {
        name: "RPI research recipe",
        kind: "repo",
        url: "https://raw.githubusercontent.com/aaif-goose/goose/main/documentation/src/pages/recipes/data/recipes/rpi-research.yaml",
        note: "Installable YAML. Sibling recipes: plan, implement, iterate.",
      },
    ],
    quotes: [
      {
        text: "The RPI Implement Plan recipe is intentionally boring. In fact, I fell asleep while goose was running it. Implementation should feel mechanical. If it feels creative, something upstream is missing.",
        source: "Research → Plan → Implement Pattern, goose docs",
        url: "https://github.com/aaif-goose/goose/blob/main/documentation/docs/tutorials/rpi.md",
      },
    ],
    related: ["dex-horthy", "luke-alvoeiro", "matt-pocock", "boris-cherny"],
    twitter: "https://x.com/techgirl1908",
    linkedin: "https://www.linkedin.com/in/angiejones",
    github: "https://github.com/angiejones",
    website: "https://angiejones.tech",
  },
  {
    slug: "kent-c-dodds",
    name: "Kent C. Dodds",
    handle: "kentcdodds",
    title: "Educator; Epic Web / Epic AI",
    company: "Kent C. Dodds Tech",
    previous: [
      "Co-founder, Remix",
      "JavaScript engineer, PayPal",
    ],
    location: "Pleasant Grove, UT",
    tier: "hidden-gem",
    schoolIds: ["plan-then-oneshot", "own-the-context", "verify-or-do-not-ship"],
    oneLiner:
      "The educator who treats architecture as the prompt: ask the agent questions one at a time, plan in a fresh session, close the loop with tests and BugBot, and fix primitives when the model keeps producing garbage.",
    superBio: [
      "Kent C. Dodds taught a decade of React and testing, then showed the 2026 version of the job at AI Coding Summit: How I Build Web Applications in 2026. Agents are junior teammates with infinite stamina and zero context. You are the manager. The wrong obsession is the perfect first prompt. The job is managing the agent loop — how it knows done. Cursor is his daily driver. The 2,300-line Epic Workshop offline-download feature went out as a cloud agent PR; he did not write the lines. Scaffolding a repo from a blank agent is a token waste. Start from conventions (Laravel, Rails, his Epic Flare stack) so the architecture already answers the boring questions.",
      "The personal sequence is stealable. Ask mode first: onboard yourself, then 'ask me questions one at a time' so later questions can use earlier answers. Do not dump thirty questions. Keep the agent scoped at the product layer until the MVP is named. Then a new agent for the first task — throw away the planning transcript. Plan mode, review with engineering judgment, switch to ask if you do not know. Close the loop: 'iterate with the tests until they pass,' then a separate review agent, then your eyes. Browser control for UI; when automated tests lie, run it manually first. Point the agent at proven MCP repos instead of inventing protocol taste. Sleep-and-PR cloud agents plus BugBot so the first human look is after tests and the review bot already fought.",
      "Architecture is prompting. AGENTS.md plus docs is how the agent knew a modern beforeEach syntax he would have had to nit otherwise. LinkedIn follow-up: if the agent produces garbage, the model is probably not the problem — missing, overlapping, rigid, or too-narrow primitives are. Pair with Matt (deep modules) and Erik (be the PM). Kent is the person who will tell you to talk to the agent before you tell it to type.",
    ],
    whyThisPerson:
      "A full personal Cursor loop with receipts (2.3k-line feature) plus the primitives diagnosis. One-at-a-time questions and architecture-as-prompt are stealable without Epic AI.",
    collabModel:
      "Ask, then plan, then a fresh agent per task. Tests define done. Review agent before human. Browser for UI. Cloud agents for one-sentence jobs. Keep docs current with the agent.",
    reasoningStyle:
      "You manage the loop, not the keystrokes. Experience still shows up as which questions to answer and which primitives to add. The codebase is context. Don't waste tokens on scaffolding.",
    coreLessons: [
      {
        title: "Ask one question at a time",
        insight:
          "A thirty-question dump includes irrelevancies. Sequential questions improve. Talk before you dispatch. Then start a new agent so the implementer does not carry the whole interview.",
      },
      {
        title: "Architecture is the prompt",
        insight:
          "Conventions, tests, and AGENTS.md are input context. A good stack makes 'add auth' a one-liner. Garbage primitives produce garbage diffs no matter the model.",
      },
      {
        title: "Close the loop before you look",
        insight:
          "Keep going until tests pass. Let a review bot fight first. Cloud agents only work if done is executable. Your morning review should be of already-green work.",
      },
    ],
    resources: [
      {
        name: "How I Build Web Applications in 2026",
        kind: "talk",
        url: "https://gitnation.com/contents/how-i-build-web-applications-in-2026",
        note: "Primary. Ask mode, one-at-a-time questions, fresh-agent tasks, BugBot, architecture-as-prompt.",
      },
      {
        name: "Your coding agent needs better primitives",
        kind: "thread",
        url: "https://www.linkedin.com/posts/kentcdodds_your-coding-agent-needs-better-primitives-activity-7483181239764668417-vEmh",
        note: "Garbage output is usually the action space, not the model.",
      },
    ],
    quotes: [
      {
        text: "The way that I like to think about agents is that they're junior teammates, infinite stamina, and zero context.",
        source: "How I Build Web Applications in 2026",
        url: "https://gitnation.com/contents/how-i-build-web-applications-in-2026",
      },
      {
        text: "I actually think the architecture is prompting. The architecture is a part of the prompt.",
        source: "How I Build Web Applications in 2026",
        url: "https://gitnation.com/contents/how-i-build-web-applications-in-2026",
      },
    ],
    related: ["matt-pocock", "erik-schluntz", "addy-osmani", "kieran-klaassen"],
    twitter: "https://x.com/kentcdodds",
    github: "https://github.com/kentcdodds",
    website: "https://kentcdodds.com",
  },
];
