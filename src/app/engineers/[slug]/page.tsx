import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ResourceList } from "@/components/resource-list";
import { Badge } from "@/components/ui/badge";
import { engineers, getEngineer } from "@/data/engineers";
import { schools } from "@/data/schools";
import { initials, tierLabels } from "@/lib/labels";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return engineers.map((engineer) => ({ slug: engineer.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const engineer = getEngineer(slug);
  if (!engineer) return { title: "Not found" };
  return {
    title: engineer.name,
    description: engineer.oneLiner,
  };
}

export default async function EngineerPage({ params }: Props) {
  const { slug } = await params;
  const engineer = getEngineer(slug);
  if (!engineer) notFound();

  const related = engineer.related
    .map((relatedSlug) => getEngineer(relatedSlug))
    .filter(Boolean);
  const engineerSchools = schools.filter((school) =>
    engineer.schoolIds.includes(school.slug),
  );

  const links = [
    engineer.twitter ? { label: "X", href: engineer.twitter } : null,
    engineer.linkedin ? { label: "LinkedIn", href: engineer.linkedin } : null,
    engineer.github ? { label: "GitHub", href: engineer.github } : null,
    engineer.website ? { label: "Site", href: engineer.website } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href="/engineers"
        className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary"
      >
        ← Directory
      </Link>
      <div className="mt-6 flex items-start gap-4">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-heading text-2xl text-primary">
          {initials(engineer.name)}
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{tierLabels[engineer.tier]}</Badge>
            <span className="font-mono text-xs text-muted-foreground">
              @{engineer.handle}
            </span>
          </div>
          <h1 className="mt-2 font-heading text-4xl sm:text-5xl">
            {engineer.name}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {engineer.title} · {engineer.company}
            {engineer.location ? ` · ${engineer.location}` : ""}
          </p>
        </div>
      </div>

      <p className="mt-8 text-lg leading-relaxed">{engineer.oneLiner}</p>

      {links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-wider">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <section className="mt-12">
        <h2 className="font-heading text-2xl">Super bio</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-7 text-pretty">
          {engineer.superBio.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-primary/30 bg-primary/5 p-5">
        <h2 className="font-heading text-2xl">Why this person</h2>
        <p className="mt-3 leading-relaxed">{engineer.whyThisPerson}</p>
      </section>

      {engineer.previous.length > 0 && (
        <section className="mt-12">
          <h2 className="font-heading text-2xl">Trail</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {engineer.previous.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl">How they collab</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {engineer.collabModel}
          </p>
        </div>
        <div>
          <h2 className="font-heading text-2xl">How they reason</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {engineer.reasoningStyle}
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl">Core lessons</h2>
        <ol className="mt-5 space-y-5">
          {engineer.coreLessons.map((lesson, index) => (
            <li key={lesson.title} className="border-b border-border/60 pb-5">
              <p className="font-mono text-xs text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-heading text-xl">{lesson.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {lesson.insight}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {engineer.quotes.length > 0 && (
        <section className="mt-12 space-y-6">
          {engineer.quotes.map((quote) => (
            <blockquote
              key={quote.text}
              className="border-l-2 border-primary pl-5"
            >
              <p className="font-heading text-xl leading-snug">“{quote.text}”</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {quote.source}
              </p>
            </blockquote>
          ))}
        </section>
      )}

      <section className="mt-12">
        <h2 className="font-heading text-2xl">Resources and skills</h2>
        <div className="mt-4">
          <ResourceList resources={engineer.resources} />
        </div>
      </section>

      {engineerSchools.length > 0 && (
        <section className="mt-12">
          <h2 className="font-heading text-2xl">Schools</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {engineerSchools.map((school) => (
              <Link key={school.slug} href={`/schools/${school.slug}`}>
                <Badge variant="outline">{school.name}</Badge>
              </Link>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-heading text-2xl">Read next</h2>
          <ul className="mt-4 space-y-2">
            {related.map((person) =>
              person ? (
                <li key={person.slug}>
                  <Link
                    href={`/engineers/${person.slug}`}
                    className="text-primary hover:underline"
                  >
                    {person.name}
                  </Link>
                  <span className="text-sm text-muted-foreground">
                    {" "}
                    — {person.oneLiner}
                  </span>
                </li>
              ) : null,
            )}
          </ul>
        </section>
      )}
    </article>
  );
}
