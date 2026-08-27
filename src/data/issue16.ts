import type { Engineer } from "./types";

export const issue16Engineers: Engineer[] = [
  {
    slug: "siddharth-mishra-sharma",
    name: "Siddharth Mishra-Sharma",
    handle: "smsharma",
    title: "Member of technical staff, Discovery; Assistant professor",
    company: "Anthropic / Boston University",
    previous: [
      "IAIFI Fellow, MIT and Harvard",
      "Postdoc, NYU Center for Cosmology and Particle Physics",
      "Ph.D., Theoretical Physics, Princeton",
    ],
    location: "Boston",
    tier: "lab",
    schoolIds: ["harness-loops", "own-the-context", "verify-or-do-not-ship"],
    oneLiner:
      "The Anthropic Discovery researcher who published the academic-lab version of the long-running agent: CLAUDE.md as the living plan, CHANGELOG.md as lab notes of failed approaches, CLASS as the oracle, tmux plus SLURM so you can check GitHub from the coffee line.",
    superBio: [
      "Siddharth Mishra-Sharma sits on Anthropic's Discovery team and is an assistant professor of computing, data sciences, and physics at Boston University. In March 2026 he wrote Long-running Claude for scientific computing — the sequential counterpart to Carlini's 16-agent compiler. A Boltzmann solver is a coupled pipeline: a bad recombination approximation poisons everything downstream. You cannot farm it to sixteen lock files. You need one agent, subagents as needed, and a reference implementation to bisect against. He is not a domain expert on this code. Groups who are spent months to years on differentiable JAX solvers with a subset of CLASS. He specified 0.1% agreement with CLASS, feature parity, full differentiability, and walked away.",
      "The steal is the memory system, not the cosmology. Spend the human time on CLAUDE.md — deliverables, accuracy target, rules — and let Claude edit it as it learns. CHANGELOG.md is portable long-term memory: current status, completed work, failed approaches and why ('Tried Tsit5 for the perturbation ODE, system is too stiff. Switched to Kvaerno5'). Without the failures, the next session retries the same dead end. Git after every meaningful unit; pytest before every commit; never commit a regression. Execution is a SLURM job that starts Claude inside tmux on a GPU node for up to 48 hours. Detach. Check GitHub on your phone. Reattach with srun --overlap to steer, or ask a local Claude to SSH and prompt for you.",
      "Agentic laziness is the named failure: the model finds an excuse to stop ('It's getting late'). Ralph is a for-loop that kicks it back and asks if it is really done, with a completion promise and a max iteration cap. The solver reached sub-percent accuracy in days and is not production-grade in every regime. He learned the science from the commit log — lab notes from a fast, hyper-literal postdoc. Pair with Carlini (parallel when tests factor) and Justin (shift handoff for apps). Siddharth is the person who will tell you a coupled scientific code wants a sequential oracle loop, and that a night without agents running has an opportunity cost.",
    ],
    whyThisPerson:
      "Primary lab dump aimed at academic HPC, not a product blog. Living CLAUDE.md, changelog-of-failures, reference-implementation oracle, and tmux/SLURM are stealable on a laptop.",
    collabModel:
      "Iterate the plan locally into CLAUDE.md. Encode the oracle and git rules. Launch Claude in tmux on the cluster. Detach. Ralph-loop until the accuracy target. Steer by SSH or a local agent. Read the commits like lab notes.",
    reasoningStyle:
      "Well-scoped science with a measurable oracle can run for days. Coupled pipelines want one sequential agent, not a swarm. Failed approaches must be written down or they will be retried. Not running the agent overnight is wasted compute.",
    coreLessons: [
      {
        title: "Write down the dead ends",
        insight:
          "CHANGELOG.md is not a victory log. If the next session cannot see that Tsit5 was too stiff, it will waste a night on Tsit5 again.",
      },
      {
        title: "A coupled pipeline is not a farm",
        insight:
          "Carlini's compiler had independent failing tests. A Boltzmann solver does not. Sequential agent, subagents as needed, bisect against the reference. Do not cargo-cult sixteen containers.",
      },
      {
        title: "Kick it when it claims bedtime",
        insight:
          "Agentic laziness is real. Ralph is a for-loop plus a completion promise. The human owns the success criterion (0.1% across the range), not the session's mood.",
      },
    ],
    resources: [
      {
        name: "Long-running Claude for scientific computing",
        kind: "essay",
        url: "https://www.anthropic.com/research/long-running-Claude",
        note: "Primary. CLAUDE.md, CHANGELOG.md, CLASS oracle, tmux/SLURM, Ralph against agentic laziness.",
      },
      {
        name: "smsharma/clax",
        kind: "repo",
        url: "https://github.com/smsharma/clax",
        note: "Differentiable Boltzmann solver in JAX. The artifact of the dump.",
      },
    ],
    quotes: [
      {
        text: "The failed approaches are important—without them, successive sessions will re-attempt the same dead ends.",
        source: "Long-running Claude for scientific computing",
        url: "https://www.anthropic.com/research/long-running-Claude",
      },
      {
        text: "These days, not running agents feels like it has a cost as well. If you have the compute and projects with well-defined success criteria, every night you don't have agents working for you is potential progress left on the table.",
        source: "Long-running Claude for scientific computing",
        url: "https://www.anthropic.com/research/long-running-Claude",
      },
    ],
    related: [
      "nicholas-carlini",
      "justin-young",
      "geoffrey-huntley",
      "jeremy-howard",
    ],
    github: "https://github.com/smsharma",
    website: "https://smsharma.io",
    linkedin:
      "https://www.linkedin.com/in/siddharth-mishra-sharma-90362376",
  },
  {
    slug: "malte-ubl",
    name: "Malte Ubl",
    handle: "cramforce",
    title: "Chief technology officer",
    company: "Vercel",
    previous: [
      "Principal software engineer and engineering director, Google",
      "Technical director, SinnerSchrader",
    ],
    location: "Alameda, California",
    tier: "big-tech",
    schoolIds: ["own-the-context", "harness-loops", "verify-or-do-not-ship"],
    oneLiner:
      "The Vercel CTO who deleted 80% of an agent's tools, kept bash plus SQL, and published the uncomfortable rule: atomic tools, a filesystem, a goal, ten turns — then let it cook.",
    superBio: [
      "Guillermo Rauch already sits in this file for research folders and AGENTS.md. Malte Ubl is the other Vercel: the person who will tell you to throw the tool catalog away. Vercel spent months on d0, an internal text-to-SQL agent, with specialized tools, heavy prompts, and hand-coded retrieval. Fragile, slow, constantly patched. They stripped it to execute-bash plus ExecuteSQL over a Cube semantic layer sitting on disk as YAML, Markdown, and JSON. Claude greps, cats, and ls's like an analyst. 3.5× faster, 37% fewer tokens, 5/5 instead of 4/5. The old worst case burned 100 steps and failed; the file-system agent finished and succeeded. Treat the bench as the design constraint they optimized for.",
      "The steal is the gravity argument, not Slack-bot product. Models are trained on navigating codebases. If you make the domain look like a repo, you inherit that skill. Sales-call transcripts, tickets, CRM — directories, not embeddings. Prompt stuffing hits limits; RAG is imprecise when you need one field. grep -r \"pricing objection\" transcripts/ is the retrieval. Malte's personal caveat on the bash-is-all-you-need meme: bash is great for short-term memory; if the data is structured, SQL (warehouse or a throwaway sqlite) beats jq over JSON files. bash-tool (with Andrew Qu) open-sources the engine on just-bash or a Vercel Sandbox. Chain of Thought: an LLM, a trigger, atomic tools (read, list, edit, PR — not a 'do the task' mega-tool), up to ten turns, let it cook. Uncomfortable. It works.",
      "This only worked because the semantic layer was already good documentation. A mess of undocumented joins just gets you faster bad queries. Pair with Thorsten (three tools, no RAG), Boris (agentic search beat vector DBs), Guillermo (the filesystem as memory for humans). Malte is the person who will tell you every extra tool is a choice you made for the model, and the model you'll have in six months does not want that choice.",
    ],
    whyThisPerson:
      "Primary CTO-level dump with a measured before/after and an npm package. Atomic tools, files-not-RAG, and bash-plus-SQL are stealable without adopting v0.",
    collabModel:
      "Put the domain on disk as files a human would browse. Give bash and, if the data is tabular, SQL. Sandbox the hands. Loop toward a goal. Add a custom tool only after you have proven the model cannot grep it.",
    reasoningStyle:
      "Do not do the model's thinking. Unix already retrieves. Structured data wants SQL, not jq. Build for the model in six months. If the docs are bad, no architecture will save you.",
    coreLessons: [
      {
        title: "Delete the tools you built to babysit",
        insight:
          "Schema lookup, join finders, plan finalizers — you were constraining reasoning because you did not trust the model. With a frontier model that constraint is a liability.",
      },
      {
        title: "Make the domain look like a repo",
        insight:
          "LLMs already know ls, grep, cat. Tickets and transcripts as directories inherit that skill. RAG is for when you cannot name the file.",
      },
      {
        title: "Bash for files. SQL for tables.",
        insight:
          "The meme is incomplete. Short-term context lives in the filesystem. Structured exploration belongs in a warehouse or a throwaway sqlite, not in a pile of JSON you jq until the window dies.",
      },
    ],
    resources: [
      {
        name: "We removed 80% of our agent's tools",
        kind: "essay",
        url: "https://vercel.com/blog/we-removed-80-percent-of-our-agents-tools",
        note: "Primary d0 rewrite. File-system agent, measured 3.5× / 100% vs 80%.",
      },
      {
        name: "How to build agents with filesystems and bash",
        kind: "essay",
        url: "https://vercel.com/blog/how-to-build-agents-with-filesystems-and-bash",
        note: "Pattern: map any domain to directories; grep instead of embeddings.",
      },
      {
        name: "bash-tool",
        kind: "docs",
        url: "https://vercel.com/changelog/introducing-bash-tool-for-filesystem-based-context-retrieval",
        note: "With Andrew Qu. npm bash-tool on just-bash or Vercel Sandbox.",
      },
    ],
    quotes: [
      {
        text: "We were constraining reasoning because we didn’t trust the model to reason. With Opus 4.5, that constraint became a liability.",
        source: "We removed 80% of our agent's tools",
        url: "https://vercel.com/blog/we-removed-80-percent-of-our-agents-tools",
      },
      {
        text: "Bash is great, but if you have any form of structured data, then a SQL database works much better than grepping or jq-ing through a bunch of JSON files.",
        source: "Malte Ubl, LinkedIn",
        url: "https://www.linkedin.com/posts/malteubl_testing-if-bash-is-all-you-need-vercel-activity-7420548096105017344-wasz",
      },
    ],
    related: [
      "guillermo-rauch",
      "thorsten-ball",
      "boris-cherny",
      "john-lindquist",
    ],
    twitter: "https://x.com/cramforce",
    linkedin: "https://www.linkedin.com/in/malteubl",
    website: "https://vercel.com/blog/we-removed-80-percent-of-our-agents-tools",
  },
  {
    slug: "john-lindquist",
    name: "John Lindquist",
    handle: "johnlindquist",
    title: "AI developer experience",
    company: "Vercel",
    previous: [
      "Co-founder, egghead.io",
      "WebStorm evangelist, JetBrains",
      "Technical architect, Roundarch",
    ],
    location: "United States",
    tier: "hidden-gem",
    schoolIds: ["encode-judgment", "harness-loops", "verify-or-do-not-ship"],
    oneLiner:
      "The egghead founder who spent a billion Claude Code tokens and shipped the operator layer: typed TypeScript hooks, Stop-hook verify loops, Mermaid as compressed architecture, and markdown files that run as prompts.",
    superBio: [
      "John Lindquist taught a generation of frontend engineers in five-minute videos. He now does AI DX at Vercel and has burned through more than a billion Claude Code tokens teaching the same people how not to vibe. The How I AI episode and the Claude Code / Cursor / software-factory workshops are the dump. Three systems he actually runs: preload architecture as Mermaid so the session starts with a map instead of a treasure hunt; promote a repeated prompt from a shell alias to a tiny CLI with explicit inputs; register a Stop hook that runs project checks, feeds failures back into the same session, and only lets Claude exit when the bounded loop passes. Full CI stays an independent gate.",
      "The stealable repos are the craft, not the course catalog. claude-hooks gives TypeScript payloads for PreToolUse, PostToolUse, Stop — IntelliSense instead of a shell script guessing JSON. PostToolUse runs prettier. PreToolUse blocks writes to sacred paths. mdflow treats a .md file as an executable prompt against Claude, Codex, Gemini, Copilot, OpenCode, Pi. Default is engine-context isolation: strip ambient CLAUDE.md and plugins so the prompt is the experiment. Script Kit, older, is how he automates the glue. The Vercel coding-agent plugin changelog lists him with Melkey Moksyakov and Andrew Qu — skills that fire on glob and bash regex — but the personal method is hooks-as-programs, not the marketplace.",
      "Pair with Malte (delete tools; John adds the lifecycle you keep), Jesse (skills as process; John types the harness events), Zack Proser (eval harness). John is the person who will tell you a Stop hook is a test runner that lives inside the session, and that a Mermaid diagram is a cheaper architecture review than another thousand tokens of prose.",
    ],
    whyThisPerson:
      "Primary operator dump plus installable repos. Typed hooks, Stop-hook verify loops, and executable markdown are stealable without the workshop.",
    collabModel:
      "Append the relevant Mermaid to the system prompt. Let Claude work. Stop hook runs checks and retries. Repeated prompts become aliases, then CLIs. mdflow for prompts you want reproducible across engines. Type the hooks; do not guess the payload.",
    reasoningStyle:
      "Volume reveals patterns casual use misses. Infrastructure the session, do not hope. Isolation is how you A/B a prompt. Checks belong in the loop that produces the diff, and again in CI.",
    coreLessons: [
      {
        title: "Put the check in the Stop hook",
        insight:
          "When the agent says done, run the project checks and hand the failures back. Bound the retries. CI remains a second gate, not the first time anyone ran the tests.",
      },
      {
        title: "Type the harness events",
        insight:
          "Raw shell hooks are how you ship a PreToolUse that does not know the payload. TypeScript on the lifecycle is encode-judgment for the operator, not for the model.",
      },
      {
        title: "Compress architecture as a diagram",
        insight:
          "Mermaid in the system prompt is a map. Attaching random files is a scavenger hunt. Load only the diagrams for this task.",
      },
    ],
    resources: [
      {
        name: "Beyond Vibe Coding (How I AI)",
        kind: "talk",
        url: "https://www.chatprd.ai/how-i-ai/advanced-ai-engineering-claude-code-john-lindquist",
        note: "Primary. Mermaid preload, aliases-to-CLI, Stop-hook verify loop.",
      },
      {
        name: "johnlindquist/claude-hooks",
        kind: "repo",
        url: "https://github.com/johnlindquist/claude-hooks",
        note: "TypeScript payloads for Claude Code lifecycle hooks.",
      },
      {
        name: "johnlindquist/mdflow",
        kind: "repo",
        url: "https://github.com/johnlindquist/mdflow",
        note: "Executable markdown prompts across Claude, Codex, Gemini, and others. Isolation by default.",
      },
    ],
    quotes: [
      {
        text: "John treats AI tooling as infrastructure: preload useful context, package repeated commands, and put checks inside the workflow.",
        source: "How I AI episode notes on Lindquist",
        url: "https://www.chatprd.ai/how-i-ai/advanced-ai-engineering-claude-code-john-lindquist",
      },
      {
        text: "No more guessing payload structures or dealing with untyped data.",
        source: "johnlindquist/claude-hooks README",
        url: "https://github.com/johnlindquist/claude-hooks",
      },
    ],
    related: ["malte-ubl", "jesse-vincent", "zack-proser", "kent-c-dodds"],
    twitter: "https://x.com/johnlindquist",
    github: "https://github.com/johnlindquist",
    website: "https://egghead.io",
  },
];
