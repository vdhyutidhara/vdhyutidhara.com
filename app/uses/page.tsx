import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "The tools, typefaces, and stack used by Vinay Kumar Gupta to build for the web.",
  alternates: { canonical: "https://vdhyutidhara.com/uses" },
  openGraph: {
    title: "Uses — Vinay Gupta",
    description:
      "The tools, typefaces, and stack used by Vinay Kumar Gupta to build for the web.",
    url: "https://vdhyutidhara.com/uses",
    type: "website",
  },
};

const uses = [
  {
    category: "Stack",
    items: [
      { name: "Next.js", note: "App Router. Static generation for everything that can be static." },
      { name: "React 19", note: "Server Components by default, client components only where state is needed." },
      { name: "TypeScript", note: "Strict mode. Types document intent; they're not optional." },
      { name: "Tailwind 4", note: "CSS-first config. No tailwind.config.js." },
    ],
  },
  {
    category: "Editor",
    items: [
      { name: "VS Code", note: "With Vim keybindings. The muscle memory is too deep to abandon." },
      { name: "GitHub Copilot", note: "For boilerplate and test scaffolding. Never for architecture." },
      { name: "Prettier", note: "Opinionated formatting. The arguments about style end the moment you install it." },
    ],
  },
  {
    category: "Hardware",
    items: [
      { name: "MacBook Pro M3", note: "14-inch. The build step that used to take 45 seconds takes 4." },
      { name: "LG 27UK850", note: "27-inch 4K. Enough pixels to actually see what the typography looks like." },
    ],
  },
  {
    category: "Typefaces",
    items: [
      { name: "Ogg Roman", note: "High-contrast serif by Signal Type Foundry. Used for all display text on this site." },
      { name: "Apercu Mono", note: "Geometric monospace by Colophon Foundry. All functional copy on this site." },
      { name: "Berkeley Mono", note: "Editor font. The one typeface I'm willing to pay for without hesitation." },
    ],
  },
];

export default function UsesPage() {
  return (
    <div className="w-[90vw] max-w-[720px] mx-auto py-16 px-4">
      <Link
        href="/"
        className="font-mono text-sm text-ink-faint border-b border-border pb-px hover:opacity-50 transition-opacity"
      >
        ← Back
      </Link>

      <header className="mt-12 mb-16">
        <h1 className="font-heading text-[3rem] font-light leading-tight max-sm:text-[2rem]">
          Uses
        </h1>
        <p className="font-mono text-sm text-ink-muted mt-4">
          The tools and typefaces behind this site and my daily work.
        </p>
      </header>

      <div className="space-y-16">
        {uses.map(({ category, items }) => (
          <section key={category}>
            <h2 className="font-heading text-[1.75rem] font-light mb-8">
              {category}
            </h2>
            <dl className="space-y-6">
              {items.map(({ name, note }) => (
                <div key={name} className="grid grid-cols-[200px_1fr] gap-8 max-sm:grid-cols-1 max-sm:gap-2">
                  <dt className="font-mono text-sm text-ink">{name}</dt>
                  <dd className="font-mono text-sm text-ink-muted">{note}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <footer className="mt-24 pt-8 border-t border-border">
        <p className="font-mono text-xs text-ink-faint">
          Design inspired by{" "}
          <a
            href="https://canalstreet.market/"
            target="_blank"
            rel="noreferrer"
            className="border-b border-border pb-px hover:opacity-50 transition-opacity"
          >
            Canal Street Market
          </a>
          . Built with Next.js, React, TypeScript, and Tailwind.
        </p>
      </footer>
    </div>
  );
}
