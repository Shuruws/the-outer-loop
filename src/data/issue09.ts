import type { Engineer } from "./types";

export const issue09Engineers: Engineer[] = [
  {
    slug: "nicolay-gerold",
    name: "Nicolay Gerold",
    handle: "nicolaygerold",
    title: "Co-founder",
    company: "Amp",
    previous: [
      "Senior software engineer, Sourcegraph",
      "Host, How AI Is Built",
      "LLM engineer, Hubert Burda Media",
    ],
    location: "Munich",
    tier: "lab",
    schoolIds: ["own-the-context", "encode-judgment", "harness-loops"],
    oneLiner:
      "The Amp cofounder who never used /compact — summaries ate his instructions — so he built Handoff as targeted extraction, then taught the sequel: once models can read the last thread, the dedicated mechanism gets Kirby-eaten.",
    superBio: [
      "Nicolay Gerold writes the Amp internals other cofounders demo. Thorsten explains three tools. Beyang calibrates how much direction a task needs. Quinn ships with orbs. Nicolay is the one who, on his own site, said the quiet part: he never ran /compact. The summary always lost the instructions. Compaction is lossy by design and, worse, it trains you to keep one meandering thread alive. Handoff was the replacement: you name the next goal, the model extracts relevant files and facts from the old thread, a new thread opens with a draft prompt you can edit. Structured output, not prose. Extraction, not generated 'instructions for the next agent.' Files checked against the actual conversation so hallucinated paths get dropped. The goal sits at the bottom of the new prompt, visibly yours, because lazy goals ('continue') made the extractor produce mush.",
      "The workshop repo is the full argument. howtobuildacodingagent walks the core loop, harness engineering, why compaction v1 failed, plan mode, and Handoff as plugins for both Amp and Pi. The unglamorous part: about 100 real threads through a playground, failure modes in a spreadsheet, one fix at a time. Then the punchline he is honest enough to publish: we do not need Handoff anymore. It is gone. Same fate as plan mode. Once compaction preserves what matters and a new thread can ask the old one questions, extraction no longer has to be perfect — only good enough to recover from. Kirby ate it. Models swallow the tool and the capability becomes native. That is not a product post. That is an engineer updating the method when the assumption expires.",
      "The 2025 essays are the other half. Tool search should not be search; it should be discovery. Skills in Amp bundle instructions, MCP servers, and toolboxes so the agent loads a capability just in time instead of stuffing every tool schema into the window. Pair with Dex (own the context), Lauren (skills as memory), and John Yang (the interface that got deleted when the model grew up). Nicolay is Amp's version of that recantation.",
    ],
    whyThisPerson:
      "The densest unused Amp source: a personal refusal of compact, a shipped primitive, a workshop with the deleted plugin, and a public admission that the primitive expired. Steal Handoff's extraction pattern even if Amp no longer needs the button.",
    collabModel:
      "One focused thread per goal. When the work changes, extract files and facts into a fresh window instead of summarizing in place. Prefer skills as just-in-time packages over a giant tool catalog. Delete the mechanism when the model can do it.",
    reasoningStyle:
      "Split hard prompt problems into extraction problems the model was trained on. Ground extraction in a human goal. Treat scaffolding as having a half-life. Measure on real threads, not toy transcripts.",
    coreLessons: [
      {
        title: "Do not compact a rotting thread",
        insight:
          "A summary is a lossy rewrite of your instructions. Name the next goal, pull the files and facts that goal needs, start clean. Review the draft before you send it.",
      },
      {
        title: "Extraction beats generated instructions",
        insight:
          "Asking a model to write a brief for the next agent produces mush. Ask it which files were touched and which decisions were made, then stitch that to your goal mechanically.",
      },
      {
        title: "Kirby eats scaffolding",
        insight:
          "Handoff encoded 'compaction loses too much to trust.' When that stopped being true, the feature became a workshop demo. Keep the lesson. Retire the button.",
      },
    ],
    resources: [
      {
        name: "How I Built Handoff in Amp",
        kind: "essay",
        url: "https://www.nicolaygerold.com/posts/how-i-built-handoff-in-amp",
        note: "Primary. Never used /compact. Built targeted extraction instead.",
      },
      {
        name: "Handoff (No More Compaction)",
        kind: "docs",
        url: "https://ampcode.com/news/handoff",
        note: "Product note with Quinn. Goal, relevant files, editable draft prompt.",
      },
      {
        name: "howtobuildacodingagent",
        kind: "repo",
        url: "https://github.com/nicolaygerold/howtobuildacodingagent",
        note: "Workshop. Core loop, compaction autopsy, Handoff as Amp/Pi plugins, including the deleted feature rebuilt.",
      },
      {
        name: "Tool search is dead, long live skills",
        kind: "essay",
        url: "https://www.nicolaygerold.com/posts/tool-search-is-dead-long-live-skills",
        note: "Just-in-time tool discovery via skills, MCP, and toolboxes.",
      },
    ],
    quotes: [
      {
        text: "I never used /compact. The summary always lost my instructions. So I built handoff.",
        source: "How I Built Handoff in Amp, Feb 2026",
        url: "https://www.nicolaygerold.com/posts/how-i-built-handoff-in-amp",
      },
      {
        text: "Handoff encoded the assumption 'compaction loses too much to trust'; that assumption expired, and Kirby ate it.",
        source: "howtobuildacodingagent, docs/06-handoff.md",
        url: "https://github.com/nicolaygerold/howtobuildacodingagent/blob/main/docs/06-handoff.md",
      },
    ],
    related: ["quinn-slack", "beyang-liu", "thorsten-ball", "john-yang"],
    twitter: "https://x.com/nicolaygerold",
    linkedin: "https://www.linkedin.com/in/nicolay-gerold",
    github: "https://github.com/nicolaygerold",
    website: "https://www.nicolaygerold.com",
  },
  {
    slug: "lewis-metcalf",
    name: "Lewis Metcalf",
    handle: "lewis_b_metcalf",
    title: "Co-founder",
    company: "Amp",
    previous: [
      "Software engineer, Sourcegraph",
      "Senior software engineer, Auth0",
      "Software developer, ThoughtWorks",
    ],
    location: "York, UK",
    tier: "lab",
    schoolIds: ["harness-loops", "verify-or-do-not-ship", "own-the-context"],
    oneLiner:
      "Amp's CLI cofounder who makes problems feedback-loopable: a playground both human and agent can smash, URL-encoded experiments, a headless CLI for the inner loop — and 200k tokens is plenty if every thread is one task.",
    superBio: [
      "Lewis Metcalf builds the Amp CLI from York. The two Amp Notes are a personal method, not a feature tour. 'Feedback Loopable' starts from an unglamorous fact: the digital world is built for eyeballs and fingers. Agents like text, and in a pinch an image. A bouncing-ball physics toy is hard for an agent to debug because the bug is a teleport you can only see in motion. Lewis did not narrate the bug into a prompt and hope. He built a static playground the browser skill could screenshot, put velocity in the query string so a failure was a URL, then had Amp write a headless CLI that printed per-frame positions. He did not read that CLI until the essay. Amp evolved the output — adding deltas — until frame 20 showed the edge collision stealing horizontal momentum. Human finds the weird state by playing. Agent iterates against text. Review the result, not the diff.",
      "The same tricks showed up on a real Amp problem: tracking commits across agent diffs. Dashboard with URL state. Replication CLI. The team's widget CLI renders any TUI widget as a tree or ASCII given props — terrible for a human, lovely for bash. Wrap it in a skill. That is TDD as feedback without the religion: turn the thing the agent cannot see into something it can run in a loop, then get out of the way until the interesting failure.",
      "'200k Tokens Is Plenty' is the other half of the craft. A feature is a cluster of short threads, not one million-token novel. Investigate, implement, one tweak per thread, review in a new thread, validate with throwaway scripts in another. Context moves by mentioning a thread ID, not by pasting a spec graveyard. Agents get drunk on extra tokens: they mess up, pick fights, vomit. Long threads also cost exponentially and miss the cache window. Pair with Nicolay (Handoff as the hop between threads) and Thorsten (small threads, screenshots). Lewis is the person who will tell you he would not run a 1M thread even if he had one.",
    ],
    whyThisPerson:
      "Two primary Amp Notes that are stealable on any agent: make the problem machine-checkable, keep threads short. The ball-pit is a toy; the widget CLI and commit-replication loop are the job.",
    collabModel:
      "Build a playground both of you can break. Encode experiments in URLs. Give the agent a headless loop. One change per short thread. Reference the previous thread instead of stuffing it. Review results, not code, when the loop is honest.",
    reasoningStyle:
      "If the agent cannot see it, the first work is a transducer into text. Small tasks, small threads. The human's job is high-level validation and finding the next nasty state.",
    coreLessons: [
      {
        title: "Make it feedback loopable",
        insight:
          "A video of the bug is not a loop. A static render, a URL that reproduces the state, and a CLI that prints the physics — that is a loop. Build the transducer before you prompt the fix.",
      },
      {
        title: "Agents get drunk on tokens",
        insight:
          "Extra history is not extra intelligence. It is unrelated influence on the next token. One job per thread. Average ~80k. Mention the last thread if you need it.",
      },
      {
        title: "Review results, not the inner loop",
        insight:
          "He did not read the physics CLI until the essay. The human plays, finds the bad URL, and checks the after-screenshot. That is collaboration, not abdication.",
      },
    ],
    resources: [
      {
        name: "Feedback Loopable",
        kind: "essay",
        url: "https://ampcode.com/notes/feedback-loopable",
        note: "Primary. Playground, URL experiments, headless CLI, widget CLI.",
      },
      {
        name: "200k Tokens Is Plenty",
        kind: "essay",
        url: "https://ampcode.com/notes/200k-tokens-is-plenty",
        note: "Primary. Short threads as tasks. Agents get drunk. Thread mentions over spec files.",
      },
      {
        name: "Writing",
        kind: "essay",
        url: "https://lewismetcalf.com/writing.html",
        note: "Index of Amp Notes and older craft writing.",
      },
    ],
    quotes: [
      {
        text: "Agents get drunk if you feed them too many tokens.",
        source: "200k Tokens Is Plenty, Amp Note",
        url: "https://ampcode.com/notes/200k-tokens-is-plenty",
      },
      {
        text: "This process of building something for humans using methods built for agents is what I call: making it feedback loopable.",
        source: "Feedback Loopable, Amp Note",
        url: "https://ampcode.com/notes/feedback-loopable",
      },
    ],
    related: ["thorsten-ball", "nicolay-gerold", "beyang-liu", "paul-gauthier"],
    twitter: "https://x.com/lewis_b_metcalf",
    linkedin: "https://www.linkedin.com/in/lewis-metcalf-46087531",
    github: "https://github.com/LeweyM",
    website: "https://lewismetcalf.com",
  },
  {
    slug: "luke-alvoeiro",
    name: "Luke Alvoeiro",
    handle: "lalvoeiro",
    title: "Member of Technical Staff; core agent harness",
    company: "Factory",
    previous: [
      "Created Goose, Block",
      "AI developer strategy, Block",
    ],
    tier: "hidden-gem",
    schoolIds: ["harness-loops", "spec-is-the-code", "verify-or-do-not-ship"],
    oneLiner:
      "Goose's creator, now Factory's harness lead: the bottleneck is human attention, so Missions serialize the writers, write the validation contract before code, and call role-picking droid whispering.",
    superBio: [
      "Luke Alvoeiro started Goose at Block — the open-source coding agent later donated to the Agentic AI Foundation — then moved to Factory to lead the core harness. Theo Luan wrote the Missions post you should steal. Luke gave the AI Engineer talk that names the constraint the post assumes: the bottleneck is no longer model intelligence. It is attention. A staff engineer can advance a handful of features a day because every commit still needs a human. Models can already reason about the other forty-seven. The architectural question is whether a person can decide what to build and a system can decide how, for hours or days, without a babysitter in the trace.",
      "He taxonomizes the messy multi-agent literature into five patterns — delegation, creator-verifier, direct communication, negotiation, broadcast — then shows what Factory actually combined. A mission is not one long chat. Orchestrator clarifies, asks strategic questions, and writes a plan with features, milestones, and a validation contract before anyone implements. Workers get clean context, change the tree, commit through git. Validators never saw the implementation: scrutiny (tests, types, lint, review agents) plus a slower user-testing validator that clicks the live app. Failed milestones spawn corrective features. Structured handoffs carry completed work, unfinished work, command exit codes, discovered issues, and procedure compliance — not a summary of vibes.",
      "The anti-hype is load-bearing. Concurrent implementation agents overwrote each other, duplicated work, and made incompatible architecture calls; coordination ate the speedup. So Missions serializes code-changing work and parallelizes only read-only research and review. Validation often fails the first time — that is the point of the QA loop, not a bug in the demo. Slack-clone example: 60% of time and tokens on implementation, ~50% of the final lines tests, ~90% coverage, prompt cache to pay for the length. Longest observed mission: 16 days. Thirty is a belief, not a measurement. Orchestration lives in ~700 lines of prompts and skills plus a thin deterministic layer that refuses to advance if the handoff is dirty. Droid whispering: put planning, coding, and validation on different models, even different providers, so the grader does not share the implementer's bias. Pair with Theo (the diagrams) and Eno (the intern-fleet diagnosis). Luke is the talk that makes the factory legible.",
    ],
    whyThisPerson:
      "Primary AI Engineer dump of a production multi-agent SDLC, from the person who already shipped Goose. Validation-before-code and serialize-the-writers are stealable without buying Factory.",
    collabModel:
      "Human sets scope. Orchestrator writes the contract. One writer at a time. Independent validators, including live UI. Handoffs as structured state. Parallelism only for reads. Mission Control for async supervision.",
    reasoningStyle:
      "Attention is the scarce resource. Correctness specified before code exists so tests cannot launder the implementation. Role-specific models. Keep orchestration in prompts so the architecture survives the next model.",
    coreLessons: [
      {
        title: "Attention is the bottleneck",
        insight:
          "The model can already do the backlog. You cannot watch it. The system has to carry hours of execution while you only approve scope and inspect gates.",
      },
      {
        title: "Write the contract before the code",
        insight:
          "Tests authored after the implementation mirror its mistakes. A finite checklist of behavioral assertions, written during planning, is what later validators grade against.",
      },
      {
        title: "Serialize the writers",
        insight:
          "Parallel implementers fight the tree. One worker or validator at a time. Parallelize grep, research, and independent review. Throughput is surviving days, not overlapping diffs.",
      },
    ],
    resources: [
      {
        name: "The Multi-Agent Architecture That Actually Ships",
        kind: "talk",
        url: "https://ai.engineer/talks/production-multi-agent-architecture",
        note: "Primary. Attention bottleneck, three roles, validation contract, serialize writers, droid whispering.",
      },
      {
        name: "Talk video",
        kind: "talk",
        url: "https://www.youtube.com/watch?v=ow1we5PzK-o",
        note: "Same talk, recorded.",
      },
      {
        name: "Introducing Missions",
        kind: "docs",
        url: "https://factory.ai/news/missions",
        note: "Product companion. Approve the plan, then Mission Control.",
      },
    ],
    quotes: [
      {
        text: "The bottleneck in software engineering nowadays is not intelligence. It's now limited by human attention.",
        source: "The Multi-Agent Architecture That Actually Ships, AI Engineer",
        url: "https://ai.engineer/talks/production-multi-agent-architecture",
      },
    ],
    related: ["theo-luan", "eno-reyes", "zach-lloyd", "dex-horthy"],
    linkedin: "https://www.linkedin.com/in/lalvoeiro",
    github: "https://github.com/lukealvoeiro",
  },
  {
    slug: "yana-welinder",
    name: "Yana Welinder",
    handle: "yanabana",
    title: "Founder",
    company: "Yana Bana (ex-Amplitude Head of AI)",
    previous: [
      "Head of AI, Amplitude",
      "CEO and founder, Kraftful",
      "Guest lecturer, Stanford GSB",
    ],
    location: "San Francisco",
    tier: "hidden-gem",
    schoolIds: ["spec-is-the-code", "harness-loops", "encode-judgment"],
    oneLiner:
      "The ex-Amplitude Head of AI who made Codex her technical cofounder: a fashion prompt as a product spec, computer-use to drive CLO and Fusion, and a storefront on Vercel with no human engineers.",
    superBio: [
      "Yana Welinder is not a lab coding-agent engineer, which is why the How I AI episode matters. She ran AI at Amplitude, founded Kraftful, then started Yana Bana as a solo fashion house where Codex is the technical cofounder. The stealable move is treating English as the API to specialist software. Codex is mediocre at emitting a finished CAD file. Codex driving CLO 3D, Autodesk Fusion, and Bambu Studio is how she gets .stl files, supports, and a print. SaaS is not dead. The agent is a new kind of user. She never learned the interfaces. She specified the garment.",
      "The fashion prompt is Sean Grove's spec argument in another industry. Before any image: silhouette, proportion, fabric drape, construction, even movement and sound. That is what a human patternmaker would need, so it is what the model needs. Sketch or phone photo in, campaign suite out — product still, runway, influencer — by iterating the same spec with voice. The unmanufacturable Ruth Asawa loop-wire dress is the stress test: 3D-print the spheres because a factory cannot sew that sculpture. Patternmaking is still the unsolved bit, so she runs human patternmakers in parallel with Codex and treats it as a race, not a slogan.",
      "The business half is a coding-agent dossier. No engineers built yanabana. Codex, GitHub, Vercel. Stripe for pre-orders after she insisted when the model said it could not. A vote database for which garments to produce. She had it build a dashboard, then deleted the dashboard and asked out loud how many votes the thing had. Vendor research via deep research; outreach drafted in Superhuman with browser use; she still hits send. Pair with Ryan Carson (solo founder, paper list) and Claire Vo (the episode host, loops). Yana is computer-use as the missing coworker, and a reminder that a precise spec travels outside repos.",
    ],
    whyThisPerson:
      "The densest public 'Codex as technical cofounder' dump that is not another SWE-bench writeup. Spec-first prompting plus computer-use of real tools is stealable for any specialist GUI you refuse to learn.",
    collabModel:
      "Write the spec as if briefing a specialist. Let the agent drive the specialist software. Keep send, pattern approval, and taste. Parallel a human expert on the steps the model still fails. Drop dashboards when voice over the database is enough.",
    reasoningStyle:
      "Intent first, interface second. Persistence when the model refuses a possible integration. Run AI and humans as competing implementations, not as a stack diagram.",
    coreLessons: [
      {
        title: "The agent is a user of software",
        insight:
          "Do not wait for the model to natively emit CAD. Point computer-use at the program that already knows how. Your job is the brief, not the menu.",
      },
      {
        title: "A fashion prompt is a spec",
        insight:
          "Silhouette, volume, drape, construction, movement. The same fields a human would need. Vague vibes make paper-looking cloth. Precision is reusable across still, runway, and campaign.",
      },
      {
        title: "Insist, then hit send yourself",
        insight:
          "Codex said it could not do Stripe until she pushed. Browser-use can draft the manufacturer email. A human still owns the irreversible click.",
      },
    ],
    resources: [
      {
        name: "Workflows for an AI-Native Fashion Brand",
        kind: "talk",
        url: "https://www.chatprd.ai/how-i-ai/workflows-for-an-ai-native-fashion-brand",
        note: "Primary. How I AI with Claire Vo. Spec, computer-use, storefront.",
      },
      {
        name: "Lenny's writeup",
        kind: "essay",
        url: "https://www.lennysnewsletter.com/p/how-i-ai-how-a-solo-founder-used",
        note: "Companion notes from the same episode.",
      },
    ],
    quotes: [
      {
        text: "Codex is my technical co-founder, so I can focus on creative work.",
        source: "How I AI, Aug 2026",
        url: "https://www.chatprd.ai/how-i-ai/workflows-for-an-ai-native-fashion-brand",
      },
    ],
    related: ["claire-vo", "ryan-carson", "sean-grove", "jason-liu"],
    twitter: "https://x.com/yanabana",
    linkedin: "https://www.linkedin.com/in/ywelinder",
    website: "https://yanabana.com",
  },
];
