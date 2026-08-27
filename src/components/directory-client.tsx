"use client";

import { useMemo, useState } from "react";

import { EngineerCard } from "@/components/engineer-card";
import { Input } from "@/components/ui/input";
import type { Engineer, EngineerTier } from "@/data/types";
import { tierLabels } from "@/lib/labels";
import { cn } from "@/lib/utils";

const filters: Array<{ id: "all" | EngineerTier; label: string }> = [
  { id: "all", label: "All" },
  { id: "archetype", label: tierLabels.archetype },
  { id: "hidden-gem", label: tierLabels["hidden-gem"] },
  { id: "lab", label: tierLabels.lab },
  { id: "big-tech", label: tierLabels["big-tech"] },
];

export function DirectoryClient({ engineers }: { engineers: Engineer[] }) {
  const [query, setQuery] = useState("");
  const [tier, setTier] = useState<(typeof filters)[number]["id"]>("all");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return engineers.filter((engineer) => {
      if (tier !== "all" && engineer.tier !== tier) return false;
      if (!needle) return true;
      const hay = [
        engineer.name,
        engineer.handle,
        engineer.company,
        engineer.title,
        engineer.oneLiner,
        ...engineer.previous,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(needle);
    });
  }, [engineers, query, tier]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setTier(filter.id)}
              className={cn(
                "rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wider",
                tier === filter.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search name, company, handle…"
          className="md:max-w-xs"
        />
      </div>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {filtered.length} in view
      </p>
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border px-6 py-16 text-center text-muted-foreground">
          No one matches. Try a company, a handle, or clear the filter.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((engineer) => (
            <EngineerCard key={engineer.slug} engineer={engineer} />
          ))}
        </div>
      )}
    </div>
  );
}
