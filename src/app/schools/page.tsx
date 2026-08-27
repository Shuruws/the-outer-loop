import type { Metadata } from "next";
import Link from "next/link";

import { schools } from "@/data/schools";

export const metadata: Metadata = {
  title: "Schools of thought",
  description:
    "Six schools of AI-coding collaboration, from encoded skills to harness loops.",
};

export default function SchoolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">
        Map
      </p>
      <h1 className="mt-2 font-heading text-4xl sm:text-5xl">
        Schools of thought
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        These people do not agree on tools. They cluster on methods. Read the
        thesis, then the contrapoint — the skeptic inside the school is part of
        the school.
      </p>
      <div className="mt-10 grid gap-5">
        {schools.map((school, index) => (
          <Link
            key={school.slug}
            href={`/schools/${school.slug}`}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/50"
          >
            <p className="font-mono text-xs text-primary">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-1 font-heading text-3xl">{school.name}</h2>
            <p className="mt-3 leading-relaxed">{school.thesis}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {school.engineerSlugs.length} engineers in this file
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
