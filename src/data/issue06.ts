import type { Engineer } from "./types";

export const issue06Engineers: Engineer[] = [
  {
    slug: "walden-yan",
    name: "Walden Yan",
    handle: "walden_yan",
    title: "Co-founder and Chief Product Officer",
    company: "Cognition (Devin / Windsurf)",
    previous: [],
    tier: "lab",
    schoolIds: ["own-the-context", "harness-loops", "verify-or-do-not-ship"],
    oneLiner:
      "Coined context engineering, then watched Devin go from 16% to 80% of Cognition's own commits — and published why writes stay single-threaded, review is a different agent, and vibe coding decays the tree toward your worst engineer.",
    superBio: [
      "Walden Yan is Cognition's CPO and the person the industry credits with popularizing 'context engineering' as the actual job once prompt tricks stopped scaling. A year ago his public advice was: do not build multi-agents, do the window. By April 2026 he had walked some of that back — not into a swarm fashion show, but into a few setups that survive production: a coder and a reviewer that are not the same session, a manager that delegates to isolated VMs, a 'smart friend' that escalates the hard bits to an expensive model.",
      "The Latent Space episode with Cole Murray is the craft dump. Devin's brain is not the machine. Full VMs and snapshots, not just Docker, because repo setup and secrets are still the hard problem. Video verification for the 'I know it works' merge. GitHub as the UX, not a PR dumped at the end. Devin Review comments on the diff and catches ~2 bugs per PR, 58% of them severe, even though it is 'the same model looking at the same code' — because the window and the incentive are different. Dynamic workflows: a deterministic Python script fans out sessions, hashes prompts so resumes replay, pipes structured results between stages.",
      "The failure mode he and Cole name is the one this directory exists to prevent. Unaudited AI coding cements the worst engineer's patterns; the next agent copies them; you get twelve date formatters. Writes stay single-threaded for a reason. Spec-to-PR is real only if the tree still has a quality gradient. Pair with Scott Wu (async juniors) — Walden is the infra and the warning.",
    ],
    whyThisPerson:
      "Scott Wu is the product thesis. Walden is the operating system: context first, then the few multi-agent patterns that do not lie. Required after anyone quotes 80% of commits.",
    collabModel:
      "Background agent in a full VM. Spec to PR on GitHub. Separate review agent on the diff. Parallel reads, single-threaded writes. Deterministic workflow scripts when you need fan-out. Memory and playbooks from past sessions.",
    reasoningStyle:
      "Context engineering before choreography. Multi-agent only where isolation or disagreement is the point. Measure merge speed, not demo wow. Guard the tree against reward-hacking patterns.",
    coreLessons: [
      {
        title: "Context engineering is the job",
        insight:
          "Most 'multi-agent' pitches are still a window problem. Get the context right before you hire a coordinator.",
      },
      {
        title: "Review is a different session",
        insight:
          "Same weights, different incentive and a smaller diff. Devin Review's bug catch rate is the empirical case for Theo Luan's implementer-is-biased claim.",
      },
      {
        title: "The tree regresses to your worst engineer",
        insight:
          "Unaudited agent code becomes the new style guide. Scheduled cleanup, lint against AI smells, keep writes coherent. 80% of commits is only a win if quality holds.",
      },
    ],
    resources: [
      {
        name: "The Age of Async Agents",
        kind: "talk",
        url: "https://www.latent.space/p/cognition",
        note: "With Cole Murray. Context engineering, 16→80%, review agent, VM vs Docker.",
      },
      {
        name: "Devin Dynamic Workflows",
        kind: "docs",
        url: "https://docs.devin.ai/work-with-devin/dynamic-workflows",
        note: "Deterministic Python orchestrating many sessions. Resume by prompt hash.",
      },
    ],
    quotes: [
      {
        text: "A year ago, I'd tell people to not build multi-agents and to focus on context engineering fundamentals. Today, many sexy ideas are still impractical, but we've found some setups that actually work.",
        source: "Walden Yan on X, Apr 2026",
        url: "https://www.latent.space/p/cognition",
      },
    ],
    related: ["scott-wu", "theo-luan", "eno-reyes", "cristina-poncela"],
    twitter: "https://x.com/walden_yan",
    website: "https://cognition.ai",
  },
  {
    slug: "saoud-rizwan",
    name: "Saoud Rizwan",
    handle: "saoudrizwan",
    title: "Founder and CEO",
    company: "Cline",
    previous: ["Built Claude-Dev in a Terre Haute garage, Anthropic hackathon 2024"],
    tier: "lab",
    schoolIds: ["plan-then-oneshot", "own-the-context", "spec-is-the-code"],
    oneLiner:
      "The open-source founder who productized what users were already doing: Plan mode fills the window and asks questions, Act mode is allowed to touch the tree — and the developer keeps the keys to model, cost, and audit.",
    superBio: [
      "Saoud Rizwan built Cline (then Claude-Dev) for an Anthropic hackathon from his mother's garage in Terre Haute. It did not win. The open-source release did: an agent that can read the repo, edit, run commands, and call MCP tools under supervision, with the user bringing their own model and seeing every action. That last part is the ideology. Auditable agents. No vendor lock on the weights. You pay the API bill so you can see it.",
      "Plan and Act is the method, and he will take credit for shipping it first as a first-class UX. Users were already asking the agent to write a markdown architecture plan before editing. Cline made the modes a switch: Plan is exploratory, read-only, question-heavy, fill the context; Act looks at the plan and executes. Different models per mode if you want. It is Boris's plan-then-one-shot as a product primitive instead of a personal ritual.",
      "The 2026 talks get darker in a useful way. AI-generated drive-by PRs are wrecking Zig, curl, tldraw, LiteLLM maintainers. Proprietary agents are a cost and lock-in spiral. His answer is not 'stop using agents.' It is open, inspectable loops and spec-driven enterprise work (the LG CNS collab). If Lauren encodes judgment in skills, Saoud encodes it in a mode switch and a transparent trace.",
    ],
    whyThisPerson:
      "The open-source counterweight to closed factories. Plan/Act is now everyone's UX; he shipped it because Discord users invented it. Pair with Harper (spec loop) and Boris (plan mode).",
    collabModel:
      "Human-gated mode switch. Plan until the questions are answered. Act with full tools. Bring your own model. Watch the trace. Spec-driven when the org needs a platform, not a chat.",
    reasoningStyle:
      "Watch what power users already do, then make it the default so new users do not have to invent the ritual. Transparency over magic.",
    coreLessons: [
      {
        title: "Plan is a mode, not a prompt prefix",
        insight:
          "If the user has to type 'don't edit yet,' the product failed. Read-only exploration with a permission upgrade is the guardrail.",
      },
      {
        title: "Users invent the workflow first",
        insight:
          "Discord was already making markdown plans. Product work was translating that into a switch. Watch the organic ritual before you invent a framework.",
      },
      {
        title: "Audit beats vibe",
        insight:
          "Own the model, the bill, and the trace. Drive-by agent PRs are a maintainer emergency. Open loops are how you keep the supply chain.",
      },
    ],
    resources: [
      {
        name: "Cline",
        kind: "repo",
        url: "https://github.com/cline/cline",
        note: "The agent. Plan/Act, MCP, BYO model. Read the mode split.",
      },
      {
        name: "Cline: The Open Source Code Agent",
        kind: "talk",
        url: "https://www.latent.space/p/cline",
        note: "With Nik Pash. Origin of Plan/Act. Latent Space.",
      },
    ],
    quotes: [
      {
        text: "I'm going to take the credit for coming up with plan and act first. People just came up with this workflow for themselves organically.",
        source: "Latent Space, Cline episode",
        url: "https://www.latent.space/p/cline",
      },
    ],
    related: ["boris-cherny", "harper-reed", "paul-gauthier", "dax-raad"],
    twitter: "https://x.com/saoudrizwan",
    github: "https://github.com/saoudrizwan",
    website: "https://cline.bot",
  },
  {
    slug: "lance-martin",
    name: "Lance Martin",
    handle: "rlancemartin",
    title: "Member of Technical Staff, Claude Platform",
    company: "Anthropic",
    previous: [
      "LangChain (LangGraph, Academy, RAG From Scratch)",
      "Uber ATG / Ike / Nuro (perception)",
      "PhD, Stanford",
    ],
    tier: "lab",
    schoolIds: ["own-the-context", "harness-loops", "verify-or-do-not-ship"],
    oneLiner:
      "The LangGraph teacher now on Claude's agent platform: reduce, offload, isolate — and do not graduate to an 'agent' until a workflow with a known path has failed.",
    superBio: [
      "Lance Martin did computer vision for autonomous vehicles, then became the person who taught a generation to build RAG and graph-shaped agents at LangChain (LangGraph, LangChain Academy, auto-evaluator, RAG From Scratch). He is now at Anthropic on Claude Platform — Managed Agents, the claude-api skill in Claude Code — which is the interesting career rhyme: the man who warned you not to start with a swarm now ships the infra for agents that run for a long time.",
      "The context-engineering playbook is three verbs. Reduce: summarize trajectories so the window does not drown. Offload: tool results go to the filesystem; the action space is bash, not 100 JSON tools. Isolate: token-heavy subtasks get their own agent and return a paragraph. Workflows (predetermined steps) vs agents (the model chooses). Start with a prompt. Then a workflow. Then an agent. Then multi-agent. Fine-tune last. That ordering is the bitter lesson applied to your architecture ego.",
      "By 2026 the Anthropic talks extend the same concerns to long-horizon managed agents: externalized session context, separate-context verification, in-band memory, out-of-band 'dreaming.' He is Dex Horthy with a LangGraph syllabus and a lab badge. If you only remember one ladder: prompt → workflow → agent → multi-agent, and you will skip two hype cycles.",
    ],
    whyThisPerson:
      "The curriculum behind half the 'I built an agent' posts, now implementing the long-horizon version at Anthropic. Pair with Dex (12-factor) and John Yang (tools have a half-life).",
    collabModel:
      "Known-path work is a workflow graph. Open-ended work is an agent with few atomic tools. Sub-agents for isolation. Filesystem as the overflow. Verify in a separate context. Do not skip rungs.",
    reasoningStyle:
      "Simplicity as a production constraint, not an aesthetic. Exhaust the cheaper control flow before you give the model the keys. Measure with evals you built (he did auto-evaluator for a reason).",
    coreLessons: [
      {
        title: "Reduce, offload, isolate",
        insight:
          "Summarize the trace. Put big tool output on disk. Give sub-agents their own window. Context engineering is logistics.",
      },
      {
        title: "Workflows before agents",
        insight:
          "If you can write the steps, write the steps. Agents are for paths you cannot name in advance. Skipping to a swarm is how you buy a demo.",
      },
      {
        title: "Offload the action space",
        insight:
          "A hundred tools bloat the prompt. Bash plus a few atomics lets the model invent the rest. Same lesson as CodeAct and mini-swe-agent, from the graph-framework side.",
      },
    ],
    resources: [
      {
        name: "LangChain Academy / RAG From Scratch",
        kind: "course",
        url: "https://academy.langchain.com",
        note: "The syllabus. Controllable agents, evals, not just a ReAct loop.",
      },
      {
        name: "AI Agent Harness (High Signal interview notes)",
        kind: "essay",
        url: "https://hugobowne.substack.com/p/ai-agent-harness-3-principles-for",
        note: "Reduce / offload / isolate and the prompt→workflow→agent ladder.",
      },
    ],
    quotes: [
      {
        text: "Start simple: prompt engineering, then workflows, then agents only if the problem truly requires open-ended adaptation.",
        source: "Engineering principles for production LLM systems (Lance Martin / LangChain)",
      },
    ],
    related: ["dex-horthy", "john-yang", "chip-huyen", "boris-cherny"],
    twitter: "https://x.com/rlancemartin",
    github: "https://github.com/rlancemartin",
    website: "https://www.linkedin.com/in/lance-martin-64a21a46/",
  },
  {
    slug: "claire-vo",
    name: "Claire Vo",
    handle: "clairevo",
    title: "Founder; creator of ChatPRD and How I AI",
    company: "ChatPRD",
    previous: ["CPO / founder roles across product orgs"],
    tier: "hidden-gem",
    schoolIds: ["harness-loops", "spec-is-the-code", "encode-judgment"],
    oneLiner:
      "The PM who treats agents like employees on a shift: heartbeat, cron, hook, or goal — then built a morning PR babysitter and a Friday job that proposes skills only after they pass against main.",
    superBio: [
      "Claire Vo is not a lab coding-agent engineer, which is exactly why she is in this file. She founded ChatPRD, hosts How I AI, and publishes the missing outer loop for product orgs: specs as markdown in git so an agent can grep them, background agents anyone can ping from Slack, and loops that do not wait for her to sit down. If Lauren farms Slack bugs into Grok Bots, Claire farms aging PRs into a 10:15 a.m. Claude Code routine.",
      "The June 2026 episode 'Designing AI Agent Loops' is the method. A loop is repeated or event-triggered prompting around a defined job. Four triggers she steals from classical automation: heartbeat, cron, hook, goal. Onboarding an agent looks like onboarding a person — job, tools, permissions, workspace, skills, state, subagents. Daily aging-PR review: PRs older than 12 hours get babysat until checks are green, or Slack yells at humans. Friday Codex job: scan recent PRs for missing skills, then spawn validation threads that must prove the skill against the base branch. chat-smoke-cli was a live hit. Suggestions without proof do not count.",
      "She is blunt about cost. Nested goal-loops burn tokens and will happily keep going if 'done' is mushy. She uses Codex to draft better goal definitions because evaluation logic matters more in loops than in chat. Merge Mommy (Vercel Eve) scores PRs on risk and only pages her for the scary ones. Pair with Zach Davis (skills in the LaunchDarkly tree) and Jason Liu (heartbeats). Claire is the PM-shaped outer loop.",
    ],
    whyThisPerson:
      "Hidden from the SWE-bench discourse, central to how non-IC product people actually run agents. The loop taxonomy and 'validate the skill against main' rule are stealable tonight.",
    collabModel:
      "Specs in the repo. Scheduled routines on a machine that stays awake. Connectors to GitHub and Slack. Subagents with goals. Human merge and human taste. Measure whether the loop is worth the bill.",
    reasoningStyle:
      "Treat prompting as an operating procedure. Prefer jobs that are repetitive, inspectable, and easy to validate. If you cannot say what done looks like, you do not have a loop. You have a furnace.",
    coreLessons: [
      {
        title: "Loops, not pokes",
        insight:
          "Heartbeat, cron, hook, goal. Once the prompting depends on you being at the keyboard, it is still a chatbot.",
      },
      {
        title: "A skill is not a skill until it runs on main",
        insight:
          "Do not accept a proposed playbook. Spawn a validation agent with a goal. Evidence, then install.",
      },
      {
        title: "Unbounded goals are a token furnace",
        insight:
          "Fan-out plus mushy done is how Friday jobs become invoices. Draft the success criteria as carefully as the prompt.",
      },
    ],
    resources: [
      {
        name: "Designing AI Agent Loops in Claude Code and Codex",
        kind: "talk",
        url: "https://www.chatprd.ai/how-i-ai/how-i-ai-designing-ai-agent-loops-in-claude-code-and-codex",
        note: "Primary method. Four triggers, PR babysitter, skill validation fan-out.",
      },
      {
        name: "3 Workflows to Make Your Codebase AI-Ready",
        kind: "talk",
        url: "https://www.chatprd.ai/how-i-ai/3-workflows-to-make-your-codebase-ai-ready-with-claire-vo-zach-davis",
        note: "With Zach Davis. Specs in git, background agents, compound skills.",
      },
    ],
    quotes: [
      {
        text: "A loop is repeated or event-triggered prompting around a defined job. The prompting no longer depends on a person sitting at the keyboard.",
        source: "Designing AI Agent Loops, How I AI, Jun 2026",
        url: "https://www.chatprd.ai/how-i-ai/how-i-ai-designing-ai-agent-loops-in-claude-code-and-codex",
      },
    ],
    related: ["jason-liu", "zach-davis", "kieran-klaassen", "lauren-tan"],
    twitter: "https://x.com/clairevo",
    website: "https://clairevo.com",
    linkedin: "https://www.linkedin.com/in/clairevo",
  },
];
