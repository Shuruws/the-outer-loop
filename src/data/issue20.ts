import type { Engineer } from "./types";

export const issue20Engineers: Engineer[] = [
  {
    slug: "nick-liu",
    name: "Nick Liu",
    handle: "nickliu0211",
    title: "Senior software engineer, Feed Ranking infrastructure",
    company: "Meta",
    previous: [
      "Software engineer, Twitter (caching and kernel validation)",
      "Principal software engineer, Walmart Global Tech",
      "SDE II, AWS",
    ],
    location: "Bellevue, Washington",
    tier: "big-tech",
    schoolIds: ["encode-judgment", "own-the-context", "harness-loops"],
    oneLiner:
      "Hooks are guarantees, skills are knowledge, subagents are other people — pick the layer by who decides it runs, not by where the config file lives.",
    superBio: [
      "Nick Liu (Tzu-Hua) is a senior engineer on Facebook Feed Ranking infrastructure at Meta, previously Twitter cache, Walmart, and AWS. The dump is not a Meta internal playbook. It is a six-part personal series on nick-liu.com about taming Claude Code sessions, plus ClaudeDeck: a Stream Deck key that answers PreToolUse over a 590-second held HTTP response. He is the person who will tell you most of his config started in the wrong layer.",
      "The governing table is four extension points and one column that matters: who decides it runs. CLAUDE.md is always in context and never decides. A hook is a shell script with no model in the path — the only layer that can make a promise. A skill loads when the model judges the task relevant — a suggestion with good packaging. A subagent gets its own window, tools, and model. Session naming as a habit decayed; as a prompt it worked nine times out of ten; as a SessionStart hook it has run on every session since, including SSH and tools that never show a prompt. If you would be upset by one missed execution, it cannot rely on model judgment. Writing MUST in a skill description is the smell that you wanted a hook.",
      "The pricing half is as stealable as the layer table. He burned the flagship quota because that model was also grepping, batch-editing, and running the pre-publish checklist. Three agents in ~/.claude/agents/: bulk worker and scout on a mid-tier model, verifier on the cheapest (a tenth the price). The eight-point check on the blog post never touched the main window. Agent definitions register at session start — create, restart, then dispatch. Pair with John Lindquist (typed Stop hooks), Brian Scanlan (org hooks that block gh pr create), Malte (delete tools). Steal the flowchart, not the Stream Deck.",
    ],
    whyThisPerson:
      "A Meta IC with a public, copyable decision procedure for Claude Code's four layers, plus a hardware permission hook. Distinct from Lindquist's typed lifecycle and from Scanlan's Create PR enforcement. Steal who-decides-it-runs.",
    collabModel:
      "If a miss would annoy you, it is a hook. If it is needed in every session, it is CLAUDE.md. If it is how-to for one task family, it is a skill. If it needs isolation or a cheaper model, it is a subagent. Otherwise leave it in the prompt. Route grep and checklists off the flagship. Restart after you add an agent file.",
    reasoningStyle:
      "Nine out of ten is a coin you lose every day. Layer placement is a failure-mode choice. Subagents are a pricing feature as much as a context feature. Hardware can be the permission UI if the hook can wait.",
    coreLessons: [
      {
        title: "Pick the layer by who decides it runs",
        insight:
          "Hooks decide with code. Skills and subagents decide with model judgment. CLAUDE.md never decides at all. Misplacement is ignoring that column.",
      },
      {
        title: "MUST in a skill means you wanted a hook",
        insight:
          "A skill is a suggestion. Session naming, lint-before-commit, and permission gates cannot be suggestions.",
      },
      {
        title: "Stop burning the flagship on grep",
        insight:
          "A verifier at a tenth the price, in a disposable window, is how the pre-publish checklist stops eating Opus.",
      },
    ],
    resources: [
      {
        name: "Hooks are guarantees, skills are knowledge, subagents are other people",
        kind: "essay",
        url: "https://nick-liu.com/posts/claude-code-skills-hooks-subagents/",
        note: "Primary. Four-layer table, flowchart, personal two-hook / ten-skill / three-agent config.",
      },
      {
        name: "Stop burning your best model's tokens on grep",
        kind: "essay",
        url: "https://nick-liu.com/posts/model-allocation-claude-code-subagents/",
        note: "Allocation, not volume. Cheap verifier, scout, bulk worker.",
      },
      {
        name: "Holding HTTP open for 590 seconds so a Stream Deck key can approve a tool call",
        kind: "essay",
        url: "https://nick-liu.com/posts/permission-round-trip/",
        note: "ClaudeDeck: PreToolUse as a physical YES key. Hook timeout as the permission UI.",
      },
    ],
    quotes: [
      {
        text: "If you would be upset by one missed execution, it cannot rely on model judgment.",
        source: "Hooks are guarantees, skills are knowledge, subagents are other people",
        url: "https://nick-liu.com/posts/claude-code-skills-hooks-subagents/",
      },
      {
        text: "When I catch myself writing MUST in a skill description, that is usually the tell that the thing belongs in a hook instead.",
        source: "Hooks are guarantees, skills are knowledge, subagents are other people",
        url: "https://nick-liu.com/posts/claude-code-skills-hooks-subagents/",
      },
    ],
    related: ["john-lindquist", "brian-scanlan", "malte-ubl", "felix-rieseberg"],
    linkedin: "https://www.linkedin.com/in/nickliu0211",
    github: "https://github.com/nickboy",
    website: "https://nick-liu.com",
  },
  {
    slug: "christopher-penkin",
    name: "Christopher Penkin",
    handle: "penkin",
    title: "Principal software engineer",
    company: "Digital Solution Foundry",
    previous: ["UI and accessibility engineering"],
    location: "United States",
    tier: "hidden-gem",
    schoolIds: ["verify-or-do-not-ship", "harness-loops", "own-the-context"],
    oneLiner:
      "Worktrees always, herdr to see which Claude is blocked, hunk so the agent shows the diff instead of paraphrasing it — review everything, make review too easy to skip.",
    superBio: [
      "Christopher Penkin is a principal engineer at Digital Solution Foundry who published a five-month follow-up to a February Claude Code post. Plan mode, small tasks, clear the context, review everything still holds. What changed is scale: one Claude became several, the laptop became a screen into a server, and a handful of TUI tools glue the loop — git worktrees, herdr, hunk, and glow. Everything lives in public dotfiles. Distinct from Ty Dunn's four-wide net-lines day: Penkin's craft is making parallel agents visible and reviewable, not maximizing PR count.",
      "The first rule is baked into global CLAUDE.md: all code changes happen in a worktree, even one-line fixes. worktree.baseRef is set to fresh so new trees branch from origin's default, not from whatever PR he is sitting on — the setting that stopped 'why does this PR contain my other PR.' herdr is a terminal multiplexer that detects agents in panes and shows working / blocked / done. A toast when something needs him. A skill teaches Claude to drive herdr over a unix socket: split a pane, start the server, wait for a log line, spawn another agent if the task splits. The multiplexer became part of the workflow, not furniture.",
      "Review is two hooks. PostToolUse watches .md writes and opens glow in a side pane, with a denylist so CLAUDE.md noise does not fire. When a unit of work finishes, hunk opens on that worktree in watch mode. Claude uses hunk session commands to jump his view and leave inline comments on its own changes. Show me, don't tell me. The stack runs on a server behind mosh; agents keep working when the laptop closes; Moshi on the phone gets a hook when a Claude is blocked. SSH LocalForward makes localhost:5173 the Vite server next to the agent. Pair with Ty (worktrees), Nick Nisi (terminal craft), Lindquist (Stop-hook verify). Steal the review loop. Do not steal the Catppuccin ricing.",
    ],
    whyThisPerson:
      "A public, copyable solo OS whose steal is review tooling: worktree isolation, an agent multiplexer, live diffs the model can drive. Distinct from Dunn's 29-PR day and from Liu's layer table. The rule has not changed: he reviews everything.",
    collabModel:
      "Force EnterWorktree for every code change. baseRef fresh. Herd sessions in herdr. Preview plans in glow. Open hunk on Stop and let Claude walk the hunks. Run the agents on a server; forward the ports; answer one-word blocks from the phone. Sync skills with a lockfile so they do not rot across machines.",
    reasoningStyle:
      "Parallelism without a sidebar is babysitting in a different chair. Paraphrased diffs are how you skip review. Fresh from origin is how you keep PRs from nesting. The junior-programmer framing still fits; there are just more of them, and the tools say when one is stuck.",
    coreLessons: [
      {
        title: "Make review too easy to skip",
        insight:
          "A hook that opens the live diff is the product. The February rule did not change. The temptation to skip did, until hunk sat in a pane.",
      },
      {
        title: "Worktrees always, even for one line, from origin not HEAD",
        insight:
          "baseRef fresh is how you stop shipping your other PR inside this one. The main checkout stays yours.",
      },
      {
        title: "The multiplexer is a skill, not a window manager",
        insight:
          "Teach Claude to split panes, wait on logs, and spawn a sibling. herdr over a unix socket is the outer loop's status bar.",
      },
    ],
    resources: [
      {
        name: "Herding Claudes: My Agentic Workflow, Five Months On",
        kind: "essay",
        url: "https://www.penkin.me/ai/development/tools/productivity/2026/07/21/herding-claudes-my-agentic-workflow.html",
        note: "Primary. Worktrees, herdr, hunk/glow hooks, server profile, phone approvals.",
      },
      {
        name: "One Catalog, Every Machine: How I Sync Claude Code Skills",
        kind: "essay",
        url: "https://www.penkin.me/ai/development/tools/dotfiles/2026/07/30/syncing-claude-skills-across-machines.html",
        note: "skill-lock.json so Superpowers and herdr skills do not go stale across boxes.",
      },
    ],
    quotes: [
      {
        text: "I review everything. The tools above exist to make reviewing easy enough that I never get tempted to skip it.",
        source: "Herding Claudes",
        url: "https://www.penkin.me/ai/development/tools/productivity/2026/07/21/herding-claudes-my-agentic-workflow.html",
      },
      {
        text: "That one setting has saved me from a surprising number of “why does this PR contain my other PR” moments.",
        source: "Herding Claudes, on worktree.baseRef fresh",
        url: "https://www.penkin.me/ai/development/tools/productivity/2026/07/21/herding-claudes-my-agentic-workflow.html",
      },
    ],
    related: ["ty-dunn", "nick-nisi", "john-lindquist", "boris-cherny"],
    linkedin: "https://www.linkedin.com/in/penkin",
    website: "https://www.penkin.me",
  },
  {
    slug: "christoph-dalski",
    name: "Christoph Dalski",
    handle: "chdalski",
    title: "Senior IT consultant, platform engineering",
    company: "codecentric",
    previous: ["DevSecOps and cloud consulting, codecentric"],
    location: "Germany",
    tier: "hidden-gem",
    schoolIds: ["harness-loops", "encode-judgment", "plan-then-oneshot"],
    oneLiner:
      "Stop prompting; ship a Blueprint: a Lead that is forbidden to code, teammates that talk to each other, and a plan-reviewer born from a retrospective on clean dead code.",
    superBio: [
      "Christoph Dalski is a senior consultant at codecentric in Germany. On a client Rust/Axum backend he was asked to evaluate Claude Code. Online chat lacked project context. Copilot saw one file. Claude Code could look, but only after Rules, project descriptions, and Agent Teams. He places himself between Shapiro's level 3 and 4: the human writes specs and reviews results; the team implements. The dump is a June 2026 experience report plus two repos: chdalski/claude_orchestration (Blueprints, tagged blog-2026-06) and chdalski/rlsp, a YAML language server whose README says the source is entirely AI-written — he designed architecture and rules, the agents wrote the code.",
      "The steal is the Blueprint, not more prompting. A Blueprint is a copyable .claude/ : Lead CLAUDE.md, specialized agents, conditional Rules, skills, settings. The Lead is an orchestrator with full permissions and a prohibition against developing itself — otherwise it leaves the path and does the work. Teammates talk to each other; subagents only report up. First Blueprint: five agents, rigid sequence, heavy hooks. Then Workflow-Blueprint: the user picks develop-review vs fully autonomous. Hooks fell away; conditional Rules load when an agent touches .rs or .ts, preventive instead of reactive. Then Autonomous-Blueprint for hands-off throughput. When a run fails, the team writes a retrospective. One gap: the reviewer checked correctness, tests, lint — not whether the plan was implemented. Feature infrastructure landed, tested, waved through, never wired into the server. Dead code, cleanly written. Out of that came the plan reviewer, which checks fulfillment before approval.",
      "Skip the five-levels slide as your career ladder. Steal the Lead-must-not-code rule, the copyable Blueprint, the retrospective that produces a new agent, and Rules-before-hooks. Pair with Eno (missions), Zach Lloyd (factory engineers), Scanlan (skills that learn), Maksim (orchestration outside chat). Dalski is the person who will tell you you used to develop software and now you configure Agent Teams, and that a strong IT background is more necessary than ever because someone has to keep the system honest.",
    ],
    whyThisPerson:
      "A consulting IC dump with an open Blueprint repo and a real product (rlsp) attributed to agents under human architecture. Distinct from Factory Missions and from Maksim's JS workflows. Steal the plan-reviewer born from dead code that passed review.",
    collabModel:
      "Copy a Blueprint. Lead clarifies and is forbidden to implement. Approve the internally reviewed plan. Choose a workflow file for the day's autonomy. Conditional Rules by file type. On failure, the team retrospects; you change the Blueprint and rerun from the start. Add a plan reviewer so 'tested' does not mean 'integrated.'",
    reasoningStyle:
      "Level 2 feels complete and does not scale. Structure beats prompting. Hooks catch after the fact; Rules speak before the write. A reviewer that cannot see the plan will bless dead code. The setup that learns from its own mistakes is the actual product.",
    coreLessons: [
      {
        title: "The Lead must not write the code",
        insight:
          "Full permissions plus no prohibition and the orchestrator does the work itself. CLAUDE.md needs explicit 'do not develop' as much as it needs role.",
      },
      {
        title: "Review against the plan, not only the tests",
        insight:
          "Clean, linted, unintegrated infrastructure passed review because the reviewer knew the task and not the plan. That gap is an agent, not a pep talk.",
      },
      {
        title: "Improve the Blueprint, then rerun from zero",
        insight:
          "A retrospective that does not change the copyable setup is a postmortem. Copy the .claude/ back. See whether the structural fix actually takes.",
      },
    ],
    resources: [
      {
        name: "Autonomous development workflows with Claude Code",
        kind: "essay",
        url: "https://www.codecentric.de/en/knowledge-hub/blog/autonomous-development-workflows-with-claude-code",
        note: "Primary. Blueprints, Lead-as-orchestrator, plan reviewer, conditional Rules vs hooks.",
      },
      {
        name: "chdalski/claude_orchestration",
        kind: "repo",
        url: "https://github.com/chdalski/claude_orchestration",
        note: "Living Blueprints. Tag blog-2026-06 matches the article.",
      },
      {
        name: "chdalski/rlsp",
        kind: "repo",
        url: "https://github.com/chdalski/rlsp",
        note: "YAML language server. README: source entirely AI-written under human architecture.",
      },
    ],
    quotes: [
      {
        text: "For a long time I thought: “I develop software.” With Agent Teams that shifts: “I configure Agent Teams.”",
        source: "Autonomous development workflows with Claude Code",
        url: "https://www.codecentric.de/en/knowledge-hub/blog/autonomous-development-workflows-with-claude-code",
      },
      {
        text: "The source is entirely AI-written — I designed the architecture and rules, the agents wrote the code.",
        source: "chdalski/rlsp README",
        url: "https://github.com/chdalski/rlsp",
      },
    ],
    related: ["eno-reyes", "zach-lloyd", "brian-scanlan", "maksim-danilchenko"],
    linkedin: "https://www.linkedin.com/in/christoph-dalski-996677253",
    github: "https://github.com/chdalski",
    website: "https://www.codecentric.de/en/knowledge-hub/blog/autonomous-development-workflows-with-claude-code",
  },
];
