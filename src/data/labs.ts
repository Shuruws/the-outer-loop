import type { Engineer } from "./types";

export const labEngineers: Engineer[] = [
  {
    slug: "lauren-tan",
    name: "Lauren Tan",
    handle: "poteto",
    title: "Principal Engineer, Grok Bot and Cursor",
    company: "SpaceXAI",
    previous: [
      "Member of Technical Staff, Cursor",
      "Staff Software Engineer, React Core, Meta",
      "Engineering Manager, React Core, Meta",
      "Engineering Manager, Studio UI, Netflix",
    ],
    location: "Los Angeles",
    tier: "archetype",
    schoolIds: [
      "encode-judgment",
      "harness-loops",
      "verify-or-do-not-ship",
    ],
    oneLiner:
      "The engineer who turned a personal Cursor workflow into pstack, then ran it as a 24/7 factory of cloud agents and Grok Bots.",
    superBio: [
      "Lauren Tan is the reference specimen for this directory. She is a Principal Engineer at SpaceXAI working on Grok Bot and Cursor after joining Cursor as Member of Technical Staff and coming across in the acquisition. She is also on the React Core team, where she led the ground-up rewrite of React Compiler — SSA, hoisting, a custom CFG HIR — and onboarded it at Meta with real product numbers: faster interactions, faster loads, no memory regression on Instagram Web, Threads, and facebook.com.",
      "The career behind the agent work is not a prompt-hacking arc. DockYard and Ember addons, Netflix Studio programming tools that replaced manual content buying, then Meta: React Server Components into production, React 18 as an EM, React Compiler as an IC. She left Meta in early 2026 after shaping the React org's AI strategy, joined Cursor on a Monday, and by day two was teaching agents to profile, trace, and hillclimb Cursor 3 client performance.",
      "What she publishes is more useful than the PR counts, even the 1,000-a-month ones. pstack is her engineering culture compiled: 23 workflow skills, 21 principles, 22 playbooks. The heart is /poteto-mode, a router that copies a playbook into the task list verbatim so the model cannot quietly drop the verification steps. Agents, she says, are new hires in a constant state of amnesia and idiocy. Capable, teachable, and blank. Skills, tools, and long-term memory are how you approximate a team that actually learns.",
      "The operating system around pstack is the part most people miss. Grok Bot routines farm Slack bugs, X complaints, and feature ideas — that is the outer loop, the human job of deciding what to point the factory at. Cloud agents run /goal, /loop, and /swarm overnight. A Chief of Staff bot knows the rest of the fleet. She does not write most of the code. She reviews a fleet against rules she wrote herself.",
    ],
    whyThisPerson:
      "She is the rare person who both ships the products (Cursor 3, Grok Bot, React Compiler) and open-sources the exact skills her own eng team used 10,000 times in a week. Not a thread. A working methodology.",
    collabModel:
      "Human owns the outer loop: what to build, which playbook, what evidence counts. A sticky /poteto-mode session routes to the right skill. Subagents get different models by role — implementation, investigation, judgment, review. Cloud agents and Grok Bots run the inner loop to a verification gate. She is head chef, not line cook.",
    reasoningStyle:
      "Depth before breadth. Match the task to a named playbook. Investigate with /how and /why before editing. Settle types and data structures before crossing function boundaries. Demand runtime evidence that matches the change, not a green build. Multi-model adversarial review via /interrogate. Then, and only then, parallelize.",
    coreLessons: [
      {
        title: "Agents are amnesiac new hires",
        insight:
          "They do not remember what you tell them and they never really learn. Equip them with rules, skills, tools, and memory. Treat every failure mode as curriculum.",
      },
      {
        title: "Maximum impact, least code",
        insight:
          "Throughput without quality is a team of slop artists. pstack's objective function is the opposite of LOC. If you want to go fast, go deep first.",
      },
      {
        title: "Trust before you parallelize",
        insight:
          "Trying to fan out agents you cannot trust wastes tokens and injects slop. Make one agent own a problem end to end, including verification, then scale the factory.",
      },
      {
        title: "Verification must match the change",
        insight:
          "A passing build is not evidence. CLI changes run the command. UI changes walk the flow. Perf changes compare traces. Storage changes read the value back.",
      },
      {
        title: "You still own the outer loop",
        insight:
          "Bots farm context. You decide what to point the factory at next. Cloud agents can work while you sleep only if the playbook already contains your taste.",
      },
    ],
    resources: [
      {
        name: "pstack",
        kind: "plugin",
        url: "https://cursor.com/marketplace/cursor/pstack",
        note: "Install with /add-plugin pstack. Core command is /poteto-mode. Also loads as SKILL.md in Claude Code and Codex.",
      },
      {
        name: "pstack source in cursor/plugins",
        kind: "repo",
        url: "https://github.com/cursor/plugins/tree/main/pstack",
        note: "Read poteto-mode/SKILL.md. The playbook-copy-verbatim rule is the whole trick.",
      },
      {
        name: "How I Use Cursor",
        kind: "essay",
        url: "https://x.com/poteto/status/2058975157503570132",
        note: "Origin thread for pstack. Failure modes turned into skills. Multi-model, depth-first orchestration.",
      },
      {
        name: "Cloud agents productivity writeup",
        kind: "thread",
        url: "https://www.linkedin.com/posts/laurenelizabethtan_cloud-agents-and-cursor-harness-improvements-activity-7495972438262853632-bLQ5",
        note: "1,000 PRs/month workflow: pstack, Grok Bot outer loop, /goal /loop /swarm, cloud agents overnight.",
      },
    ],
    quotes: [
      {
        text: "Agents are like new hires in a constant state of amnesia and idiocy. They don't remember what you tell them, and they never really learn anything new. But we can equip them with rules, skills, tools, and long term memory which can approximate that.",
        source: "pstack launch, May 2026",
        url: "https://www.linkedin.com/posts/laurenelizabethtan_cursor-pstack-the-skills-behind-10000-activity-7465439429042737152-ADbv",
      },
      {
        text: "The goal isn't more code. It's maximum impact with the least amount of code.",
        source: "pstack launch",
      },
    ],
    related: [
      "boris-cherny",
      "jesse-vincent",
      "geoffrey-huntley",
      "lee-robinson",
      "armin-ronacher",
    ],
    twitter: "https://x.com/poteto",
    linkedin: "https://www.linkedin.com/in/laurenelizabethtan",
    github: "https://github.com/poteto",
  },
  {
    slug: "boris-cherny",
    name: "Boris Cherny",
    handle: "bcherny",
    title: "Head of Claude Code",
    company: "Anthropic",
    previous: [
      "Principal Engineer, Meta",
      "Author, Programming TypeScript",
    ],
    location: "San Francisco",
    tier: "lab",
    schoolIds: ["plan-then-oneshot", "harness-loops", "verify-or-do-not-ship"],
    oneLiner:
      "Creator of Claude Code. Runs five terminal Claudes like air traffic control, and has said the quiet part: he does not prompt Claude anymore — loops do.",
    superBio: [
      "Boris Cherny joined Anthropic in 2024 after five years as a Principal Engineer at Meta and after writing Programming TypeScript, the book a generation of frontend engineers actually used. Claude Code started as a side project. It became how Anthropic builds software, then a product, then the default mental model for agentic coding in a terminal.",
      "His January 2026 workflow thread is the most copied operating manual in this field. Five local Claude instances in separate checkouts, five to ten more on claude.ai. Start in plan mode. Iterate the plan with a human. Then one-shot the implementation — 'once there is a good plan, it will one-shot almost every time.' He posted receipts: on the order of 200–300 PRs a month, 259 in a 30-day window. He also said Claude Code writes 100% of the code that gets committed. Planning, architecture, and review stay human.",
      "The architectural lesson underneath the theater is almost aggressively simple. The team tried RAG, local vector databases, recursive indexing. Agentic search — glob and grep, the way Instagram engineers searched when click-to-definition was broken — beat all of it. CLAUDE.md is living team memory. Subagents isolate context. LSP is for high-precision symbol work, not for retrieving the universe. The harness is a while(tool_call) loop. No DAG required.",
    ],
    whyThisPerson:
      "He builds the tool the labs actually use, then publishes the exact personal workflow at a fidelity most staff engineers would not share. The grep-not-RAG result is now industry folklore because he said it out loud.",
    collabModel:
      "Plan with the human. Execute with the model. Many sessions in parallel, each a separate checkout so merges stay sane. Shift work between local and cloud. Living CLAUDE.md for team knowledge. Auto mode for long-running work once safety evals exist.",
    reasoningStyle:
      "Search, don't index. Put judgment in the plan, not in a running commentary during implementation. Prefer a good plan plus a one-shot over a long chat that slowly loses the plot. Keep the architecture of the agent stupid so the model can be smart.",
    coreLessons: [
      {
        title: "A good plan one-shots",
        insight:
          "Spend human attention on the plan. Once it is right, a frontier model implements it. Most people invert this and babysit the code while under-specifying the goal.",
      },
      {
        title: "Agentic search beat RAG",
        insight:
          "Fresh grep over a living repo outperformed embeddings for coding. Indexes go stale and permissions get weird. Let the model go look.",
      },
      {
        title: "Write loops that prompt the model",
        insight:
          "The endgame he named: you stop prompting. You write the loop, the stop condition, and the memory. The model becomes a worker inside your harness.",
      },
      {
        title: "CLAUDE.md is team memory",
        insight:
          "Put what you keep repeating into a file the next session will read. That is how a lab of people share an amnesiac intern without going insane.",
      },
    ],
    resources: [
      {
        name: "Building Claude Code with Boris Cherny",
        kind: "talk",
        url: "https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny",
        note: "Pragmatic Engineer interview covering parallel agents, grep vs RAG, and the evolving job of the engineer.",
      },
      {
        name: "Programming TypeScript",
        kind: "book",
        url: "https://www.oreilly.com/library/view/programming-typescript/9781492047643/",
        note: "The pre-agent credential. He was already obsessed with making types carry judgment.",
      },
    ],
    quotes: [
      {
        text: "I don't prompt Claude anymore. I have loops running that prompt Claude and figuring out what to do. My job is to write loops.",
        source: "Quoted by Armin Ronacher, The Coming Loop",
        url: "https://lucumr.pocoo.org/2026/6/23/the-coming-loop/",
      },
      {
        text: "Once there is a good plan, it will one-shot the implementation almost every time.",
        source: "Pragmatic Engineer interview",
      },
    ],
    related: ["cat-wu", "thariq-shihipar", "thorsten-ball", "armin-ronacher"],
    twitter: "https://x.com/bcherny",
    github: "https://github.com/bcherny",
  },
  {
    slug: "cat-wu",
    name: "Cat Wu",
    handle: "_catwu",
    title: "Head of Product, Claude Code",
    company: "Anthropic",
    previous: ["Product and investing roles before Anthropic"],
    tier: "lab",
    schoolIds: ["plan-then-oneshot", "harness-loops"],
    oneLiner:
      "The product mind behind Claude Code's shift from supervised terminal buddy to org-level coworker — Claude Tag, auto mode, and 65% of internal product PRs.",
    superBio: [
      "Cat Wu is Head of Product for Claude Code. In public she is less quoted than Boris and more precise about what actually changed inside Anthropic. With Thariq Shihipar, she has been the person explaining Claude Tag, Claude Fable, auto mode, and the cultural shift: implementation got cheap, so stop negotiating against yourself on the size of the idea.",
      "The number she is willing to say out loud: the internal version of Claude Tag lands about 65% of product-engineering PRs. Claude Code remains the place for the hardest interactive work. Tag is for shared, proactive work in Slack — monitor the channel, pick up bugs, keep team memory, open PRs from a hosted sandbox under an agent identity. Multiplayer by default, which is the thing Harper Reed was begging for in 2025.",
      "She is also the adult in the room on auto mode. Almost everyone at Anthropic uses it for long-running work. That is only sane because they invested in thousands of evals, external red teams, and permission design. Helpfulness is an attack surface. 'Push this' should not grant git push forever.",
    ],
    whyThisPerson:
      "Hidden in plain sight. Founders get the threads; she publishes how a lab actually delegates, reviews, and stays secure when agents are on the team roster.",
    collabModel:
      "Split surfaces by social context. Hard, interactive work in Claude Code with a human in the loop. Shared work in Slack via Tag, with channel memory and service-account tools. Core systems still have human code owners who read every diff. Auto mode for long jobs after the safety case exists.",
    reasoningStyle:
      "Product sense over waterfall. Prototype because the rewrite is cheap if tests are strong. Invest in verification and red teams proportional to how unsupervised you want to go. Make the agent a teammate with identity, memory, and permissions — not a chat widget.",
    coreLessons: [
      {
        title: "Multiplayer is the missing interface",
        insight:
          "Single-player agents collide in git and hide context. A channel-native agent with shared memory is how a team actually works with a model.",
      },
      {
        title: "Auto mode is an eval problem",
        insight:
          "Long-running autonomy is not a prompt. It is red teams, permission design, and a Swiss-cheese defense against prompt injection from your own feedback channels.",
      },
      {
        title: "Stop negotiating against yourself",
        insight:
          "When implementation is cheap, the constraint is ambition and taste. Build the bigger thing you would have scoped down last year.",
      },
    ],
    resources: [
      {
        name: "Fireside with Cat and Thariq",
        kind: "talk",
        url: "https://simonwillison.net/2026/Jul/21/cat-and-thariq/",
        note: "Simon Willison's notes from AI Engineer World's Fair. Tag, Fable, evals, tool design, how Anthropic works.",
      },
      {
        name: "Introducing Claude Tag",
        kind: "docs",
        url: "https://www.anthropic.com/news/introducing-claude-tag",
        note: "The product that makes the 65% PR claim make sense: agent identity, channel memory, hosted sandbox.",
      },
    ],
    quotes: [
      {
        text: "Claude Tag currently lands sixty-five percent of our product eng PRs.",
        source: "AI Engineer World's Fair, with Thariq Shihipar",
        url: "https://simonwillison.net/2026/Jul/21/cat-and-thariq/",
      },
    ],
    related: ["thariq-shihipar", "boris-cherny", "lauren-tan", "simon-willison"],
    twitter: "https://x.com/_catwu",
  },
  {
    slug: "thariq-shihipar",
    name: "Thariq Shihipar",
    handle: "trq212",
    title: "Engineer, Claude Code",
    company: "Anthropic",
    previous: [
      "Founder, One More Multiverse",
      "Co-founder, PubPub",
      "Co-founder, Chime",
    ],
    tier: "hidden-gem",
    schoolIds: ["plan-then-oneshot", "own-the-context"],
    oneLiner:
      "Claude Code engineer who talks about tool design, Fable, and why you should not build your own Slack coding bot unless you enjoy prompt injection.",
    superBio: [
      "Thariq Shihipar is the Claude Code engineer who shows up next to Cat Wu and actually answers the architecture questions. Serial founder before Anthropic — PubPub, Chime, One More Multiverse — which is visible in how he talks about multiplayer, permissions, and not reinventing collaboration infrastructure.",
      "His most useful public stance is unglamorous: Claude Tag uses auto mode on purpose, and the reason you should not roll your own Slack agent is that your users will prompt-inject you through the feedback channel. They RL against this. They treat security as Swiss cheese: many imperfect layers. He also talks about code review as a first-class product surface — artifacts that explain a change so other humans can review what the agent did.",
      "If Boris is the personal workflow and Cat is the org workflow, Thariq is the harness: how tools are designed, how Fable changes long-running behavior, how evals and review bots sit on every Anthropic repo.",
    ],
    whyThisPerson:
      "True hidden gem. Lower follower count than the head of Claude Code, higher density on security, tool design, and why 'just wrap the API in Slack' is how you get owned.",
    collabModel:
      "Agent as a service identity with org-configured tools. Review artifacts for humans. Don't DIY the collaboration surface. Use the hosted sandbox so credentials live outside the model's reach.",
    reasoningStyle:
      "Threat-model the agent. Design tools as if the model is helpful, proactive, and therefore dangerous. Prefer platform primitives (auto mode, agent proxy, evals) over a clever bot you cannot secure.",
    coreLessons: [
      {
        title: "Do not build the Slackbot",
        insight:
          "A feedback channel the bot can read is an injection surface. Permissions, identity, and sandboxing are the product, not a weekend wrapper.",
      },
      {
        title: "Review is a product",
        insight:
          "When agents open PRs, humans need artifacts that explain the change. Invest in review tooling as much as generation.",
      },
      {
        title: "Helpfulness is an attack",
        insight:
          "A model that wants to complete the user's request will take git push too far if the tool design lets it. Scope permissions to the request.",
      },
    ],
    resources: [
      {
        name: "Fireside with Cat and Thariq",
        kind: "talk",
        url: "https://simonwillison.net/2026/Jul/21/cat-and-thariq/",
        note: "Primary public source for his tool-design and security comments.",
      },
    ],
    quotes: [
      {
        text: "Please, you probably shouldn't build your own Slackbot. There are so many attack vectors.",
        source: "AI Engineer World's Fair",
        url: "https://simonwillison.net/2026/Jul/21/cat-and-thariq/",
      },
    ],
    related: ["cat-wu", "boris-cherny", "simon-willison", "dex-horthy"],
    twitter: "https://x.com/trq212",
  },
  {
    slug: "lee-robinson",
    name: "Lee Robinson",
    handle: "leerob",
    title: "ML / model behavior",
    company: "Cursor, SpaceXAI",
    previous: ["VP of Developer Experience, Vercel"],
    tier: "lab",
    schoolIds: ["harness-loops"],
    oneLiner:
      "The Vercel DX voice who moved into Cursor model behavior and now talks about recursive model improvement: agents that train the next coding model from Slack.",
    superBio: [
      "Lee Robinson spent years as the public face of Next.js and Vercel developer experience — courses, docs, conference talks, the person who made the default stack feel inevitable. Then he went to Cursor to work on model behavior, and after the SpaceXAI acquisition the talks got stranger and more interesting.",
      "His 2026 AI Engineer talk, Recursive Model Improvement, is not a productivity thread. It is about nested loops: an inner loop of RL and evals, an outer loop of research agents spawned from Slack that file evals, hunt reward hacks, and page humans when infra blips. Composer, git history as a signal, private benches because public ones get forked and gamed. The coding agent, in his telling, wants to become a general agent for knowledge work.",
      "He is useful in this directory as the person standing at the seam between product DX and the factory that produces the models the rest of these engineers ride.",
    ],
    whyThisPerson:
      "Most 'AI coding' voices stop at the editor. Lee now talks about the loop that makes the editor smarter, including agents that do ML research ops. That is the next outer loop after pstack.",
    collabModel:
      "Humans and agents coordinate research ops in Slack. Models improve from traces, textual teacher feedback mid-rollout, and private evals. Product engineers consume the result as Composer / Grok in Cursor.",
    reasoningStyle:
      "Treat evals as an adversarial game. Assume public benches will be hacked. Keep a private Cursor Bench. Use git history. Close the loop from user pain to training signal.",
    coreLessons: [
      {
        title: "The editor is downstream of the training loop",
        insight:
          "Skills and playbooks matter, but so does who is allowed to spawn evals and train the next model. Recursive improvement is an operations problem.",
      },
      {
        title: "Public evals get gamed",
        insight:
          "Reward hacking follows published benches. Private evals plus git history are how a lab keeps a signal.",
      },
    ],
    resources: [
      {
        name: "Recursive Model Improvement",
        kind: "talk",
        url: "https://www.explainx.ai/blog/recursive-model-improvement-lee-robinson-cursor-ai-engineer-2026",
        note: "Recap of the AI Engineer 2026 talk. Nested loops, Slack-spawned ML agents, Composer lineage.",
      },
    ],
    quotes: [],
    related: ["lauren-tan", "boris-cherny", "guillermo-rauch"],
    twitter: "https://x.com/leerob",
    website: "https://leerob.com",
  },
  {
    slug: "sean-grove",
    name: "Sean Grove",
    handle: "sgrove",
    title: "Founder, Linzumi; formerly OpenAI alignment",
    company: "Linzumi",
    previous: [
      "Alignment research, OpenAI (Model Spec)",
      "Founder, OneGraph (acquired by Netlify)",
    ],
    tier: "lab",
    schoolIds: ["spec-is-the-code"],
    oneLiner:
      "The OpenAI alignment researcher who told a room of programmers that code is 10–20% of the value they produce, and that specifications are the new code.",
    superBio: [
      "Sean Grove helped build OpenAI's Model Spec — the living markdown document of what the company wants its models to do — then took that lesson on the road. 'The New Code,' his AI Engineer 2025 keynote, is the cleanest statement of spec-driven development from inside a frontier lab. He later extended it at Everything NYC: express, shape, prove, scale.",
      "The talk is not anti-code. It is a value argument. You gather requirements, think, integrate, debate. The artifact you point to is a repository. He claims that is under-selling the job. The scarce skill is communicating intent so that humans stay aligned and models can be tested against it. Vibe coding feels good because it is communication-first; the mistake is leaving the intent trapped in a chat log.",
      "His later work on Linzumi and spec tools pushes the loop closed: interview the human, generate mockups, detect contradictions, let agents self-correct against the spec. Generate, screenshot, compare, fix. That is a domain where more compute actually helps.",
    ],
    whyThisPerson:
      "He is the lab person who said out loud what Harper, Addy, and Jesse all built toward: the spec is the load-bearing artifact. Direct lineage from OpenAI Model Spec to how you should brief a coding agent.",
    collabModel:
      "Write intent so it is executable. Align humans on the spec first. Make the spec testable — claims, mockups, evals — so agents can be wrong in public. Pour compute on the loop only after proof in the small.",
    reasoningStyle:
      "Communication over implementation. Shape the problem so extra tokens improve results instead of wandering. Prove faithfulness on a small slice before scaling.",
    coreLessons: [
      {
        title: "Code is 10–20% of the value",
        insight:
          "The rest is intent, constraints, and alignment. If you only version the compiled output, you are storing the least important artifact.",
      },
      {
        title: "Make the spec executable",
        insight:
          "Markdown that cannot fail a test is a blog post. Model Spec works because you can sample the model against it. Your product spec needs the same property.",
      },
      {
        title: "Express, shape, prove, scale",
        insight:
          "State what you want. Structure the problem so more tokens help. Verify in the small. Then pour compute.",
      },
    ],
    resources: [
      {
        name: "The New Code",
        kind: "talk",
        url: "https://www.youtube.com/watch?v=8rABwKRsec4",
        note: "AI Engineer 2025 keynote. Start here. Anatomy of a spec using OpenAI Model Spec.",
      },
      {
        name: "OpenAI Model Spec",
        kind: "docs",
        url: "https://github.com/openai/model-spec",
        note: "The existence proof that a markdown spec can be an engineering artifact.",
      },
    ],
    quotes: [
      {
        text: "Code is sort of 10 to 20% of the value that you bring. The other 80 to 90% is in the communication.",
        source: "The New Code, AI Engineer 2025",
        url: "https://www.youtube.com/watch?v=8rABwKRsec4",
      },
    ],
    related: ["harper-reed", "addy-osmani", "jesse-vincent", "hamel-husain"],
    twitter: "https://x.com/sgrove",
    github: "https://github.com/sgrove",
  },
];
