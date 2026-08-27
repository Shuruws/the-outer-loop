import Link from "next/link";

import { EngineerCard } from "@/components/engineer-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { engineers, getEngineer, hiddenGems } from "@/data/engineers";
import { crossLessons } from "@/data/lessons";
import { schools } from "@/data/schools";

export default function Home() {
  const lauren = getEngineer("lauren-tan")!;
  const gems = hiddenGems.slice(-6);

  return (
    <div>
      <section className="border-b border-border/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary">
            Issue 12 · August 2026 · Living file
          </p>
          <h1 className="max-w-4xl font-heading text-4xl leading-[1.1] tracking-tight sm:text-6xl">
            Engineers who encode judgment into agents.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Start with Lauren Tan — SpaceXAI, Cursor, React Compiler, pstack —
            then meet the people at Anthropic, OpenAI, Google, Microsoft, Shopify, Stripe, Cognition, Factory, Warp, Amp, and in
            quieter GitHub corners who publish how they actually collaborate
            with coding agents. Not influencer lists. Craft.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/engineers" className={cn(buttonVariants({ size: "lg" }))}>
              Open the directory
            </Link>
            <Link
              href="/engineers/lauren-tan"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Read the archetype
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              01 · Archetype
            </p>
            <h2 className="font-heading text-3xl">The Lauren Tan shape</h2>
          </div>
          <Link href="/engineers/lauren-tan" className="text-sm text-primary hover:underline">
            Full dossier
          </Link>
        </div>
        <EngineerCard engineer={lauren} featured />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "Agents are amnesiac new hires. Skills are the memory.",
            "Trust one agent end-to-end before you parallelize.",
            "You own the outer loop. The factory runs overnight.",
          ].map((line) => (
            <p
              key={line}
              className="rounded-lg border border-border/80 bg-card px-4 py-3 text-sm leading-relaxed"
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      <section className="border-y border-border/80 bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            02 · Schools of thought
          </p>
          <h2 className="mt-1 font-heading text-3xl">Six ways the serious people work</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {schools.map((school) => (
              <Link
                key={school.slug}
                href={`/schools/${school.slug}`}
                className="rounded-xl border border-border bg-background p-5 hover:border-primary/50"
              >
                <h3 className="font-heading text-2xl">{school.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {school.thesis}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              03 · Hidden gems
            </p>
            <h2 className="font-heading text-3xl">Lower follower count. Higher density.</h2>
          </div>
          <Link href="/engineers" className="text-sm text-primary hover:underline">
            All {engineers.length}
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {gems.map((engineer) => (
            <EngineerCard key={engineer.slug} engineer={engineer} />
          ))}
        </div>
      </section>

      <section className="border-t border-border/80">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            04 · Shared lessons
          </p>
          <h2 className="font-heading text-3xl">What they independently agree on</h2>
          <ul className="mt-8 space-y-4">
            {crossLessons.map((lesson) => (
              <li key={lesson.slug} className="border-b border-border/60 pb-4">
                <Link href="/lessons" className="group">
                  <p className="font-heading text-xl group-hover:text-primary">
                    {lesson.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{lesson.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-2">
            <Badge variant="outline">X / LinkedIn</Badge>
            <Badge variant="outline">GitHub skills</Badge>
            <Badge variant="outline">Talks</Badge>
            <Badge variant="outline">No private scrape</Badge>
          </div>
        </div>
      </section>
    </div>
  );
}
