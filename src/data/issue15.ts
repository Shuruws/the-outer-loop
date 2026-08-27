import type { Engineer } from "./types";

export const issue15Engineers: Engineer[] = [
  {
    slug: "nicholas-carlini",
    name: "Nicholas Carlini",
    handle: "carlini",
    title: "Research scientist, Safeguards",
    company: "Anthropic",
    previous: [
      "Research scientist, Google DeepMind",
      "Research scientist, Google Brain",
      "Ph.D., UC Berkeley (David Wagner)",
    ],
    location: "United States",
    tier: "lab",
    schoolIds: ["harness-loops", "own-the-context", "verify-or-do-not-ship"],
    oneLiner:
      "The Anthropic safeguards researcher who walked away from 16 parallel Claudes for two weeks and published the real product: a test harness so good the agents could orient themselves without him.",
    superBio: [
      "Nicholas Carlini is not on the Claude Code product team. He is the adversarial-ML researcher who spent seven years at Google Brain and DeepMind finding ways models fail, then joined Anthropic Safeguards. In February 2026 he published Building a C compiler with a team of parallel Claudes: 16 Opus 4.6 instances, ~2,000 Claude Code sessions, $20,000, a 100,000-line Rust C compiler that builds Linux 6.9 on x86, ARM, and RISC-V, passes most of the GCC torture suite, and compiles Doom. Treat the counts as the design constraint he optimized for, not a KPI. The compiler repo is explicit: except for one human paragraph, Claude wrote everything. He does not recommend you run it.",
      "The steal is the environment, not the compiler. The loop is eight lines of bash — Ralph-shaped, run in a container, forever. No orchestration agent. Each Claude clones a shared git repo inside Docker, claims a task by writing a lock file under current_tasks/, pushes, unlocks. Git's merge is the mutex. Merge conflicts are frequent; Claude resolves them. Specialists appear because he asked: one coalesces duplicates, one speeds the compiler, one critiques the Rust, one writes docs. When 16 agents all slammed into the same Linux kernel bug, parallelism died until he built a GCC oracle: compile most of the kernel with GCC, a random subset with Claude's compiler, bisect. Suddenly each agent had a different failing file.",
      "Most of the work was tests written for Claude, not for Nicholas. Fresh containers have no memory, so READMEs and progress files are the briefing. Test output must be a few lines with ERROR and the reason on the same line so grep works; the rest goes to a logfile. Time-blind agents will run the suite for hours, so --fast samples 1–10% deterministically per agent and randomly across VMs. Pair with Geoffrey (the loop) and Justin Young (the sequential handoff). Carlini is the person who will tell you not to parallelize until the verifier is nearly perfect, and then not to hire an orchestrator you do not need.",
    ],
    whyThisPerson:
      "Primary capability-dump from a lab IC who is not selling a product. Test-harness-as-communication, git locks instead of an orchestrator, and the GCC-oracle trick for 'one giant task' are stealable on a ten-person team.",
    collabModel:
      "Write the prompt and the tests. Stick Claude in a bash loop inside Docker. Scale with lock files on a shared git remote. Specialize a few agents. Improve the verifier whenever they solve the wrong problem. Do not sit in the session.",
    reasoningStyle:
      "Push models to the ceiling, then study the break. The harness is a communication channel to a time-blind amnesiac. If two agents collide on the same bug, the task is not parallel yet — split it with an oracle.",
    coreLessons: [
      {
        title: "The tests are the briefing",
        insight:
          "Most effort went into the environment so Claude could orient without a human. A pretty loop with a noisy verifier just automates solving the wrong problem.",
      },
      {
        title: "Do not hire an orchestrator you do not need",
        insight:
          "Git lock files and 'next most obvious bug' beat a manager agent. Parallelism is for distinct failing tests, not for sixteen copies of the same stuck kernel build.",
      },
      {
        title: "Write the harness for the model",
        insight:
          "Few lines of output. ERROR on the same line as the reason. Sampled --fast tests. Progress files in the repo. You are not the audience for this log.",
      },
    ],
    resources: [
      {
        name: "Building a C compiler with a team of parallel Claudes",
        kind: "essay",
        url: "https://www.anthropic.com/engineering/building-c-compiler",
        note: "Primary. Agent teams, Ralph-like loop, git locks, GCC oracle, tests-as-communication.",
      },
      {
        name: "anthropics/claudes-c-compiler",
        kind: "repo",
        url: "https://github.com/anthropics/claudes-c-compiler",
        note: "The artifact. Human wrote one paragraph. Read the prompts and tests, not as production C.",
      },
      {
        name: "How I Use AI",
        kind: "essay",
        url: "https://nicholas.carlini.com/writing/2024/how-i-use-ai.html",
        note: "Earlier personal dump: models as tools for research engineering, not autocomplete.",
      },
    ],
    quotes: [
      {
        text: "Most of my effort went into designing the environment around Claude—the tests, the environment, the feedback—so that it could orient itself without me.",
        source: "Building a C compiler with a team of parallel Claudes",
        url: "https://www.anthropic.com/engineering/building-c-compiler",
      },
      {
        text: "I don’t use an orchestration agent. Instead, I leave it up to each Claude agent to decide how to act.",
        source: "Building a C compiler with a team of parallel Claudes",
        url: "https://www.anthropic.com/engineering/building-c-compiler",
      },
    ],
    related: [
      "geoffrey-huntley",
      "justin-young",
      "kilian-lieret",
      "john-yang",
    ],
    github: "https://github.com/carlini",
    website: "https://nicholas.carlini.com",
  },
  {
    slug: "justin-young",
    name: "Justin Young",
    handle: "jyoung127",
    title: "Member of technical staff",
    company: "Anthropic",
    previous: [
      "Software engineer, Revenue Data Platform, Twitter",
      "Brown University, Applied Math and Computer Science",
    ],
    location: "New York",
    tier: "lab",
    schoolIds: ["harness-loops", "own-the-context", "verify-or-do-not-ship"],
    oneLiner:
      "The Anthropic engineer who named the two failure modes of long-running agents — one-shotting until context dies, then declaring victory — and replaced both with an initializer, a JSON feature list, and a coding agent that leaves the repo mergeable.",
    superBio: [
      "Justin Young is on Anthropic's engineering staff in New York, previously Twitter's revenue data platform. In November 2025 he wrote Effective harnesses for long-running agents, the post the rest of the industry now cites as the sequential counterpart to Ralph. The thought experiment: a software project staffed by engineers on shifts, each arriving with no memory of the last shift. Compaction is not enough. Opus 4.5 on the Claude Agent SDK, looped, still cannot build a claude.ai clone from 'build a clone of claude.ai.' Two failures: the agent tries to one-shot the app and dies mid-feature; later, a new session sees progress and marks the job done.",
      "The steal is a two-prompt harness on the same tools. Initializer (first window only): write init.sh, claude-progress.txt, a git repo, and a feature_list.json with 200+ end-to-end behaviors all marked passing: false. Coding agent (every later window): pwd, read progress and git log, boot the app, click through as a human, pick one failing feature, implement it, commit, update progress. JSON not Markdown for the feature list — models are less likely to 'helpfully' rewrite JSON. Strong wording: it is unacceptable to remove or edit tests. Browser automation (Puppeteer MCP) because curl-and-unit-tests let Claude mark a broken UI as done.",
      "This is shift handoff, not a factory of sixteen. Pair with Carlini (parallel once the verifier exists) and Prithvi (who starts from Justin's pattern and adds a skeptical evaluator). Justin is the person who will tell you the next session is a new hire: leave the environment as if you were merging to main tonight.",
    ],
    whyThisPerson:
      "The clearest public sequential harness. Initializer vs coding agent, JSON feature ratchet, progress file plus git, and browser-as-verifier are stealable without the Agent SDK.",
    collabModel:
      "First session sets up the world. Every later session orients from files, verifies the app still works, implements one feature, commits, writes the note the next amnesiac needs. Never one-shot the product.",
    reasoningStyle:
      "Context windows are shifts. Incremental progress plus a clean tree beats a heroic half-diff. Tests the agent can delete are not tests. End-to-end means a human path, not a green unit file.",
    coreLessons: [
      {
        title: "One-shotting is how long jobs die",
        insight:
          "The agent runs out of context mid-feature and the next session inherits an undocumented mess. Expand the spec into a failing feature list first. One feature per window.",
      },
      {
        title: "Leave a mergeable tree",
        insight:
          "Descriptive git commits and a progress file are the briefing. If the next agent has to guess what happened, you did not finish the shift.",
      },
      {
        title: "JSON is harder to vandalize than Markdown",
        insight:
          "Let the coding agent flip passes, not rewrite the contract. And do not trust 'tests passed' until a browser walked the flow.",
      },
    ],
    resources: [
      {
        name: "Effective harnesses for long-running agents",
        kind: "essay",
        url: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
        note: "Primary. Initializer + coding agent, feature_list.json, progress file, Puppeteer verification.",
      },
      {
        name: "anthropics/cwc-long-running-agents",
        kind: "repo",
        url: "https://github.com/anthropics/cwc-long-running-agents",
        note: "Hooks and evaluator subagent that implement the same primitives.",
      },
    ],
    quotes: [
      {
        text: "Imagine a software project staffed by engineers working in shifts, where each new engineer arrives with no memory of what happened on the previous shift.",
        source: "Effective harnesses for long-running agents",
        url: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
      },
      {
        text: "It is unacceptable to remove or edit tests because this could lead to missing or buggy functionality.",
        source: "Effective harnesses for long-running agents",
        url: "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
      },
    ],
    related: [
      "nicholas-carlini",
      "prithvi-rajasekaran",
      "geoffrey-huntley",
      "steve-yegge",
    ],
    linkedin: "https://www.linkedin.com/in/jyoung127",
    website:
      "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
  },
  {
    slug: "prithvi-rajasekaran",
    name: "Prithvi Rajasekaran",
    handle: "prithvi",
    title: "Member of technical staff, Labs",
    company: "Anthropic",
    previous: [],
    tier: "lab",
    schoolIds: ["harness-loops", "encode-judgment", "verify-or-do-not-ship"],
    oneLiner:
      "The Anthropic Labs engineer who treated taste as a loss function: split generator from evaluator, grade design on a skeptical rubric, then scale that GAN-shaped loop into planner / generator / evaluator for multi-hour app builds.",
    superBio: [
      "Prithvi Rajasekaran sits on Anthropic's Labs team. In March 2026 he published Harness design for long-running application development — the sequel to Justin Young's initializer/coding-agent post. Prompt engineering and the first harness both hit a ceiling. Two remaining failures: context anxiety (the model wraps up early as it imagines the window ending) and self-evaluation (agents praise their own mediocre work, especially on design). Compaction keeps the same anxious mind in a shorter history. A context reset plus a structured handoff is a new hire with a briefing.",
      "The frontend experiment is the craft dump. 'Is this beautiful?' does not grade. Four criteria do: design quality, originality (penalize purple-gradient AI slop), craft, functionality. Weight quality and originality higher because Claude already scores fine on craft. Generator builds; evaluator, with Playwright MCP, navigates the live page and is told to be skeptical. Few-shot calibration aligns the critic with human taste. Then he lifts the same split into full-stack: planner expands a one-sentence prompt into a 16-feature spec across sprints and reads the frontend-design skill to set a visual language; generator and evaluator negotiate a sprint contract (implementation details plus testable behaviors); loop until the evaluator passes. Solo Claude from the same prompt produced a thin, broken toy. The harness run spent ~20× the money and shipped a real app.",
      "Pair with Justin (the sequential files this starts from), Eugene Yan (the warning that LLM-as-judge can launder slop — Prithvi's answer is a separate, tuned-skeptical critic, not the generator grading homework), and Carlini (oracle tests when the domain is compilers). Prithvi is the person who will tell you the harness is an experiment in which agents the current model still needs, not a headcount of personas.",
    ],
    whyThisPerson:
      "Primary Labs dump on subjective quality. Gradable taste, generator/evaluator split, context reset vs compaction, and sprint contracts are stealable without building RetroForge.",
    collabModel:
      "Planner writes the spec and design language. Generator implements one sprint. Evaluator, in a fresh window with browser tools, scores against a rubric and a contract. Reset context between sprints. Do not let the builder grade the build.",
    reasoningStyle:
      "Subjective work needs a critic with a checklist, not a vibe. Self-grades skew high. Reset beats compaction when the model is anxious. Spend tokens on the loop that produces evidence.",
    coreLessons: [
      {
        title: "The builder must not grade the build",
        insight:
          "Agents praise their own work. A separate evaluator, told to be skeptical and calibrated with few-shots, is a tractable critic. Tuning self-critique is not.",
      },
      {
        title: "Turn taste into a rubric",
        insight:
          "Beautiful is ungradable. Coherence, originality, craft, functionality are not. Weight the axes the model is weak on. Purple gradients are a failing test.",
      },
      {
        title: "Reset, do not just compact",
        insight:
          "Compaction keeps context anxiety. A new session with a handoff artifact is a shift change. Pay the token tax; do not let the model quietly wrap up.",
      },
    ],
    resources: [
      {
        name: "Harness design for long-running application development",
        kind: "essay",
        url: "https://www.anthropic.com/engineering/harness-design-long-running-apps",
        note: "Primary. GAN-inspired generator/evaluator, planner sprints, frontend rubric, Playwright critic.",
      },
    ],
    quotes: [
      {
        text: "\"Is this design beautiful?\" is hard to answer consistently, but \"does this follow our principles for good design?\" gives Claude something concrete to grade against.",
        source: "Harness design for long-running application development",
        url: "https://www.anthropic.com/engineering/harness-design-long-running-apps",
      },
      {
        text: "Tuning a standalone evaluator to be skeptical turns out to be far more tractable than making a generator critical of its own work.",
        source: "Harness design for long-running application development",
        url: "https://www.anthropic.com/engineering/harness-design-long-running-apps",
      },
    ],
    related: [
      "justin-young",
      "eugene-yan",
      "nicholas-carlini",
      "shreya-shankar",
    ],
    website:
      "https://www.anthropic.com/engineering/harness-design-long-running-apps",
  },
  {
    slug: "vaibhav-gupta",
    name: "Vaibhav Gupta",
    handle: "vaigup",
    title: "Co-founder and CEO",
    company: "Boundary / BAML",
    previous: ["Google"],
    location: "Seattle",
    tier: "hidden-gem",
    schoolIds: ["encode-judgment", "spec-is-the-code", "verify-or-do-not-ship"],
    oneLiner:
      "The BAML founder who defined slop as any code you do not read, killed code review, and replaced it with architecture.md, design docs humans actually open, CLI-enforced invariants, and agents that A/B-test the language from transcripts.",
    superBio: [
      "Vaibhav Gupta is co-founder of Boundary and the person behind BAML, the typed prompt language Dex's 12-factor crowd already installs. The inclusion is not the DSL. It is the AI Engineer 2026 talk Fighting slop with slop: an eight-person team, three years, shipping a programming language — a domain with no room for unread code — with no code reviews, no mandated coding agent, and a requirement that people work in parallel. Famous-founder rule: the workflow is the teachable tool. You do not have to rewrite your compiler in BAML to steal it.",
      "Slop is any code you do not read. This is the least slop your repo will ever have; cherish it. To defeat slop, become it: let agents write, and put the quality system around them. architecture.md, not CLAUDE.md — something every model understands, tiny, only facts that will not change for months (compiler layers). Design docs: code can be slop, writing cannot. They built a versioned design-doc tool plus a Slack firehose; that channel became the most-read room in the company. Then a rule: if you ship a doc, humans have to actually read it, because Vaibhav hit 'AI psychosis' and was dropping ten docs a day. Architecture convergence is a dependency graph with semantic package boundaries and CLI checks in CI so a leaky import cannot merge. Agents constantly generate BAML programs from scratch; other agents inspect the Claude transcript for incorrect language behavior and for 'three tool calls when it should have been one.' Humans triage: real, hallucination, or no taste.",
      "Pair with Dex (structured outputs; Vaibhav is the language), Hamel and Eugene (evals and the LLM-as-judge trap), Armin (less unsupervised code). Vaibhav is the person who will tell you the invariant belongs in a file and a CLI, not in a code-review queue the team already stopped reading.",
    ],
    whyThisPerson:
      "Primary talk on collab when humans cannot read the diff. Model-agnostic architecture.md, design-doc-as-the-real-artifact, CI invariants, and transcript mining are stealable on any stack.",
    collabModel:
      "Pick any agent. Load a tiny architecture file. Design docs in a feed humans actually open. CI blocks leaky architecture. Nightly agents generate programs and score transcripts. Humans only triage what the evals cannot taste.",
    reasoningStyle:
      "Unread code is the default. Put invariants where a merge hook can fail. Writing is the scarce artifact. Evaluate the language (and the skills) by watching tool traces, not by arguing in review.",
    coreLessons: [
      {
        title: "Slop is unread code",
        insight:
          "Process theater does not make you read the diff. If the team ships faster than it reads, the quality system has to live in files, CLIs, and evals — not in a PR template.",
      },
      {
        title: "Code can be slop. Writing cannot.",
        insight:
          "A tiny architecture.md every model can load, plus design docs that actually get read, beat a mandated CLAUDE.md and a code-review queue nobody finishes.",
      },
      {
        title: "Mine the transcript, not the vibe",
        insight:
          "Generate from scratch. Count tool calls. Split findings into real, hallucinated, and tasteless. That is how you A/B a language feature — or a skill — instead of guessing.",
      },
    ],
    resources: [
      {
        name: "Fighting slop with slop",
        kind: "talk",
        url: "https://ai.engineer/talks/fighting-slop-with-slop",
        note: "Primary. Architecture.md, design-doc Slack, CLI invariants, transcript evals.",
      },
      {
        name: "boundaryml/baml",
        kind: "repo",
        url: "https://github.com/BoundaryML/baml",
        note: "The language the 12-factor agents crowd uses for structured outputs.",
      },
    ],
    quotes: [
      {
        text: "Slop is just any code you don't read.",
        source: "Fighting slop with slop, AI Engineer 2026",
        url: "https://ai.engineer/talks/fighting-slop-with-slop",
      },
      {
        text: "Code can be slop, writing cannot.",
        source: "Fighting slop with slop, AI Engineer 2026",
        url: "https://ai.engineer/talks/fighting-slop-with-slop",
      },
    ],
    related: ["dex-horthy", "eugene-yan", "hamel-husain", "armin-ronacher"],
    linkedin: "https://www.linkedin.com/in/vaigup",
    github: "https://github.com/vaigup",
    website: "https://www.boundaryml.com",
  },
];
