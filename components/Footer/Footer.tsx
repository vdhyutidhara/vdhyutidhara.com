import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-[90vw] mx-auto py-24 px-4">

      {/* Hire section */}
      <div className="mb-16">
        <hr className="thin-rule mb-12" />
        <div className="flex items-end justify-between gap-8 flex-wrap max-sm:flex-col max-sm:items-start">
          <p className="font-heading text-[3.5rem] font-light leading-none tracking-tight max-sm:text-[2.25rem]">
            Interested to know more?
          </p>
          <Link
            href="/resume"
            className="font-mono text-sm text-ink border-b border-border pb-px hover:opacity-50 transition-opacity whitespace-nowrap"
          >
            Experience →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <hr className="thin-rule mb-8" />
      <div className="flex items-center justify-end">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} Vinay Kumar Gupta
        </p>
      </div>
    </footer>
  );
}

