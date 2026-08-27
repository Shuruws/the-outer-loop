import type { Metadata } from "next";
import Link from "next/link";

import { getEngineer } from "@/data/engineers";
import { crossLessons } from "@/data/lessons";

export const metadata: Metadata = {
  title: "Core lessons",
  description:
    "Cross-cutting advice on AI collaboration and reasoning, distilled from the engineers in this dossier.",
};

export default function LessonsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">
        Synthesis
      </p>
      <h1 className="mt-2 font-heading text-4xl sm:text-5xl">
        Core lessons on collab and reasoning
      </h1>
      <p className="mt-4 text-muted-foreground">
        Independently discovered. If three labs and two independents say it,
        it is probably a constraint of the medium, not a brand talking point.
      </p>
      <div className="mt-12 space-y-14">
        {crossLessons.map((lesson, index) => (
          <section key={lesson.slug}>
            <p className="font-mono text-xs text-primary">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-1 font-heading text-3xl">{lesson.title}</h2>
            <p className="mt-3 text-lg leading-relaxed">{lesson.summary}</p>
            <p className="mt-4 leading-7 text-muted-foreground">{lesson.body}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {lesson.heldBy.map((slug) => {
                const person = getEngineer(slug);
                if (!person) return null;
                return (
                  <Link
                    key={slug}
                    href={`/engineers/${slug}`}
                    className="text-primary hover:underline"
                  >
                    {person.name}
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
