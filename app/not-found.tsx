import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen w-[90vw] mx-auto flex flex-col justify-between py-24 px-4">
      <div className="flex-1 flex flex-col justify-center">
        <span
          aria-hidden="true"
          className="font-heading text-[12rem] font-thin text-ink leading-none select-none"
          style={{ opacity: 0.05 }}
        >
          404
        </span>
        <hr className="thin-rule my-8 w-full" />
        <h1 className="font-heading text-[2.5rem] font-light text-ink leading-tight max-sm:text-[2rem]">
          Page not found
        </h1>
        <p className="font-mono text-sm text-ink-muted mt-4 max-w-[480px] leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-10 self-start font-mono text-sm text-ink border-b border-border pb-px hover:opacity-50 transition-opacity"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
