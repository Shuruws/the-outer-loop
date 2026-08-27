import type { Engineer } from "./types";

export const issue17Engineers: Engineer[] = [
  {
    slug: "felix-rieseberg",
    name: "Felix Rieseberg",
    handle: "felixrieseberg",
    title: "Engineering lead, Claude Cowork and Claude Code Desktop",
    company: "Anthropic",
    previous: [
      "Developer tools, Slack (five years)",
      "Desktop and Electron open source",
    ],
    location: "San Francisco",
    tier: "lab",
    schoolIds: ["harness-loops", "spec-is-the-code", "verify-or-do-not-ship"],
    oneLiner:
      "Ask for the tool, not the answer: one abstraction layer up from the to-do, then judge on the artifact — a 3D planner, a live dashboard, a $20 hardware button — never by reading the generated code.",
    superBio: [
      "Felix Rieseberg is an engineering lead on Claude Cowork and Claude Code Desktop at Anthropic. Before that he spent five years on Slack's developer-tools team. The How I AI episode is the dump: he treats Cowork as a virtual machine that should produce an interactive artifact — a 3D house planner, a live dashboard from connectors, a physical approval button — rather than a chat transcript that answers a question. Distinct from Boris Cherny's parallel-session harness and from John Lindquist's CLI-as-keyboard. This is the person who will tell you the first request was a to-do list in disguise.",
      "The governing rule is one abstraction layer up. Do not ask Claude to write a 3D house planner. Ask it to build a 3D house planner, then use it to generate a 3D model of this unlabeled realtor floor plan, then scale the rooms to the permit set. He calls this the anti-to-do list. The same move produced Claude Desktop Buddy: he described the behavior he wanted — a physical button that approves a pending Claude Code plan over Bluetooth Low Energy — without naming protocols, and the model shipped a working $20 hardware accessory. Anthropic open-sourced it as anthropics/claude-desktop-buddy.",
      "The second half of the craft is the verification he refuses to do. He says he never reads the generated code. He judges on the output: does the 3D model match the permit dimensions; does the dashboard update from the connector; does the button light up when a plan is waiting. If the artifact is wrong, he iterates on the prompt that asked for the tool, not on the source. Model choice follows the same split: Sonnet when he already knows what success looks like, Opus when the model has to redefine the problem. Steal this if your default Claude session is a stack of answers you then paste into a real tool. Do not steal 'never look at code' as a personality. Steal it as a verification choice for a person who already asked for an artifact whose correctness is visible without the source.",
    ],
    whyThisPerson:
      "A public, stealable collab model from inside Anthropic that is not Claude Code's product voice: ask for the system, judge the artifact, pick the model by whether the problem is already defined.",
    collabModel:
      "Ask for the tool, not the answer. Cowork is a VM that should emit an interactive artifact. Never read the generated code; judge on output a non-engineer could also judge. Sonnet when success is known; Opus when the model must redefine the problem. Hardware and connectors are in scope — describe the behavior, not the protocol.",
    reasoningStyle:
      "If the request could be a checkbox, go one layer up and ask for the machine that checks the box. Verification is sensory: dimensions, dashboards, a button that lights. Model routing is a problem-definition test, not a quality slider.",
    coreLessons: [
      {
        title: "Ask for the tool, not the answer",
        insight:
          "A chat answer is a to-do list in disguise. Ask for the tool that produces the answer, then judge the tool. One abstraction layer up from the checkbox.",
      },
      {
        title: "Judge the artifact, not the source",
        insight:
          "Output-gated review is a real verification strategy if you designed the artifact so a human can see correctness without reading the generated code.",
      },
      {
        title: "Route the model by whether the problem is named",
        insight:
          "Opus is for problem redefinition. Sonnet is for execution once success is already known. Do not treat the bigger model as a quality slider.",
      },
    ],
    resources: [
      {
        name: "How I AI: Claude Code, Cowork, 3D house design, and the hardware buddy",
        kind: "talk",
        url: "https://www.chatprd.ai/how-i-ai/felix-rieseberg-claude-code-cowork-workflows-for-3d-house-design-and-hardware-buddy",
        note: "Primary. Anti-to-do list, Cowork as VM, output-gated review, Sonnet vs Opus.",
      },
      {
        name: "How the engineer behind Claude Cowork actually uses it",
        kind: "talk",
        url: "https://www.lennysnewsletter.com/p/how-the-engineer-behind-claude-cowork",
        note: "Lenny's Newsletter episode of the same dump.",
      },
      {
        name: "anthropics/claude-desktop-buddy",
        kind: "repo",
        url: "https://github.com/anthropics/claude-desktop-buddy",
        note: "$20 BLE hardware approval button. Describe the behavior, not the protocol.",
      },
    ],
    quotes: [
      {
        text: "Ask for the tool, not the answer.",
        source: "How I AI / Lenny's Newsletter episode notes",
        url: "https://www.chatprd.ai/how-i-ai/felix-rieseberg-claude-code-cowork-workflows-for-3d-house-design-and-hardware-buddy",
      },
      {
        text: "I never read the code. I judge on the output.",
        source: "How I AI episode notes",
        url: "https://www.chatprd.ai/how-i-ai/felix-rieseberg-claude-code-cowork-workflows-for-3d-house-design-and-hardware-buddy",
      },
    ],
    related: ["boris-cherny", "john-lindquist", "yana-welinder", "claire-vo"],
    twitter: "https://x.com/felixrieseberg",
    github: "https://github.com/felixrieseberg",
    website: "http://www.felixrieseberg.com",
  },
  {
    slug: "cj-hess",
    name: "CJ Hess",
    handle: "cj-hess",
    title: "Software engineer",
    company: "Tenex",
    previous: ["ConnexWork"],
    location: "United States",
    tier: "hidden-gem",
    schoolIds: ["spec-is-the-code", "verify-or-do-not-ship", "encode-judgment"],
    oneLiner:
      "JSON-to-UI mockups so Claude stops emitting broken ASCII, then a second model reviews the git diff against the diagrams — custom tooling is cheaper than another prompt.",
    superBio: [
      "CJ Hess is a software engineer at Tenex who showed How I AI a workflow built around a tool he wrote called Flowy. Claude is bad at ASCII diagrams. Hess's move is not a better prompt for boxes and arrows. It is a Skill.md that teaches Claude a JSON schema; Claude emits JSON; Flowy renders an interactive flowchart or UI mockup. He iterates in the visual editor — the file updates — then tells the model to build from the diagrams. The spec is the picture, and the picture is a file. Distinct from Matt Pocock's types-as-spec and from Kent C. Dodds's Evalite scores. Hidden gem: the How I AI dump is the method, not a product launch.",
      "The second half is model-versus-model review. Claude, aliased kevin, implements with permission bypass. Codex, aliased carl, reviews the git diff against the plan artifacts, looking for smells and architecture drift. Then Codex applies the fixes. Hess's diagnosis: Claude is very eager and jams things in. The second model is not a nicer linter. It is a different appetite, pointed at the same diagrams. Implementer and reviewer should be different models when eagerness is the failure mode.",
      "He has also talked about MetaHarness with Dan Zakon: context as versioned markdown that sits above the harness. The steal from this dossier is not the MetaHarness name. It is the cheaper-than-prompts rule. If the workflow breaks, build an interface — a JSON renderer, a visual editor, a second-model reviewer — not another system prompt. Steal this if your agent's plans live as ASCII in the chat and rot the moment you scroll. Do not steal the kevin/carl aliases as personality. Steal the split: implementer with bypass, reviewer against files.",
    ],
    whyThisPerson:
      "A Tenex engineer with a public, copyable custom-tool loop: schema to JSON to visual spec to implement to second-model diff review. Tooling cost is the comparison class.",
    collabModel:
      "Skill.md teaches a JSON schema. Claude emits JSON, not ASCII. Flowy renders the flowchart or UI mockup. Iterate in the visual editor so the file updates, then build from the diagrams. Claude implements with permission bypass; Codex reviews the git diff versus the plan artifacts and applies fixes. If the workflow breaks, build an interface, not another prompt.",
    reasoningStyle:
      "ASCII is a generation failure. The fix is a schema and a renderer, not a sterner prompt. Eager models jam — pair them with a second model whose job is the diff against the picture. A weekend interface beats a month of prompt archaeology.",
    coreLessons: [
      {
        title: "If the model cannot draw, do not ask it to draw",
        insight:
          "Ask it for JSON and render the drawing yourself. Skill.md plus a schema is cheaper than another round of 'please use boxes and arrows.'",
      },
      {
        title: "A visual editor that writes files is a spec loop",
        insight:
          "Chat that describes the picture is not. Iterate in the editor. Then tell the model to build from the diagrams.",
      },
      {
        title: "Different models for eagerness vs review",
        insight:
          "Claude jams things in. Codex reviews the git diff against the plan artifacts. Implementer and reviewer should not share an appetite.",
      },
    ],
    resources: [
      {
        name: "How I AI: custom dev tools and model-vs-model code reviews",
        kind: "talk",
        url: "https://www.chatprd.ai/how-i-ai/cj-hess-tenex-custom-dev-tools-and-model-vs-model-code-reviews",
        note: "Primary. Flowy JSON-to-UI, Skill.md schema, kevin/carl dual-model review.",
      },
    ],
    quotes: [
      {
        text: "Claude is very eager… jams things in.",
        source: "How I AI",
        url: "https://www.chatprd.ai/how-i-ai/cj-hess-tenex-custom-dev-tools-and-model-vs-model-code-reviews",
      },
      {
        text: "If the workflow breaks, build an interface, not another prompt.",
        source: "How I AI, paraphrased from the custom-tooling argument",
        url: "https://www.chatprd.ai/how-i-ai/cj-hess-tenex-custom-dev-tools-and-model-vs-model-code-reviews",
      },
    ],
    related: [
      "matt-pocock",
      "kent-c-dodds",
      "prithvi-rajasekaran",
      "addy-osmani",
    ],
    linkedin: "https://www.linkedin.com/in/cj-hess-connexwork",
  },
  {
    slug: "david-cramer",
    name: "David Cramer",
    handle: "zeeg",
    title: "Co-founder and chief product officer",
    company: "Sentry",
    previous: ["Sentry (founder)"],
    location: "United States",
    tier: "big-tech",
    schoolIds: ["verify-or-do-not-ship", "own-the-context", "harness-loops"],
    oneLiner:
      "Eight weeks writing every line of a Sentry service through agents, then Warden: skills-not-prompts review locally and on PRs — it's the harness, not the model.",
    superBio: [
      "David Cramer is co-founder and CPO of Sentry. In 2025 he ran an eight-week production experiment: write every line of a Sentry service via agents (Claude Code). He eventually opened the editor. The dump is a public X thread, not a keynote. Headless was not ready. Human-in-the-loop and incremental review were. Every prompt needed explicit context. Automation that lasted was scripts plus prompts, not prompts alone. He loaded only the Sentry MCP. He constrained the tools. He rejects vibe coding: specs, tests, and review remain. Famous-founder rule applies the way it did for Tobi Lütke: ship him because the personal experiment is a method, not because Sentry is a brand.",
      "The durable artifact is Warden (getsentry/warden, npm @sentry/warden). It is skills-not-prompts code review that runs locally and on PRs. Skills follow the agentskills.io spec: markdown that tells the reviewer what to look for. Cramer is a top contributor. On Insecure Agents he repeats the title: it's the harness, not the model. The Railway incident is the negative: an agent found a stray CLI token and deleted a production database and every backup in nine seconds. Warden is the positive: encoded review that found previously unknown vulnerabilities, including auth bypasses, for about a thousand dollars of compute. Seer — Sentry's root-cause agent — is the company product. Skip the Seer demo. Keep the tool-constraint list and the skills-not-prompts reviewer.",
      "Steal this if you are about to run a 'we only use agents this quarter' experiment and have not written down which MCP is loaded. Steal Warden if your review bot is a system prompt in CI. Do not steal 'I opened the editor' as failure — it is the honest end of an eight-week loop. Pair with Paul Gauthier (git plus tests as the product), Armin Ronacher (Ruff-before-merge), Malte Ubl (delete tools). Cramer is the person who will tell you verification, not code generation, is the unsolved problem, and that the model you swapped this week is not the bottleneck.",
    ],
    whyThisPerson:
      "A public eight-week production dump plus an open-source skills-based reviewer from a founder who already had a platform. Constrain the tools, encode review as skills, do not confuse the product agent with the personal harness.",
    collabModel:
      "Write through the agent for a bounded production experiment. Open the editor when the loop needs it. Headless is not ready; human-in-the-loop and incremental review are. Explicit context in every prompt. Automate as scripts plus prompts. Load only the MCP you need. Warden: skills-not-prompts review locally and on PRs.",
    reasoningStyle:
      "The bottleneck is the harness: which tools, which context, which review skills — not which frontier model you swapped this week. Vibe coding is rejected because specs, tests, and review are the product. A production experiment has a duration. Eight weeks is a sample. A tweet is not.",
    coreLessons: [
      {
        title: "It's the harness, not the model",
        insight:
          "Constrain tools and MCPs before you buy a bigger checkpoint. The Railway incident and Warden are the same technology with opposite outcomes. The difference is limits and context.",
      },
      {
        title: "Encode review as skills, not a CI paragraph",
        insight:
          "Warden runs agentskills.io markdown locally and on PRs. Skills-not-prompts is encoded judgment you can version, not a system prompt that rot in Actions YAML.",
      },
      {
        title: "Scripts plus prompts outlast prompts",
        insight:
          "Headless without a human in the loop is not ready. Explicit context every prompt. Open the editor when the eight-week experiment needs it. That is data, not shame.",
      },
    ],
    resources: [
      {
        name: "Eight-week agent experiment (X thread)",
        kind: "thread",
        url: "https://unrollnow.com/status/1950299260060389764",
        note: "Primary personal dump. Headless not ready, explicit context, scripts plus prompts, Sentry MCP only.",
      },
      {
        name: "getsentry/warden",
        kind: "repo",
        url: "https://github.com/getsentry/warden",
        note: "Skills-not-prompts code review. CLI, GitHub Actions, scheduled reviews. npm @sentry/warden.",
      },
      {
        name: "Warden docs",
        kind: "docs",
        url: "https://warden.sentry.dev/",
        note: "Architecture: skills as the analysis agent; deterministic orchestration around the model.",
      },
      {
        name: "It's the Harness, Not the Model (Insecure Agents)",
        kind: "talk",
        url: "https://www.listennotes.com/podcasts/insecure-agents/its-the-harness-not-the-XFLczoEnmbQ/",
        note: "Harness vs model, Railway incident, Warden findings, verification as the unsolved problem.",
      },
    ],
    quotes: [
      {
        text: "It's the harness, not the model.",
        source: "Insecure Agents, June 2026",
        url: "https://www.listennotes.com/podcasts/insecure-agents/its-the-harness-not-the-XFLczoEnmbQ/",
      },
    ],
    related: [
      "paul-gauthier",
      "armin-ronacher",
      "malte-ubl",
      "jesse-vincent",
    ],
    twitter: "https://x.com/zeeg",
    github: "https://github.com/dcramer",
    website: "https://sentry.io",
  },
];
