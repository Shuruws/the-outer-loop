import type { Engineer } from "./types";

export const issue02Engineers: Engineer[] = [
  {
    slug: "mitchell-hashimoto",
    name: "Mitchell Hashimoto",
    handle: "mitchellh",
    title: "Creator of Ghostty; co-founder, HashiCorp",
    company: "Independent (Ghostty)",
    previous: [
      "Co-founder, HashiCorp (Terraform, Vagrant, Vault)",
      "University of Washington",
    ],
    tier: "hidden-gem",
    schoolIds: ["encode-judgment", "verify-or-do-not-ship", "harness-loops"],
    oneLiner:
      "The HashiCorp founder who started as an AI skeptic, then published a six-step adoption journey: drop the chatbot, reproduce your own commits, engineer the harness so the same mistake never happens twice.",
    superBio: [
      "Mitchell Hashimoto co-founded HashiCorp and shipped the infrastructure tools a generation of companies run in production — Vagrant, Terraform, Vault. He stepped off the executive track to build Ghostty, a fast terminal emulator, which is exactly the kind of brownfield, taste-heavy C/Zig/Swift codebase where chatbot codegen dies. That is why his February 2026 essay 'My AI Adoption Journey' is a gem: it is a measured conversion narrative written by hand, with no skin in an AI company.",
      "The sequence is the method. Drop the chatbot for real work — agents must read files, run programs, and make HTTP requests. Then the masochistic step most threads skip: reproduce your own manual commits with agentic ones, without showing the agent the answer, until you know from first principles when it works. Break sessions into clear tasks. Split vague work into planning vs execution. Give it a way to verify. Learn when not to reach for it.",
      "Efficiency arrived in the time he was not working. Last thirty minutes of the day: research surveys, parallel probes of vague ideas, gh-based issue triage that is not allowed to reply. Next morning, filter the slam dunks, let one agent work in the background, turn off notifications so the agent does not interrupt you. The human chooses when to tab over. Meanwhile you stay in pre-AI deep work on the problem you actually love.",
      "Where he is now is harness engineering, and it is the same species as pstack: every Bad Thing becomes an AGENTS.md line or a programmed tool so it never happens again. Ghostty's inspector AGENTS.md is a ledger of past failures. He wants one agent running at all times — not a swarm — on slower thoughtful models. He is explicit about junior skill formation. He has no product to sell you.",
    ],
    whyThisPerson:
      "Famous infrastructure engineer, hidden AI-collab file. The six steps are stealable. The AGENTS.md-as-failure-log is the most concrete 'encode judgment' artifact outside pstack.",
    collabModel:
      "One background agent, human-controlled interrupts. End-of-day research and triage. Morning slam dunks while you do deep work. Notifications off. Harness grows from each mistake. Not a swarm.",
    reasoningStyle:
      "Force the tool through inefficiency before judging it. Discover edges yourself. Prefer verification tools over more prompts. Stay the expert and the reviewer.",
    coreLessons: [
      {
        title: "Drop the chatbot for coding",
        insight:
          "Copy-paste into ChatGPT is hoping the training set already contains your repo. An agent that can read, run, and fetch is the minimum viable collaborator.",
      },
      {
        title: "Reproduce your own work",
        insight:
          "Do the commit by hand, then make the agent match it without seeing the answer. That is how you learn the edges instead of borrowing someone else's thread.",
      },
      {
        title: "Harness engineering",
        insight:
          "Every repeated mistake becomes an AGENTS.md line or a script. The Ghostty file is a graveyard of bad agent behaviors, and it almost completely resolved them.",
      },
      {
        title: "You interrupt the agent, not the reverse",
        insight:
          "Desktop notifications are context switches. Tab over on your cadence. One agent in the background beats five that own your attention.",
      },
    ],
    resources: [
      {
        name: "My AI Adoption Journey",
        kind: "essay",
        url: "https://mitchellh.com/writing/my-ai-adoption-journey",
        note: "Primary source. Six steps. Written by hand. Start here.",
      },
      {
        name: "Ghostty",
        kind: "repo",
        url: "https://github.com/ghostty-org/ghostty",
        note: "Look for AGENTS.md files. Each line is a past failure.",
      },
    ],
    quotes: [
      {
        text: "Anytime you find an agent makes a mistake, you take the time to engineer a solution such that the agent never makes that mistake again.",
        source: "My AI Adoption Journey, Feb 2026",
        url: "https://mitchellh.com/writing/my-ai-adoption-journey",
      },
    ],
    related: ["lauren-tan", "armin-ronacher", "thorsten-ball", "addy-osmani"],
    twitter: "https://x.com/mitchellh",
    website: "https://mitchellh.com",
    github: "https://github.com/mitchellh",
  },
  {
    slug: "mario-zechner",
    name: "Mario Zechner",
    handle: "badlogic",
    title: "Creator of Pi; co-builder, Earendil",
    company: "Earendil",
    previous: ["libGDX", "RoboVM"],
    tier: "hidden-gem",
    schoolIds: ["own-the-context", "harness-loops"],
    oneLiner:
      "libGDX author who built Pi as a protest against spaceship coding agents — four tools, no baked-in plan mode, extend it yourself or ask Pi to extend itself.",
    superBio: [
      "Mario Zechner created libGDX, the Android game framework a decade of studios actually shipped on, then watched RoboVM get sold and closed. That scar is in Pi. In August 2025 he started a personal coding-agent harness because Claude Code felt like a spaceship: 80% of the functionality unused, system prompt and tools changing under you, internals injecting context behind your back. The founding post landed in November. In April 2026 he joined Earendil with Armin Ronacher, keeping technical direction.",
      "Pi's philosophy is the inverse of pstack's density. Defaults are read, write, edit, bash. No sub-agents, no plan mode in the box. Skills, TypeScript extensions, prompt templates, themes, npm/git packages. If you need a feature, ask Pi to build it into itself. That is not minimalism as aesthetic. It is control: you should be able to see every token that hits the model.",
      "He is the implementer next to Armin's essay. The Coming Loop is the worry. Pi is the cautious harness that refuses to become an unmaintainable swarm in a race toward software that writes itself. Together they are the anti-abdication pair in this directory.",
    ],
    whyThisPerson:
      "Hidden gem with a real user base. Pi is what you install when Cursor/Claude Code feel like they are piloting you. Pair with Armin; they are one argument in two artifacts.",
    collabModel:
      "Small default tool surface. You compose skills and extensions. The harness does not hide context. Adapt the agent to the workflow, not the reverse.",
    reasoningStyle:
      "If the product injects context you cannot see, you do not own the loop. Prefer a harness you can read. Commercialization that closed-sources the internals is the failure mode he already lived.",
    coreLessons: [
      {
        title: "Four tools are a coding agent",
        insight:
          "Read, write, edit, bash. Everything else is a package you chose. Spaceship checklists burn tokens and hide the prompt.",
      },
      {
        title: "Adapt the agent to you",
        insight:
          "Extensions and skills should be TypeScript you can ship on npm. If you need a command, build it — or have Pi build it — instead of waiting for a vendor.",
      },
      {
        title: "See every token",
        insight:
          "A harness that rewrites the system prompt behind your back is not a collaborator. It is a product with opinions you cannot audit.",
      },
    ],
    resources: [
      {
        name: "pi-mono",
        kind: "repo",
        url: "https://github.com/badlogic/pi-mono",
        note: "The harness. Read the README's extension model before adding features.",
      },
      {
        name: "Pi coding agent post",
        kind: "essay",
        url: "https://mariozechner.at/posts/2025-11-30-pi-coding-agent/",
        note: "Why he built it. Spaceship complaint is the useful part.",
      },
      {
        name: "pi.dev",
        kind: "docs",
        url: "https://pi.dev",
        note: "Product site. Packages, skills, 'ask Pi to customize itself.'",
      },
    ],
    quotes: [],
    related: ["armin-ronacher", "thorsten-ball", "paul-gauthier", "dax-raad"],
    twitter: "https://x.com/badlogicgames",
    github: "https://github.com/badlogic",
    website: "https://mariozechner.at",
  },
  {
    slug: "dax-raad",
    name: "Dax Raad",
    handle: "thdxr",
    title: "Creator of OpenCode; co-founder, Anomaly / SST",
    company: "Anomaly",
    previous: ["Amazon", "Ironbay", "SST founding team"],
    tier: "hidden-gem",
    schoolIds: ["own-the-context"],
    oneLiner:
      "Neovim-native SST builder who forked the terminal agent idea into MIT-licensed, model-agnostic OpenCode because developers should keep the keys, the editor, and the model.",
    superBio: [
      "Dax Raad joined SST after using it, then became the public co-founder. SST was already a bet that developers should own infrastructure without drowning in AWS console folklore. OpenCode is the same bet pointed at coding agents. Claude Code proved the terminal-native agent. Dax's complaint was the lock: one model family, closed internals, a workflow that yanked him between Neovim, the shell, and a browser chatbot.",
      "OpenCode (sst/opencode, Anomaly) is MIT, local, 75+ providers, agents as markdown with permissions. Build vs Plan vs Explore is the same split Boris uses, expressed as config you can grep. Frank Wang's architecture call — swap models like batteries — is the open-source advantage Dax names out loud: the long tail of models and editors is why this should be a community problem, not a single-vendor one. Zen is the optional inference SKU so you do not have to collect API keys to get started.",
      "His collab stance is restraint dressed as hot takes. Smart engineers doing astrology on model rankings. Open source is not automatically better — only when there is a long tail to cover. AI does not replace product sense. He reports shipping more and working harder, which is the honest labor story Armin and Mitchell also tell. The value is still in the human's head; the agent pulled more exertion out, not less.",
    ],
    whyThisPerson:
      "The open-source pole of the Claude Code clone wars, with a philosophy: keep control of models and permissions. If Lauren encodes taste in skills, Dax encodes taste in what the harness refuses to lock.",
    collabModel:
      "Terminal first. Primary agents you tab between (build/plan). Subagents with deny-by-default permissions. Bring your own model. Config in the repo, not in a vendor account.",
    reasoningStyle:
      "Product taste over agent demos. Cover the long tail in the open. Do not confuse a benchmark with a product. Keep Neovim.",
    coreLessons: [
      {
        title: "Model-agnostic is the open-source job",
        insight:
          "Closed agents pick a model. OpenCode exists because the long tail of providers and editors is too large for one team — that is when source should be open.",
      },
      {
        title: "Permissions are the agent",
        insight:
          "Plan cannot edit the tree. Explore cannot write. Anything not allowed is denied. This is Thariq's security argument implemented as JSON.",
      },
      {
        title: "AI did not give you your evenings back",
        insight:
          "He is shipping more and working as hard or harder. The bottleneck moved to judgment, not to leisure.",
      },
    ],
    resources: [
      {
        name: "sst/opencode",
        kind: "repo",
        url: "https://github.com/sst/opencode",
        note: "The agent. Read docs/agents for Build/Plan/Explore and permission rules.",
      },
      {
        name: "OpenCode docs",
        kind: "docs",
        url: "https://opencode.ai/docs/agents/",
        note: "How agents are actually configured. Markdown + JSON, not a vibe.",
      },
    ],
    quotes: [
      {
        text: "Just because something's open source doesn't mean it's going to be any better than the closed source equivalent. It only happens when there's a long tail of things to cover.",
        source: "On why OpenCode is open",
      },
    ],
    related: ["boris-cherny", "mario-zechner", "paul-gauthier", "thorsten-ball"],
    twitter: "https://x.com/thdxr",
    github: "https://github.com/thdxr",
  },
  {
    slug: "shreya-shankar",
    name: "Shreya Shankar",
    handle: "sh_reya",
    title: "ML systems researcher; co-author, AI Evals for Engineers & PMs",
    company: "UC Berkeley / incoming CMU faculty",
    previous: [
      "PhD, UC Berkeley",
      "Visiting Student Researcher, Google",
      "Research intern, Meta",
      "ML engineer, startups",
      "BS, Stanford",
    ],
    location: "Berkeley",
    tier: "hidden-gem",
    schoolIds: ["verify-or-do-not-ship", "encode-judgment"],
    oneLiner:
      "The other half of the evals course the labs send people to: error analysis as a research method, judges built from failures, and agents designed to be evaluable.",
    superBio: [
      "Shreya Shankar is the systems researcher next to Hamel Husain's practitioner energy. Berkeley PhD, DocETL for unstructured-text pipelines that actually got deployed in journalism and law, papers at VLDB/SIGMOD/UIST. Incoming assistant professor at Carnegie Mellon. Before the faculty turn she was already the person arguing that evaluation is not a dashboard you buy — it is qualitative research you do on traces.",
      "The Maven course she rebuilt with Hamel is the public curriculum: instrument the agent, read traces, open and axial coding, failure taxonomies, LLM judges you can distrust productively (judgy corrects for known judge bias), CI as a golden set of failures, red teams, human-in-the-loop approval. New modules treat agents as the object: designing multi-agent systems for evaluability, sandbox replay, agent-in-the-loop error analysis. She will tell you to vibe-code the annotation UI. That is not a joke. The bottleneck is looking at data, so make looking cheap.",
      "If Lauren's factory needs a stop condition, Shreya is who you hire to define it. Coding-agent collab without evals is a demo. She is why this directory treats Hamel's 'error analysis first' as a school, not a slogan.",
    ],
    whyThisPerson:
      "Hidden gem relative to Twitter coding fame. The evals course is field-tested on thousands of engineers from OpenAI, Google, Meta. DocETL is the proof she builds systems, not slides.",
    collabModel:
      "Instrument first. Humans code the errors. Judges and programmatic checks encode those codes. CI replays. Agents can help you look, but they do not get to grade themselves without a correction for their own bias.",
    reasoningStyle:
      "Qualitative then quantitative. Design the system so it can be evaluated. Treat judge error as a known physical constant, not a surprise.",
    coreLessons: [
      {
        title: "Design for evaluability",
        insight:
          "A multi-agent spaghetti pile cannot be judged. Architecture is an eval decision. If you cannot name the failure, you cannot train or gate it.",
      },
      {
        title: "Error analysis is the work",
        insight:
          "Open coding of traces beats a borrowed benchmark. The taxonomy comes from your product, not from SWE-Bench.",
      },
      {
        title: "Judges are biased instruments",
        insight:
          "Build them from failures you have seen, then correct for the judge. A raw LLM-as-judge is another uncalibrated agent.",
      },
    ],
    resources: [
      {
        name: "AI Evals for Engineers & PMs",
        kind: "course",
        url: "https://maven.com/parlance-labs/evals",
        note: "With Hamel Husain. The field-tested curriculum.",
      },
      {
        name: "DocETL",
        kind: "repo",
        url: "https://github.com/ucbepic/docetl",
        note: "Her systems work. LLM pipelines for unstructured data, with optimization in the loop.",
      },
    ],
    quotes: [],
    related: ["hamel-husain", "lauren-tan", "sean-grove", "thariq-shihipar"],
    twitter: "https://x.com/sh_reya",
    linkedin: "https://www.linkedin.com/in/shrshnk",
    website: "https://www.shreyashankar.com",
    github: "https://github.com/shreyashankar",
  },
  {
    slug: "daniel-meppiel",
    name: "Daniel Meppiel",
    handle: "danielmeppiel",
    title: "Global Black Belt; creator of Genesis and APM",
    company: "Microsoft",
    previous: ["GitHub", "Sonar", "WeGaw (CTO)", "enterprise modernization"],
    tier: "hidden-gem",
    schoolIds: ["spec-is-the-code", "encode-judgment"],
    oneLiner:
      "Microsoft engineer who treated markdown-that-steers-an-LLM as code, then shipped Genesis — an architect skill that designs your skills and agents before you write them.",
    superBio: [
      "Daniel Meppiel is a Global Black Belt at Microsoft after GitHub, Sonar, and a CTO stint. He is not a model-lab celebrity. He is the person who noticed that agent instruction files rot the same way unarchitected codebases rot: the 40-line rule becomes 400, the same convention lives in three skills, constraints drop by turn twenty. The Agentic SDLC Handbook and the PROSE constraints are his attempt to give that mess a software-architecture treatment.",
      "PROSE: Progressive Disclosure, Reduced Scope, Orchestrated Composition, Safety Boundaries, Explicit Hierarchy. Genesis is the skill that applies them. `/genesis` does not write the feature. It designs which skills, custom agents, and instructions you need, with named patterns and contracts, portably across Cursor, Claude Code, Copilot, Codex, OpenCode. APM (Agent Package Manager) is the install layer. He wrote the book with the methodology it describes, and he flags where his own judgment exceeded the method. That honesty is rare in this genre.",
      "He is the enterprise translation of Jesse and Lauren: encode the architect role so a fleet of harnesses does not each invent a different religion. If your company has six tools and one engineering culture, this is the file.",
    ],
    whyThisPerson:
      "Hidden gem inside Microsoft. Genesis is installable architecture for agent systems — the missing layer between 'drop a SKILL.md' and 'we have a platform.'",
    collabModel:
      "Design the agent system before generating product code. PROSE gates at design time. One skill (Genesis) emits the rest. Portable across harnesses so the org is not married to an IDE.",
    reasoningStyle:
      "Markdown is code. Treat instruction drift as an architecture bug. Name patterns. Reduce scope. Disclose progressively so the model is not drowning on turn one.",
    coreLessons: [
      {
        title: "Markdown that steers an LLM is code",
        insight:
          "Design it. Module it. Review it. A 400-line rule file is an unfactored program with no tests.",
      },
      {
        title: "Architecture before generation",
        insight:
          "Genesis lays out skills and agents the way you would lay out classes. Generating the feature first is how you get three contradictory conventions.",
      },
      {
        title: "Progressive disclosure",
        insight:
          "Load the minimum instruction for the turn. Playbooks on demand. The context window is a budget, not a junk drawer.",
      },
    ],
    resources: [
      {
        name: "danielmeppiel/genesis",
        kind: "repo",
        url: "https://github.com/danielmeppiel/genesis",
        note: "The architect skill. /genesis. Works across the major harnesses.",
      },
      {
        name: "The Agentic SDLC Handbook",
        kind: "book",
        url: "https://danielmeppiel.github.io/agentic-sdlc-handbook/",
        note: "PROSE constraints live in chapter 13. Read that if you skip the rest.",
      },
    ],
    quotes: [
      {
        text: "Markdown that steers an LLM is code. Design it before you write it.",
        source: "Genesis README",
        url: "https://github.com/danielmeppiel/genesis",
      },
    ],
    related: ["jesse-vincent", "lauren-tan", "sean-grove", "dex-horthy"],
    github: "https://github.com/danielmeppiel",
    website: "https://danielmeppiel.github.io/agentic-sdlc-handbook/",
  },
  {
    slug: "scott-wu",
    name: "Scott Wu",
    handle: "scottwu",
    title: "Co-founder and CEO, Cognition (Devin)",
    company: "Cognition",
    previous: [
      "IOI gold",
      "Co-founder with Steven Hao and Walden Yan",
    ],
    tier: "lab",
    schoolIds: ["plan-then-oneshot", "harness-loops"],
    oneLiner:
      "Devin's CEO, whose useful public craft is not the demo: treat agents as async juniors in Slack and Linear, five at a time, humans on the definition of the problem.",
    superBio: [
      "Scott Wu co-founded Cognition with fellow IOI golds and shipped Devin as an autonomous software engineer — own cloud box, shell, browser, PR at the end. The company later absorbed what remained of Windsurf after Google hired Varun Mohan. The press number that moves, 95% of Cognition's code, is a claim. The workflow underneath it is the dossier material.",
      "Internally: ~15 engineers, each running up to five Devins. Tag Devin in Slack or Linear, get a GitHub PR. A quarter of internal PRs from Devin, with a stated path to half. The tasks he will actually name as slam dunks: frontend fixes, version upgrades, documentation, first-line crash response, tests. DeepWiki for codebase research that improves the prompt before you delegate. Public channels so both humans and agents learn from the thread.",
      "The collab model is Cat Wu's Tag idea with a vendor attached: asynchronous, well-scoped, human expertise at the specification and the load-bearing change. He is more CEO than pstack author. Include him because the async-junior pattern is how a lot of large teams will actually meet agents, and he is willing to describe the batch size.",
    ],
    whyThisPerson:
      "Lab operator, not a skills author. The gem is the operating model: five async agents, human on problem definition, slam-dunk task classes, wiki-before-delegate.",
    collabModel:
      "Delegate from Slack/Linear into a sandbox that opens PRs. Up to five in flight. Human shows up for the parts that need expertise. Research the codebase first (DeepWiki). Keep the work in public channels.",
    reasoningStyle:
      "Scope until an async junior can finish. Do not sit in the generation loop. Invest in repo understanding so the prompt is not a wish.",
    coreLessons: [
      {
        title: "Async junior, not pair",
        insight:
          "If you have to watch it, you have not scoped it. Devin's product bet is the PR that lands while you are in another meeting.",
      },
      {
        title: "Name the slam dunks",
        insight:
          "Frontend, upgrades, docs, crash first-pass, tests. Everything else still wants a human at the invariant.",
      },
      {
        title: "Research then delegate",
        insight:
          "A wiki pass over the repo makes the prompt cheaper than hoping the agent greps well from a one-line Slack tag.",
      },
    ],
    resources: [
      {
        name: "Devin",
        kind: "docs",
        url: "https://devin.ai",
        note: "The product. Useful as the async-junior reference implementation.",
      },
    ],
    quotes: [],
    related: ["cat-wu", "boris-cherny", "lauren-tan", "mitchell-hashimoto"],
    twitter: "https://x.com/scottwu",
  },
];
