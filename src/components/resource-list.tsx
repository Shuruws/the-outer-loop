import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { Resource } from "@/data/types";
import { resourceLabels } from "@/lib/labels";

export function ResourceList({ resources }: { resources: Resource[] }) {
  if (resources.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No public repo packaged yet — the talks and posts are the artifact.
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {resources.map((resource) => (
        <li
          key={resource.url}
          className="rounded-lg border border-border bg-card p-4"
        >
          <div className="mb-1 flex flex-wrap items-center gap-2">
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
          <p className="text-sm leading-relaxed text-muted-foreground">
            {resource.note}
          </p>
        </li>
      ))}
    </ul>
  );
}
