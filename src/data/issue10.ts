import type { Engineer } from "./types";

export const issue10Engineers: Engineer[] = [
  {
    slug: "kyle-mistele",
    name: "Kyle Mistele",
    handle: "0xBlacklight",
    title: "Co-founder and CTO",
    company: "HumanLayer",
    previous: [
      "CTO, Naptha AI",
      "Offensive-security engineer",
    ],
    location: "San Francisco",
    tier: "hidden-gem",
    schoolIds: ["harness-loops", "verify-or-do-not-ship", "encode-judgment"],
    oneLiner:
      "Dex's cofounder who told AI Engineer we are all doing loops wrong: a thermostat, not a 40k-line Ralph PR — sense with ast-grep, pick the smallest violation, actuate one daily PR, and refuse to stack work nobody reviewed.",
    superBio: [
      "Kyle Mistele is HumanLayer's CTO. Dex coined context engineering and 12-factor agents. Kyle's AI Engineer talk is the missing control-systems manual. 'I think we're all doing it wrong.' Piping a prompt in a bash loop can ship 40,000-line PRs that nobody wants to read. Ralph is a sharp tool for people not on a team and not on a critical system. Most of us are. The alternative is not 'stop looping.' It is treating the codebase as a plant you drive toward a set point: sensor, error, controller, actuator, remeasure. Kubernetes autoscaling, IaC, a thermostat. Incremental change. Avoid oversteer.",
      "The HumanLayer case study is an RPC API migrating to Effect. Sensor: ast-grep, because Claude will disable your ESLint with an inline comment. First scan main, sort violations deterministically, and fail new PRs that add unmigrated procedures — a disturbance dampener so teammates' slop cannot undo the loop. Controller: pick the smallest procedure, or better, the one with the worst telemetry, and send that plus the error data to the actuator. Actuator: agent plus a skill, but spend the skill time on handwritten golden patterns because agents are pattern replicators and will otherwise copy the internet. Deterministic commit, push, PR. Schedule one iteration a day on GitHub Actions. You do not need a new cluster.",
      "The operational gems are the ones Ralph skip. When they left the loop running while traveling, PRs stacked, duplicated, and conflicted. Now: if any PR with this loop's label is still open, the workflow exits. One open PR per loop. Feedback lives in a markdown file in git; `/iterate` on the PR reloads the diff, comments, and skill, then the agent must update the feedback file so the next run inherits the steer. 'I don't think you should ever send an agent to do deterministic code's job.' Pair with Dex (compaction, RPI) and Geoffrey (the loop Kyle is correcting). Kyle is the person who will still read the code.",
    ],
    whyThisPerson:
      "The densest public argument that agent loops are control theory, not bash. The Effect migration, ast-grep sensor, one-PR flow control, and git-tracked feedback file are stealable tonight.",
    collabModel:
      "Define a measurable set point. Deterministic sensor. Bounded controller. Agent+skill as actuator with golden examples. One scheduled iteration. Human resteers via a file in the repo. Never queue a second PR until the last one was reviewed.",
    reasoningStyle:
      "If you cannot measure it, you cannot loop it. Prefer grep and CI to an agent deciding the next ticket. Loops should make the code easier to read, not bury you in unread diffs.",
    coreLessons: [
      {
        title: "A loop is a thermostat, not a firehose",
        insight:
          "Desired state, sensor, incremental actuation, remeasure. A bash loop that one-shots the end state is oversteer. Forty thousand lines is a crash, not a merge.",
      },
      {
        title: "Do not send an agent to do grep's job",
        insight:
          "ast-grep finds unmigrated procedures. jq picks the smallest. Telemetry ranks the painful ones. The agent applies the change. Mixing those roles is how loops get drunk.",
      },
      {
        title: "One open PR per loop",
        insight:
          "If nobody reviewed the last output, do not mint another. Track feedback in git so resteering compounds. Stacked agent PRs are a second job you did not ask for.",
      },
    ],
    resources: [
      {
        name: "Loop Engineering from first principles",
        kind: "talk",
        url: "https://ai.engineer/talks/loop-engineering-from-first-principles",
        note: "Primary. Control loops, Effect migration, flow control, feedback file.",
      },
    ],
    quotes: [
      {
        text: "I think we've all been building loops lately, and I've realized recently I think we're all doing it wrong.",
        source: "Loop Engineering from first principles, AI Engineer 2026",
        url: "https://ai.engineer/talks/loop-engineering-from-first-principles",
      },
      {
        text: "I don't think you should ever send an agent to do deterministic code's job.",
        source: "Loop Engineering from first principles, AI Engineer 2026",
        url: "https://ai.engineer/talks/loop-engineering-from-first-principles",
      },
    ],
    related: ["dex-horthy", "geoffrey-huntley", "boris-cherny", "armin-ronacher"],
    twitter: "https://x.com/0xBlacklight",
    linkedin: "https://www.linkedin.com/in/kyle-mistele",
    github: "https://github.com/k-mistele",
    website: "https://blacklight.sh",
  },
  {
    slug: "graham-neubig",
    name: "Graham Neubig",
    handle: "gneubig",
    title: "Co-founder and chief scientist; Associate Professor, CMU LTI",
    company: "OpenHands",
    previous: [
      "Assistant Professor, Carnegie Mellon University",
      "Co-founder and CEO, Inspired Cognition",
      "Assistant Professor, NAIST",
    ],
    location: "Pittsburgh",
    tier: "lab",
    schoolIds: ["harness-loops", "encode-judgment", "own-the-context"],
    oneLiner:
      "OpenHands' chief scientist who actually lives in the product: a 6AM daily-plan skill, an hourly CI watchdog that resumes the conversation, agents that restart broken GPU jobs — and a meta-harness so he can swap Codex and OpenHands per thread.",
    superBio: [
      "Graham Neubig is the CMU professor who co-founded OpenHands (All Hands AI) with Xingyao Wang's CodeAct line of work. Xingyao's dossier is the research: code as action. Graham's public 2026 dump is the outer loop of a working scientist. Agents watch his training runs and restart them when the cluster flakes. An 'iterate watchdog' fires every hour, checks open PRs for red CI, and either spins a new agent or resumes the existing conversation to fix it. A daily-workflow skill — used forty to fifty times, then published — gathers GitHub assignments, review requests, failing CI, and Slack, groups by urgency, and leaves him one next task. He schedules it for 6AM so the list exists when he wakes up.",
      "The meta-harness note is the lab craft. He switched OpenHands to a shell that can run their agent or someone else's in the same canvas. His own split: Codex with a frontier model for a lot of work, GLM plus the OpenHands agent when credits run out or the task fits. Switch the profile before the conversation. He has been bitten by harness details — compaction plus reasoning format changing scores by 6x — so he refuses to treat 'the agent' as a single object. Benchmarks in the OpenHands index compare alternative agents through the same SDK for that reason.",
      "Pair with Lauren (Grok Bot routines as outer loop), Claire (PR babysitter on a cron), and Xingyao (the CodeAct substrate). Graham is the cofounder who will show you the 6AM prompt instead of the architecture diagram.",
    ],
    whyThisPerson:
      "Lab cofounder with a stealable personal OS, not a vision deck. The daily-workflow skill and resume-the-conversation CI watchdog are the OpenHands-shaped pstack.",
    collabModel:
      "Automations, not chat marathons. Fresh sandbox per scheduled run. Resume the same conversation when CI is still red. Swap agent profiles per task. Humans pick the next P0 from a ranked morning list.",
    reasoningStyle:
      "Harness details move the number. Keep the UI constant and swap the agent. Automate the boring watchdog loops so morning attention is for the one task the skill ranked first.",
    coreLessons: [
      {
        title: "Schedule the outer loop for 6AM",
        insight:
          "A skill that pulls GitHub, CI, and Slack into one ranked list is more valuable than another chat window. Run it before you sit down.",
      },
      {
        title: "Resume the conversation, do not start a tourist",
        insight:
          "The iterate watchdog checks red CI hourly and continues the existing thread when it can. Context about the last fix attempt is the job.",
      },
      {
        title: "The harness is a profile, not a religion",
        insight:
          "OpenHands as a meta-harness: Codex for this, GLM plus their agent for that. Compaction format alone can 6x a score. Pick per thread.",
      },
    ],
    resources: [
      {
        name: "Daily workflow (OpenHands docs)",
        kind: "docs",
        url: "https://docs.openhands.dev/openhands/usage/use-cases/daily-workflow",
        note: "The published version of Graham's morning skill: gather, rank, one next task.",
      },
      {
        name: "OpenHands automations",
        kind: "docs",
        url: "https://docs.openhands.dev/openhands/usage/automations/overview",
        note: "Scheduled full conversations. The canvas he builds the watchdog in.",
      },
      {
        name: "phontron.com",
        kind: "essay",
        url: "http://www.phontron.com",
        note: "Academic home. OpenHands is the product; this is the scientist.",
      },
    ],
    quotes: [
      {
        text: "The iterate watchdog one runs every hour, automatically checks all my open PRs for failing CI, and if any are failing, it spins up an agent (or resumes an existing convo) to fix the CI. This is my favorite.",
        source: "LinkedIn, Aug 2026",
        url: "https://www.linkedin.com/posts/graham-neubig-10b41616b_i-love-how-agents-make-it-possible-to-just-activity-7496183691552047104-p8ah",
      },
    ],
    related: ["xingyao-wang", "lauren-tan", "claire-vo", "ryan-carson"],
    twitter: "https://x.com/gneubig",
    linkedin: "https://www.linkedin.com/in/graham-neubig-10b41616b",
    github: "https://github.com/neubig",
    website: "http://www.phontron.com",
  },
  {
    slug: "kilian-lieret",
    name: "Kilian Lieret",
    handle: "KLieret",
    title: "AI Research Scientist",
    company: "Meta Superintelligence Labs (ex-Princeton PLI)",
    previous: [
      "Research software engineer, Princeton Language & Intelligence",
      "Lead developer, SWE-agent; creator, mini-swe-agent",
      "High-energy physics, Princeton",
    ],
    location: "New York",
    tier: "lab",
    schoolIds: ["verify-or-do-not-ship", "own-the-context", "harness-loops"],
    oneLiner:
      "The SWE-agent maintainer who asked evals to stop babysitting models with tickets: CodeClash scores agents on goals achieved — revenue, users, surviving a tournament — because ticket-closing trains the same local mess a factory will ship.",
    superBio: [
      "Kilian Lieret pivoted from particle tracking to agentic software engineering at Princeton, became SWE-agent's lead developer, shipped mini-swe-agent as ~100 lines and bash, then joined Meta FAIR / Superintelligence Labs in February 2026. John Yang's dossier already owns the ACI paper and the recantation that special tools have a half-life. Kilian's public 2025–26 voice is different: we have been evaluating language models the way we onboard interns. Give them a GitHub issue. Count resolve rate. SWE-bench is as old now as HumanEval was when SWE-bench launched, and the frontier numbers sit near 90%. Searching for harder tickets keeps the same paradigm.",
      "CodeClash is the counter-eval. Two agents, two codebases, multi-round tournaments. Edit however you like — notes, tests, refactors — then your code battles in an arena (games, trading, security). Win rounds, not issues. Real software is written to hit outcomes. After 1.5k tournaments and 50k+ agent runs, the failure modes are the ones factory people should fear: models do not adapt to outcomes, they hallucinate why they lost, and the tree gets messier every round. ProgramBench is the sibling: rebuild FFmpeg or SQLite from an executable and docs, no skeleton. None of nine models fully solved a task. They emit monolithic files. Architecture is the missing skill.",
      "Steal this even if you never run the benchmark. If your agent KPI is 'PRs merged' or 'issues closed,' you are training the intern who closes tickets and wrecks the module. Pair with John (the interface), Hamel (look at the errors), and Eugene (LLM-as-judge will not save the product). Kilian is the eval person who told the factories their scoreboard is the bug.",
    ],
    whyThisPerson:
      "Distinct from John Yang: not the ACI recantation, the goal-vs-ticket argument. CodeClash's messy-codebase failure mode is the missing warning label on every PR-count boast in this file.",
    collabModel:
      "Do not babysit the agent with a ticket template. Give a high-level goal, a way to compete or match behavior, and look at whether the tree got healthier. Keep the harness tiny (bash) so you are not overfitting the scaffold.",
    reasoningStyle:
      "Saturated ticket evals hide outcome blindness. If the model cannot steer toward a goal across rounds, a factory that counts merges will accumulate sludge.",
    coreLessons: [
      {
        title: "Score goals, not tickets",
        insight:
          "Closing issues is intern work. Senior work is revenue, cost, users, a program that still exists in round twelve. If your loop only rewards green CI on a scoped ticket, you will not notice the rotting architecture.",
      },
      {
        title: "Agents hallucinate the last round",
        insight:
          "CodeClash models invent why they lost and keep editing. Persist outcome traces the agent cannot rewrite. Memory that lives only in the transcript is a lie the model tells itself.",
      },
      {
        title: "From-scratch is the architecture test",
        insight:
          "ProgramBench: no skeleton, match the executable. Models dump one file. The scarce skill is design, which ticket evals never ask for.",
      },
    ],
    resources: [
      {
        name: "CodeClash",
        kind: "repo",
        url: "https://github.com/codeclash-ai/codeclash",
        note: "Goal-oriented tournaments. Leaderboard at codeclash.ai.",
      },
      {
        name: "ProgramBench",
        kind: "essay",
        url: "https://arxiv.org/abs/2605.03546",
        note: "Rebuild real programs from an executable. 0% fully solved.",
      },
      {
        name: "mini-swe-agent",
        kind: "repo",
        url: "https://github.com/SWE-agent/mini-swe-agent",
        note: "The 100-line bash agent he created. Interface recantation lives on John Yang's page.",
      },
      {
        name: "Research page",
        kind: "essay",
        url: "https://lieret.net/research/",
        note: "CodeClash writeup in his words.",
      },
    ],
    quotes: [
      {
        text: "Let's stop babysitting LMs in our SWE benchmarks! In our new eval, we're evaluating them like senior devs: By goals achieved, not by tickets closed!",
        source: "LinkedIn on CodeClash, Nov 2025",
        url: "https://www.linkedin.com/posts/klieret_lets-stop-babysitting-lms-in-our-swe-benchmarks-activity-7391869805554982913-PfHY",
      },
    ],
    related: ["john-yang", "chip-huyen", "hamel-husain", "eugene-yan"],
    twitter: "https://x.com/KLieret",
    linkedin: "https://www.linkedin.com/in/klieret",
    github: "https://github.com/klieret",
    website: "https://lieret.net",
  },
  {
    slug: "ryan-cooke",
    name: "Ryan Cooke",
    handle: "ryancooke",
    title: "Engineering lead",
    company: "WorkOS",
    previous: ["Founder / early-stage engineering lead roles"],
    tier: "hidden-gem",
    schoolIds: ["harness-loops", "encode-judgment", "verify-or-do-not-ship"],
    oneLiner:
      "WorkOS's Horizon lead: a sandbox is not a software factory — you have to encode how the org actually plans, scopes, and verifies, then let webhooks keep the dependency chain moving after each merge.",
    superBio: [
      "Ryan Cooke gave the AI Engineer talk whose title is the lesson: 'No, that's not a software factory.' The demo everyone likes — drop an agent in a sandbox, point it at the repo, watch it PR — is infrastructure. Horizon, WorkOS's in-house factory, exists because Ramp's Inspect and Stripe's Minions proved the pattern and also proved the details are company-specific. Environment, security, and WorkOS context are the product. Off-the-shelf harnesses did not get multiplayer planning, their threat model, or their paved paths.",
      "The Horizon post is the method. A human writes product requirements in Linear, links Hilltop docs and Figma. A PM agent carves issues and blocking edges. Humans review, then flip In Progress. Orchestrator — outside the sandbox — verifies the webhook, boots a Cloudflare sandbox with OpenCode and a custom MCP (Datadog, Sentry, Slack), and attributes the PR to the human via short-lived tokens so git blame stays a person. After merge, another webhook marks Linear done and starts the next unblocked issue. Codespaces was the prototype; it is built for a developer who starts and stops a box, not for programmatic lifecycle and egress allowlists. Verification gets its own smaller sandbox so the grader is a real client, not the implementer looking in the mirror.",
      "Dogfooding is the factory learning. An agent hits friction; another agent reads the session log and proposes a paved-path fix (script, AGENTS.md, combined MCP tools); a human merges; the next run is cheaper. MCP tuning is a product: agents can eventually figure it out, but they spend tokens rediscovering conventions. Pair with Zach Bruggeman (Inspect's toolbox) and Eno (intern fleet needs repo nerves). Ryan is the person who will tell you the sandbox was the easy part.",
    ],
    whyThisPerson:
      "Primary writeup of a company-specific factory that refuses the generic sandbox demo. Webhook orchestration, separate verify sandboxes, and 'friction becomes the next ticket' are stealable even if you never touch Cloudflare.",
    collabModel:
      "Linear as the work graph. PM agent decomposes. Human owns In Progress and merge. Cloud sandbox implements. Separate sandbox verifies. Orchestrator lives outside, driven by webhooks. PRs attributed to people.",
    reasoningStyle:
      "The org's planning and review process is the blueprint. Encode it. Treat every agent failure as a missing paved path. Keep humans on irreversible clicks; automate what happens after the click.",
    coreLessons: [
      {
        title: "A sandbox is not a factory",
        insight:
          "Compute is the first challenge. The factory is how your company plans, scopes, verifies, and attributes work. Copying someone else's box copies none of that.",
      },
      {
        title: "Orchestrator outside, sandbox disposable",
        insight:
          "Webhooks into a control plane that creates, pauses, and kills boxes. Do not keep routing logic in the place that runs untrusted code.",
      },
      {
        title: "Friction is the next ticket",
        insight:
          "Session logs of agent confusion become AGENTS.md, scripts, and tighter MCP schemas. The system should learn faster than the same failure repeats.",
      },
    ],
    resources: [
      {
        name: "The self-driving codebase: Building Horizon",
        kind: "essay",
        url: "https://workos.com/blog/project-horizon",
        note: "Primary. Event-driven factory, Cloudflare sandboxes, MCP context engine, dogfooding loop.",
      },
      {
        name: "AIE 2026 recap (talk framing)",
        kind: "talk",
        url: "https://workos.com/blog/workos-aie-worlds-fair-2026-recap",
        note: "'No, that's not a software factory.' Org process as the blueprint.",
      },
    ],
    quotes: [
      {
        text: "We were inspired by Ramp’s Inspect and Stripe’s Minions: both show the power of background agents that can take a request and drive it end-to-end. Our takeaway was that the pattern is real, but the details are company-specific.",
        source: "Building Horizon at WorkOS",
        url: "https://workos.com/blog/project-horizon",
      },
    ],
    related: ["zach-bruggeman", "eno-reyes", "lauren-tan", "kyle-mistele"],
    website: "https://workos.com/blog/project-horizon",
  },
];
