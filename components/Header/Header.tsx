import ScrollCue from "@/components/ScrollCue/ScrollCue";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:vinay@vdhyutidhara.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/vdhyutidhara",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/vdhyutidhara",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Header() {
  return (
    <header className="relative min-h-screen w-[90vw] mx-auto flex flex-col justify-between pt-24 pb-10 px-4">

      {/* Availability badge */}
      <div className="flex items-center gap-2 self-end">
        <span className="pulse-dot" aria-hidden="true" />
        <span className="font-mono text-xs text-ink-faint tracking-wide">
          Available for work
        </span>
      </div>

      {/* Centre — name + rule + role + bio */}
      <div className="flex-1 flex flex-col justify-center py-16">
        <h1 className="fluid-name font-heading font-normal text-ink">
          Vinay Kumar Gupta
        </h1>
        <hr className="thin-rule my-6 w-full" />
        <div className="flex items-baseline justify-between gap-8 flex-wrap">
          <p className="font-mono text-sm text-ink-muted tracking-[0.1em] uppercase">
            Inclusive Software Engineer
          </p>
          <p className="font-mono text-sm text-ink-faint">Bangalore, India</p>
        </div>
        <p className="font-heading text-[1.375rem] font-light leading-snug text-ink mt-10 max-w-[560px] max-sm:text-[1.125rem]">
          Dedicated to developing software that is universally accessible,
          ensuring that no user is left behind regardless of their abilities.
        </p>
      </div>

      {/* Bottom bar — social links left, scroll cue right */}
      <div className="flex items-end justify-between gap-8">
        <nav aria-label="Social links" className="flex items-center">
          {socialLinks.map(({ label, href, icon }, i) => (
            <span key={label} className="flex items-center">
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noreferrer"}
                className="flex items-center gap-2 font-mono text-sm text-ink-faint hover:text-ink transition-colors px-4 first:pl-0 group"
              >
                <span className="opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                  {icon}
                </span>
                {label}
              </a>
              {i < socialLinks.length - 1 && (
                <span className="text-ink-faint select-none text-xs" aria-hidden="true">|</span>
              )}
            </span>
          ))}
        </nav>
        <ScrollCue />
      </div>

    </header>
  );
}
