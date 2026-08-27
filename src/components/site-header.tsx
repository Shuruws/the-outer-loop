import Link from "next/link";

const links = [
  { href: "/engineers", label: "Engineers" },
  { href: "/schools", label: "Schools" },
  { href: "/lessons", label: "Lessons" },
  { href: "/resources", label: "Repos" },
  { href: "/method", label: "Method" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group min-w-0">
          <p className="font-heading text-lg tracking-tight text-foreground sm:text-xl">
            The Outer Loop
          </p>
          <p className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground group-hover:text-primary">
            A dossier of AI collab craft
          </p>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm text-muted-foreground">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
