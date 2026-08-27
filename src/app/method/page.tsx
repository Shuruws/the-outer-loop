import type { Metadata } from "next";

import { method } from "@/data/method";

export const metadata: Metadata = {
  title: "Method",
  description: "How The Outer Loop was researched and what we will not pretend.",
};

export default function MethodPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">
        {method.updated}
      </p>
      <h1 className="mt-2 font-heading text-4xl sm:text-5xl">{method.title}</h1>
      <p className="mt-4 text-muted-foreground">
        Built as a research pass over public X, LinkedIn, GitHub, essays, and
        conference talks. Iterative by design. New gems land when they publish
        a method, not when they trend.
      </p>
      <div className="mt-12 space-y-8">
        {method.criteria.map((item, index) => (
          <section key={item.title}>
            <p className="font-mono text-xs text-primary">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="font-heading text-2xl">{item.title}</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </section>
        ))}
      </div>
      <section className="mt-12">
        <h2 className="font-heading text-2xl">Primary sources</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          {method.sources.map((source) => (
            <li key={source}>{source}</li>
          ))}
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="font-heading text-2xl">Watchlist — next pass</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          {method.watchlist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="font-heading text-2xl">Limits</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          {method.limits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
