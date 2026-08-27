import type { Engineer } from "./types";

export const issue05Engineers: Engineer[] = [
  {
    slug: "john-yang",
    name: "John Yang",
    handle: "johnbyang",
    title: "CS PhD student; co-creator of SWE-agent and SWE-bench",
    company: "Stanford (ex-Princeton NLP)",
    previous: [
      "M.S.E. Computer Science, Princeton (Karthik Narasimhan)",
      "B.S. Computer Science, UC Berkeley",
    ],
    tier: "lab",
    schoolIds: ["own-the-context", "verify-or-do-not-ship", "harness-loops"],
    oneLiner:
      "The researcher who proved agents need an IDE of their own — then recanted, in public, with 100 lines of Python: once the model is strong, a bash loop beats a custom interface.",
    superBio: [
      "John Yang is a Stanford CS PhD student (Ludwig Schmidt, Diyi Yang) who, at Princeton, co-created SWE-bench and SWE-agent. The 2024 NeurIPS paper is still the cleanest argument that language-model agents are a new kind of user: they do not want your IDE. They want an Agent-Computer Interface. A linter that refuses syntactically broken edits. A file viewer that shows 100 lines, not a cat dump. A search tool that lists matching files instead of drowning the window in snippets. A message when a command succeeds with empty stdout, so the model does not invent failure. Those details moved pass@1 on SWE-bench when 'agent' still meant a ReAct wrapper around a raw shell.",
      "Then the models got good. mini-swe-agent, which the same group now recommends over SWE-agent, is the recantation: about 100 lines of Python, no giant tool catalog, scores north of 74% on SWE-bench Verified. The README is blunt. SWE-agent jump-started the field by emphasizing special interfaces. A year later a lot of that is not needed to build a useful agent. Chip Huyen used SWE-agent as the worked example of environment-plus-tools. John is the person who both built that example and then published the simpler successor.",
      "He is still in the eval business. ProgramBench is the new hard set. A position paper argues coding-agent research is too leaderboard-shaped and not human-centered enough. That is the lab version of Armin's warning: optimizing the inner loop on GitHub issues is not the same as making software a human would keep.",
    ],
    whyThisPerson:
      "Hidden from Twitter coding discourse, load-bearing for everyone who says 'just give it bash.' He measured the interface, then measured its obsolescence. Pair with Thorsten (three tools) and Xingyao (CodeAct).",
    collabModel:
      "Sandbox, thought-then-command, observation back into the window. Design the tools for the model's working memory, not for a human IDE. When the model can search and edit well enough, delete the special tools. Keep the eval.",
    reasoningStyle:
      "Interface ablation as science. If a 100-line loop matches a year of ACI work, the lesson is model progress — and that ceremony around tools has a half-life. Benchmarks are necessary and insufficient.",
    coreLessons: [
      {
        title: "Agents are a new end user",
        insight:
          "They need interfaces built for their context window, not a human IDE with the chrome stripped. 100-line viewers, lint-gated edits, compact search hits.",
      },
      {
        title: "Special tools have a half-life",
        insight:
          "SWE-agent was right in 2024. mini-swe-agent is right now. If you are still maintaining a 40-tool catalog to paper over a weak model, check whether the model grew up.",
      },
      {
        title: "Empty output needs a sentence",
        insight:
          "A successful command that prints nothing looks like a hang. Tell the model it worked. Tiny interface facts change trajectories.",
      },
    ],
    resources: [
      {
        name: "SWE-agent: Agent-Computer Interfaces",
        kind: "essay",
        url: "https://arxiv.org/abs/2405.15793",
        note: "NeurIPS 2024. The ACI argument and the ablation that made bash-with-manners beat raw shell.",
      },
      {
        name: "mini-swe-agent",
        kind: "repo",
        url: "https://github.com/SWE-agent/mini-swe-agent",
        note: "~100 lines. The recantation. Start here unless you are doing interface research.",
      },
      {
        name: "ACI design notes",
        kind: "docs",
        url: "https://github.com/SWE-agent/SWE-agent/blob/main/docs/background/aci.md",
        note: "The four interface tricks: lint gate, 100-line viewer, compact search, empty-output message.",
      },
    ],
    quotes: [
      {
        text: "Just like how typical language models require good prompt engineering, good ACI design leads to much better results when using agents.",
        source: "SWE-agent ACI documentation",
        url: "https://github.com/SWE-agent/SWE-agent/blob/main/docs/background/aci.md",
      },
    ],
    related: ["thorsten-ball", "xingyao-wang", "chip-huyen", "simon-willison"],
    website: "https://john-b-yang.github.io/",
    github: "https://github.com/john-b-yang",
  },
  {
    slug: "kieran-klaassen",
    name: "Kieran Klaassen",
    handle: "kieranklaassen",
    title: "General Manager, Cora",
    company: "Every",
    previous: [],
    tier: "hidden-gem",
    schoolIds: ["encode-judgment", "harness-loops", "plan-then-oneshot"],
    oneLiner:
      "The Cora GM who stopped typing functions, runs five Claude Code worktrees like mission control, and packaged Every's Plan-Work-Assess-Compound loop as a plugin so the next session inherits the last review.",
    superBio: [
      "Kieran Klaassen runs Cora, Every's AI email product, as a one-person engineering team that ships like five. The 'How I use Claude Code to ship like a team of five' essay is the day-in-the-life: a monitor of Claude tabs, each on its own git worktree, a 'PR' shortcut that opens five pull requests with team conventions, and the instruction to unlearn coding — stop thinking in files, start thinking in outcomes and delegation. He has not typed a function in weeks. That claim is a design constraint, not a flex. The job is architecture, taste, and checks.",
      "Compound engineering, which he practices with Dan Shipper, is the loop. Plan: sub-agents research the tree, the commit history, and the internet, then write a plan with success criteria. Work: implement and test from the plan; Playwright or Xcode MCP so the agent can click the product. Assess: linters, tests, plus a dozen review subagents (security, perf, overbuilt). Compound: write the lessons into prompts the next session loads — Cora's agent has to ask where a change belongs, whether something similar already exists, whether this is a new thing. After review, ask the model to summarize the comments into memory. New hires inherit the scar tissue on day one.",
      "The EveryInc/compound-engineering-plugin is the artifact you can install. Slash commands for each step. He will run 25 agents in tmux. He switches models by phase: Opus to plan, faster models to implement, a different vendor to review so you do not grade your own homework. 80% of the time is plan and review. Work is the easy 20%. That ratio is the method.",
    ],
    whyThisPerson:
      "The most complete public operating system for 'I don't write the code anymore' that is not a lab coding-agent product. Pair with Lauren (skills) and Peter (just talk to it). Kieran is the compound middle.",
    collabModel:
      "Parallel worktrees, one agent per feature. Plan hard, work from the plan, review with other models, compound the lessons into CLAUDE.md and skills. Humans decide what good looks like. Agents type.",
    reasoningStyle:
      "Engineering-manager stance. Outcomes over files. Each feature should make the next one easier because the tree got smarter, not just larger. If you did it twice, it is a skill. If the skill is frequent, automate it.",
    coreLessons: [
      {
        title: "Unlearn coding, learn delegation",
        insight:
          "The scarce work is specifying outcomes, architecture, and taste. Implementation is a colleague you can brief. Micromanaging your own diffs is the old job.",
      },
      {
        title: "Compound is the money step",
        insight:
          "Plan-work-review without writing the lesson down is a hamster wheel. Summarize the review into a prompt the next agent loads. That is how one person ships like five.",
      },
      {
        title: "Worktrees beat one dirty tree",
        insight:
          "Five features, five checkouts, five PRs. Peter's same-folder grid is faster for a solo 300k-line app. Kieran's worktrees are how you keep history and review sane when you are actually opening PRs.",
      },
      {
        title: "Change models by phase",
        insight:
          "Opus to plan. Faster models to type. A different vendor to review. Grading your own homework is how factories ship confirmation bias.",
      },
    ],
    resources: [
      {
        name: "How I use Claude Code to ship like a team of five",
        kind: "essay",
        url: "https://every.to/source-code/how-i-use-claude-code-to-ship-like-a-team-of-five",
        note: "The day-in-the-life. Worktrees, the PR shortcut, unlearn coding.",
      },
      {
        name: "Compound Engineering",
        kind: "essay",
        url: "https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents",
        note: "With Dan Shipper. Plan-Work-Assess-Compound. The 80/20 on plan and review.",
      },
      {
        name: "compound-engineering-plugin",
        kind: "plugin",
        url: "https://github.com/EveryInc/compound-engineering-plugin",
        note: "Installable loop. /ce-plan, /ce-work, /ce-code-review, /ce-compound.",
      },
    ],
    quotes: [
      {
        text: "You have to unlearn coding. Stop thinking in terms of files and functions. Start thinking about outcomes and delegation.",
        source: "How I use Claude Code to ship like a team of five",
        url: "https://every.to/source-code/how-i-use-claude-code-to-ship-like-a-team-of-five",
      },
    ],
    related: ["lauren-tan", "peter-steinberger", "jesse-vincent", "eno-reyes"],
    twitter: "https://x.com/kieranklaassen",
    website: "https://every.to/@kieran_1355",
  },
  {
    slug: "theo-luan",
    name: "Theo Luan",
    handle: "tluan",
    title: "Member of Technical Staff; Missions lead",
    company: "Factory",
    previous: ["Founding engineer, stealth AI", "Nuro"],
    tier: "hidden-gem",
    schoolIds: ["harness-loops", "verify-or-do-not-ship", "spec-is-the-code"],
    oneLiner:
      "Factory's agent wrangler who wrote the Missions architecture: agents are slaves to their context, so you never let the implementer grade the exam — validation contract first, fresh workers, independent validators.",
    superBio: [
      "Theo Luan is the quieter Factory engineer. Eno talks to Stack Overflow. Luke Alvoeiro gives the AI Engineer talk. Theo wrote the document you should actually steal. 'How Missions Work' (April 2026) starts from one observation: an agent's trajectory is append-only, models seek coherence, therefore they perform best when every previous step urges the next optimal one. Irrelevant context dilutes. Adversarial context — the reasoning you used to write the code — makes you a terrible reviewer of that code.",
      "The system is three roles with incompatible incentives. Orchestrator plans, writes a finite checklist of behavioral assertions before any feature exists, and never accumulates granular implementation context. Workers get a feature spec, write tests first, implement, and do not get to declare done. Validators are a different agent with a fresh window: scrutiny on the trajectory, black-box user-testing against the contract with screenshots and network evidence. Failed milestones spawn fix features. A Slack-clone mission: 16.5 hours, 185 runs, 38.8k lines of which 52.5% were tests, 81 validator issues, 21 fix features — 34% of the implementation existed because a different agent was allowed to disagree.",
      "That last number is the gem. Factories that only measure 'lines the worker wrote' miss that a third of a working system can be the validator's argument. Shared state lives in files (validation-contract.md, features.json, AGENTS.md), which is why 96% of the tokens can be cache reads. He is the person who made Dex's 'small focused agents' and Sean's 'spec is the code' into a multi-day loop with a bill.",
    ],
    whyThisPerson:
      "True hidden gem. The Missions post is denser than most keynotes. If you only take one Factory artifact besides Eno's intern-fleet line, take Theo's context-dilution diagrams and the 34% fix-feature ratio.",
    collabModel:
      "Contract before features. Fresh context per worker. Independent validators. Orchestrator stays strategic. Halt and hand back to the human when blocked. Externalize state so no one holds the whole picture.",
    reasoningStyle:
      "Context is destiny. Separate incentives or you get self-congratulation at 100k tokens. Measure validation rounds to convergence, not vibes.",
    coreLessons: [
      {
        title: "Implementer context is adversarial to evaluation",
        insight:
          "The model that just built the thing will defend it. Fresh validators, black-box assertions, evidence. Do not ask the worker if it is done.",
      },
      {
        title: "Write the contract before the features",
        insight:
          "If you plan the implementation first, the tests will ratify it. Behavioral assertions first, then features that claim which assertions they fulfill.",
      },
      {
        title: "A third of the product can be disagreement",
        insight:
          "21 fix features from 81 validator issues. Budget for the argument. A factory that never disagrees with itself is a confirmation loop.",
      },
    ],
    resources: [
      {
        name: "How Missions Work",
        kind: "essay",
        url: "https://factory.ai/news/missions-architecture",
        note: "Primary source. Context dilution, two-level TDD, the Slack-clone bill of materials.",
      },
      {
        name: "The Multi-Agent Architecture That Actually Ships",
        kind: "talk",
        url: "https://ai.engineer/talks/production-multi-agent-architecture",
        note: "Luke Alvoeiro for Factory. Same architecture, conference shape. Steal 'Droid whispering.'",
      },
    ],
    quotes: [
      {
        text: "An agent that implemented something is worse at objectively evaluating its own work than a fresh, unbiased reviewer. Its prior reasoning creates a bias toward confirming what it already did.",
        source: "How Missions Work, April 2026",
        url: "https://factory.ai/news/missions-architecture",
      },
    ],
    related: ["eno-reyes", "dex-horthy", "sean-grove", "zach-lloyd"],
    github: "https://github.com/tluan",
    website: "https://factory.ai/news/missions-architecture",
  },
  {
    slug: "zach-davis",
    name: "Zach Davis",
    handle: "zachdavis",
    title: "Principal Engineer",
    company: "LaunchDarkly",
    previous: [],
    tier: "hidden-gem",
    schoolIds: ["encode-judgment", "spec-is-the-code", "harness-loops"],
    oneLiner:
      "LaunchDarkly's principal who put compound engineering in a production feature-flag company: if you do it twice it is a skill, if you use the skill often you automate it, and the agent writes the skill.",
    superBio: [
      "Zach Davis is not on the conference poster. He is the principal engineer Claire Vo brought on stage to show what 'AI-ready codebase' means when you already have a real product, real PRs, and real docs. The Maven lightning lesson with Claire is the source: background agents anyone can assign from Slack, PRDs as markdown in the repo instead of Confluence, and compound engineering as the flywheel. Screenshot an issue, drop it in Slack, tag the agent. No elaborate prompt. Accessibility is what drives adoption.",
      "His demo is the steal. He took Every's skill-creator skill, adapted it for the LaunchDarkly tree, then asked the agent to write `update_documentation.md` for a task the team kept repeating. Thirty seconds later the playbook was version-controlled, human-editable, and invocable by slash command or plain language. The progression is the doctrine: twice → skill; frequent skill → automation. Have the agent write the skills. Review them like code.",
      "LaunchDarkly's public agent-skills repo is the institutional form of that demo. Playbooks for AgentControl configs, onboarding, MCP, first flag, evals, multi-agent graphs. Align with the Agent Skills Open Standard. A Cursor plugin plus hosted MCP so the agent can actually toggle flags. This is pstack's cousin inside a company whose product is shipping code behind flags — which is to say, they already believed in reducing blast radius. Skills are how you tell the intern-fleet which radius is allowed.",
    ],
    whyThisPerson:
      "Hidden gem at large-tech-adjacent infrastructure. Proof that compound engineering is not only an Every house style. The public skills repo is the artifact; the lightning lesson is the method.",
    collabModel:
      "Specs in git. Background agents from Slack. Skill-creator skill first. Agents author playbooks, humans review. Automate the skill once it is load-bearing. Feature flags as the blast-radius control plane for agent changes.",
    reasoningStyle:
      "Make the repo agent-reachable. If the PRD lives in Google Docs, the agent is guessing. Encode repetition. Let adoption be as cheap as a screenshot.",
    coreLessons: [
      {
        title: "Twice is a skill, frequent is automation",
        insight:
          "Do not start with a 23-skill stack. Start with the thing you already did twice. Let the agent draft the playbook. Review it. When the team lives in it, wire it to a hook.",
      },
      {
        title: "Put the spec where the agent can grep",
        insight:
          "Confluence is a locked filing cabinet. Markdown in the repo is context. PMs shipping via background agents only works if the PRD is a file.",
      },
      {
        title: "Adoption is a screenshot, not a prompt course",
        insight:
          "If only power users can assign work, you do not have a factory. Slack plus a screenshot plus a tag is the on-ramp. Ceremony comes after the habit.",
      },
    ],
    resources: [
      {
        name: "3 Workflows to Make Your Codebase AI-Ready",
        kind: "talk",
        url: "https://www.chatprd.ai/how-i-ai/3-workflows-to-make-your-codebase-ai-ready-with-claire-vo-zach-davis",
        note: "With Claire Vo. Background agents, specs as code, skill-creator demo.",
      },
      {
        name: "launchdarkly/agent-skills",
        kind: "repo",
        url: "https://github.com/launchdarkly/agent-skills",
        note: "Public playbooks. Onboarding, flags, AgentControl, evals. Installable.",
      },
    ],
    quotes: [
      {
        text: "If you do something twice, make it a skill. If you're using a skill often, automate it.",
        source: "Maven lightning lesson with Claire Vo, 2026",
        url: "https://www.chatprd.ai/how-i-ai/3-workflows-to-make-your-codebase-ai-ready-with-claire-vo-zach-davis",
      },
    ],
    related: ["kieran-klaassen", "lauren-tan", "jesse-vincent", "harper-reed"],
    github: "https://github.com/launchdarkly/agent-skills",
    website: "https://github.com/launchdarkly/agent-skills",
  },
];
