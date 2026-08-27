import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { EngineerCard } from "@/components/engineer-card";
import { engineersBySlug } from "@/data/engineers";
import { getSchool, schools } from "@/data/schools";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return schools.map((school) => ({ slug: school.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const school = getSchool(slug);
  if (!school) return { title: "Not found" };
  return { title: school.name, description: school.thesis };
}

export default async function SchoolPage({ params }: Props) {
  const { slug } = await params;
  const school = getSchool(slug);
  if (!school) notFound();
  const people = engineersBySlug(school.engineerSlugs);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href="/schools"
        className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary"
      >
        ← Schools
      </Link>
      <h1 className="mt-6 font-heading text-4xl sm:text-5xl">{school.name}</h1>
      <p className="mt-4 text-lg leading-relaxed">{school.thesis}</p>
      <div className="mt-8 space-y-4 leading-7">
        {school.body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
      <aside className="mt-10 rounded-xl border border-border bg-card p-5">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          Contrapoint
        </p>
        <p className="mt-2 leading-relaxed">{school.contrapoint}</p>
      </aside>
      <h2 className="mt-12 font-heading text-2xl">People in this school</h2>
      <div className="mt-4 grid gap-4">
        {people.map((engineer) => (
          <EngineerCard key={engineer.slug} engineer={engineer} />
        ))}
      </div>
    </article>
  );
}
