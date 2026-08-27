import type { Engineer } from "./types";

export const issue08Engineers: Engineer[] = [
  {
    slug: "beyang-liu",
    name: "Beyang Liu",
    handle: "beyang",
    title: "Co-founder; Amp",
    company: "Amp (ex-Sourcegraph CTO)",
    previous: ["CTO and co-founder, Sourcegraph"],
    tier: "lab",
    schoolIds: ["plan-then-oneshot", "own-the-context", "harness-loops"],
    oneLiner:
      "Sourcegraph's CTO turned Amp co-founder: complexity of the task scales with how many tokens you spend describing it — plan in one thread with file annotations, execute in another, and most days just ping-pong until you understand the tree.",
    superBio: [
      "Beyang Liu spent a decade making code search the way enterprises find themselves in a monorepo, then spun Amp out of Sourcegraph with Quinn Slack when it became obvious that agents and search are different companies. Thorsten Ball is the Amp voice most people read. Beyang is the one who, on Changelog #658, actually described how a sophisticated user sits down.",
      "There is a linear correlation, he says, between task complexity and how much direction you give. If you know exactly what you want and you want the agent to go far alone: generate a plan, require each step to be annotated with the files it will need, iterate the plan, then open a fresh thread to execute steps one and two and stop for review. Most of his own threads skip that ceremony. They are: where is the code that pertains to this, explain how it works, think through two implementations, spike just these endpoints so I can play. Ping-pong. The side effect of getting the agent to do stuff is that he acquires domain knowledge alongside it. That is Jeremy Howard's dialog engineering from a code-search person.",
      "Amp's product (Oracle, Librarian, orbs, AGENTS.md) is the harness. Beyang's personal craft is the calibration: how much of yourself to put in the window before you let it run. Pair with Thorsten (three tools, screenshots, small threads) and Boris (plan then one-shot). Beyang is the person who will tell you most days he does not one-shot.",
    ],
    whyThisPerson:
      "Lab cofounder with a stealable personal gradient, not just a product tour. The annotated-plan-then-fresh-thread ritual is the missing manual for Amp's sophisticated users.",
    collabModel:
      "Spend human tokens on the brief when the task is large. Annotate the plan with files. New thread to execute. Small work is conversation until a spike exists. Review before the rest of the plan.",
    reasoningStyle:
      "Direction proportional to complexity. Use the agent to learn the tree, not only to paint it. Separate planning context from implementation context when the plan is load-bearing.",
    coreLessons: [
      {
        title: "Direction scales with complexity",
        insight:
          "A tiny change gets a sentence. A migration gets a plan whose steps name the files. Matching the brief to the blast radius is the skill.",
      },
      {
        title: "Plan thread, then execute thread",
        insight:
          "Do not implement in the window that just argued with itself about architecture. Fresh context, annotated steps, review after slice one.",
      },
      {
        title: "Most days are ping-pong",
        insight:
          "Explain, spike, play. The agent is also how you learn the unfamiliar module. Ceremony is for when you already know.",
      },
    ],
    resources: [
      {
        name: "Flowing with agents (Changelog #658)",
        kind: "talk",
        url: "https://changelog.com/podcast/658",
        note: "Personal workflow. Plan annotations, execute thread, ping-pong spikes.",
      },
      {
        name: "Amp Owner's Manual",
        kind: "docs",
        url: "https://ampcode.com/manual",
        note: "One thread per task, AGENTS.md, tell it how to review. Product as method.",
      },
    ],
    quotes: [
      {
        text: "There's kind of like a linear correlation between the complexity of the task and how much direction you want to give it.",
        source: "Changelog #658, Flowing with agents",
        url: "https://changelog.com/podcast/658",
      },
    ],
    related: ["thorsten-ball", "boris-cherny", "jeremy-howard", "quinn-slack"],
    twitter: "https://x.com/beyang",
    website: "https://ampcode.com",
    github: "https://github.com/beyang",
  },
  {
    slug: "quinn-slack",
    name: "Quinn Slack",
    handle: "sqs",
    title: "Co-founder and CEO",
    company: "Amp (ex-Sourcegraph CEO)",
    previous: ["CEO and co-founder, Sourcegraph"],
    tier: "lab",
    schoolIds: ["harness-loops", "plan-then-oneshot", "verify-or-do-not-ship"],
    oneLiner:
      "Amp's CEO who still writes software: orbs, voice, a Ship button that is just a message to the agent, and a refusal to grow a settings panel — 'let the agent do it' instead of another knob.",
    superBio: [
      "Quinn Slack built Sourcegraph so you could search a company's code, then left the search business with Beyang to run Amp full-time. He is still an IC in public. The Amp Chronicle 'Building Software With Amp and Orbs' is the personal dump: many parallel agents, dictation, portals that show the local server with the agent's changes, a Ship button that does not run a deterministic script — it sends a message to the agent, which is the point. If you do not want main, say so in the prompt, or set push-to-branch once. Voice makes 'go make a new branch' faster than a checkbox.",
      "His AI Engineer bio is the older thesis: autocomplete is cheap to verify; autonomous workflows are expensive to review; so context has to be inspectable. Amp's Handoff (with Nicolay Gerold) starts a new thread with the relevant files and an editable prompt instead of compressing a rotting conversation. That is Beyang's plan/execute split as a product primitive. Orbs keep working after the laptop closes. Multiplayer later put the team in the same box.",
      "The anti-settings rant is the gem. For every parameter you add a knob, the product becomes a mess. Agents are how you avoid the control panel. Pair with Peter Steinberger (just talk to it) and Thorsten (staging area as the safety net). Quinn is the CEO who still feels the strangeness of not typing.",
    ],
    whyThisPerson:
      "Founder who publishes the live workflow, not a vision deck. Ship-as-a-prompt and Handoff are stealable even if you never buy Amp.",
    collabModel:
      "Parallel orbs. Voice the next task. Agent screenshots via portals. Ship is a message. Handoff instead of compacting. Humans still own architecture; the agent paints.",
    reasoningStyle:
      "Prefer prompting a capable agent over growing a settings surface. Review cost dominates. Make the change inspectable (portal, diff, tests) rather than configurable.",
    coreLessons: [
      {
        title: "Ship is a prompt, not a hook",
        insight:
          "A deterministic merge button is another knob. Telling the agent to ship — and sometimes to push a branch instead — keeps the policy in language, where you can change it today.",
      },
      {
        title: "Handoff beats compacting",
        insight:
          "Do not squeeze a 200k thread into a summary and hope. New thread, relevant files, editable prompt. Context you can read.",
      },
      {
        title: "Do not grow the control panel",
        insight:
          "Every requested setting is a workflow someone could have said out loud. Voice plus a capable agent is the alternative to Preferences hell.",
      },
    ],
    resources: [
      {
        name: "Building Software With Amp and Orbs",
        kind: "talk",
        url: "https://ampcode.com/time-capsules/1",
        note: "Chronicle. Parallel agents, voice, Ship button, portals.",
      },
      {
        name: "Amp Handoff / Owner's Manual",
        kind: "docs",
        url: "https://ampcode.com/manual",
        note: "One thread per task. Handoff. How to prompt.",
      },
    ],
    quotes: [
      {
        text: "The beauty of agents is you don't need deterministic knobs and levers. You don't need a plan mode. Let the agent do it.",
        source: "Building Software With Amp and Orbs, Amp Chronicle",
        url: "https://ampcode.com/time-capsules/1",
      },
    ],
    related: ["thorsten-ball", "beyang-liu", "peter-steinberger", "steve-yegge"],
    twitter: "https://x.com/sqs",
    website: "https://ampcode.com",
    github: "https://github.com/sqs",
  },
];
