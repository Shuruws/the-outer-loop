import type { Metadata } from "next";

import { DirectoryClient } from "@/components/directory-client";
import { engineers } from "@/data/engineers";

export const metadata: Metadata = {
  title: "Engineers",
  description:
    "Directory of AI-lab, large-tech, and hidden-gem engineers who publish how they collaborate with coding agents.",
};

export default function EngineersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">
        Directory
      </p>
      <h1 className="mt-2 font-heading text-4xl sm:text-5xl">The engineers</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Twenty-six people. The filter is not fame. It is whether they left a method
        you can steal: a skill pack, a loop, a spec ritual, an eval, a repo.
      </p>
      <div className="mt-10">
        <DirectoryClient engineers={engineers} />
      </div>
    </div>
  );
}
