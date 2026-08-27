import type { Engineer } from "./types";

export const issue19Engineers: Engineer[] = [
  {
    slug: "ty-dunn",
    name: "Ty Dunn",
    handle: "tydunn",
    title: "Co-founder; Integrator",
    company: "Continue (acquired by Cursor) / Disintegrator",
    previous: [
      "Co-founder and CEO, Continue (YC S23)",
      "Founding engineer, dltHub",
      "First product manager, Rasa",
    ],
    location: "San Francisco",
    tier: "lab",
    schoolIds: ["plan-then-oneshot", "verify-or-do-not-ship", "encode-judgment"],
    oneLiner:
      "Eight waves of four worktree-isolated Claude sessions, a meta-plan, and 27 AI checks: +3,917 / −3,634, 283 net — reshape the product, do not grow it.",
    superBio: [
      "Ty Dunn co-founded Continue, the open-source coding agent Cursor later acquired. He is not a Cursor founder without craft — the skip list stays. He published a day: 30 Linear tickets of product debt, eight waves of four parallel Claude Code sessions, each in its own git worktree, each planning before building. A meta-plan orchestrated the plans. A ship script appeared mid-session because linking PRs to Linear to Threader was eating the day. One ticket died at planning: 'There's still a lot of stuff on the agent page' was too vague to act on. By evening: 29 PRs, +3,917 lines, −3,634 deleted, +283 net. He renewed his passport between waves. Treat 29 PRs as the design constraint he optimized for, not as your KPI. The number that matters is net lines.",
      "Four tabs is the sweet spot: enough momentum, few enough to know what each session is doing. Approve a plan in one tab, YOLO another, check a third that is running the 27 checks. The moments that mattered were judgment: canceling the vague ticket, catching a missing dependency, knowing which tickets could run in parallel. The machines handled the rest. Every PR ran through 27 checks — conventions, security, mobile layout, accessibility, migrations — human taste encoded as markdown in the repo, running as agents, passing silently or failing with a fix attached. Wikis and pasted prompts fail for the same reason: they depend on humans remembering. Standards-as-checks is the alternative. Chad Metcalf named the metric; Chip Huyen measured it. Ty ran a day where non-intervention (YOLO through 27 checks) was also signal.",
      "Skip the Continue hub pitch and the acquisition. Steal the objective function (net lines, not volume), the plan-first cancel, the four-wide worktree cap, and checks that enforce taste without a human in the loop until the loop needs one. Pair with Boris (parallel sessions), Chip (intervention rates), Brian Scanlan (hooks as CI earlier). Ty is the person who will tell you a passport office does not read your life story. It checks that you met the requirements.",
    ],
    whyThisPerson:
      "A primary Continue-founder dump that is personal collab craft, not product marketing: net-lines as the score, worktree-isolated plan-then-build waves, 27 checks as encoded taste. Distinct from Boris's five local sessions and from Chip's Sniffly measurement.",
    collabModel:
      "Queue the tickets. Cap at four parallel Claude sessions in git worktrees. Plan first; cancel anything too vague to act on. Meta-plan the plans. YOLO only through checks that already encode taste. Build the ship script when mechanical overhead starts eating the day. Score the day on net lines, not PR count.",
    reasoningStyle:
      "Ambiguity is cheaper to kill in the plan than in the diff. Four concurrent sessions is awareness, not a farm. Intervention and non-intervention are both measurements. Reshaping the product (delete as much as you add) is the actual goal.",
    coreLessons: [
      {
        title: "Score the day on net lines",
        insight:
          "+3,917 and −3,634 is a reshape. 29 PRs that only add is a slop factory. Volume without deletion is not the Continue founder's loop.",
      },
      {
        title: "Cancel at the plan, not after the code",
        insight:
          "A ticket that says there is still a lot of stuff on the page is not a ticket. Plan-first is a filter. The worktree never gets that work.",
      },
      {
        title: "Taste lives in checks, not in memory",
        insight:
          "Twenty-seven agents on every PR, silent on pass, a fix on fail. A wiki of React rules depends on someone remembering. Standards-as-checks does not.",
      },
    ],
    resources: [
      {
        name: "283 Net Lines and a Passport",
        kind: "essay",
        url: "https://blog.continue.dev/283-net-lines-and-a-passport",
        note: "Primary. Worktree waves, meta-plan, 27 checks, +283 net, passport-office metaphor.",
      },
      {
        name: "continuedev/continue",
        kind: "repo",
        url: "https://github.com/continuedev/continue",
        note: "Open-source coding agent. Context: the product, not the day-in-the-life dump.",
      },
    ],
    quotes: [
      {
        text: "29 PRs was not 29 acts of automation. It was me setting taste (canceling the vague ticket, approving plans, knowing when to let it run and when to hold back) while machines handled enforcement and execution.",
        source: "283 Net Lines and a Passport",
        url: "https://blog.continue.dev/283-net-lines-and-a-passport",
      },
      {
        text: "I reshaped the product more than I grew it.",
        source: "283 Net Lines and a Passport",
        url: "https://blog.continue.dev/283-net-lines-and-a-passport",
      },
    ],
    related: ["boris-cherny", "chip-huyen", "brian-scanlan", "lauren-tan"],
    linkedin: "https://www.linkedin.com/in/tylerjdunn",
    github: "https://github.com/tydunn",
    website: "https://blog.continue.dev/283-net-lines-and-a-passport",
  },
  {
    slug: "maksim-danilchenko",
    name: "Maksim Danilchenko",
    handle: "danilchenko",
    title: "Engineering lead",
    company: "inDrive",
    previous: [
      "Maintainer, aiochclient",
      "Side projects: PageBloom, NotesPilot, MyDevKit",
    ],
    location: "Cyprus",
    tier: "hidden-gem",
    schoolIds: ["harness-loops", "verify-or-do-not-ship", "own-the-context"],
    oneLiner:
      "Put the orchestration in a JavaScript workflow, not in Claude's head: dual-reviewer pipelines, an adversarial pass that cut 23 findings to 9, and a rerun you can save with one key.",
    superBio: [
      "Maksim Danilchenko leads engineering at inDrive and publishes the operator notes most feature announcements skip. After months of spawning subagents for 3–5 file jobs, he tried to audit 47 Express route files for missing auth, each finding verified by a second agent trying to prove it wrong. Conversation could not hold it. Context filled up managing the orchestration. Findings dropped. He could not rerun the audit next week without re-explaining the setup. Claude Code dynamic workflows moved the loop into a JavaScript script the runtime executes in the background. Results live in script variables, not in the window. Press s in /workflows and the orchestration becomes a command.",
      "The steal is the decision matrix and the measured pipelines, not the ultracode keyword. Subagents when 2–5 workers fit in conversation. Agent teams for long-running peers. Workflows when you have 10+ independent subtasks, need a rerun, or want adversarial verification. He ran the 12-line auth audit on 47 files: 6 endpoints missing auth, 4 minutes, ~180K output tokens. By hand in chat: 25 minutes, missed 2 because earlier findings fell out of context. A React class-to-hooks migration uses pipeline() so item A can be in verify while item B is still migrating, each agent in its own worktree so parallel writes do not corrupt the tree. The production pattern is adversarial review: independent agents find issues, separate agents try to refute them, only survivors make the report. On a 15K-line Express plus Prisma API: 23 potential issues, 9 after the adversarial pass, 8 of those 9 genuine. A single-pass agent found 14, 6 of them false positives.",
      "He is honest about cost. A 48-agent audit is ~180K output tokens; a 50+ agent adversarial review can be 400K+. Route cheap stages to a cheaper model. If you cannot describe the fan-out in advance, stay in conversation; once the pattern is named, codify it. Pair with Carlini (parallel when tests factor), CJ Hess (implementer vs reviewer), Boris (worktrees). Maksim is the person who will tell you Claude should not be the orchestrator of a hundred agents. The script should.",
    ],
    whyThisPerson:
      "A hidden-gem IC dump with token costs, false-positive counts, and copyable workflow scripts. Distinct from Boris's interactive parallel sessions and from Carlini's compiler farm. Steal the script-outside-the-window move and the refute-the-finding pass.",
    collabModel:
      "Stay in conversation until the fan-out is nameable. Then write a workflow: structured outputs, parallel or pipeline, worktree isolation when agents mutate files. For quality, add an adversarial stage that tries to kill findings. Save the script. Rerun it. Do not restage the orchestration in chat.",
    reasoningStyle:
      "Orchestration is a programming problem. The model that finds a bug should not be the model that confirms it. Context windows lose receipts; script variables do not. Token cost is part of the design, not an afterthought.",
    coreLessons: [
      {
        title: "The script holds the loop. Claude holds the answer.",
        insight:
          "A 47-file audit died in conversation because the window was busy being the orchestrator. Dynamic workflows keep intermediate results out of the session.",
      },
      {
        title: "Refute the finding before you file it",
        insight:
          "23 issues became 9 after an adversarial pass; 8 of 9 were real. A single-pass reviewer invented 6 false positives. Dual appetite is a quality system.",
      },
      {
        title: "Do not workflow a shape you cannot name yet",
        insight:
          "If you are still discovering the task, stay in chat. Codify the fan-out only once you could write the script without the model.",
      },
    ],
    resources: [
      {
        name: "Claude Code Dynamic Workflows: Build 4 Production Scripts From Scratch",
        kind: "essay",
        url: "https://www.danilchenko.dev/posts/claude-code-workflows/",
        note: "Primary. Auth audit costs, dual-reviewer pipeline, adversarial verification numbers.",
      },
      {
        name: "Claude Code Hooks: Build 5 Production Hooks From Scratch",
        kind: "essay",
        url: "https://www.danilchenko.dev/posts/claude-code-hooks/",
        note: "Companion operator dump: format, block, lint, test, inject context.",
      },
    ],
    quotes: [
      {
        text: "The orchestration lives in a script, not in Claude's head, so the plan survives a thousand agents.",
        source: "Claude Code Dynamic Workflows",
        url: "https://www.danilchenko.dev/posts/claude-code-workflows/",
      },
      {
        text: "If you're still figuring out the task shape, stay in conversation; once you know the pattern, codify it as a workflow.",
        source: "Claude Code Dynamic Workflows",
        url: "https://www.danilchenko.dev/posts/claude-code-workflows/",
      },
    ],
    related: [
      "nicholas-carlini",
      "cj-hess",
      "boris-cherny",
      "john-lindquist",
    ],
    website: "https://www.danilchenko.dev",
    github: "https://github.com/maximdanilchenko",
  },
  {
    slug: "alex-dunlop",
    name: "Alex Dunlop",
    handle: "alexjamesdunlop",
    title: "Senior engineer",
    company: "Popp AI",
    previous: [
      "Natural language generation, Arria NLG",
      "Co-founder, Cub Digital",
    ],
    location: "Sydney",
    tier: "hidden-gem",
    schoolIds: ["encode-judgment", "own-the-context", "verify-or-do-not-ship"],
    oneLiner:
      "It's the loader, not the file — and Anvil Skills: scope, build, verify, then distil the human's corrections back into context so the next ticket does not relearn the same lesson.",
    superBio: [
      "Alex Dunlop is a senior engineer at Popp AI in Sydney, a Kiwi who writes field notes when Claude Code breaks in production. He is not a Medium influencer with a listicle. He ships Anvil Skills: an open-source Claude Code plugin that treats every ticket as a loop — setup, scope, kickoff, build, verify, review, feedback, improve — then writes the corrections back into context files the next session can load. The homepage line is the thesis: your coding agent forgets every lesson you teach it. Anvil is the prosthetic. Skills are user-invoked, never auto-fired; the human says which improvement gets promoted, because the agent does not know its own proposal is right.",
      "The CLAUDE.md vs AGENTS.md essay is the operator precision. Claude Code reads CLAUDE.md, not AGENTS.md. Secondary blogs claimed a fallback. He checked the memory docs, issue #6235, and the loaders. The portable bridge is one line at the top of CLAUDE.md: @AGENTS.md. Symlinks rot on Windows checkouts. /init copies once and then drifts. He had to answer this because Anvil writes to those files — context as a budget, not a scratchpad. Ask which loader you are feeding, not which filename is better. The claude-md skill in his personal pack interrogates the repo instead of dumping a README into memory.",
      "Steal Anvil's improve step and the one-line import. Do not steal 2M Medium views as a credential. Pair with Jesse (skills as process), Brian Scanlan (skill that edits itself inside the session), Dex (own the window), Mitchell (every failure becomes a line in AGENTS.md). Dunlop is the person who will tell you a duplicated CLAUDE.md is a loader bug, and that feedback which never hits a file is a lesson you will pay for again tomorrow.",
    ],
    whyThisPerson:
      "A hidden-gem IC with an installable skill pack and a primary-source correction of a widely repeated CLAUDE.md myth. Distinct from Jesse's Superpowers and from Scanlan's self-editing flaky-spec. Steal distil-to-file and the loader-not-filename rule.",
    collabModel:
      "Keep AGENTS.md as the shared source of truth. Point Claude at it with @AGENTS.md in CLAUDE.md, plus Claude-only lines underneath. Run Anvil: scope the ticket with observable acceptance, build, verify, capture feedback, distil into context on a human yes. Treat context as a budget. Do not auto-promote the agent's own rewrite.",
    reasoningStyle:
      "Check the loader, not the blog post. A convention file is not a format; the tool that reads it is. Lessons that stay in the transcript are amnesia. Promotion of a context change is a human decision.",
    coreLessons: [
      {
        title: "It's the loader, not the file",
        insight:
          "Claude Code reads CLAUDE.md. Everyone else reads AGENTS.md. One-line @import, not a symlink, not a second copy that drifts after /init.",
      },
      {
        title: "Distil the correction into a file the next session can load",
        insight:
          "Anvil's improve step is encode-judgment with a human gate. The agent proposes; you say yes. Otherwise you taught it once and paid twice.",
      },
      {
        title: "Context is a budget",
        insight:
          "Anvil's BUDGETS.md and path-scoped files exist because stuffing the README into CLAUDE.md is how you burn the window before the work starts.",
      },
    ],
    resources: [
      {
        name: "CLAUDE.md vs AGENTS.md: It's the Loader, Not the File",
        kind: "essay",
        url: "https://www.alexdunlop.com/writing/claude-md-vs-agents-md",
        note: "Primary. Loader table, @AGENTS.md import, why /init and symlinks fail.",
      },
      {
        name: "Alexanderdunlop/anvil-skills",
        kind: "plugin",
        url: "https://github.com/Alexanderdunlop/anvil-skills",
        note: "Scope / build / verify / feedback / improve. Context as budget. Human gate on promotion.",
      },
      {
        name: "Alexanderdunlop/skills",
        kind: "repo",
        url: "https://github.com/Alexanderdunlop/skills",
        note: "Personal pack: explore-options, teach-the-mechanism, audit-skill trigger tests.",
      },
    ],
    quotes: [
      {
        text: "Ask which loader you are feeding, not which file is better.",
        source: "CLAUDE.md vs AGENTS.md: It's the Loader, Not the File",
        url: "https://www.alexdunlop.com/writing/claude-md-vs-agents-md",
      },
      {
        text: "Your coding agent forgets every lesson you teach it.",
        source: "alexdunlop.com",
        url: "https://www.alexdunlop.com/",
      },
    ],
    related: [
      "jesse-vincent",
      "brian-scanlan",
      "dex-horthy",
      "mitchell-hashimoto",
    ],
    linkedin: "https://www.linkedin.com/in/alexander-dunlop",
    github: "https://github.com/Alexanderdunlop",
    website: "https://www.alexdunlop.com",
  },
];
