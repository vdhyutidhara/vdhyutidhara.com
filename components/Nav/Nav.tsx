"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider/ThemeProvider";

const links = [
  { label: "Experience", href: "/resume" },
  { label: "Projects", href: "/work" },
  { label: "Writing", href: "/blog" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Skip link — first focusable element on every page */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-bg border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-[90vw] mx-auto px-4 h-14 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Home"
            className="flex items-center justify-center px-3 h-9 rounded-full border border-border font-mono text-sm text-ink hover:opacity-50 transition-opacity"
          >
            VKG
          </Link>

          {/* Links + theme toggle */}
          <div className="flex items-center gap-6">
            {links.map(({ label, href }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={label}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`font-mono text-sm transition-colors hidden sm:block ${
                    active
                      ? "text-ink border-b border-border pb-px"
                      : "text-ink-faint hover:text-ink"
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className="text-ink-faint hover:text-ink transition-colors cursor-pointer"
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </nav>
    </>
  );
}
