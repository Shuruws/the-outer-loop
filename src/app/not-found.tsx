import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">
        404
      </p>
      <h1 className="mt-3 font-heading text-4xl">This file is not in the dossier</h1>
      <p className="mt-4 text-muted-foreground">
        The engineer or school you asked for is not in issue 01.
      </p>
      <Link
        href="/engineers"
        className="mt-6 inline-block text-primary hover:underline"
      >
        Back to the directory
      </Link>
    </div>
  );
}
