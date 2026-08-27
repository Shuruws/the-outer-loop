import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { Engineer } from "@/data/types";
import { initials, tierLabels } from "@/lib/labels";
import { cn } from "@/lib/utils";

export function EngineerCard({
  engineer,
  featured = false,
}: {
  engineer: Engineer;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/engineers/${engineer.slug}`}
      className={cn(
        "group flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-accent/40",
        featured && "md:flex-row md:items-start md:gap-8 md:p-8",
      )}
    >
      <div
        className={cn(
          "mb-4 flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-heading text-lg text-primary",
          featured && "md:mb-0 md:size-16 md:text-2xl",
        )}
      >
        {initials(engineer.name)}
      </div>
      <div className="min-w-0">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Badge variant={engineer.tier === "hidden-gem" ? "default" : "outline"}>
            {tierLabels[engineer.tier]}
          </Badge>
          <span className="font-mono text-xs text-muted-foreground">
            @{engineer.handle}
          </span>
        </div>
        <h3
          className={cn(
            "font-heading text-2xl tracking-tight group-hover:text-primary",
            featured && "text-3xl md:text-4xl",
          )}
        >
          {engineer.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {engineer.title} · {engineer.company}
        </p>
        <p className={cn("mt-3 text-sm leading-relaxed", featured && "text-base")}>
          {engineer.oneLiner}
        </p>
      </div>
    </Link>
  );
}
