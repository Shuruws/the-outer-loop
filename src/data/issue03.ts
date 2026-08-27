import type { Engineer } from "./types";

export const issue03Engineers: Engineer[] = [
  {
    slug: "cristina-poncela",
    name: "Cristina Poncela Cubeiro",
    handle: "cristinaponcela",
    title: "AI Engineer",
    company: "Earendil",
    previous: ["Bending Spoons"],
    tier: "hidden-gem",
    schoolIds: ["own-the-context", "verify-or-do-not-ship"],
    oneLiner:
      "Self-described native AI engineer who learned to program with agents, then co-authored the friction argument: make the codebase agent-legible, and split review so mechanical nits go back to the model while migrations stay human.",
    superBio: [
      "Cristina Poncela Cubeiro is the quieter half of Earendil's public craft. She left Bending Spoons in 2025, joined Armin Ronacher and Mario Zechner on Pi, and shows up in the contributor graph for real — model-registry reliability, not a keynote cameo. She calls herself a native AI engineer: she learned the craft alongside these tools, which is exactly why she does not romanticize them. Velocity is a psychological trap. Output feels like progress. Responsibility does not get a matching multiplier.",
      "Her half of 'The Friction Is Your Judgment' is the engineering problem, not the psychology sermon. Treat the codebase as infrastructure for the agent's context window. Modularize so the model adds fuzz between defined steps, not through the core. Unique function names so grep returns one hit and the agent stops duplicating. One SQL interface, no bare catch-alls, no dynamic imports, one UI primitives library. Entropy is self-reinforcing: messier tree, worse recall, more duplication, more mess.",
      "The review layer is the gem you can steal tonight. A custom Pi extension buckets PR comments: mechanical violations and AGENTS.md breaches go back to the agent; database migrations, new dependencies, auth, backwards-incompatible APIs, destructive ops stay human. She is the person who made Armin's invariants operational instead of literary.",
    ],
    whyThisPerson:
      "True hidden gem. Less famous than Armin, more specific on the lint rules and the two-bucket review. If you only take one artifact from Earendil besides The Coming Loop, take her agent-legible checklist.",
    collabModel:
      "Design the repo so an agent can work in one module without corrupting another. Lint the failure modes. Split review: agent for mechanical, human for irreversible. Keep small PRs because you are outnumbered by entities that cannot carry responsibility.",
    reasoningStyle:
      "Two problem classes, two solutions. Psychology: do not abdicate when speed feels like thinking. Engineering: make bad agent habits unrepresentable in the tree. Increase friction around taste.",
    coreLessons: [
      {
        title: "Your codebase is infrastructure for the agent",
        insight:
          "If the model cannot see the invariant, it cannot respect it. Unique names, one query interface, no hidden magic. Design for grep.",
      },
      {
        title: "Split the review",
        insight:
          "Style and AGENTS.md breaks are agent work. Migrations, auth, and irreversible ops are human work. Mixing them is how you rubber-stamp a schema change.",
      },
      {
        title: "Entropy is self-reinforcing",
        insight:
          "Locally reasonable agent code makes the next session dumber. Cleanup cost used to take months. Now it takes days. Plan for that.",
      },
    ],
    resources: [
      {
        name: "The Friction Is Your Judgment",
        kind: "talk",
        url: "https://mitsuhiko.github.io/talks/ai-engineer-talk/",
        note: "With Armin. Steal the agent-legible checklist and the two-bucket review.",
      },
      {
        name: "Pi / earendil-works",
        kind: "repo",
        url: "https://github.com/earendil-works/pi",
        note: "Where her Pi work lives. cristinaponcela on the contributor list.",
      },
    ],
    quotes: [
      {
        text: "Treat your codebase as infrastructure, designed to be legible to the agent's context window.",
        source: "The Friction Is Your Judgment, AI Engineer Europe 2026",
      },
    ],
    related: ["armin-ronacher", "mario-zechner", "lauren-tan", "mitchell-hashimoto"],
    github: "https://github.com/cristinaponcela",
  },
  {
    slug: "zach-lloyd",
    name: "Zach Lloyd",
    handle: "zachlloydtweets",
    title: "Co-founder and CEO",
    company: "Warp",
    previous: ["Google (Docs infrastructure)", "Command Line Inc."],
    tier: "lab",
    schoolIds: ["harness-loops", "plan-then-oneshot"],
    oneLiner:
      "Wrote the internal memo that named the job: you are not a product engineer anymore. You are a factory engineer. Interactive agent use is a failure to learn from.",
    superBio: [
      "Zach Lloyd built Warp as a modern terminal, then watched the product become an agentic development environment (Oz) because that is where the market and his own team were going. He is not a skills author. He is a CEO who published the operating system his engineers are supposed to live in, which is rarer and more useful than another Copilot teardown.",
      "'We are now factory engineers, not product engineers' (June 2026) is the document. The job is to build the machine that builds the product. Success is percentage of changes shipped automatically, and at what inference-plus-human cost — not features per engineer. Unlimited token budgets for interactive coding are ending; software production becomes COGS. Every time a human has to pull work off the factory floor, record it and have a self-improvement agent try to make that intervention less likely next time.",
      "The workflow is Lauren's factory with names on the stations: triage (repro, park, or spec), spec with human alignment, implement, review, verify with computer-use, human on the evidence, CI, monitor that files new issues. He looks at 1,300 ready-to-implement issues on build.warp.dev and asks what they are waiting for. Pain now is the tuition for automating the pain away. Meta-engineering: the system in which coding agents ship useful stuff.",
    ],
    whyThisPerson:
      "The most explicit factory doctrine in public, from a company that actually runs it on a million-user terminal. Pair with Lauren (skills) and Scott Wu (async juniors). Zach is the KPI layer.",
    collabModel:
      "Automation-first. Interactive HITL is a recorded failure. Spec agent when ambiguous, implement when scoped, verify with computer-use, human on irreversible review. Self-improvement agents mine traces for token waste and prompt/harness evals.",
    reasoningStyle:
      "Measure autonomous percentage and cost. Improve the factory, not the car on the line. Recursive self-improvement is the golden path, and also the thing Armin fears. Read both.",
    coreLessons: [
      {
        title: "Interactive agent use is a failure to learn from",
        insight:
          "Not a moral failing today. A training signal. If you had to sit in the loop, encode why, so next time the factory does not need you there.",
      },
      {
        title: "Measure automated share and cost",
        insight:
          "Features shipped is a failure metric for this job. Percentage fully automatic, dollars of inference plus human time, ROI on the factory.",
      },
      {
        title: "Meta-engineering is the remaining problem",
        insight:
          "The scarce work is the system in which agents triage, spec, implement, review, verify, and monitor. Product code is the output of that system.",
      },
    ],
    resources: [
      {
        name: "We are now factory engineers, not product engineers",
        kind: "essay",
        url: "https://www.warp.dev/blog/we-are-now-factory-engineers-not-product-engineers",
        note: "The memo. Steal the nine-step factory and the metric pair.",
      },
      {
        name: "build.warp.dev",
        kind: "docs",
        url: "https://build.warp.dev",
        note: "The public factory board he points at. Look at the ready-to-implement pile.",
      },
    ],
    quotes: [
      {
        text: "Every time we use an interactive agent (aka human-in-the-loop) to write code, we view it as a failure to learn from.",
        source: "We are now factory engineers, June 2026",
        url: "https://www.warp.dev/blog/we-are-now-factory-engineers-not-product-engineers",
      },
    ],
    related: ["lauren-tan", "scott-wu", "armin-ronacher", "boris-cherny"],
    twitter: "https://x.com/zachlloydtweets",
    website: "https://www.warp.dev",
  },
  {
    slug: "jeremy-howard",
    name: "Jeremy Howard",
    handle: "jeremyphoward",
    title: "Co-founder, fast.ai and Answer.AI",
    company: "Answer.AI / fast.ai",
    previous: [
      "President, Kaggle",
      "Founder, Enlitic",
      "FastMail.FM",
      "Faculty, Singularity University",
    ],
    tier: "hidden-gem",
    schoolIds: ["verify-or-do-not-ship", "encode-judgment"],
    oneLiner:
      "The antidote to the factory memo: Solveit is dialog engineering — one or two lines at a time, you stay the driver, AI in small doses so you grow instead of going helpless.",
    superBio: [
      "Jeremy Howard co-founded fast.ai to make deep learning usable without a PhD, built nbdev, taught a generation to actually train models, then looked at vibe coding and built the opposite. How to Solve It With Code, with Eric Ries, is Lean Startup pointed at the editor: small batches, immediate feedback, literate source. The platform (Solveit) mixes Jupyter, a Linux box you control, and an assistant that can see what you see. Claudette, his Anthropic wrapper, is the existence proof — a complete agentic tool loop grown from 1–2 line experiments in a dozen lines of code.",
      "He is explicit that this is not Claude Code. Dialog engineering: you write a line, the model suggests the next, you both get smarter. The notebook is the context. Any Python function becomes a tool. He teamed with Hamel to write a blog post this way. The mission is the old fast.ai one: support developers instead of automating them away. He thinks learned helplessness is the actual risk, and that months-and-years craft is the objective function, not this week's PR count.",
      "Put him next to Zach Lloyd on purpose. One says interactive use is a failure. The other says interactive use is the method. Both are serious. This directory would be propaganda without Jeremy.",
    ],
    whyThisPerson:
      "Not a hidden Twitter account — a hidden stance in the agent era. If Lauren encodes judgment for unsupervised runs, Jeremy encodes judgment so you never fully unsupervised-run. Required contrapoint.",
    collabModel:
      "Human-directed, tiny steps, immediate execution. AI suggests; you keep the loop. Literate notebooks as the shared memory. Do not outsource the architecture of the thought.",
    reasoningStyle:
      "Polya / OODA / Lean in the editor. Explore, then package into a function. Understanding is the artifact. Platform designed to maximize learning, not throughput.",
    coreLessons: [
      {
        title: "Dialog, not dump",
        insight:
          "Do not ask for hundreds of lines. One or two, then see. The model and the human share a context that was earned, not retrieved.",
      },
      {
        title: "The opposite of vibe coding",
        insight:
          "Small steps, deep understanding, deep reflection. You can follow the method without his platform. The platform just makes it less slippery.",
      },
      {
        title: "Support developers, do not replace them",
        insight:
          "fast.ai's original bet. Automating the developer away is the big-company path. His is still the other one.",
      },
    ],
    resources: [
      {
        name: "How to Solve It With Code / Solveit",
        kind: "course",
        url: "https://solve.it.com",
        note: "The method and the platform. Read the founding posts even if you never subscribe.",
      },
      {
        name: "Launching Solveit",
        kind: "essay",
        url: "https://www.answer.ai/posts/2025-10-01-solveit-full.html",
        note: "tldr from Jeremy: small doses of AI to learn as you build. Does not rely on AI.",
      },
      {
        name: "Claudette",
        kind: "repo",
        url: "https://github.com/AnswerDotAI/claudette",
        note: "Literate agentic loop in a dozen lines. The method made visible.",
      },
    ],
    quotes: [
      {
        text: "It's basically the opposite of vibe coding; it's all about small steps, deep understanding, and deep reflection.",
        source: "Launching Solveit, Answer.AI",
        url: "https://www.answer.ai/posts/2025-10-01-solveit-full.html",
      },
    ],
    related: ["hamel-husain", "armin-ronacher", "paul-gauthier", "zach-lloyd"],
    twitter: "https://x.com/jeremyphoward",
    website: "https://www.fast.ai",
    github: "https://github.com/jph00",
  },
  {
    slug: "xingyao-wang",
    name: "Xingyao Wang",
    handle: "xingyaow_",
    title: "Co-founder and Chief AI Officer, All Hands AI",
    company: "All Hands AI (OpenHands)",
    previous: [
      "CS PhD candidate, UIUC (Heng Ji)",
      "Research intern, Google, Microsoft, ByteDance",
      "BS, University of Michigan",
    ],
    tier: "lab",
    schoolIds: ["verify-or-do-not-ship", "own-the-context"],
    oneLiner:
      "The OpenHands researcher who proved the boring thesis with numbers: give the agent a code interpreter as its action space and it beats JSON tool calls — then trained verifiers in SWE-Gym so 'done' is not a vibe.",
    superBio: [
      "Xingyao Wang is a UIUC PhD candidate who co-founded All Hands AI to ship OpenHands (née OpenDevin): an open platform where a coding agent gets a sandbox, a shell, an editor, and a browser, the way a human developer does. The GitHub star count is noise. The papers are the craft. CodeAct (ICML 2024): executable code as the action interface, ~20% higher success, ~30% fewer actions than traditional tool calling, plus self-debug. SWE-Gym: 2,438 real GitHub tasks with runtimes, used to train agents and verifiers; double-digit SWE-Bench lifts from a few hundred trajectories.",
      "OpenHands Agent Canvas is the 2026 product shape — a self-hosted control center that can dispatch OpenHands, Claude Code, Codex, Gemini, or any ACP agent, plus automations into Slack/GitHub/Linear. That is Cat Wu's Tag idea as open infrastructure. The SDK split (Agent Server, tools, workspaces, events) is Dex's 'own your control flow' in Python.",
      "He is the lab person who treats evaluation as training data, not a blog metric. If Hamel and Shreya teach you to look at traces, Xingyao shows you can train on them. Code execution is Simon's definition of an agent, measured.",
    ],
    whyThisPerson:
      "Hidden from Twitter coding discourse, central to the open SWE-agent stack. CodeAct plus SWE-Gym is the intellectual backbone under every 'just give it bash' take.",
    collabModel:
      "Sandbox with bash, editor, browser. Code as the action language, not a giant tool JSON schema. Train on real issue-resolve trajectories. Dispatch many harnesses from one control center. Automations on webhooks and schedules.",
    reasoningStyle:
      "Action space first. If the model can write and run code, it can build its own tools at runtime. Verifiers at inference time. Open evaluation across SWE-Bench, WebArena, and a dozen other tasks so you cannot overfit one leaderboard.",
    coreLessons: [
      {
        title: "Code is a better action space than JSON tools",
        insight:
          "CodeAct: execute, debug, compose libraries. Fewer steps, higher success. The tool list is a trap; the interpreter is a generator of tools.",
      },
      {
        title: "Train the verifier, not just the actor",
        insight:
          "SWE-Gym's extra lift at inference time came from trained verifiers. 'Done' needs a model that was taught to check, not a model that likes to declare victory.",
      },
      {
        title: "Open the scaffold",
        insight:
          "A generalist agent in a real sandbox, community-evaluated, beats a private demo. OpenHands is the public lab notebook for that claim.",
      },
    ],
    resources: [
      {
        name: "OpenHands",
        kind: "repo",
        url: "https://github.com/All-Hands-AI/OpenHands",
        note: "The platform. Agent Canvas + SDK. Read AGENTS.md for the split.",
      },
      {
        name: "Executable Code Actions Elicit Better LLM Agents",
        kind: "essay",
        url: "https://arxiv.org/abs/2402.01030",
        note: "CodeAct. The paper behind 'just give it a Python interpreter.'",
      },
      {
        name: "SWE-Gym",
        kind: "essay",
        url: "https://arxiv.org/abs/2412.21139",
        note: "Training and verification environment. 2,438 real tasks.",
      },
    ],
    quotes: [],
    related: ["simon-willison", "boris-cherny", "hamel-husain", "thorsten-ball"],
    twitter: "https://x.com/xingyaow_",
    website: "https://xwang.dev",
    github: "https://github.com/xingyaoww",
  },
  {
    slug: "chip-huyen",
    name: "Chip Huyen",
    handle: "chipro",
    title: "AI engineer and author, AI Engineering",
    company: "Independent (ex-NVIDIA, Netflix, Stanford)",
    previous: [
      "Core developer, NVIDIA NeMo",
      "Netflix",
      "Snorkel AI",
      "Founder, sold an AI infra company",
      "Taught ML Systems at Stanford",
    ],
    tier: "big-tech",
    schoolIds: ["verify-or-do-not-ship", "own-the-context"],
    oneLiner:
      "Wrote the production textbook, then the AI Engineer keynote that un-buzzworded agents: environment, tools, memory, write actions — and why coding agents are the existence proof.",
    superBio: [
      "Chip Huyen grew up in a rice-farming village in Vietnam, taught ML systems at Stanford, shipped tooling at Netflix and NVIDIA (NeMo), and wrote Designing Machine Learning Systems, then AI Engineering (O'Reilly's most-read book in 2025). She is not a Cursor power-user thread. She is the person enterprises already read when they ask what an agent actually is, and she is willing to say the unfashionable parts: write actions are power and a safety problem; task complexity explodes failure rates; planning benchmarks still humble reasoning models.",
      "The AI Engineer keynote 'Why people think agent is a buzzword but it isn't' uses SWE-agent as the concrete case: the environment is a computer with a terminal and a filesystem; the actions are navigate, search, view, edit, execute. Tool use is how you embed a model in a workflow instead of opening a chat tab. Specialized action models will exist per environment, the way coding models already exist. Memory and growing tool context are first-class engineering, not prompt folklore.",
      "In the book, evaluation is a two-chapter event before you get to RAG and agents. That ordering is the lesson. She also notes, in interviews, that high performers gain the most from AI coding tools — which is the opposite of the junior-replacement slide, and rhymes with Jeremy and Armin more than with factory maximalism.",
    ],
    whyThisPerson:
      "The systems adult in the room. If this dossier is craft from practitioners, Chip is the vocabulary they are all accidentally reinventing: tools, environment, write actions, eval-first.",
    collabModel:
      "Define the environment and the action list before the persona. Separate planning from execution. Put evals in front of architecture. Human oversight on write actions. Treat coding agents as the reference agent, not a toy.",
    reasoningStyle:
      "Production constraints over demo loops. Measure failure as task length grows. Prefer boring architecture (RAG, then agents, then finetune) in that order unless you have evidence.",
    coreLessons: [
      {
        title: "An agent is environment plus tools plus memory",
        insight:
          "Not a chatbot with extra steps. SWE-agent is the picture: a computer, a terminal, a file tree, actions that change it.",
      },
      {
        title: "Write actions are the power and the risk",
        insight:
          "Search is safe. Edit, email, deploy are not. Capability extension without oversight is how agents stop being assistants.",
      },
      {
        title: "Eval before you agent",
        insight:
          "The book puts evaluation in front of RAG and agents on purpose. A factory without evals is a token furnace.",
      },
    ],
    resources: [
      {
        name: "AI Engineering",
        kind: "book",
        url: "https://www.oreilly.com/library/view/ai-engineering/9781098166298/",
        note: "The 2025 textbook. Chapters 3–4 (eval) then 6 (RAG and agents).",
      },
      {
        name: "Why people think agent is a buzzword but it isn't",
        kind: "talk",
        url: "https://ai.engineer/talks/keynote-why-people-think-agent-is-a-buzzword-but-it-isn-t",
        note: "AI Engineer keynote. SWE-agent as the worked example.",
      },
      {
        name: "huyenchip.com",
        kind: "essay",
        url: "https://huyenchip.com",
        note: "Her home. Systems writing, not thread-bait.",
      },
    ],
    quotes: [],
    related: ["simon-willison", "hamel-husain", "xingyao-wang", "shreya-shankar"],
    twitter: "https://x.com/chipro",
    website: "https://huyenchip.com",
    github: "https://github.com/chiphuyen",
  },
];
