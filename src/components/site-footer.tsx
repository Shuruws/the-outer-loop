import Link from "next/link";

import { engineers } from "@/data/engineers";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          Living research file. Primary sources only.{" "}
          <Link href="/method" className="text-primary hover:underline">
            How we picked
          </Link>
          .
        </p>
        <p className="font-mono text-xs uppercase tracking-widest">
          Aug 2026 · {engineers.length} engineers
        </p>
      </div>
    </footer>
  );
}
