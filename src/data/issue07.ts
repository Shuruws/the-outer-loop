import type { Engineer } from "./types";

export const issue07Engineers: Engineer[] = [
  {
    slug: "ryan-carson",
    name: "Ryan Carson",
    handle: "ryancarson",
    title: "Solo founder",
    company: "Untangle",
    previous: ["Co-founder, Treehouse"],
    tier: "hidden-gem",
    schoolIds: ["harness-loops", "verify-or-do-not-ship", "encode-judgment"],
    oneLiner:
      "The five-time founder who spent $20k on Devin in a month, runs 15 cloud agents from P0 folders plus a piece of paper, and will not merge until the agent records a narrated video of the feature passing.",
    superBio: [
      "Ryan Carson co-founded Treehouse, then went solo on Untangle, a B2B product for family-law firms. A year ago on How I AI he was hand-holding agents through three-step markdown files in a local IDE. The 2026 return visit is a different job. 'What the agents are doing is none of my business.' Pretty much 100% cloud. Ten to fifteen Devin threads. About 40 PRs a day. The skill, he says, is managing throngs of agents — the same reason human orgs are pyramids.",
      "The OS is almost embarrassingly analog. Devin folders: P0, P1, P2, Bugs, Investors. Eight screens. A handwritten weekly list on the desk so the digital chaos cannot redefine the goal. Watchdog is a playbook, not a feature: walk every customer account, pull Sentry and UX bugs, return the top three problems, and check whether a fix already shipped. Land PR is the quality gate: Devin Review twice so the agent eats its own bugs, then a browser video with narrated test captions, then the human sentence 'Video approved. Land it.' Codex still wins when the frontend needs him close. Claude Design writes design.md; Codex builds the tokens.",
      "The anti-AI take is the gem. More generated code did not find product-market fit. Talking to a lawyer did. He is hiring humans. Priorities live on paper. Use the factory to execute. Do not delegate the vision. Pair with Lauren (outer loop) and Claire (PR babysitter). Ryan is the solo-founder extreme of both.",
    ],
    whyThisPerson:
      "The most complete public 'I am the manager of a cloud fleet' dump that is not a lab employee. Land PR's video gate is a verification artifact you can steal even if you never buy Devin.",
    collabModel:
      "Cloud-first. Priority folders as org chart. Playbooks for ops and merge. Review loop, then video, then a one-line human land. Local Codex only when pixels matter. Paper for the actual job.",
    reasoningStyle:
      "Manage agents like directs: clear goal, right bucket, no hovering. Verify with a medium a human can scan in 30 seconds. Keep strategy offline.",
    coreLessons: [
      {
        title: "What the agents are doing is none of your business",
        insight:
          "Once the playbook and the gate exist, staring at the trace is a manager who cannot let go. Watch the video. Land it. Move to the next P0.",
      },
      {
        title: "Video is the merge test",
        insight:
          "Two review passes catch bugs. A narrated browser recording is what a solo founder can actually audit at 40 PRs/day. Green CI is not the same as the feature existing.",
      },
      {
        title: "Do not delegate the paper",
        insight:
          "Folders organize the fleet. The handwritten weekly list organizes you. PMF still happens in conversations, not in token volume.",
      },
    ],
    resources: [
      {
        name: "How Ryan Carson Manages 40 PRs a Day",
        kind: "talk",
        url: "https://www.chatprd.ai/how-i-ai/how-ryan-carson-manages-40-prs-a-day-with-devin-and-codex",
        note: "Primary. Folders, Watchdog, Land PR, Claude-to-Codex design.",
      },
      {
        name: "I spent $20,000 on Devin in a month",
        kind: "essay",
        url: "https://www.lennysnewsletter.com/p/i-spent-20000-on-devin-in-a-month",
        note: "Lenny's. The cost and the paper list.",
      },
    ],
    quotes: [
      {
        text: "The skill is managing throngs of agents. Like that is what I do now. And to keep it straight in your head, you basically have to bucket these things.",
        source: "How I AI with Claire Vo, Aug 2026",
        url: "https://www.chatprd.ai/how-i-ai/how-ryan-carson-manages-40-prs-a-day-with-devin-and-codex",
      },
    ],
    related: ["claire-vo", "walden-yan", "lauren-tan", "scott-wu"],
    twitter: "https://x.com/ryancarson",
    website: "https://www.chatprd.ai/how-i-ai/how-ryan-carson-manages-40-prs-a-day-with-devin-and-codex",
  },
  {
    slug: "cole-murray",
    name: "Cole Murray",
    handle: "colemurray",
    title: "Independent consultant; creator of OpenInspect",
    company: "CM Engineering / OpenInspect",
    previous: ["CTO, Haven", "Co-founder CTO, Empiric", "Senior SDE, Amazon"],
    location: "San Francisco",
    tier: "hidden-gem",
    schoolIds: ["harness-loops", "verify-or-do-not-ship", "own-the-context"],
    oneLiner:
      "The consultant who open-sourced the background-agent box after Ramp, then named the decay mode everyone else was dancing around: unaudited agent code regresses the tree toward your worst engineer.",
    superBio: [
      "Cole Murray builds OpenInspect: self-hostable background coding agents in Modal sandboxes, control plane on Cloudflare, OpenCode in the box. He read Ramp's Inspect write-up and decided the missing public artifact was the execution layer — repo, tests, dev servers, browser, GitHub, secrets, a path to a PR — not another chat wrapper. Local agents work until the second session. Worktrees do not give you a second laptop. Put the session in the cloud.",
      "The Latent Space hour with Walden Yan is where the craft gets sharp. AI code smells: getattr-as-reward-hack, paragraph comments on every function, twelve date formatters. Put them in the linter. Scheduled cleanup or the pattern cements and the next agent copies it. PMs and support should hand engineering a diff, not a ticket. Engineering still signs off. Goal is reviewable work, not skipped review. Secrets stay out of the box; the agent is in it. PRs attributed to the human who asked.",
      "He is the open-source twin of Walden's VM argument and Cristina's entropy warning. If you cannot buy Devin, you can fork OpenInspect and wire it to the weird company you actually have. That is the point of releasing it.",
    ],
    whyThisPerson:
      "Hidden gem with a repo you can run. The 'worst engineer' line is the verification school's horror story. Pair with Walden (closed factory) and Ryan (solo fleet).",
    collabModel:
      "Session starts in Slack/GitHub/Linear/cron. Sandbox restores the company env. Agent opens a PR as you. GitHub bot reviews and can fix lint on @mention. Humans merge. Lint the AI smells so the tree does not teach the next run to be worse.",
    reasoningStyle:
      "Infrastructure first: if the environment is not reproducible, the agent is a tourist. Then encode the failure modes as lint. Then let non-engineers propose diffs.",
    coreLessons: [
      {
        title: "The laptop is the bottleneck",
        insight:
          "Worktrees isolate branches. They do not isolate CPUs. Background agents exist because the second session melted your fans.",
      },
      {
        title: "The tree regresses to your worst engineer",
        insight:
          "Unaudited agent patterns become the new style guide. Lint getattr hacks. Schedule the cleanup. Entropy is a training set.",
      },
      {
        title: "Move work into a reviewable form",
        insight:
          "PMs should not file tickets and wait. They should attach a session that already has a diff. Engineering still signs. The ticket was the waste.",
      },
    ],
    resources: [
      {
        name: "OpenInspect",
        kind: "repo",
        url: "https://github.com/ColeMurray/background-agents",
        note: "The system. Control plane + Modal data plane. Start here.",
      },
      {
        name: "The Age of Async Agents",
        kind: "talk",
        url: "https://www.latent.space/p/cognition",
        note: "With Walden. AI smells, VMs, worst-engineer decay.",
      },
      {
        name: "OpenInspect project notes",
        kind: "essay",
        url: "https://murraycole.com/projects/openinspect",
        note: "Why localhost dies at session two. Secrets-not-in-the-box.",
      },
    ],
    quotes: [
      {
        text: "Your code base regresses to your worst engineer, because that engineer who is very gung-ho about AI and is not auditing their code, their pattern starts cementing into the code, and now the AI is referencing their patterns.",
        source: "Latent Space with Walden Yan, 2026",
        url: "https://www.latent.space/p/cognition",
      },
    ],
    related: ["walden-yan", "cristina-poncela", "ryan-carson", "dax-raad"],
    github: "https://github.com/ColeMurray",
    website: "https://murraycole.com/projects/openinspect",
    linkedin: "https://www.linkedin.com/in/colemurray",
  },
  {
    slug: "zach-bruggeman",
    name: "Zach Bruggeman",
    handle: "zachbruggeman",
    title: "Engineer",
    company: "Ramp",
    previous: [],
    tier: "hidden-gem",
    schoolIds: ["harness-loops", "verify-or-do-not-ship", "own-the-context"],
    oneLiner:
      "Ramp's frontend engineer who, with Jason Quense and Rahul Sengottuvelu, built Inspect so the agent gets Sentry, Datadog, LaunchDarkly, and the same API keys a human has — then watched it organically write a third of merged PRs.",
    superBio: [
      "Zach Bruggeman is not a lab founder. He is a Ramp engineer who got tired of local agents that could write code and could not prove it. Inspect started as a Chrome extension for designers to highlight UI and ask for copy edits. He and Jason Quense were the skeptical frontend pair given that toy. Version two, November 2025, is the real product: a remote dev environment with OpenCode as the harness, Modal sandboxes that snapshot the company filesystem every 30 minutes, and the entire internal toolchain in the box — Sentry, Datadog, LaunchDarkly, Temporal, Braintrust, Buildkite, Slack, Linear.",
      "The Modal post and the Linear case study are the method. Local machines cap you at one or two sessions. Third-party agents could not see Ramp's logs or flags. 'We know our one API key. We know the schema of these logs.' Fewer layers of abstraction, better verification. Backend: run tests, read telemetry, query flags. Frontend: screenshots and live previews. Near-instant startup so it is not slower than localhost or nobody adopts it. Organic adoption to ~30% of merged PRs, later reported around 60% in some slices, without a mandate. Designers and PMs ship. Engineers review.",
      "He is Cole's inspiration and Walden's enterprise cousin. The lesson for this directory: a factory is not a better prompt. It is the production tools, in the sandbox, with snapshots, so 'done' means the same thing it means for a human on-call.",
    ],
    whyThisPerson:
      "Hidden gem inside a fintech that actually runs the loop on real money. Inspect is the existence proof that 'give the agent the same tools' beats another Copilot seat.",
    collabModel:
      "Background session in a snapshotted company VM. Agent uses prod-adjacent tools to verify. Linear as the work surface. Humans review PRs. Anyone at the company can start a session. No local setup.",
    reasoningStyle:
      "If it is slower than local, it dies. If it cannot see telemetry, it is guessing. Integrate the real toolchain. Let adoption be optional and measure merge share.",
    coreLessons: [
      {
        title: "Give the agent the on-call toolbox",
        insight:
          "Tests, Sentry, Datadog, flags, screenshots. A coding agent that cannot query the system it is changing is a tourist with autocomplete.",
      },
      {
        title: "Startup time is a product feature",
        insight:
          "Snapshot the filesystem every 30 minutes. If the sandbox is slower than a laptop, engineers will not leave the laptop.",
      },
      {
        title: "Internal beats generic",
        insight:
          "One API key, known log schema, Linear already the OS. A closed vendor has to abstract all of that. An internal agent can just use it.",
      },
    ],
    resources: [
      {
        name: "How Ramp built a background coding agent on Modal",
        kind: "essay",
        url: "https://modal.com/blog/how-ramp-built-a-full-context-background-coding-agent-on-modal",
        note: "The infra. Snapshots, sandboxes, quote from Zach.",
      },
      {
        name: "Why Ramp built Inspect",
        kind: "essay",
        url: "https://newsletter.pragmaticengineer.com/p/why-ramp-built-inspect",
        note: "Gergely Orosz. Origin story, frontend skepticism, v1 to v2.",
      },
      {
        name: "The coding agent behind 60% of Ramp's merged PRs",
        kind: "essay",
        url: "https://linear.app/customers/ramp",
        note: "Linear case study. Tight lifecycle integration.",
      },
    ],
    quotes: [
      {
        text: "It's a really tight integration with our development lifecycle and our tooling. We know our one API key for this. We know exactly what the schema of these logs is going to be.",
        source: "Linear customer story on Ramp Inspect",
        url: "https://linear.app/customers/ramp",
      },
    ],
    related: ["cole-murray", "walden-yan", "zach-davis", "eno-reyes"],
    website: "https://modal.com/blog/how-ramp-built-a-full-context-background-coding-agent-on-modal",
  },
];
