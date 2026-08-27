import type { Engineer } from "./types";

export const issue12Engineers: Engineer[] = [
  {
    slug: "zack-proser",
    name: "Zack Proser",
    handle: "zackproser",
    title: "Applied AI",
    company: "WorkOS",
    previous: ["Pinecone", "Cloudflare", "Gruntwork"],
    location: "United States",
    tier: "hidden-gem",
    schoolIds: ["encode-judgment", "harness-loops", "verify-or-do-not-ship"],
    oneLiner:
      "The WorkOS engineer who treats human attention as the scarce resource: signal agents triage Slack, three verification gates let you leave the desk, and a Monday job mines JSONL logs into next week's skills.",
    superBio: [
      "Zack Proser sits on WorkOS Applied AI next to Nick Nisi and still has a different dump. Nick encoded the six-agent spine so the writer cannot grade the exam. Zack encoded the day: 7–9:30 at the desk to architect, plan, and set gates; 9:30 voice-dispatch two or three worktree agents; trail time with --remote-control; mobile review; lunch while agents keep running. The AI Engineer London talk and the Untethered Productivity write-up are the primary sources. The tools are nuclear. Your nervous system is ancient. Simon Willison's 'four agents and I'm wiped by 11 AM' is the shared diagnosis. Zack's answer is infrastructure around attention, not more loops.",
      "Signal layer first. Slack MCP and Linear MCP into Claude Code. Sixteen messages become two tickets and a dedup. He never opens Slack; he sees the delta. Voice (WisprFlow, ~179 WPM) dispatches three agents in about nine seconds. Handwave, a watchOS app he had Claude Code build, steers sessions from the wrist over Bonjour. A 32-minute film of reviewing a PR from a phone in the woods is the proof that remote control is not a demo. Verification is what makes walking away legal: gate 1 lint/build/tests on hooks, gate 2 browser click-through (--chrome), gate 3 a constitution in CLAUDE.md plus a critic agent. Parallelize only after the gates exist.",
      "The system improves itself. Every Monday a scheduled task scans last week's Claude Code JSONL. Repeated instructions become skills. One week it noticed he had reformatted blog images for CDN four times and recommended a skill. Oura Ring MCP feeds sleep and HRV into the morning plan so a bad night means two tickets, not eight. coding-agent-eval-harness is the other artifact: isolated Git fixtures, held-out graders, route-level telemetry for local vs hosted models. Pair with Nick (the spine) and Kyle (don't let the LLM own flow control). Zack is the person who will tell you to take the speed gain as a walk.",
    ],
    whyThisPerson:
      "Distinct from Nick's Case/Ideation: attention as the harness, walk-away verification, JSONL-mined skills, and an eval repo you can rerun. Steal the three gates even if you never buy an Oura.",
    collabModel:
      "Morning desk for intent and gates. Voice-dispatch isolated worktrees. Signal agents own Slack and Linear. Phone and watch for redirects. Monday log mining writes the next skill. Body data caps the day's agent count.",
    reasoningStyle:
      "You are the constraint, not the model. Speed without gates is 2 AM chaos. Reclaim margin for diffuse-mode thinking. The weekly retrospective is a compiler for taste.",
    coreLessons: [
      {
        title: "Verification is what lets you leave",
        insight:
          "Lint, browser click-through, constitution. Scale agent count only after anxiety stops scaling with it. Without proof, parallel sessions are a larger review burden.",
      },
      {
        title: "Build a signal layer before a second agent",
        insight:
          "Triage the noisiest input so you never open it. Sixteen Slack messages to two tickets is more leverage than a cleverer prompt.",
      },
      {
        title: "Mine the JSONL; do not re-prompt the same week",
        insight:
          "Session history is where missing skills hide. A Monday job that proposes skills from repeated work is compounding. The agent that reformats images four times is telling you what to encode.",
      },
    ],
    resources: [
      {
        name: "Untethered Productivity",
        kind: "essay",
        url: "https://zackproser.com/blog/aie-london-untethered-productivity",
        note: "Primary. Attention thesis, signal/voice/remote, three gates, Monday JSONL loop, Oura.",
      },
      {
        name: "How to Keep Shipping When You Walk Away",
        kind: "talk",
        url: "https://zackproser.com/videos/keep-shipping-when-you-walk-away",
        note: "AI Engineering London recording and talk page.",
      },
      {
        name: "coding-agent-eval-harness",
        kind: "repo",
        url: "https://github.com/zackproser/coding-agent-eval-harness",
        note: "Isolated fixtures, held-out graders, 60-run local vs cloud experiment.",
      },
      {
        name: "handwave",
        kind: "repo",
        url: "https://github.com/zackproser/handwave",
        note: "watchOS remote control for Claude Code sessions.",
      },
    ],
    quotes: [
      {
        text: "The tools are nuclear. Your nervous system is ancient. Find your developer balance.",
        source: "Untethered Productivity",
        url: "https://zackproser.com/blog/aie-london-untethered-productivity",
      },
      {
        text: "Speed without safety is how you end up debugging agent-generated chaos at 2 AM.",
        source: "Untethered Productivity",
        url: "https://zackproser.com/blog/aie-london-untethered-productivity",
      },
    ],
    related: ["nick-nisi", "simon-willison", "kyle-mistele", "ryan-cooke"],
    twitter: "https://x.com/zackproser",
    github: "https://github.com/zackproser",
    website: "https://zackproser.com",
  },
  {
    slug: "matt-pocock",
    name: "Matt Pocock",
    handle: "mattpocockuk",
    title: "Founder; AI Hero / Total TypeScript",
    company: "AI Hero",
    previous: ["Total TypeScript", "Vercel"],
    location: "Oxford, UK",
    tier: "hidden-gem",
    schoolIds: ["encode-judgment", "spec-is-the-code", "verify-or-do-not-ship"],
    oneLiner:
      "The educator who shipped his daily engineering process as installable skills: grill the idea until the design tree is resolved, write a spec, cut tracer-bullet tickets, TDD, and deepen the modules so the next amnesiac can navigate.",
    superBio: [
      "Matt Pocock taught TypeScript to a generation and then did the same for agent collab. mattpocock/skills is not a prompt pack. It is the process he actually runs, copied out of ~/.agents: a three-sentence /grill-me that interviews until every branch of the design tree is resolved (Brooks), /grill-with-docs that writes CONTEXT.md and ADRs while you talk, /to-spec that synthesizes without re-interviewing, /to-tickets that cuts vertical slices with blocking edges, /implement plus /tdd, /code-review on two axes (spec and standards) in a fresh sub-agent, /wayfinder when the work will not fit one window. He draws the skip line at ~140k tokens — past that, agent attention degrades regardless of the model's advertised context. Small work jumps to implement. Large work gets a spec.",
      "The architectural half is the steal that educators usually skip. How To Make Codebases AI Agents Love: the agent is Memento, a new starter twenty times a day. What it sees is a tangle of shallow modules that all import each other. Deep modules — fat implementation, thin interface, tests on the seam — are grey boxes. You own the interface. The agent owns the inside. Progressive disclosure on disk. /improve-codebase-architecture hunts the confusions (bounce between tiny files, pure functions extracted for testability while bugs live in the call site) and proposes deepenings. 'If you have a garbage code base, the AI will produce garbage within that code base.' TDD is 'the most consistent way to improve agent outputs' because it gives the amnesiac a loop that knows done.",
      "Raymond Weitekamp's Auto-Pocock incepts this sequence from a feature brief; that is how stealable the pipeline is. Pair with Jesse (Superpowers as a phase machine) and Sean (spec is the code). Matt is the person whose skill is three sentences long and still changes the session.",
    ],
    whyThisPerson:
      "The densest public skill catalog that is also a documented personal method, plus the deep-module argument that most harness writers leave out. Grill-then-spec is stealable tonight.",
    collabModel:
      "Grill until shared understanding. Spec the destination. Tickets as tracer bullets. Implement under TDD. Fresh-context review against spec and standards. Weekly architecture pass. Plugin for subscribe-not-fork, or skills.sh to edit.",
    reasoningStyle:
      "Agents are cloned juniors with no memory. Encode the human process as short skills. The codebase is the real prompt. Design trees before code. Tests lock the grey box.",
    coreLessons: [
      {
        title: "Grill before you spec, spec before you code",
        insight:
          "Plan mode writes a document too early. Interview until the design tree is resolved. Then synthesize. The grilling skill is three sentences because the right constraint is more valuable than a long ritual.",
      },
      {
        title: "The codebase is the prompt",
        insight:
          "AGENTS.md cannot rescue a web of shallow modules. Deep modules with tests on the interface let you stop reading the inside. Taste belongs at the boundaries.",
      },
      {
        title: "Tickets are tracer bullets, not layers",
        insight:
          "Horizontal slices hide unknown unknowns. Each ticket cuts through integration. Blocking edges tell you what can run in parallel without two agents sharing a lie.",
      },
    ],
    resources: [
      {
        name: "mattpocock/skills",
        kind: "repo",
        url: "https://github.com/mattpocock/skills",
        note: "Daily catalog. claude plugins install mattpocock-skills or npx skills add.",
      },
      {
        name: "5 Agent Skills I Use Every Day",
        kind: "essay",
        url: "https://www.aihero.dev/5-agent-skills-i-use-every-day",
        note: "Grill, spec, tickets, TDD, architecture. The personal how-to.",
      },
      {
        name: "How To Make Codebases AI Agents Love",
        kind: "essay",
        url: "https://www.aihero.dev/how-to-make-codebases-ai-agents-love",
        note: "Deep modules, grey boxes, Memento new-starters.",
      },
    ],
    quotes: [
      {
        text: "AI is not a super-powered developer. It's a new starter with no memory. Every time you spawn an agent, it's like the guy from Memento stepping into your codebase.",
        source: "How To Make Codebases AI Agents Love",
        url: "https://www.aihero.dev/how-to-make-codebases-ai-agents-love",
      },
      {
        text: "If you have a garbage code base, the AI will produce garbage within that code base.",
        source: "5 Agent Skills I Use Every Day",
        url: "https://www.aihero.dev/5-agent-skills-i-use-every-day",
      },
    ],
    related: ["jesse-vincent", "sean-grove", "raymond-weitekamp", "jeremy-howard"],
    twitter: "https://x.com/mattpocockuk",
    github: "https://github.com/mattpocock",
    website: "https://www.aihero.dev",
  },
  {
    slug: "erik-schluntz",
    name: "Erik Schluntz",
    handle: "erikschluntz",
    title: "Researcher, coding agents",
    company: "Anthropic",
    previous: ["Physical Intelligence", "Covariant"],
    location: "San Francisco",
    tier: "lab",
    schoolIds: ["plan-then-oneshot", "own-the-context", "verify-or-do-not-ship"],
    oneLiner:
      "The Claude Code researcher who broke his hand, let Claude write everything for two months, and came back with production rules: be the model's PM, vibe-code only the leaf nodes, and verify the product you still remember exists.",
    superBio: [
      "Erik Schluntz co-wrote Anthropic's Building Effective Agents with Barry Zhang — workflows vs agents, start simple, ACI not HCI — then gave the personal version at Code with Claude: Vibe coding in prod. Last year a bike commute put his hand in a cast for two months. Claude wrote all the code. That constraint is the method. Karpathy's vibe coding is 'forget that the code even exists.' Erik's production amendment: forget the code, do not forget the product. Tight Cursor loops are not vibe coding. Vibe coding is unsupervised generation. The industry problem is the METR exponential: task length doubling every ~7 months. Reviewing an hour of work in lockstep will not survive a day-long or week-long generation. You have to learn to manage an implementation you did not write — a problem CTOs, PMs, and CEOs already have. Engineers are the ones unused to it.",
      "The stealable craft is three moves. (1) Be Claude's PM. Spend 15–20 minutes consolidating guidance — explore the repo, find files, name patterns, write the plan — often in one conversation, then execute the plan in a fresh context. 'What would a new teammate need?' If you cannot answer, you are not ready to prompt. (2) Leaf nodes, not the trunk. Vibe-code terminals: a page, an endpoint, a report, a conversion script. Tech debt there is contained. Core architecture, auth, shared frameworks stay human-led because debt has no verification except reading the code. (3) Verifiability at a higher layer: three end-to-end tests (happy path plus two errors), use the product, spot-check. He cites a ~22,000-line merge into Anthropic's production RL codebase in a day as leaf-node work plus checkpoints, not as a flex to copy blindly.",
      "Building Effective Agents is the other half: prefer workflows with code-shaped control flow until you need an agent; invest as much in tool docs as in prompts (absolute paths after the SWE-bench agent kept breaking relative ones); measure before adding a framework. Pair with Boris (plan then one-shot) and Karpathy (who named the vibe). Erik is the lab person who will tell you the compiler analogy: eventually you stop reading the assembly, but only after you can still ship the product.",
    ],
    whyThisPerson:
      "Lab-side personal collab, not Claude Code product marketing. Leaf nodes plus 'be the PM' plus execute-in-a-fresh-context are stealable even if you never merge 22k lines.",
    collabModel:
      "Collect context and a plan for 15–20 minutes. New session executes. Restrict unsupervised generation to leaves. Verify with tests, product use, and spot checks. Keep the trunk human.",
    reasoningStyle:
      "Managing unread implementations is an old management problem. Find a verification layer above the code. ACI: make tools hard to misuse. Simplicity until complexity pays.",
    coreLessons: [
      {
        title: "Ask not what Claude can do for you",
        insight:
          "You are the PM. Pack the guidance a new hire would need, then let it cook in a clean window. Chat-back-and-forth 'build this' is not a plan.",
      },
      {
        title: "Vibe-code the leaves",
        insight:
          "Tech debt has no test except reading. Put unsupervised generation where nothing else depends on it. Guard the trunk.",
      },
      {
        title: "Forget the code, not the product",
        insight:
          "The compiler analogy only works if you can still tell whether the software is right. Tests, using it, spot checks. Lockstep review of every line will lose the exponential.",
      },
    ],
    resources: [
      {
        name: "Vibe coding in prod",
        kind: "talk",
        url: "https://www.youtube.com/watch?v=fHWFF_pnqDk",
        note: "Code with Claude. Cast, leaf nodes, be the PM, 22k-line RL merge.",
      },
      {
        name: "Building effective agents",
        kind: "essay",
        url: "https://www.anthropic.com/engineering/building-effective-agents",
        note: "With Barry Zhang. Workflows vs agents, ACI, start simple.",
      },
    ],
    quotes: [
      {
        text: "Ask not what Claude can do for you, but what you can do for Claude.",
        source: "Vibe coding in prod, Code with Claude",
        url: "https://www.youtube.com/watch?v=fHWFF_pnqDk",
      },
      {
        text: "You forget the code exists, but you don't forget the product exists.",
        source: "Vibe coding in prod, Code with Claude",
        url: "https://www.youtube.com/watch?v=fHWFF_pnqDk",
      },
    ],
    related: ["boris-cherny", "andrej-karpathy", "cat-wu", "dex-horthy"],
    twitter: "https://x.com/ErikSchluntz",
    github: "https://github.com/eschluntz",
    website: "https://www.anthropic.com/engineering/building-effective-agents",
  },
];
