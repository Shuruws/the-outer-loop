import type { Engineer } from "./types";

export const issue18Engineers: Engineer[] = [
  {
    slug: "brian-scanlan",
    name: "Brian Scanlan",
    handle: "brian_scanlan",
    title: "Senior principal engineer",
    company: "Intercom / Fin",
    previous: [
      "Principal systems engineer, Intercom",
      "Infrastructure and developer experience, Intercom",
    ],
    location: "Dublin",
    tier: "big-tech",
    schoolIds: ["encode-judgment", "harness-loops", "verify-or-do-not-ship"],
    oneLiner:
      "The Intercom principal who turned Claude Code into a platform: hooks that block raw gh pr create, a flaky-spec skill that edits itself, and SessionEnd telemetry that files the next skill from the gap.",
    superBio: [
      "Brian Scanlan is a senior principal engineer at Intercom (now Fin) in Dublin. He is not a lab researcher and not a founder with a try repo. He is the person who published how a 300–400 engineer Rails shop actually standardized on Claude Code: 13 internal plugins, 100+ skills, hooks at the shell, OpenTelemetry on fourteen lifecycle events into Honeycomb, and a weekly job that fact-checks CLAUDE.md. The March 2026 Fin Ideas post and the How I AI episode are the dump. Treat the 2x merged-PRs-per-R&D-employee claim as the design constraint they optimized for, not as your KPI.",
      "The steal is enforcement, not enablement. AI-written PR descriptions were getting worse — an LLM judge over months of history showed the trend. Instead of a wiki, a PreToolUse hook intercepts raw gh pr create and refuses until the Create PR skill has run. The skill reads the whole session, not the diff, and asks why, not what changed. Another hook blocks all modifications to merged PR branches. After creation, a background agent watches CI with ETag polling. The flaky-test skill is the compounding version: a 9-step forensic workflow, a 20-category taxonomy, never skip a spec, never guess without CI data. Then two instructions that turn it into what he calls a 100x agent: when the fix is novel, update yourself; then find every sibling instance of the same anti-pattern.",
      "The outer loop is product-shaped. SessionEnd runs Haiku over the transcript, classifies gaps (missing_skill, missing_tool, repeated_failure, wrong_info), and posts Slack with a pre-filled GitHub issue. Real sessions become skills. Permissions are evidence-based: after five prompts, a hook offers an analyzer over fourteen days of approved Bash, then writes GREEN commands into settings. JAMF ships the marketplace to every Mac. Pair with Jesse (skills as process), David Cramer (Warden as encoded review), Ryan Carson (personal factory). Scanlan is the person who will tell you Claude Code is a platform, not a tool, and that a hook is how you put CI earlier in the loop.",
    ],
    whyThisPerson:
      "Primary IC dump from inside a scaled Rails org: hook-enforced skills, a self-editing playbook, and telemetry that files the next skill. Distinct from Ryan Carson's solo Devin OS and from Claire Vo's LaunchDarkly skills. Steal the enforcement, not the 2x slide.",
    collabModel:
      "Standardize on one coding agent and treat it as a platform. Encode review standards as skills. Put PreToolUse hooks in front of gh pr create so the skill is the only path. Let skills edit themselves when they learn something novel, then fan out to siblings. Instrument every lifecycle event. On SessionEnd, classify the gap and open the GitHub issue that becomes the next skill.",
    reasoningStyle:
      "Adoption is a product problem. Measure the skill, not the license. Advisory markdown drifts; hooks do not. A 1x skill copies a senior's checklist. A 100x skill writes the next line of the checklist. Pick one tool so the org can compound.",
    coreLessons: [
      {
        title: "Put the standard in the hook, not the wiki",
        insight:
          "When AI PR descriptions degraded, Intercom did not send a Slack reminder. A PreToolUse hook blocked gh pr create until Create PR had run. Determinism belongs before the pull request exists.",
      },
      {
        title: "A skill that cannot rewrite itself is a 1x intern",
        insight:
          "when you fix something and it's novel, you need to update yourself as well. Then sweep for siblings. Maintenance debt becomes a loop instead of a backlog.",
      },
      {
        title: "SessionEnd is the outer loop",
        insight:
          "Haiku classifies missing_skill and files a GitHub issue. Telemetry without a path into the skill repo is a dashboard. The path is the factory.",
      },
    ],
    resources: [
      {
        name: "How we use Claude Code today at Intercom",
        kind: "essay",
        url: "https://ideas.fin.ai/p/how-we-use-claude-code-today-at-intercom",
        note: "Primary. Read-only prod console, OTel, flaky-test forensics, PR hooks, evidence-based permissions.",
      },
      {
        name: "How Intercom doubled engineering output (How I AI)",
        kind: "talk",
        url: "https://www.chatprd.ai/how-i-ai/how-intercom-doubled-engineering-output-brian-scanlan-ai-workflows-for-claude-code",
        note: "Create PR skill, Honeycomb telemetry, 100x flaky-spec self-update, agent-first CLI.",
      },
      {
        name: "How Building with AI Can Double Throughput (AI Engineer)",
        kind: "talk",
        url: "https://ai.engineer/talks/how-building-with-ai-can-double-the-throughput-of-your-engineering-team",
        note: "Use Claude for everything, then a skill, then improve the skill, then optimize the environment for agents.",
      },
    ],
    quotes: [
      {
        text: "When you fix something and it's novel, you need to update yourself as well.",
        source: "How I AI, on the flaky-spec skill",
        url: "https://www.chatprd.ai/how-i-ai/how-intercom-doubled-engineering-output-brian-scanlan-ai-workflows-for-claude-code",
      },
      {
        text: "It is either the worst thing in the world that will ruin Intercom, or complete genius.",
        source: "How we use Claude Code today at Intercom, on the read-only production Rails console",
        url: "https://ideas.fin.ai/p/how-we-use-claude-code-today-at-intercom",
      },
    ],
    related: ["ryan-carson", "claire-vo", "jesse-vincent", "david-cramer"],
    twitter: "https://x.com/brian_scanlan",
    linkedin: "https://www.linkedin.com/in/scanlanb",
    website: "https://brian.scanlan.ie",
  },
  {
    slug: "eddie-kim",
    name: "Eddie Kim",
    handle: "edawerd",
    title: "Co-founder and chief technology officer",
    company: "Gusto",
    previous: ["Co-founder, Gusto"],
    location: "San Francisco",
    tier: "big-tech",
    schoolIds: ["verify-or-do-not-ship", "spec-is-the-code", "harness-loops"],
    oneLiner:
      "The Gusto CTO who went back to writing code: trash-can PRs as product decisions, eval-first Claude loops for customer bugs, and a perma-Zoom instead of Jira, Figma, and docs.",
    superBio: [
      "Eddie Kim is co-founder and CTO of Gusto. Famous-founder rule applies the way it did for Tobi Lütke: ship him because the personal loop is a method, not because Gusto crossed a billion in revenue. In 2026 he sat down on How I AI and showed how five people — four engineers including himself, one designer — shipped Gusto Cofounder from a layover prototype to a tier-one launch in ten weeks. No Jira. No Figma. No text specs. No standups. No retros. A 24/7 Zoom room, a lot of Claude Code tokens, and a whiteboard photo that remained the only document.",
      "The stealable craft is two loops. First, the trash-can method: open a real pull request, discuss it in the perma-Zoom, and close it if the product answer is no. Code is cheap enough that a ready-for-review PR is a product proposal, not a sunk cost. He had to delete his own layover prototype when the team wanted TypeScript on Cloudflare Workers; he still flinched; it was the right call. Second, eval-first bug fixing. Paste the GitHub issue. Write a failing eval that reproduces the customer failure. Implement. Prove the eval passes. Review the prompt change for taste. Only then open the PR. He was never a TDD person for unit tests. For agent conversations, he says it is the only way they work now.",
      "The product stack is a contrapoint to harness maximalism: Cloudflare Workers for the agent loop, Vercel AI SDK, memory as a database column named memory. No third-party planning layer. Skip the Cofounder waitlist pitch. Keep the trash can, the failing eval, and the rule that a designer with Claude Code can ship in the 94th percentile because the verification surface is the eval and the preview, not a Figma file. Pair with Hamel (evals from failures), Tobi (try directories), Felix (judge the artifact). Eddie is the person who will tell you the PR is the spec, and that throwing away a good PR is now a product skill.",
    ],
    whyThisPerson:
      "A public CTO-level coding-collab dump with two copyable tools: trash-can PRs as product decisions, and eval-first Claude for customer bugs. Distinct from Tobi's try repo and from Zach Lloyd's factory-engineer thesis.",
    collabModel:
      "Prototype in Claude Code. Whiteboard once. Keep a perma-Zoom and delete the rest of process. Land work behind a flag. Treat a ready PR as a product proposal you are allowed to close. For agent bugs: failing eval, fix, passing eval, human review of the prompt, then PR. Cloudflare Workers plus AI SDK. Memory is a column.",
    reasoningStyle:
      "When code is cheap, deletion is a product decision, not a tragedy. Evals are the tests he would not write for ordinary TDD. The harness you do not need is the one the SDK already runs. A layover prototype is a conversation starter, not a sacred repo.",
    coreLessons: [
      {
        title: "A ready PR is a product proposal",
        insight:
          "Discuss it in the room. Merge or trash. The trash-can method only works because Claude made the PR cheap enough to throw away without grief.",
      },
      {
        title: "Failing eval first, then the fix, then the PR",
        insight:
          "Reproduce the customer failure as an eval. Implement until it passes. Review the prompt for taste. He never bought unit-test TDD. For agents, this is the loop.",
      },
      {
        title: "Delete the harness you invented to feel professional",
        insight:
          "Workers plus AI SDK. Memory is a tool that writes a column. If you need a planning product, you probably needed a smaller agent.",
      },
    ],
    resources: [
      {
        name: "How Gusto built a new product line in 10 weeks (How I AI)",
        kind: "talk",
        url: "https://www.chatprd.ai/how-i-ai/how-gusto-built-a-new-product-line-in-10-weeks-with-claude-code-no-jira-and-no-docs",
        note: "Primary. Perma-Zoom, trash-can PRs, eval-first live coding, two-tool agent stack.",
      },
      {
        name: "Lenny's Newsletter episode",
        kind: "talk",
        url: "https://www.lennysnewsletter.com/p/no-figma-no-jira-no-docs-how-gusto",
        note: "Same dump with chapter list: trash can, perma-Zoom, eval-first bugs.",
      },
    ],
    quotes: [
      {
        text: "I call this the trash can method of software engineering right now where you can actually trash all the code.",
        source: "How I AI",
        url: "https://www.chatprd.ai/how-i-ai/how-gusto-built-a-new-product-line-in-10-weeks-with-claude-code-no-jira-and-no-docs",
      },
      {
        text: "Always write a failing eval first, then write the code to fix it, prove that it works by seeing that the eval passes, and then seeing how the rest of the evals in your suite pass and then open up a PR.",
        source: "How I AI, live coding a customer bug",
        url: "https://www.chatprd.ai/how-i-ai/how-gusto-built-a-new-product-line-in-10-weeks-with-claude-code-no-jira-and-no-docs",
      },
    ],
    related: ["tobi-lutke", "hamel-husain", "felix-rieseberg", "claire-vo"],
    linkedin: "https://www.linkedin.com/in/edawerd",
    website: "https://gusto.com/cofounder",
  },
  {
    slug: "alex-finn",
    name: "Alex Finn",
    handle: "AlexFinn",
    title: "Founder",
    company: "Henry Intelligent Machines",
    previous: ["Creator Buddy", "Vibe Code Academy"],
    location: "United States",
    tier: "hidden-gem",
    schoolIds: ["harness-loops", "verify-or-do-not-ship", "plan-then-oneshot"],
    oneLiner:
      "Morning brief becomes a task queue; a build loop and a review loop run all day; Slack shows a Vercel preview; a rocket emoji merges the SHA you inspected — not the branch head.",
    superBio: [
      "Alex Finn is a solo builder who showed How I AI a software factory for Henry Intelligent Machines. He also runs Vibe Code Academy and a large X account. Ship him for the factory, not the follower count. The hardware tour — three 512 GB Mac Studios, a DGX Spark, an RTX 5090 — is flavor. The steal is the loop: a morning-build conversation in Claude that becomes a structured queue; a Claude Code build loop that claims tasks; a separate review loop that starts from the task and the diff; a Slack message with what changed, how to test it, and a Vercel preview; a rocket emoji that merges only the commit SHA on that message.",
      "The merge rule is the craft that most 'emoji to prod' demos skip. The workflow writeup is explicit: associate the reaction with the message's commit SHA, not the current branch head. Confirm the reactor is allowed and the preview still resolves to that SHA. Immediately before merge, compare the approved SHA with the branch head and required checks. If they diverge, stop. That is Ryan Carson's Land PR video gate, rebuilt as an emoji, with the same distrust of HEAD. Builder and reviewer are different loops so eagerness cannot grade its own homework — the same split CJ Hess named kevin and carl.",
      "Local models are the BDR; Claude Code is the closer. A GLM 5.2 scan every twenty minutes dumps findings into Markdown. Claude Code reads that file once a day and decides what is real. Running the frontier model on that cadence would cost thousands a month. Steal the two-loop factory and the SHA-bound emoji. Do not steal the datacenter, the academy pitch, or 'unlimited inference' as a personality. Pair with Lauren (outer loop that farms work), Ryan Carson (human evidence before merge), CJ Hess (implementer vs reviewer). Finn is the person who will tell you the rocket is an approval of a SHA, and that a local model is for volume you should not spend Opus on.",
    ],
    whyThisPerson:
      "A public, copyable solo factory: plan in the morning, split build and review, preview, then merge the inspected SHA. Distinct from Lauren's cloud-agent factory and from Ryan Carson's Devin video gate. Skip the Mac Studio tour.",
    collabModel:
      "Morning-build conversation becomes a queue. Build loop implements. Review loop starts from a clean context on the task and diff, then pings Slack with a preview. Human tests the artifact. Rocket emoji merges the SHA on that message after checks still match. Local models dump cheap volume into files; Claude Code judges once a day.",
    reasoningStyle:
      "Autonomy is a pipeline with a human at the merge SHA, not a vibe. Split the appetite: one loop writes, one loop grades. Cheap local tokens for high-frequency scans. Frontier tokens for the closer. HEAD lies; the message SHA does not.",
    coreLessons: [
      {
        title: "The rocket emoji approves a SHA, not a branch",
        insight:
          "If the reaction merges HEAD, you shipped someone else's commit. Bind the emoji to the preview's SHA and re-check immediately before merge.",
      },
      {
        title: "Build loop and review loop are different processes",
        insight:
          "One Claude Code claiming tasks all day will rubber-stamp itself. A second loop that starts from the task and the diff is the reviewer.",
      },
      {
        title: "Local models do the volume. Claude does the judgment.",
        insight:
          "A twenty-minute GLM scan into Markdown is a sensor. A daily Claude pass on that file is a closer. Do not pay frontier prices for the sensor.",
      },
    ],
    resources: [
      {
        name: "Alex Finn's local AI fleet and automated software factory (How I AI)",
        kind: "talk",
        url: "https://www.chatprd.ai/how-i-ai/alex-finns-local-ai-fleet-and-automated-software-factory",
        note: "Primary. Morning build, two Claude Code loops, Slack preview, rocket-emoji merge.",
      },
      {
        name: "How to build an automated software factory with AI agents",
        kind: "docs",
        url: "https://www.chatprd.ai/how-i-ai/workflows/how-to-build-an-automated-software-factory-with-ai-agents",
        note: "SHA-bound emoji, preview evidence, builder vs reviewer as separate loops.",
      },
      {
        name: "Lenny's Newsletter writeup",
        kind: "essay",
        url: "https://www.lennysnewsletter.com/p/how-i-ai-gpt-56-review-how-a-solo",
        note: "Local model as BDR, Claude as closer; factory recap.",
      },
    ],
    quotes: [
      {
        text: "I have a build loop and a review loop. Once that's reviewed, it pings me on Slack and I can just leave a rocket emoji.",
        source: "How I AI",
        url: "https://www.chatprd.ai/how-i-ai/alex-finns-local-ai-fleet-and-automated-software-factory",
      },
    ],
    related: ["lauren-tan", "ryan-carson", "cj-hess", "claire-vo"],
    twitter: "https://x.com/AlexFinn",
    website: "https://www.alexfinn.ai",
  },
];
