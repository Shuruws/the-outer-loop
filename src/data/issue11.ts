import type { Engineer } from "./types";

export const issue11Engineers: Engineer[] = [
  {
    slug: "raymond-weitekamp",
    name: "Raymond Weitekamp",
    handle: "raw_works",
    title: "Founder; OpenProse",
    company: "Polyspectra / OpenProse",
    previous: ["Founder, Polyspectra"],
    location: "Berkeley, CA",
    tier: "hidden-gem",
    schoolIds: ["spec-is-the-code", "own-the-context", "harness-loops"],
    oneLiner:
      "The person who treats a coding agent as a VM: declare the world you want in Markdown contracts, recurse on handles instead of stuffing the repo into the window, and mine a golden session into a versioned .prose.md program.",
    superBio: [
      "Raymond Weitekamp builds recursive coding agents the way other people build CLIs. The AI Engineer talk and recursivecodingagents.com are the thesis: Recursive Language Models are the new reasoning models; recursive coding agents are the new coding agents. Do not copy the whole prompt or the whole repo into root context. Start from a handle — a path, a prompt file, a directory — and let the model decide terminal vs nonterminal. Nonterminal handles spawn child handles and call the same contract again. Workers inspect only their assigned files. Aggregation cites worker evidence. That is Dex's small-agent rule as a language.",
      "OpenProse is the stealable artifact. Standing AI work declared as *.prose.md: an ideal world state, like Terraform pointed at agents. You say what must stay true; the session works out the model work. Optional ProseScript when order actually matters. The skill installs into Claude Code, Codex, Amp, OpenCode — the coding agent is the VM; there is no separate binary. Forme wires responsibilities by matching ### Requires to ### Maintains. Reactor is the deterministic runtime: world-model on disk, memoized sessions in a DAG, content-addressed receipts. He mines golden Claude/Codex/Pi sessions into versioned workflows with phases, gates, and validation evidence so the good run is not trapped in chat history.",
      "The personal craft is in the side repos and RAW.works. ypi: one rlm_query tool, one rlm_map fanout, per-child jj workspaces. unix-rlm: the whole Linux filesystem as the sandbox. Auto-Pocock: a headless prose program that incepts Matt Pocock's skill sequence from a feature brief. Library vs lab StudyBench: agents learn more from docs plus a runnable package than from either alone. Pair with Sean Grove (spec is the code) and Dex (own the window). Raymond is the person who will version the session you just had.",
    ],
    whyThisPerson:
      "Primary RLM-to-coding-agent dump plus a language you can install tonight. Recursion-on-handles and 'golden session becomes a program' are stealable even if you never adopt the full OpenProse syntax.",
    collabModel:
      "Declare desired world state in Markdown. Recurse; do not dump. Subagents get handles, not the universe. Deterministic wiring where contracts match. Mine a good transcript into a file the next agent can run.",
    reasoningStyle:
      "The session is a VM. Context is a handle. Desired state beats a script of hopes. Skills can be declared in the program so the agent cannot 'forget' to use TDD.",
    coreLessons: [
      {
        title: "Recurse on handles, do not stuff the window",
        insight:
          "Root does not read the whole prompt or the whole tree. Slice into child handles, inspect locally, cite evidence on the way back up. That is how a 200k window survives a monorepo.",
      },
      {
        title: "Declare the world, reconcile toward it",
        insight:
          "SQL, Terraform, a thermostat. *.prose.md says what must stay true. The agent supplies the how. Scripts of 'then do this' rot; contracts get better as models improve.",
      },
      {
        title: "A golden session is source code",
        insight:
          "Chat history is where workflows go to die. Mine the good Claude/Codex/Pi run into a versioned program with gates. Rerun it. Review it. Stop re-prompting the same movie.",
      },
    ],
    resources: [
      {
        name: "Recursive Coding Agents",
        kind: "talk",
        url: "https://recursivecodingagents.com/",
        note: "Primary. RLM thesis, handle recursion, OpenProse examples.",
      },
      {
        name: "openprose/prose",
        kind: "repo",
        url: "https://github.com/openprose/prose",
        note: "Language, skill, Reactor, 50+ examples. npx skills add openprose/prose.",
      },
      {
        name: "OpenProse guest post",
        kind: "essay",
        url: "https://www.turingpost.com/p/openprose-a-language-for-reliable-agents",
        note: "Workflows trapped in chat history vs versioned .prose.md programs.",
      },
      {
        name: "ypi",
        kind: "repo",
        url: "https://github.com/rawwerks/ypi",
        note: "Recursive coding agent on Pi. Isolated jj workspaces per child.",
      },
    ],
    quotes: [
      {
        text: "You say what must stay true, and the system works out how much model work it takes to keep it that way.",
        source: "openprose/prose README",
        url: "https://github.com/openprose/prose",
      },
    ],
    related: ["sean-grove", "dex-horthy", "mario-zechner", "jesse-vincent"],
    twitter: "https://x.com/raw_works",
    github: "https://github.com/rawwerks",
    website: "https://raw.works",
  },
  {
    slug: "alistair-gray",
    name: "Alistair Gray",
    handle: "ajgray",
    title: "Software engineer, Leverage team",
    company: "Stripe",
    previous: [],
    location: "New York",
    tier: "big-tech",
    schoolIds: ["harness-loops", "verify-or-do-not-ship", "encode-judgment"],
    oneLiner:
      "Stripe's Minions author: unattended one-shots on 10-second devboxes, a goose fork woven through deterministic blueprints, Toolshed MCP, and at most two CI rounds — if it's good for humans, it's good for LLMs.",
    superBio: [
      "Alistair Gray writes the internal products Stripes use to supercharge productivity. The two-part Stripe.dev series is the most complete public factory dump from a payments-scale monorepo. Minions are fully unattended. A Slack thread or a flaky-test ticket becomes a PR that already passed CI. Humans review; they do not write the code. A thousand-plus merges a week, later 1,300, containing no human-written lines. Stripe's stack is the reason they built it: hundreds of millions of lines, Ruby with Sorbet, homegrown libraries models have never seen, and code that moves more than a trillion dollars a year. Vibe-coding a greenfield app is a different sport.",
      "The substrate is human DX that predated agents. Devboxes are cattle EC2: isolated from prod and the internet, pre-warmed so a fresh master clone with caches and services is ready in ten seconds. Engineers already ran one box per task. Agents slot in. No permission prompts — blast radius is the box. The harness is an internal fork of Block's Goose, tuned for unattended runs rather than shoulder-surfing. The unique primitive is a blueprint: a state machine that interleaves agent nodes (implement, fix CI) with deterministic nodes (run linters, push). 'Putting LLMs into contained boxes' compounds. Rules are almost never global; Cursor-format files attach as the agent walks subdirectories, then sync to Claude Code so three agents share one guidance set.",
      "Toolshed is the company MCP: nearly 500 tools, curated subsets per agent, security so a minion cannot go destructive. Feedback shifts left: local lint in under five seconds on push, then at most two CI rounds against three million tests, autofixes applied, then the human. Pair with Luke Alvoeiro (Goose origin) and Zach Bruggeman (Inspect's toolbox). Alistair is the person who will tell you the factory was a decade of human developer productivity that suddenly had a new tenant.",
    ],
    whyThisPerson:
      "Primary engineering posts, not a podcast paraphrase. Blueprints as deterministic+agentic state machines and subdirectory-scoped rules are stealable even if you never see a Stripe devbox.",
    collabModel:
      "Kick off from Slack, ticket, or flag UI. Isolated hot box. Blueprint runs agent nodes and code nodes. Hydrate MCP from links before start. Local lint, two CI tries, human review. Parallel minions, one box each.",
    reasoningStyle:
      "Unattended means you cannot rely on interruptibility. Encode the steps you can anticipate in code. Give the model a small tool box. Shift every check as far left as the human IDE already did.",
    coreLessons: [
      {
        title: "If it's good for humans, it's good for LLMs",
        insight:
          "Remote boxes, fast lint, scoped rules, isolated QA. Stripe did not invent those for agents. Agents inherited a decade of DX. Build the human environment first.",
      },
      {
        title: "Blueprints, not infinite ReAct",
        insight:
          "Always-lint and always-push are code, not hopes. Agent nodes get latitude inside a state machine. Contained boxes beat a smarter prompt at a trillion-dollar blast radius.",
      },
      {
        title: "Two CI rounds, then a human",
        insight:
          "Diminishing returns on letting the model grind the full suite. Local lint first. One repair pass. Then attention, which is the actual scarce resource.",
      },
    ],
    resources: [
      {
        name: "Minions, part 1",
        kind: "essay",
        url: "https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents",
        note: "DX: Slack kickoff, unattended one-shot, why Stripe built in-house.",
      },
      {
        name: "Minions, part 2",
        kind: "essay",
        url: "https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2",
        note: "Devboxes, Goose fork, blueprints, Toolshed, shift-left CI policy.",
      },
    ],
    quotes: [
      {
        text: "Minions use the same developer tooling that equally enables Stripe’s human engineers to effectively operate on our scale: if it’s good for humans, it’s good for LLMs, too.",
        source: "Minions part 1, Stripe.dev",
        url: "https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents",
      },
    ],
    related: ["steve-kaliski", "luke-alvoeiro", "zach-bruggeman", "ryan-cooke"],
    github: "https://github.com/alistairgray42",
    website: "https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents",
  },
  {
    slug: "steve-kaliski",
    name: "Steve Kaliski",
    handle: "stevekaliski",
    title: "Software engineer; AI, agents, and commerce",
    company: "Stripe",
    previous: ["Developer tools and payments infrastructure, Stripe"],
    location: "New York",
    tier: "big-tech",
    schoolIds: ["harness-loops", "plan-then-oneshot", "verify-or-do-not-ship"],
    oneLiner:
      "The Stripe engineer who demos Minions as a Slack emoji: one-shot the PR, review the thousand-a-week firehose, and let non-engineers ship because the box was already built for humans.",
    superBio: [
      "Steve Kaliski has spent six-plus years on Stripe developer tools and now talks about agents and commerce in public. Alistair wrote the architecture. Steve is the operator-facing dump: Lenny's podcast, the YouTube 'Building autonomous coding agents at Stripe' talk. React in Slack, land a PR. No babysitting in between. That is the product of attention scarcity — the same constraint Luke named at Factory — applied inside a company that already gave every engineer a herd of 10-second devboxes.",
      "The numbers are the design constraint, not a flex. About 1,300 minion PRs merge each week with no human-written code. Review is the remaining human job, and it has to scale or the factory clogs. Third-party tools stay for attended coding (Cursor, Claude Code). Minions exist because unattended work on a 275-million-line monorepo is a different category: you cannot look over its shoulder, so the environment, not the prompt, has to be the supervisor. Non-engineers at Stripe ship through the same door. If the paved path is real, you do not need a staff engineer to start the run.",
      "Pair with Alistair (blueprints), Cat Wu (org-level Claude Tag), and Ryan Carson (solo founder reviewing video). Steve is the person who will show you the emoji, not the state machine.",
    ],
    whyThisPerson:
      "The lived Minions workflow: Slack as the IDE, review as the bottleneck, unattended vs attended as a fork. Completes Alistair's posts the way Quinn completes Beyang.",
    collabModel:
      "Emoji or thread in Slack. Hot isolated box. One-shot to a CI-green PR. Human opens and requests review. Parallel minions for on-call piles. Attended tools for the work you still want to steer.",
    reasoningStyle:
      "Attention is the scarce input. Unattended agents only work if the human environment already isolated, warmed, and tested the change. Measure in merged PRs with empty human diffs, then invest in review UX.",
    coreLessons: [
      {
        title: "Unattended is a different product",
        insight:
          "Cursor is for looking over a shoulder. Minions cannot prompt you mid-run. Design for no interrupt, or you will keep a human in the inner loop and lose the parallelization.",
      },
      {
        title: "Slack is a valid IDE",
        insight:
          "The thread already has the bug, the links, the decision. Tag the bot there. Hydrate context from the conversation instead of pasting it into a new chat.",
      },
      {
        title: "Review is the factory's throttle",
        insight:
          "A thousand agent PRs a week fail if humans cannot scan them. Invest in the review surface the same way you invested in the box.",
      },
    ],
    resources: [
      {
        name: "How Stripe built Minions (Lenny's)",
        kind: "talk",
        url: "https://www.lennysnewsletter.com/p/how-stripe-built-minionsai-coding",
        note: "Steve's demo: Slack, 1,300 PRs/week, non-engineers, cloud boxes.",
      },
      {
        name: "Building autonomous coding agents at Stripe",
        kind: "talk",
        url: "https://www.youtube.com/watch?v=WW-549L6L50",
        note: "Devbox pool, one-shot loop, 275M-line monorepo context.",
      },
    ],
    quotes: [
      {
        text: "Stripers don't write code on their laptop; they write code on remote developer environments … typically we use like one per branch or per task, so you can parallelize between them. They're ready in less than 10 seconds.",
        source: "Building autonomous coding agents at Stripe",
        url: "https://www.youtube.com/watch?v=WW-549L6L50",
      },
    ],
    related: ["alistair-gray", "cat-wu", "zach-bruggeman", "luke-alvoeiro"],
    twitter: "https://x.com/stevekaliski",
    github: "https://github.com/stevekaliski-stripe",
    website: "https://www.stevekaliski.com",
  },
  {
    slug: "nick-nisi",
    name: "Nick Nisi",
    handle: "nicknisi",
    title: "Staff engineer / engineering manager, developer experience",
    company: "WorkOS",
    previous: ["Co-host, JS Party", "NebraskaJS / TypeScript community"],
    tier: "hidden-gem",
    schoolIds: ["encode-judgment", "harness-loops", "spec-is-the-code"],
    oneLiner:
      "WorkOS DX lead who stopped being the bottleneck: a spine repo of manifests and golden principles, six agents who cannot do each other's jobs, and a TypeScript while-loop so the LLM never skips the verifier.",
    superBio: [
      "Nick Nisi maintains more than twenty WorkOS open-source repos and was extremely good at steering one agent. That was the failure. Ten minutes of orientation per session. The writer could not test its own work. Instructions decayed by token 50,000. 'Managing agents is like managing 50 interns. You're judged on their productivity, not yours.' Case is the spine repo that owns none of the application code and all of the cross-cutting knowledge: projects.json, 18 golden principles (scripted ones you cannot argue with grep), playbooks, and task files whose first five lines survive compaction.",
      "Six agents, six context windows. Orchestrator dispatches and never writes code. Implementer commits WIP and cannot open PRs. Verifier runs Playwright and cannot edit. Reviewer grades against golden principles. Closer files the PR. Retrospective proposes harness patches, not product patches. They talk through the task file plus JSON result blocks — no 'I think the tests passed.' The first pipeline was a SKILL.md that told the LLM to advance phases. It skipped the verifier, retried four times past the cap, and re-entered the wrong state after an interrupt. The fix: a TypeScript while/switch. The model still writes code inside a phase. Transitions are if/else. 'When agents struggle, fix the harness.' 'The harness is the product. The code is the output.'",
      "Ideation is the other half: ramble (often by voice) until a 95/100 confidence contract exists, then specs with playgrounds and check commands, then /execute-spec in a fresh session. The AIE workshop with Zack Proser packaged the lifestyle: Handy on-device voice, /goal vs /loop, hooks that lint on every change, /schedule that keeps running when the laptop is closed. Pair with Kyle (don't let the LLM own flow control) and Dex (intern fleet). Nick is the DX engineer who encoded his own former job.",
    ],
    whyThisPerson:
      "The densest 'I was the middleman' confession in this file, plus a working six-agent spine and the lesson that SKILL.md must not be the state machine.",
    collabModel:
      "Dump a task into the spine. Deterministic pipeline advances phases. Fresh context per role. Evidence in JSON or it did not happen. Ideation artifacts before execute-spec. Voice in, hooks on every edit.",
    reasoningStyle:
      "Humans steer, agents execute. If you are writing the code, the harness is wrong. Instructions decay; grep and TypeScript do not. Put the mission in the first five lines of the task file.",
    coreLessons: [
      {
        title: "Do not let the LLM own flow control",
        insight:
          "A SKILL.md that says 'now verify' will skip verify. A while/switch will not. Use the model inside a phase. Encode the phase graph in code.",
      },
      {
        title: "The writer cannot grade the exam",
        insight:
          "Fresh context for verify and review. The implementer is not allowed to open the PR. Constraints are the feature.",
      },
      {
        title: "The harness is the product",
        insight:
          "Failures are missing playbooks, unenforced conventions, orientation you keep repeating. Patch the spine. The application code is output.",
      },
    ],
    resources: [
      {
        name: "Case Statement: Building a Harness",
        kind: "essay",
        url: "https://nicknisi.com/posts/case-statement/",
        note: "Primary. Spine repo, six agents, TypeScript pipeline, golden principles.",
      },
      {
        name: "Ideation",
        kind: "essay",
        url: "https://nicknisi.com/posts/ideation/",
        note: "Confidence-scored contracts, specs with feedback loops, execute-spec.",
      },
      {
        name: "Ideation plugin",
        kind: "plugin",
        url: "https://github.com/nicknisi/claude-plugins",
        note: "/plugin marketplace add nicknisi/claude-plugins",
      },
      {
        name: "Lifestyles of the AI-Native workshop",
        kind: "repo",
        url: "https://github.com/workos/aie-ai-native-workshop",
        note: "Voice, /goal, /loop, gates, /schedule. With Zack Proser.",
      },
    ],
    quotes: [
      {
        text: "The harness is the product. The code is the output.",
        source: "Case Statement: Building a Harness",
        url: "https://nicknisi.com/posts/case-statement/",
      },
      {
        text: "Instructions decay, enforcement persists. Agents forget instructions over long sessions. Pipeline gates and linters don’t forget.",
        source: "Case Statement: Building a Harness",
        url: "https://nicknisi.com/posts/case-statement/",
      },
    ],
    related: ["kyle-mistele", "dex-horthy", "jesse-vincent", "ryan-cooke"],
    twitter: "https://x.com/nicknisi",
    github: "https://github.com/nicknisi",
    website: "https://nicknisi.com",
  },
];
