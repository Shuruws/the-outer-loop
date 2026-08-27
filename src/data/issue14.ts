import type { Engineer } from "./types";

export const issue14Engineers: Engineer[] = [
  {
    slug: "javier-moreno",
    name: "Javier Moreno",
    handle: "javiermoreno",
    title: "Principal engineer; River / Aquifer",
    company: "Shopify",
    previous: [
      "Director, Machine Learning Engineering, Shopify",
      "Senior Data Science Manager, Shopify",
    ],
    location: "Toronto",
    tier: "big-tech",
    schoolIds: ["harness-loops", "own-the-context", "encode-judgment"],
    oneLiner:
      "The Shopify engineer on the River team who published the substrate: the session must survive, the harness does not live in the sandbox, and a private laptop agent has a ceiling because nobody else can learn from it.",
    superBio: [
      "Tobi Lütke already sits in this file for tobi/try and shop-floor learning. Javier Moreno is the other half of Shopify: he posted that a small team including him spent three months building River, then shipped Under the River with Burke Libbey and the agent itself as co-author. River lives in public Slack only — no DMs. @river, it reads code, runs tests, opens PRs, queries the warehouse, looks at traces, and sometimes pushes back. Median session 19 minutes, ~50 tool calls. One in eight merged Shopify PRs is coauthored. In a 30-day window they published: 59,918 sessions in 5,170 channels, 3,536 River-coauthored merges, 7,000+ people touched. Treat the counts as the design constraint they optimized for.",
      "The steal is Aquifer, not the Slack bot. Cells die, sandboxes die, machines die. The conversation does not. Session: durable identity, append-only Postgres event log. Harness: the loop, cheap to recreate. Sandbox: filesystem and shell, disposable. The harness does not live where the code lives — safety (rm -rf is not in the brain's blast radius), replaceability (swap models without touching the box), observability (the decision stream has one home). Session cells are cattle: idle, they exit; next ping, a fresh process on maybe another host, same session id. River is one profile: system prompt, skills, extensions, sandbox policy, model defaults, Nix-shipped as a bundle. PR review is another profile. Vanilla, the headless pi agent, is another. Three consumers on one stack: Interactive, Automation, Job.",
      "The 2024 bet that made it possible: one monorepo (World) and Nix everywhere, because agent-friendly is human-friendly. Skills as files. AGENTS.md. Ask the repo a question. Local agents have a ceiling — yesterday's flaky-test investigation dies with the laptop session. Public threads are the compounding asset; they mine the corpus back into skills. Pair with Tobi (the cultural post) and Alistair (Stripe's boxes). Javier is the person who will tell you the next agent should be a profile, not a platform.",
    ],
    whyThisPerson:
      "Primary substrate dump distinct from Tobi's personal try-repo. Session/harness/sandbox, public-by-construction, profiles-not-platforms are stealable even if you never see World.",
    collabModel:
      "Tag the agent in a public channel. Durable session, disposable sandbox. Humans drop into the thread. Mine successful threads into skills. New agent products are Nix bundles on Aquifer, not new stacks.",
    reasoningStyle:
      "The session is the thing that must survive. Private agents do not compound. Decouple brain from hands or you cannot retrofit safety. Every agent-hygiene move was already owed to humans.",
    coreLessons: [
      {
        title: "The session must survive",
        insight:
          "Harness and sandbox are cattle. Postgres holds the conversation. If your architecture cannot kill the box without killing the thread, you adopted a pet.",
      },
      {
        title: "A private agent has a ceiling",
        insight:
          "Whatever you learned in a laptop session dies with it. Public-only River turns one person's fix into the next person's starting prompt. Privacy of the thread is a disadvantage.",
      },
      {
        title: "The next agent is a profile",
        insight:
          "System prompt, skills, sandbox policy, model defaults. If your second agent forces a second platform, you have not built the substrate.",
      },
    ],
    resources: [
      {
        name: "Under the River",
        kind: "essay",
        url: "https://shopify.engineering/under-the-river",
        note: "Primary. World + Nix, public Slack, Aquifer session/harness/sandbox, profiles.",
      },
    ],
    quotes: [
      {
        text: "Cells die, sandboxes die, machines die. The conversation doesn't.",
        source: "Under the River",
        url: "https://shopify.engineering/under-the-river",
      },
      {
        text: "If every interaction with an agent happens in a private window, the only person who learns anything is the person at the keyboard.",
        source: "Under the River (quoting Tobi)",
        url: "https://shopify.engineering/under-the-river",
      },
    ],
    related: ["tobi-lutke", "alistair-gray", "solomon-hykes", "steve-kaliski"],
    linkedin: "https://www.linkedin.com/in/javier-moreno-a88810a4",
    website: "https://shopify.engineering/under-the-river",
  },
  {
    slug: "allen-chen",
    name: "Allen Chen",
    handle: "allenschen",
    title: "Engineer, AI Acceleration",
    company: "Sierra",
    previous: ["Director of Engineering, Plaid", "Twitter"],
    location: "San Francisco",
    tier: "lab",
    schoolIds: ["harness-loops", "own-the-context", "verify-or-do-not-ship"],
    oneLiner:
      "Sierra's Pinecone author: stop marooning Claude Code on laptops, give every session a one-second cloud pod, wrap Codex and Claude Code as cattle, and let the company — not the individual — learn from the work.",
    superBio: [
      "Allen Chen left Plaid and Twitter platforms for Sierra's AI Acceleration team. With Tess Rosania he wrote Pinecone: Harnessing the wisdom of the workforce. January 2026: every Sierra engineer had Codex, Claude Code, and Cursor locally, and it was working. Then people walked the office with laptops half-open running agents. Three failures: it would not scale on individual machines; they wanted to share demos and whole workspaces, not chat logs; the best debugging tricks stayed marooned on hundreds of laptops. The answer was a cloud agent. 96% of engineering on it daily. 70% of PRs opened through Pinecone. 600 people, 75,000 sessions in a month. Usage tripled monthly while costs fell. Treat the numbers as claims.",
      "A session is a prompt plus a pod: checked-out repo, warm cache, sidecars, hot-reload, harness, about a second. Watch, interrupt, redirect, or close the tab. Multiplayer: branch the entire session with your own MCP auth. Brokered PRs: the session opens the PR, a monitor sub-agent answers review comments, fixes failing tests, pings Slack only when judgment is required. One agent, not a persona dropdown — a classifier picks repo, environment, harness, model, budget; a data analysis that finds a logging bug opens a coding session without a handoff meeting. Agency reconciles Kubernetes runners; durable events live outside the pod. Privileged ops go through a proxy that swaps credentials the sandbox never sees. 'The agent never has access to real credentials. We let the agent assume it can do everything, yet trust nothing.'",
      "Lessons they will steal at a ten-person company: wrap Codex and Claude Code rather than rewriting the harness (AG-UI adapter); primitives not workflows, because workflows rot as models improve; plan-with-Fable execute-with-Terra as a default you can set once for everyone; no token leaderboard, centralize cost. Pinecone is built in Pinecone. Pair with Javier (session must survive) and Solomon (container isolation). Allen is the person who will tell you laptop agents do not compound.",
    ],
    whyThisPerson:
      "Primary internal-OS dump from an AI lab that still lets employees pick Claude Code or Codex inside the box. Environment-as-product and wrap-don't-rewrite are stealable without Sierra's K8s.",
    collabModel:
      "Prompt a cloud session. Isolated pod with the real toolchain. Branch to share. Monitor sub-agent babysits the PR. Skills start private and become defaults. Classifier routes; humans describe outcomes.",
    reasoningStyle:
      "Context is the moat, and it lives in the workforce only if you capture it. Workflows die; primitives (env, tools, company context) last. Meet people in Linear and GitHub, do not invent a grand new ritual.",
    coreLessons: [
      {
        title: "Laptop agents do not compound",
        insight:
          "The clever investigation from yesterday is a private artifact. A cloud session can be branched, mined into a skill, and reused. That is why they left working local setups.",
      },
      {
        title: "Wrap the frontier harness",
        insight:
          "Do not rewrite Claude Code. Install it in the sandbox, speak a common protocol, route models. You inherit their research and keep optionality.",
      },
      {
        title: "Build primitives, not workflows",
        insight:
          "Workflows had to be rewritten every model bump. Better context, environments, and company tools let people compose. Meet them in the apps they already use.",
      },
    ],
    resources: [
      {
        name: "Pinecone: Harnessing the wisdom of the workforce",
        kind: "essay",
        url: "https://sierra.ai/blog/pinecone-harnessing-the-wisdom-of-the-workforce",
        note: "Primary. With Tess Rosania. Cloud sessions, wrap Codex/Claude Code, credentials proxy.",
      },
      {
        name: "AI-pilling our company",
        kind: "essay",
        url: "https://sierra.ai/blog/ai-pilling-our-company-lessons-learned",
        note: "Companion. Collapse role agents into one handle; own the routing layer.",
      },
    ],
    quotes: [
      {
        text: "The agent never has access to real credentials. As with most agentic environments, we let the agent assume it can do everything, yet trust nothing.",
        source: "Pinecone: Harnessing the wisdom of the workforce",
        url: "https://sierra.ai/blog/pinecone-harnessing-the-wisdom-of-the-workforce",
      },
      {
        text: "We found early on that workflows didn't last long. The models got too smart, the workflows had to be rewritten.",
        source: "Pinecone: Harnessing the wisdom of the workforce",
        url: "https://sierra.ai/blog/pinecone-harnessing-the-wisdom-of-the-workforce",
      },
    ],
    related: ["javier-moreno", "solomon-hykes", "ryan-cooke", "zack-proser"],
    linkedin: "https://www.linkedin.com/in/allenschen",
    github: "https://github.com/allenschen",
    website: "https://sierra.ai/blog/pinecone-harnessing-the-wisdom-of-the-workforce",
  },
  {
    slug: "aitor-alonso",
    name: "Aitor Alonso",
    handle: "aitoralonso",
    title: "Senior software engineer",
    company: "Independent / product engineering",
    previous: [],
    location: "Spain",
    tier: "hidden-gem",
    schoolIds: ["encode-judgment", "spec-is-the-code", "verify-or-do-not-ship"],
    oneLiner:
      "The quiet engineer who published the four-layer stack: CLAUDE.md for what the code cannot say, Superpowers for process, your own skills for team taste, MCPs for live systems — then brainstorm → plan → execute → self-review.",
    superBio: [
      "Aitor Alonso is not a lab PM. He is a product-minded senior who wrote down the composition most people only gesture at. My agentic software development workflow is the dump: four pieces, stacked, in order. CLAUDE.md is project memory — everything the model cannot infer from the tree. Superpowers (Jesse Vincent) is the generic process: brainstorm to a spec, plan with TDD, execute via subagents, code-review before you look. His own skills encode the team's standards on top of that generic workflow. MCPs are hands and eyes: Grafana for a production bug, GitHub for the PR. 'If skills are the know-how, MCPs are the hands and eyes.'",
      "The pattern is always the same and that is the point. Feature work: Superpowers brainstorm → plan → execute, then his code-review, prepare-pr, github. A bug: systematic-debugging, then grafana-observability to inject real data, then the same review and PR skills. He does not fork Superpowers into a new religion. He starts with the generic skill and hands off to local ones when taste shows up. Start with CLAUDE.md. Write the things the code cannot say. Add a handful of rules. Then Superpowers. Grow your own skills as you notice yourself correcting the same thing twice. Wire MCPs last.",
      "Pair with Jesse (who wrote the process layer) and Matt (grill then spec). Aitor is the person who will tell you the stack order matters: memory, then process, then taste, then tools. Skipping to MCP without CLAUDE.md is a live system attached to an amnesiac.",
    ],
    whyThisPerson:
      "The clearest public composition of layers most dossiers treat separately. Steal the order even if you never install his personal skills.",
    collabModel:
      "Load CLAUDE.md. Invoke Superpowers for the phase. Overlay team skills. Attach MCPs for the systems the task actually needs. Self-review before human review. PR skills last.",
    reasoningStyle:
      "Generic process is not team taste. Live data is not project memory. Stack them; do not collapse them into one prompt. Correct the same miss twice, then write a skill.",
    coreLessons: [
      {
        title: "Stack four layers; do not mash them",
        insight:
          "CLAUDE.md is memory. Superpowers is process. Your skills are standards. MCPs are I/O. Each answers a different failure. One mega-prompt answers none of them well.",
      },
      {
        title: "Start with what the code cannot say",
        insight:
          "Write CLAUDE.md first. Then add process. Grow skills from repeated corrections. Wire live systems last. Most people do this backwards and repeat themselves forever.",
      },
      {
        title: "Same spine for features and bugs",
        insight:
          "Brainstorm/plan/execute or systematic-debug, then the same review and PR skills. The end of the pipeline should not be a special case.",
      },
    ],
    resources: [
      {
        name: "My agentic software development workflow",
        kind: "essay",
        url: "https://aalonso.dev/blog/2026/my-agentic-software-development-workflow/",
        note: "Primary. Four layers, feature vs bug spines, start with CLAUDE.md.",
      },
    ],
    quotes: [
      {
        text: "If skills are the know-how, MCPs are the hands and eyes.",
        source: "My agentic software development workflow",
        url: "https://aalonso.dev/blog/2026/my-agentic-software-development-workflow/",
      },
      {
        text: "If you want to start somewhere, start with CLAUDE.md. Write down the things about your project the code can't say out loud.",
        source: "My agentic software development workflow",
        url: "https://aalonso.dev/blog/2026/my-agentic-software-development-workflow/",
      },
    ],
    related: ["jesse-vincent", "matt-pocock", "dex-horthy", "kent-c-dodds"],
    website: "https://aalonso.dev",
  },
];
