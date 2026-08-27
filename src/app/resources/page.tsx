import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { engineers } from "@/data/engineers";
import { resourceLabels } from "@/lib/labels";

export const metadata: Metadata = {
  title: "Resources",
  description: "Skills repos, plugins, essays, and talks from the dossier.",
};

export default function ResourcesPage() {
  const resources = engineers.flatMap((engineer) =>
    engineer.resources.map((resource) => ({
      ...resource,
      engineerName: engineer.name,
      engineerSlug: engineer.slug,
    })),
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">
        Toolkit
      </p>
      <h1 className="mt-2 font-heading text-4xl sm:text-5xl">
        Repos, skills, talks
      </h1>
      <p className="mt-4 text-muted-foreground">
        Installable memory. Start with pstack and Superpowers if you want a
        full methodology. Start with 12-factor-agents and Beads if you want
        primitives. Start with Harper&apos;s post if you want a 15-minute ritual.
      </p>
      <ul className="mt-10 space-y-4">
        {resources.map((resource) => (
          <li
            key={`${resource.engineerSlug}-${resource.url}`}
            className="rounded-xl border border-border bg-card p-4"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{resourceLabels[resource.kind]}</Badge>
              <Link
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary hover:underline"
              >
                {resource.name}
              </Link>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {resource.note}
            </p>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              via{" "}
              <Link
                href={`/engineers/${resource.engineerSlug}`}
                className="hover:text-primary"
              >
                {resource.engineerName}
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
