import type { Engineer } from "./types";

export const gemEngineers: Engineer[] = [
  {
    slug: "dex-horthy",
    name: "Dex Horthy",
    handle: "dexhorthy",
    title: "Founder",
    company: "HumanLayer",
    previous: ["Agent builder and writer of The Outer Loop"],
    tier: "hidden-gem",
    schoolIds: ["own-the-context", "harness-loops"],
    oneLiner:
      "Wrote 12-Factor Agents after trying every framework and noticing that the founders actually shipping production agents were rolling the stack themselves.",
    superBio: [
      "Dex Horthy is the person you send to an engineer who just discovered LangGraph and wants to rewrite the company around it. He tried the plug-and-play frameworks, the minimalist smolagents, the production-grade graphs. Then he talked to a lot of YC and non-YC founders building real agents. Most of them were not using a framework. They were taking small, modular ideas and dropping them into an existing product.",
      "12-Factor Agents is the resulting manual, in the spirit of 12 Factor Apps. Natural language to tool calls. Own your prompts. Own your context window. Tools are structured outputs. Unify execution state and business state. Pause and resume with boring APIs. Contact humans with tool calls. Own your control flow. Compact errors. Small focused agents. Trigger from anywhere. The agent is a stateless reducer.",
      "He is also the connective tissue for Ralph. He was in the room when Geoffrey Huntley showed a bash loop cloning projects overnight, later ran concurrent Ralph loops on GCP VMs at a YC hackathon, and folded the simplicity into HumanLayer's orchestration: a parent agent owns the plan, shells phases to sub-agents, and a dumb checker gates the next phase. Context engineering, for Dex, is not a slogan. It is packing the window yourself because the LLM is a stateless function.",
    ],
    whyThisPerson:
      "Hidden gem with outsized influence. 12-factor-agents became the shared vocabulary for people who outgrew demos. HumanLayer is the productization of 'contact a human with a tool call.'",
    collabModel:
      "Keep the LLM focused on a 5–10 step workflow. Isolate tasks and contexts. When the model is stuck, the tool is 'ask a human,' not another agent with more tools. Outer loop is a server that can pause, resume, and receive webhooks.",
    reasoningStyle:
      "First principles over framework magic. Serialize context on purpose — YAML in XML, token budgets, pruning. Treat the agent as a reducer over a thread of events. Reliability is an engineering property, not a model property.",
    coreLessons: [
      {
        title: "Own your context window",
        insight:
          "Default chat messages are a convenience, not an optimum. You should control serialization, density, and what gets dropped.",
      },
      {
        title: "Small, focused agents",
        insight:
          "A pile of tools is not an agent. Isolate a short workflow. The magic is NL → structured intent, not an omni-bot.",
      },
      {
        title: "Contact humans with tool calls",
        insight:
          "Approval is a tool, not a sidebar. Production agents need a first-class way to pause and wait for a person.",
      },
      {
        title: "Steal factors, don't rewrite on a framework",
        insight:
          "The fastest path he sees: take modular agent ideas and put them in the product you already have.",
      },
    ],
    resources: [
      {
        name: "12-Factor Agents",
        kind: "repo",
        url: "https://github.com/humanlayer/12-factor-agents",
        note: "Read Factor 3 if you only have time for one. Then Factor 7 and 10.",
      },
      {
        name: "12-Factor Agents talk",
        kind: "talk",
        url: "https://www.youtube.com/watch?v=8kMaTybvDUw",
        note: "AI Engineer World's Fair. The NL-to-JSON slide is the whole pitch.",
      },
      {
        name: "HumanLayer",
        kind: "docs",
        url: "https://humanlayer.dev",
        note: "Product for human-in-the-loop tool calls. The Outer Loop newsletter lives here too.",
      },
    ],
    quotes: [
      {
        text: "Everything is context engineering. LLMs are stateless functions that turn inputs into outputs. To get the best outputs, you need to give them the best inputs.",
        source: "12-Factor Agents, Factor 3",
        url: "https://github.com/humanlayer/12-factor-agents",
      },
    ],
    related: [
      "geoffrey-huntley",
      "armin-ronacher",
      "simon-willison",
      "thariq-shihipar",
    ],
    twitter: "https://x.com/dexhorthy",
    github: "https://github.com/dexhorthy",
    website: "https://humanlayer.dev",
  },
  {
    slug: "geoffrey-huntley",
    name: "Geoffrey Huntley",
    handle: "GeoffreyHuntley",
    title: "Engineer, creator of the Ralph loop",
    company: "Independent / cursed",
    previous: ["Long-running Claude/Amp experiments, compiler work"],
    location: "Australia",
    tier: "hidden-gem",
    schoolIds: ["harness-loops", "own-the-context"],
    oneLiner:
      "Named the dumbest powerful idea in agentic coding: Ralph is a bash loop that starts a fresh agent every iteration and keeps score on disk.",
    superBio: [
      "Geoffrey Huntley is the reason half of Twitter now says 'just Ralph it.' In July 2025 he wrote that Ralph Wiggum — cheerful, persistent, not especially clever on any single turn — is a software engineer, and that in its purest form Ralph is a bash loop. Pipe a prompt file into a coding agent. Let it pick the next task, do it, commit, exit. Repeat with a clean context window. The filesystem and git are the memory. The trick is throwing the transcript away so context rot cannot accumulate.",
      "He is not a lab PM. He is the person who ran Claude in a loop for three months and produced cursed, a Gen-Z-keyword programming language with interpreter and LLVM compiler backends, ported across C, Rust, and Zig, for a five-figure token bill. He shows up two and a half hours late to a hackathon and then streams a loop cloning a sponsor project overnight. Dex Horthy was in that room. The meme became a methodology.",
      "Ralph works because each iteration is small enough to verify and the source of truth is not the model's self-report. Huntley's other public theme is harder: as hand-crafted commits fade, engineers who cannot become specialists with deliberate practice become unskilled operators of a loop they do not understand.",
    ],
    whyThisPerson:
      "The platonic hidden gem. No title at a frontier lab. A bash loop and a cursed compiler that forced the industry to admit orchestration theater was optional.",
    collabModel:
      "Fresh context every unit of work. Durable state in .agent/, PROMPT.md, git. One task per iteration. Tests and commits as the handshake. Overnight runs on a VM. Human writes the prompt file and the stop condition, then goes to sleep.",
    reasoningStyle:
      "Persistence over cleverness. Reset the window. Don't build a framework when a while loop will do. Mechanical translation and long-running search are where loops shine.",
    coreLessons: [
      {
        title: "Ralph is a bash loop",
        insight:
          "No orchestrator required. Restart the agent, re-read the project, do the next thing, commit, die. Repeat.",
      },
      {
        title: "Throw the context away",
        insight:
          "Long transcripts rot. The next iteration should be a new hire who can read the files. That is a feature.",
      },
      {
        title: "The loop is only as good as the agent inside it",
        insight:
          "A bloated harness works against you. Keep the prompt lean. Let the coding agent be the intelligence.",
      },
    ],
    resources: [
      {
        name: "Ralph Wiggum as a software engineer",
        kind: "essay",
        url: "https://ghuntley.com/",
        note: "Huntley's site. Look for the original Ralph writeup: Ralph is a bash loop.",
      },
      {
        name: "cursed",
        kind: "repo",
        url: "https://github.com/ghuntley/cursed",
        note: "Existence proof of a long Ralph-style run: a real language built in a loop.",
      },
    ],
    quotes: [
      {
        text: "Ralph is a technique. In its purest form, Ralph is a Bash loop.",
        source: "Original Ralph writeup, July 2025",
      },
    ],
    related: ["dex-horthy", "steve-yegge", "armin-ronacher", "lauren-tan"],
    twitter: "https://x.com/GeoffreyHuntley",
    github: "https://github.com/ghuntley",
    website: "https://ghuntley.com",
  },
  {
    slug: "jesse-vincent",
    name: "Jesse Vincent",
    handle: "obra",
    title: "Creator of Superpowers; Prime Radiant",
    company: "Prime Radiant",
    previous: [
      "Request Tracker",
      "Prophet",
      "Keyboardio",
      "Long-time open source",
    ],
    tier: "hidden-gem",
    schoolIds: ["encode-judgment", "spec-is-the-code", "verify-or-do-not-ship"],
    oneLiner:
      "The RT and keyboard guy who watched agents skip thinking, then packaged TDD, design review, and subagent-driven development as Superpowers — a skill pack that actually fires.",
    superBio: [
      "Jesse Vincent has been shipping infrastructure for humans since before most AI influencers could grep. Request Tracker. Keyboards. A career of making stubborn software that other people run for decades. In late 2025 he started extracting how he actually worked with coding agents. The result was Superpowers: not new capabilities for the model, but discipline.",
      "The agent does not jump to code. It teases out a spec and shows it in chunks a human can actually read. After sign-off it writes a plan clear enough for 'an enthusiastic junior engineer with poor taste, no judgement, no project context, and an aversion to testing.' Then subagent-driven development: tasks, review, hours of autonomy without leaving the plan. Skills trigger automatically. TDD is not a suggestion.",
      "Superpowers became one of the most installed agent skill packs in the ecosystem, accepted into Anthropic's own distribution. Harper Reed thanked 'Obra' in the 2025 codegen post. The through-line is the same as pstack with a different temperament: encode the engineering methodology so the amnesiac cannot skip the thinking.",
    ],
    whyThisPerson:
      "Hidden gem with massive install base. Superpowers is the other pole from pstack — same species, different dialect — and it comes from someone with no obligation to sell an editor.",
    collabModel:
      "Brainstorm → human-readable design chunks → implementation plan a junior could follow → subagents execute with TDD → review before merge. Skills are automatic, not slash-command theater.",
    reasoningStyle:
      "Process over model. YAGNI, DRY, red/green. Make the agent ask questions first. Plans must survive a worker with no taste. That is how you get hours of autonomy without a mess.",
    coreLessons: [
      {
        title: "Make the agent think before it types",
        insight:
          "The best results were never from a better model. They were from forcing a spec and a plan the human actually read.",
      },
      {
        title: "Write plans for a junior with no taste",
        insight:
          "If the plan requires judgment the agent does not have, it will improvise. Spell out TDD, YAGNI, and the definition of done.",
      },
      {
        title: "Skills should fire without being asked",
        insight:
          "A methodology the user has to remember to invoke will not be used at 2 a.m. Composable, auto-triggered skills are the point.",
      },
    ],
    resources: [
      {
        name: "obra/superpowers",
        kind: "repo",
        url: "https://github.com/obra/superpowers",
        note: "The skill pack. Works across Claude Code, Codex, Cursor. Start with the README's methodology, then the TDD skill.",
      },
      {
        name: "Obra",
        kind: "docs",
        url: "https://obra.dev",
        note: "Structured execution layer: decompose a goal, parallel verify, converge to a reviewed commit.",
      },
    ],
    quotes: [
      {
        text: "It puts together an implementation plan that's clear enough for an enthusiastic junior engineer with poor taste, no judgement, no project context, and an aversion to testing to follow.",
        source: "Superpowers README",
        url: "https://github.com/obra/superpowers",
      },
    ],
    related: ["lauren-tan", "harper-reed", "hamel-husain", "addy-osmani"],
    twitter: "https://x.com/obra",
    github: "https://github.com/obra",
    website: "https://blog.fsck.com",
  },
  {
    slug: "harper-reed",
    name: "Harper Reed",
    handle: "harper",
    title: "Entrepreneur; former CTO, Obama 2012",
    company: "Independent",
    previous: [
      "CTO, Obama for America 2012",
      "CTO, Threadless",
      "Modest",
    ],
    location: "Chicago",
    tier: "hidden-gem",
    schoolIds: ["spec-is-the-code", "plan-then-oneshot"],
    oneLiner:
      "Published the three-loop codegen workflow — hone a spec, plan the plan, execute one prompt at a time — and named the loneliness of single-player agents a year before Claude Tag.",
    superBio: [
      "Harper Reed's February 2025 post 'My LLM codegen workflow atm' spread because it was a complete, stealable procedure, not a vibe. Conversational model interviews you one question at a time into spec.md. Reasoning model turns that into a test-driven prompt_plan.md and a todo.md. Then Aider or Claude executes one step, tests, next step. He credited friends including Obra. Simon Willison, Martin Fowler, and Werner Vogels passed it around.",
      "The greenfield path is ceremonial on purpose. The legacy path is uglier and more honest: pack the repo with repomix, pipe it through Simon's llm CLI with templates for review, missing tests, GitHub issues. Mise tasks so the same verbs work in every repo. He is explicit about getting over his skis — the speed is the hazard — and about testing as the thing that keeps wild Aider sessions from falling off a cliff.",
      "The last third of the post is still the most interesting. He is lonely. The interfaces are single-player. Bots collide, merges are horrific. He asked the industry to make LLM coding a multiplayer game. Anthropic's Tag and Cursor's shared cloud agents are late answers to that complaint. Also: he wrote 98% of the post himself, which is a taste signal in this crowd.",
    ],
    whyThisPerson:
      "Not an AI-company employee. A builder with a public, dated, forkable workflow that still maps onto 2026 tools. The spec → plan → execute loop is now everyone's architecture.",
    collabModel:
      "Discrete loops with files as batons: spec.md, prompt_plan.md, todo.md. Human sets up boilerplate and tooling so the model does not default to the wrong stack. One prompt at a time. Tests after each. New branch for Aider.",
    reasoningStyle:
      "Interview yourself via the model. Use a reasoning model for the plan, a codegen model for the step. Keep steps small enough to review. Aggressive state tracking because speed will get you ahead of comprehension.",
    coreLessons: [
      {
        title: "Three discrete loops",
        insight:
          "Brainstorm, plan, execute. Mixing them is how you get a jumbled app and no document to check against.",
      },
      {
        title: "Save state in the repo",
        insight:
          "spec.md, prompt_plan.md, todo.md survive a dead chat. The codegen tool should tick the checklist.",
      },
      {
        title: "You will get over your skis",
        insight:
          "Planning and tests are how you notice. Speed without a double-check document is how you ski off the cliff.",
      },
      {
        title: "Single-player is a bug",
        insight:
          "He called this in 2025. If your agent workflow cannot be a team sport, it will not survive contact with a real codebase.",
      },
    ],
    resources: [
      {
        name: "My LLM codegen workflow atm",
        kind: "essay",
        url: "https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/",
        note: "Primary source. Steal the interview prompt and the TDD planning prompt.",
      },
    ],
    quotes: [
      {
        text: "tl:dr; Brainstorm spec, then plan a plan, then execute using LLM codegen. Discrete loops. Then magic.",
        source: "harper.blog, Feb 2025",
        url: "https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/",
      },
    ],
    related: ["jesse-vincent", "sean-grove", "paul-gauthier", "simon-willison"],
    twitter: "https://x.com/harper",
    website: "https://harper.blog",
    github: "https://github.com/harperreed",
  },
  {
    slug: "paul-gauthier",
    name: "Paul Gauthier",
    handle: "paulgauthier",
    title: "Creator of Aider",
    company: "Aider AI",
    previous: [
      "Founding CTO, Inktomi",
      "CTO, Groupon",
    ],
    location: "Santa Barbara",
    tier: "hidden-gem",
    schoolIds: ["verify-or-do-not-ship"],
    oneLiner:
      "Inktomi CTO who built the original terminal pair-programmer, then spent years refusing to turn it into an autonomous agent.",
    superBio: [
      "Paul Gauthier co-founded Inktomi in 1996, ran engineering through the search-engine era and Groupon's IPO, then in 2023 started Aider — a terminal pair-programming tool that made git-native AI edits the default before Claude Code existed. Forty thousand GitHub stars, SWE-Bench numbers, billions of tokens a week. The philosophy is the gem: Aider is a pair programming tool, not an agent.",
      "On Discord, when people ask how to run it autonomously, he repeats the sentence. Autonomous exploration means long delays and high token costs. Aider maps the repo with tree-sitter instead of RAG, picks an edit format per model (including unified diffs with line numbers), lints before commit, and retries against test failures. Every change is a real git commit you can revert like a junior's PR.",
      "He is the control group for the loop school. Harper used Aider as the execution engine of a spec plan. The rest of the industry raced toward unattended swarms. Gauthier kept a human in the keystroke loop and benchmarked models as if codegen were a science. If you want to know whether a new model can actually edit a repo, you still look at the Aider leaderboard.",
    ],
    whyThisPerson:
      "Hidden in the sense that Twitter moved on to agents and he kept shipping the pair-programmer. The git-first, test-retry, model-specific edit format work is in the DNA of every later CLI.",
    collabModel:
      "Human drives. Model edits. Git is the save point. Tests are the oracle. Swap models mid-session. Do not wander the repo unsupervised.",
    reasoningStyle:
      "Measure edit formats. Prefer static structure to embeddings. Keep the human as the planner. Treat each AI edit as a reviewable commit, not a conversation.",
    coreLessons: [
      {
        title: "Pair, don't wander",
        insight:
          "Autonomy feels like progress and often is just a large bill and a confused tree. Keep the human on the task selector.",
      },
      {
        title: "Git is the API",
        insight:
          "If the tool does not make a commit you can revert, you do not have a workflow. You have a paste buffer.",
      },
      {
        title: "Different models need different edit formats",
        insight:
          "He actually benchmarked this. Treating every LLM like ChatGPT-with-a-diff is how patches fail silently.",
      },
    ],
    resources: [
      {
        name: "Aider",
        kind: "repo",
        url: "https://github.com/Aider-AI/aider",
        note: "The original terminal pair programmer. Read the leaderboards even if you use something else.",
      },
    ],
    quotes: [
      {
        text: "Aider is an AI pair programming tool.",
        source: "Aider Discord, repeated whenever someone asks for autopilot",
      },
    ],
    related: ["harper-reed", "thorsten-ball", "simon-willison", "boris-cherny"],
    github: "https://github.com/paul-gauthier",
    website: "https://aider.chat",
  },
  {
    slug: "thorsten-ball",
    name: "Thorsten Ball",
    handle: "thorstenball",
    title: "Engineer, Amp",
    company: "Amp (ex-Sourcegraph)",
    previous: [
      "Sourcegraph",
      "Zed",
      "Author, Writing An Interpreter In Go",
    ],
    tier: "hidden-gem",
    schoolIds: ["verify-or-do-not-ship", "harness-loops"],
    oneLiner:
      "Wrote the books on interpreters, then a post that an agent is three tools and a loop — and now builds Amp by deleting scaffolding as models get stronger.",
    superBio: [
      "Thorsten Ball taught a generation of programmers to write interpreters and compilers by building them in Go. He worked on Sourcegraph's code intelligence, spent a stretch at Zed, then went back to Sourcegraph to lead Amp, the agentic coding product that later stood up as its own company. Register Spill, his newsletter, is where he thinks in public.",
      "In early 2025, 'How to Build an Agent: The Emperor Has No Clothes' showed that read-file, list-directory, and ripgrep were enough for a large model to answer codebase questions — no vector index, no apply model. The post landed just before Claude Code and became a catalyst. Amp's product philosophy follows: as models improve, tab completion, slash-command folklore, and sub-agent templates become noise that burns tokens. Cut them. Give the frontier model a high budget and a tight feedback loop.",
      "He is not a pure accelerationist. He agrees that heavy AI use can erode grasp of your own code, and draws a line: UI chrome can be generated; core indexing and traffic paths still need humans who understand them. Amp's Agents and Orbs — ephemeral VMs that clone, work, and report back — are his version of Lauren's cloud factory, with less playbook religion and more 'the model is the product.'",
    ],
    whyThisPerson:
      "The engineer-writer who demystified agents, then bet a company on the demystification. Required reading if you think you need RAG to code.",
    collabModel:
      "Minimal harness, strong model, fast deploy, tight feedback. Cloud orbs for unsupervised runs. Humans keep ownership of the load-bearing core.",
    reasoningStyle:
      "Delete ceremony. If three tools suffice, the sixth framework is ego. Feedback loops beat orchestration graphs. Stay romantic about programming even while talking to an alien that edits your tree.",
    coreLessons: [
      {
        title: "The emperor has no clothes",
        insight:
          "An agent is a model with tools in a loop. You do not need a vector database to get started. You need grep.",
      },
      {
        title: "Scaffolding becomes noise",
        insight:
          "As models strengthen, your custom slash commands and sub-agent templates may cost more than they return. Cut.",
      },
      {
        title: "Know which code you still have to understand",
        insight:
          "Generated CSS is one kind of risk. Generated indexing and persistence is another. Draw the line on purpose.",
      },
    ],
    resources: [
      {
        name: "Amp",
        kind: "docs",
        url: "https://ampcode.com",
        note: "The product. Useful even if you never switch: watch what they delete.",
      },
      {
        name: "Writing An Interpreter In Go",
        kind: "book",
        url: "https://interpreterbook.com",
        note: "Why his agent takes make sense: he already thinks in evaluators and loops.",
      },
    ],
    quotes: [
      {
        text: "Being able to talk to an alien intelligence that edits your code changes everything.",
        source: "Changelog podcast, Agentic coding changes everything",
      },
    ],
    related: ["boris-cherny", "steve-yegge", "paul-gauthier", "armin-ronacher"],
    twitter: "https://x.com/thorstenball",
    website: "https://thorstenball.com",
    github: "https://github.com/thorstenball",
  },
  {
    slug: "steve-yegge",
    name: "Steve Yegge",
    handle: "steve_yegge",
    title: "Creator of Beads and Gas Town",
    company: "Independent (ex-Sourcegraph, Amazon, Google)",
    previous: [
      "Sourcegraph",
      "Google",
      "Amazon",
    ],
    tier: "hidden-gem",
    schoolIds: ["own-the-context", "harness-loops"],
    oneLiner:
      "The legendary blogger who got mad that agents forget work, built a git-backed issue graph in fifteen minutes, then built a town on top of it.",
    superBio: [
      "Steve Yegge has been a public software opinion for decades — Amazon, Google, then Sourcegraph during the Amp years. In 2025 he tried to build an orchestrator, threw it out, tried again, and accidentally extracted Beads: a git-backed, dependency-aware issue tracker for agents. Claude wanted SQLite. He wanted git. They compromised on both. He says the design took about fifteen minutes of frustration.",
      "Beads is the memory upgrade. Hash IDs so multi-agent branches do not collide. bd ready, bd claim, bd remember, bd prime. AGENTS.md updated on init. Gas Town is the sequel: a workspace manager that slings beads to workers in git worktrees, with roles that sound like a cartoon (Mayor, Crew, Deacon, Dogs) because Yegge cannot help himself. The fundamental operation is handoff — persist state, restart the session, do not lose the thread.",
      "Under the bit is a serious claim: markdown plans do not survive contact with parallel agents. You need a data plane. If Lauren encodes judgment in skills, Yegge encodes work in a graph that git can merge.",
    ],
    whyThisPerson:
      "Famous person, hidden artifact. Everyone knows the essays. Fewer people have put Beads in a repo, which is the actual contribution to AI collab.",
    collabModel:
      "Issues as beads in git. Agents claim ready work. Handoff restarts a session with durable state. Gas Town coordinates many workers without pretending chat history is a database.",
    reasoningStyle:
      "If it is not in git, it did not happen. Give agents structured memory with dependencies, not a novel in a markdown file. Orchestrators fail; data planes remain.",
    coreLessons: [
      {
        title: "Markdown plans are not a data plane",
        insight:
          "Parallel agents need IDs, dependencies, and mergeable state. A checklist in chat is how work vanishes.",
      },
      {
        title: "Handoff is the primitive",
        insight:
          "Sessions die. The unit of design is 'restart without losing the job,' not 'have a longer context window.'",
      },
      {
        title: "Put memory where git can merge it",
        insight:
          "Hash IDs, one issue per line, branchable database. Multi-agent work is a distributed systems problem.",
      },
    ],
    resources: [
      {
        name: "steveyegge/beads",
        kind: "repo",
        url: "https://github.com/steveyegge/beads",
        note: "Start with bd init and bd prime. This is the one to install in a real repo.",
      },
      {
        name: "Gas Town",
        kind: "repo",
        url: "https://github.com/steveyegge/gastown",
        note: "The orchestrator sequel. Only makes sense after Beads clicks.",
      },
      {
        name: "Welcome to Gas Town",
        kind: "essay",
        url: "https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04",
        note: "The narrative of failed orchestrators and why Beads survived.",
      },
    ],
    quotes: [
      {
        text: "I told Claude in frustration to put all my work in a lightweight issue tracker. I wanted Git for it. Claude wanted SQLite. We compromised on both, and Beads was born, in about 15 minutes of mad design.",
        source: "Welcome to Gas Town",
        url: "https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04",
      },
    ],
    related: ["geoffrey-huntley", "dex-horthy", "thorsten-ball", "lauren-tan"],
    twitter: "https://x.com/steve_yegge",
    github: "https://github.com/steveyegge",
  },
  {
    slug: "simon-willison",
    name: "Simon Willison",
    handle: "simonw",
    title: "Creator of Datasette and llm CLI",
    company: "Independent",
    previous: ["Django co-creator", "Eventbrite", "The Guardian"],
    location: "United Kingdom",
    tier: "hidden-gem",
    schoolIds: ["own-the-context", "verify-or-do-not-ship"],
    oneLiner:
      "The best primary source in the field: defines agentic engineering, hosts the lab people, and ships the llm CLI the rest of us pipe repos through.",
    superBio: [
      "Simon Willison co-created Django, then spent years making Datasette and writing the most useful blog in software. When LLMs arrived he did not become a guru. He became a laboratory notebook. The llm CLI, plugin ecosystem, and daily posts are how a large fraction of this directory's ideas traveled. Harper's workflow pipes through llm. The Cat and Thariq fireside exists as a readable artifact because Simon hosted it and wrote it up.",
      "His working definition is now the default: an agent is software that runs tools in a loop to achieve a goal. Code execution is what makes coding agents real. He is careful about vibe coding — Karpathy's original meaning, unreviewed prototype code, not 'any LLM-touched line.' His Agentic Engineering Patterns guide is the opposite of a course: chapters he will keep rewriting, with a bias toward patterns that will still be true when the tools change.",
      "The deeper lesson he repeats: LLMs do not learn from mistakes unless you update the instructions and the harness. Hoard things you know how to do. AI should help us produce better code, not just more. Writing code is cheap now; that is a statement about bottlenecks, not about the death of engineering.",
    ],
    whyThisPerson:
      "If you only follow one independent engineer, it is him. He is the citation graph. Also a hidden gem in the 'not employed by a model lab' sense while remaining closer to the source than most employees.",
    collabModel:
      "Small tools, composable CLI, git, tests first. Agents that can run code. Document the prompt. Update the harness when the model fails. Prefer patterns over products.",
    reasoningStyle:
      "Define terms. Distinguish vibe coding from agentic engineering. Collect patterns that survive tool churn. Show your work on the blog the same day.",
    coreLessons: [
      {
        title: "Agents run tools in a loop toward a goal",
        insight:
          "If it cannot execute, it is a chatbot. Code execution is the capability that makes the rest of this directory possible.",
      },
      {
        title: "Vibe coding is unreviewed on purpose",
        insight:
          "Do not let the term eat all LLM-assisted work. We need a word for prototype-quality output. Keep it.",
      },
      {
        title: "Update the harness, not the vibes",
        insight:
          "Models do not learn from last week's failure. You do, if you write it into instructions and tools.",
      },
    ],
    resources: [
      {
        name: "Agentic Engineering Patterns",
        kind: "essay",
        url: "https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/",
        note: "Start with definitions, then testing chapters. Living document.",
      },
      {
        name: "llm CLI",
        kind: "repo",
        url: "https://github.com/simonw/llm",
        note: "The unix pipe for models. Harper's mise tasks are a thin wrapper around this idea.",
      },
      {
        name: "Datasette",
        kind: "repo",
        url: "https://github.com/simonw/datasette",
        note: "How he actually thinks: publish data, inspect it, do not hide the context.",
      },
    ],
    quotes: [
      {
        text: "LLMs don't learn from their past mistakes, but coding agents can, provided we deliberately update our instructions and tool harnesses to account for what we learn along the way.",
        source: "What is agentic engineering?",
        url: "https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/",
      },
    ],
    related: ["harper-reed", "cat-wu", "paul-gauthier", "armin-ronacher"],
    twitter: "https://x.com/simonw",
    website: "https://simonwillison.net",
    github: "https://github.com/simonw",
  },
  {
    slug: "armin-ronacher",
    name: "Armin Ronacher",
    handle: "mitsuhiko",
    title: "Founder, Earendil; creator of Flask and Pi",
    company: "Earendil",
    previous: ["Sentry (10 years)", "Flask", "Jinja2", "Click", "Werkzeug"],
    tier: "hidden-gem",
    schoolIds: ["harness-loops", "verify-or-do-not-ship"],
    oneLiner:
      "Flask's author, now the most serious skeptic inside the loop school — loops work, they also teach models to fear exceptions and juniors to argue for slop.",
    superBio: [
      "Armin Ronacher created Flask and a stack of Python infrastructure, then spent a decade at Sentry thinking about failures that propagate. At Earendil he builds Pi, a cautious coding-agent harness, with Cristina Poncela. He is not anti-agent. He is anti-abdication. 'The Coming Loop' (June 2026) is the essay this directory would be dishonest without.",
      "He quotes Boris: the job is to write loops. Then he reports that for code he cares about, harness-operated loops have not worked. Models produce defensive, locally reasoned code, duplicate abstractions, and handle errors that should be unrepresentable. Karpathy's line about models being mortally terrified of exceptions is, for Armin, an architectural defect that loops amplify. Each iteration adds a local defense. The system looks robust and becomes unreadable.",
      "He is specific about where loops already win: ports (he ported MiniJinja to Go this way), performance search, security scanning, research. Artifacts without a long shelf life. Mechanical translation with a binary check. He is also specific about why you cannot opt out: attackers loop, so defenders will. Maintainers drown in AI-generated reports. Competitively, five people will do what fifty did. The question is how judgment, invariants, and human supervision survive a future he already resents and already believes is coming.",
    ],
    whyThisPerson:
      "The gem is the friction. Everyone else in this list teaches you how to go faster. Armin teaches you what you lose, in enough technical detail that you can put it in a stop condition.",
    collabModel:
      "Stay in the agent loop with a human who can explain the system without asking a model. Use harness loops for ports, probes, and throwaway search. Increase friction around taste. Make codebases agent-legible: clear modules, no hidden magic, failures that propagate.",
    reasoningStyle:
      "Invariants over fallbacks. Make bad states unrepresentable. Do not let the harness decide 'done' unless you like being a messenger. Caution as an engineering input, not a personality trait.",
    coreLessons: [
      {
        title: "Loops amplify local reasoning",
        insight:
          "A model that patches the exception in front of it, run overnight, will bury your invariants in defensive layers.",
      },
      {
        title: "Friction is your judgment",
        insight:
          "Some friction should be removed. Some should be increased so a human feels the cost of a design and the agent cannot feel it for you.",
      },
      {
        title: "You cannot fully opt out",
        insight:
          "Attackers and competitors will loop. The adult move is bounded loops with supervision, not a purity test.",
      },
      {
        title: "Agent-legible codebases",
        insight:
          "Clear boundaries, known patterns, no hidden magic. If the agent cannot see the invariant, it cannot respect it.",
      },
    ],
    resources: [
      {
        name: "The Coming Loop",
        kind: "essay",
        url: "https://lucumr.pocoo.org/2026/6/23/the-coming-loop/",
        note: "Required. Read after Lauren and Boris so the argument has teeth.",
      },
      {
        name: "The Friction Is Your Judgment",
        kind: "talk",
        url: "https://mitsuhiko.github.io/talks/ai-engineer-talk/",
        note: "With Cristina Poncela. Agent-legible codebases, swallowed errors, raised baselines.",
      },
      {
        name: "Pi",
        kind: "repo",
        url: "https://github.com/badlogic/pi-mono",
        note: "The cautious harness. Watch what they refuse to add.",
      },
    ],
    quotes: [
      {
        text: "In the harness operated loop I'm not sure what my role even is. Even the 'done' signal loses all meaning and just becomes communicated to yet another machine that judges.",
        source: "The Coming Loop",
        url: "https://lucumr.pocoo.org/2026/6/23/the-coming-loop/",
      },
    ],
    related: ["boris-cherny", "geoffrey-huntley", "lauren-tan", "thorsten-ball"],
    twitter: "https://x.com/mitsuhiko",
    website: "https://lucumr.pocoo.org",
    github: "https://github.com/mitsuhiko",
  },
  {
    slug: "hamel-husain",
    name: "Hamel Husain",
    handle: "HamelHusain",
    title: "Founder, Parlance Labs",
    company: "Parlance Labs",
    previous: [
      "GitHub",
      "Airbnb",
      "Data science leadership",
    ],
    location: "Portland",
    tier: "hidden-gem",
    schoolIds: ["encode-judgment", "verify-or-do-not-ship"],
    oneLiner:
      "The evals guy: look at the errors first, write judges from real failure modes, and ship skills that make coding agents review like you would.",
    superBio: [
      "Hamel Husain taught a large fraction of working ML engineers how not to fool themselves. GitHub, Airbnb, then Parlance Labs and the 'AI Evals for Engineers & PMs' course with Shreya Shankar. His public doctrine is almost rude in its simplicity: stop chasing generic metrics. Do error analysis. Read the traces. Then write binary checks and LLM-as-judge rubrics that target the failures you actually saw.",
      "In the coding-agent era he did the same thing the pstack people did, but for evaluation. evals-skills accompanies the course. claude-review-loop is a plugin that runs an automated review loop with Codex. He publishes the unglamorous pieces — how to look at data, how to make a judge that is not a vibe — that every factory in this directory implicitly depends on.",
      "If Lauren encodes engineering taste and Boris encodes a personal workflow, Hamel encodes the scientific method for 'is this any good?' Without that, 1,000 PRs a month is a throughput metric, not a quality system.",
    ],
    whyThisPerson:
      "Hidden gem relative to Twitter coding celebrities. Every serious agent team eventually rediscovers his advice. Install the skills before you trust the swarm.",
    collabModel:
      "Humans read failures. Evals are products. Agents can run review loops, but the rubric comes from error analysis, not a generic 'be thorough' prompt.",
    reasoningStyle:
      "Error analysis before metrics. Domain-specific binary tests. Judges aligned to observed failure modes. Iterate the eval as you iterate the system.",
    coreLessons: [
      {
        title: "Error analysis first",
        insight:
          "Generic win-rate dashboards hide the only information that would improve the agent. Open the traces.",
      },
      {
        title: "Write evals from failures you have seen",
        insight:
          "A judge that does not mention your actual bugs is theater. Custom binary checks beat borrowed benchmarks.",
      },
      {
        title: "Review loops need a rubric",
        insight:
          "Automated code review is another agent. Without a failure-derived rubric it will nits-pick style and miss the incident.",
      },
    ],
    resources: [
      {
        name: "hamelsmu/evals-skills",
        kind: "repo",
        url: "https://github.com/hamelsmu/evals-skills",
        note: "Skills for AI evals. Pair with the course if you run agents in production.",
      },
      {
        name: "claude-review-loop",
        kind: "plugin",
        url: "https://github.com/hamelsmu/claude-review-loop",
        note: "Automated review loop with Codex. A concrete harness, not a slide.",
      },
      {
        name: "hamel.dev",
        kind: "essay",
        url: "https://hamel.dev",
        note: "Primary writing. Search for evals, error analysis, and LLM judges.",
      },
    ],
    quotes: [],
    related: ["sean-grove", "lauren-tan", "jesse-vincent", "addy-osmani"],
    twitter: "https://x.com/HamelHusain",
    website: "https://hamel.dev",
    github: "https://github.com/hamelsmu",
  },
];
