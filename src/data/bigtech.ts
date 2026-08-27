import type { Engineer } from "./types";

export const bigTechEngineers: Engineer[] = [
  {
    slug: "addy-osmani",
    name: "Addy Osmani",
    handle: "addyosmani",
    title: "Engineering lead, Chrome",
    company: "Google",
    previous: [
      "Head of Chrome Developer Experience",
      "O'Reilly author",
    ],
    location: "San Francisco Bay Area",
    tier: "big-tech",
    schoolIds: ["spec-is-the-code", "plan-then-oneshot", "verify-or-do-not-ship"],
    oneLiner:
      "Google's most public web engineer, now teaching a 2026 playbook: 15-minute waterfall spec, small diffs, git as save point, second model as reviewer.",
    superBio: [
      "Addy Osmani has been the Chrome team's ambassador to working web developers for more than a decade — performance, ToDoMVC, image loading, O'Reilly books people actually finished. When coding agents became daily drivers he did not pretend it was still 2014. He published a concrete AI-assisted engineering playbook and followed it with O'Reilly material on how to write a spec for agents.",
      "The 2026 version is disciplined to the point of looking old-fashioned, which is why it works in a large company. Brainstorm a spec.md with the model before a line of code. Break work so you never ask for the whole app. Dump the relevant code and docs into context instead of hoping retrieval guesses. Commit constantly; git is a save point in a game. Never trust the output; run it; often send it to a second model. Chrome DevTools MCP for the quality loop.",
      "His spec advice is the Google-shaped version of Sean Grove: focus on what and why, not the nitty-gritty how. Humans fill ambiguity. Agents execute literally. 'Handle edge cases appropriately' is a null instruction to a model.",
    ],
    whyThisPerson:
      "Proof that the Lauren/Harper loop survives inside a company that cannot YOLO a swarm onto Chrome. Big-tech translation layer for the rest of this directory.",
    collabModel:
      "Spec first, iterative functions not monoliths, explicit context, frequent commits, human-plus-second-model review. MCP for real runtime evidence in the browser.",
    reasoningStyle:
      "Director, not typist. Structure the work so the model cannot produce a jumbled mess. Verification is a cardinal rule, not a later phase.",
    coreLessons: [
      {
        title: "Fifteen-minute waterfall",
        insight:
          "Brainstorm requirements, data models, and edge cases into spec.md before implementation. Wishes are not specs.",
      },
      {
        title: "Git is a save point",
        insight:
          "You will need to roll back a hallucination. Commit more than feels dignified.",
      },
      {
        title: "Never blindly trust the output",
        insight:
          "Models are over-confident. Review, run, test. A second model as reviewer is a cheap harness.",
      },
      {
        title: "Agents execute literally",
        insight:
          "Write what and why. Ambiguity that a senior would interpret is a no-op to a model.",
      },
    ],
    resources: [
      {
        name: "My LLM coding workflow going into 2026",
        kind: "thread",
        url: "https://www.linkedin.com/posts/addyosmani_ai-programming-softwareengineering-activity-7407683628396298240-G0hd",
        note: "The playbook. Spec, slice, context dump, git, verify.",
      },
    ],
    quotes: [
      {
        text: "In 2026, the human engineer remains the director of the work.",
        source: "LLM coding workflow, 2026",
      },
    ],
    related: ["harper-reed", "sean-grove", "lauren-tan", "guillermo-rauch"],
    twitter: "https://x.com/addyosmani",
    linkedin: "https://www.linkedin.com/in/addyosmani",
    website: "https://addyosmani.com",
  },
  {
    slug: "tobi-lutke",
    name: "Tobi Lütke",
    handle: "tobi",
    title: "CEO",
    company: "Shopify",
    previous: ["Founder, Shopify"],
    location: "Ottawa / remote",
    tier: "big-tech",
    schoolIds: ["own-the-context", "spec-is-the-code"],
    oneLiner:
      "Runs a commerce giant and still publishes a 200-line tool for the actual job: make a fresh directory for each research vibe so agents do not contaminate each other.",
    superBio: [
      "Tobi Lütke is not an 'AI engineer' in the job-title sense. He is the CEO of Shopify who still writes software and, more importantly, still publishes small tools that reveal how he thinks. When Guillermo Rauch described doing all research with agent CLIs and a research folder plus AGENTS.md, Tobi replied with github.com/tobi/try — a command that creates a dated directory for each experiment, keeps them findable, and refuses to turn the work into a knowledge-graph product.",
      "That is the whole gem. Large-company AI theater wants platforms. Tobi wants a fresh directory, an agent, and the ability to grep yesterday's attempt. It rhymes with Ralph (reset), with Dex (own the context), and with Simon (unix-shaped tools). It is also a leadership tell: Shopify has been unusually explicit that using AI is now part of the job, and the CEO's own repo is a filesystem, not a slide.",
    ],
    whyThisPerson:
      "Hidden gem inside a very famous person. The try repo is more instructive than a hundred enterprise 'AI transformation' memos.",
    collabModel:
      "One vibe, one directory. Agent CLI plus filesystem. Prior sessions are files you can locate, not a chat product. AGENTS.md for house style.",
    reasoningStyle:
      "Minimize the tool. Isolation is a feature. Research is cheap if contamination is impossible.",
    coreLessons: [
      {
        title: "Fresh directory per vibe",
        insight:
          "Context contamination across research threads is how agents lie with confidence. Isolation is cheaper than a memory product.",
      },
      {
        title: "The CEO should have a repo",
        insight:
          "If AI collab is mandatory, the artifact is a tool you run, not a mandate you send.",
      },
    ],
    resources: [
      {
        name: "tobi/try",
        kind: "repo",
        url: "https://github.com/tobi/try",
        note: "Tiny. Read it. Then use it before you build a research OS.",
      },
    ],
    quotes: [],
    related: ["guillermo-rauch", "simon-willison", "geoffrey-huntley"],
    twitter: "https://x.com/tobi",
    github: "https://github.com/tobi",
  },
  {
    slug: "guillermo-rauch",
    name: "Guillermo Rauch",
    handle: "rauchg",
    title: "CEO",
    company: "Vercel",
    previous: ["Socket.io", "Mongoose", "LearnBoost"],
    tier: "big-tech",
    schoolIds: ["own-the-context"],
    oneLiner:
      "Socket.io author turned Vercel CEO who now does research as a folder, an AGENTS.md, and an agent CLI — no knowledge graph, no UI.",
    superBio: [
      "Guillermo Rauch has spent twenty years making the default path for building for the web. Socket.io, Next.js via Vercel, v0, AI SDK. He is as inside the AI-product machine as anyone in this file. The reason he belongs next to Tobi and Simon is a specific public habit: he started doing research with agent CLIs against the filesystem. A research/ folder. An AGENTS.md that describes the format he likes. Launch the agent, ask a question, let it find prior sessions by reading files.",
      "That is not a product announcement. It is a practitioner telling you the fancy apps lost to grep. Vercel still ships fancy apps. The CEO's research workflow does not use them. Hold both facts; they are the lesson. Frameworks and platforms are for users. For yourself, own the context and keep it in git.",
    ],
    whyThisPerson:
      "A large-tech CEO whose personal workflow agrees with the hidden gems, not with the enterprise pitch deck. Calibration device.",
    collabModel:
      "Agent CLI + folder + AGENTS.md. Prior art is files. Ask the agent to correlate sessions. No extra UI.",
    reasoningStyle:
      "Ship platforms, work in files. If the agent cannot find it with the filesystem, you overbuilt the memory layer.",
    coreLessons: [
      {
        title: "Research is a directory",
        insight:
          "A folder and a convention beat a knowledge graph you will not maintain.",
      },
      {
        title: "AGENTS.md is house style for machines",
        insight:
          "Tell the agent how you like artifacts shaped. That is cheaper than correcting it every session.",
      },
    ],
    resources: [
      {
        name: "Vercel AI SDK",
        kind: "repo",
        url: "https://github.com/vercel/ai",
        note: "The product side. Contrast with the filesystem research workflow he describes on X.",
      },
      {
        name: "AGENTS.md",
        kind: "docs",
        url: "https://agents.md",
        note: "The emerging standard for repo-level agent instructions, now supported across Copilot, Codex, Gemini, Cursor.",
      },
    ],
    quotes: [],
    related: ["tobi-lutke", "lee-robinson", "simon-willison", "addy-osmani"],
    twitter: "https://x.com/rauchg",
    github: "https://github.com/rauchg",
    website: "https://rauchg.com",
  },
  {
    slug: "andrej-karpathy",
    name: "Andrej Karpathy",
    handle: "karpathy",
    title: "AI researcher; formerly Director of AI, Tesla; OpenAI founding member",
    company: "Independent / Eureka Labs",
    previous: ["OpenAI", "Tesla", "Stanford"],
    tier: "lab",
    schoolIds: ["verify-or-do-not-ship"],
    oneLiner:
      "Named vibe coding so the rest of this directory could have an antonym — then kept teaching people how models actually learn, including their terror of exceptions.",
    superBio: [
      "Andrej Karpathy is not a Cursor power-user influencer. He is the person who coined 'vibe coding' in February 2025: prompt until the code exists and forget that it exists. The term leaked until it meant 'any AI-assisted programming.' Simon Willison and this directory use the original meaning on purpose. We need a word for unreviewed prototype output. Karpathy gave us one, three weeks before Claude Code shipped.",
      "His other gift to agent engineers is diagnostic. He has described models as mortally terrified of exceptions — they will swallow errors rather than let a bad state fail loudly. Armin built an essay on that observation. If you are encoding judgment into skills, one of the skills is: do not let the model 'handle' an invariant. Karpathy also remains the best public teacher of what is actually happening when you train and sample these systems, which is the missing layer under a lot of harness folklore.",
    ],
    whyThisPerson:
      "Not a hidden gem. A naming gem. Without a precise definition of vibe coding, every serious workflow in this file gets flattened into the same joke.",
    collabModel:
      "Use vibe coding on purpose for prototypes. Do not confuse it with production. Understand the model's training biases (exception fear, sycophancy) so your harness can counteract them.",
    reasoningStyle:
      "First principles of deep learning, then jokes that become terminology. Separate play from engineering.",
    coreLessons: [
      {
        title: "Vibe coding is a mode, not a career",
        insight:
          "Forgetting the code exists is valid for a prototype and malpractice for a payment system. Keep the word narrow.",
      },
      {
        title: "Models fear exceptions",
        insight:
          "They will add fallbacks instead of making bad states impossible. Your playbooks have to forbid that, or loops will enshrine it.",
      },
    ],
    resources: [
      {
        name: "Karpathy on X",
        kind: "thread",
        url: "https://x.com/karpathy",
        note: "The vibe coding coinage and ongoing model-behavior notes live here.",
      },
    ],
    quotes: [],
    related: ["armin-ronacher", "simon-willison", "lee-robinson", "sean-grove"],
    twitter: "https://x.com/karpathy",
    github: "https://github.com/karpathy",
    website: "https://karpathy.ai",
  },
];
