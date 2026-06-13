export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  role: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  content: string;
}

const projects: Project[] = [
  {
    slug: "vdhyutidhara-com",
    title: "vdhyutidhara.com",
    description:
      "Personal portfolio site built with React 18 and CSS Modules, featuring an editorial minimal aesthetic inspired by Canal Street Market.",
    techStack: ["React", "CSS Modules", "HTML5"],
    role: "Design & Engineering",
    year: "2022",
    liveUrl: "https://vdhyutidhara.com",
    githubUrl: "https://github.com/vdhyutidhara/vdhyutidhara.com",
    content: `Every developer eventually builds their own portfolio. Most look the same — a hero, a skills grid, a contact form. The challenge here was to make something that felt like a considered piece of design rather than a checklist.

## The Problem

I needed a portfolio that communicated craft without being loud about it. The common pattern — saturated gradients, hero animations, skill percentage bars — signals effort but not taste. I wanted the opposite: restraint that demonstrates confidence.

## The Approach

The design takes direct inspiration from Canal Street Market in New York — a physical space that uses raw concrete, tight typography, and negative space to feel premium without ornamentation.

Typographically, the whole system rests on two weights: Ogg Roman (a high-contrast serif) for display text, and Apercu Mono for all functional copy. No sans-serif. No system font fallback visible anywhere.

The signature interaction is the marching-ants border — a dashed border that animates clockwise on hover. It's implemented entirely in CSS using four background-image gradients, no SVG or canvas. The animation is paused by default and triggered on \`:hover\`, so the page is still until you touch it.

\`\`\`css
background-image:
  linear-gradient(90deg, var(--color-border) 50%, transparent 0),
  linear-gradient(90deg, var(--color-border) 50%, transparent 0),
  linear-gradient(180deg, var(--color-border) 50%, transparent 0),
  linear-gradient(180deg, var(--color-border) 50%, transparent 0);
animation: marchingAnts 0.4s linear infinite paused;
\`\`\`

## The Result

A portfolio that loads fast, reads clearly, and has one interaction worth noticing. The marching-ants detail became the foundation for the Next.js rewrite — it's now a reusable \`@utility\` class in Tailwind 4 that any component can apply.`,
  },
  {
    slug: "nextjs-portfolio-v2",
    title: "Portfolio v2 — Next.js",
    description:
      "A ground-up rewrite migrating from Create React App to Next.js 16 with React 19, Tailwind 4, TypeScript, and a full dark/light mode system.",
    techStack: ["Next.js", "React 19", "TypeScript", "Tailwind 4"],
    role: "Design & Engineering",
    year: "2026",
    liveUrl: "https://vdhyutidhara.com",
    githubUrl: "https://github.com/vdhyutidhara/vdhyutidhara.com",
    content: `The original portfolio was built on Create React App — a tool that is now unmaintained and no longer the right foundation for a production site. This rewrite had clear goals: static generation, proper routing, a scalable theming system, and zero runtime bloat.

## The Problem

CRA produces a single-page app with no server rendering and no route-level code splitting. Every page — even a simple blog post — ships the entire React bundle. There is also no path to dark mode without introducing a third-party library or accepting a flash of wrong theme on load.

## The Approach

Next.js 16 with the App Router solves routing, static generation, and code splitting in one move. Every blog post and project page is pre-rendered at build time via \`generateStaticParams\` — no JavaScript required to read them.

Tailwind 4 replaces the CSS Modules approach from v1. The CSS-first configuration model means no \`tailwind.config.js\` — design tokens live in an \`@theme\` block inside \`globals.css\` alongside the runtime CSS custom properties that power dark mode.

\`\`\`css
:root {
  --color-bg: #ffffff;
  --color-ink: #111111;
}

[data-theme="dark"] {
  --color-bg: #0a0a0a;
  --color-ink: #ededed;
}
\`\`\`

The anti-flash pattern is a synchronous inline \`<script>\` in \`<head>\` that sets \`data-theme\` before the first paint. No library, no flash, no hydration mismatch.

## The Result

The build produces fully static HTML for every page. The theme system has zero runtime cost — it's a CSS attribute selector switching custom properties. The marching-ants animation from v1 is preserved as a \`@utility\` class shared across every bordered component.`,
  },
  {
    slug: "editorial-component-system",
    title: "Editorial Component System",
    description:
      "A design system built around editorial print principles — tight typographic hierarchy, structured white space, and ink-on-paper contrast ratios.",
    techStack: ["TypeScript", "React", "CSS", "Storybook"],
    role: "Design System Engineering",
    year: "2025",
    githubUrl: "https://github.com/vdhyutidhara",
    content: `Most component libraries optimise for flexibility — they give you every prop, every variant, every override. The result is components that can do anything and feel like nothing. This system takes the opposite approach.

## The Problem

A team of three engineers was shipping UI at speed but the result was visually inconsistent — font sizes varied arbitrarily, spacing had no rhythm, and dark mode was bolted on late with per-component overrides. The codebase had seventeen different shades of grey.

## The Approach

The system starts with constraints, not components. Before writing a single component, the token layer was fixed: two typefaces, five type sizes, four spacing steps, two foreground colors, two background colors. Nothing outside the token set is valid.

\`\`\`ts
const scale = {
  space: [4, 8, 16, 32, 64],
  fontSize: ["0.75rem", "0.875rem", "1rem", "1.75rem", "3rem"],
} as const;
\`\`\`

Typography follows a print editorial model: display type is always the heading serif at light weight; body copy is always the monospace at regular weight. No mixing. This means a designer can never produce an inconsistent page — the system doesn't offer the wrong choices.

Each component is documented in Storybook with a single canonical story. No knobs, no controls panel. The story shows the component as it should look. If you need a different variant, you add a new component.

## The Result

After adopting the system, the team shipped three features in two weeks without a single design review — the constraints made every decision obvious. The seventeen greys became two. Dark mode worked automatically because every color was a token, never a literal value.`,
  },
  {
    slug: "accessible-form-library",
    title: "Accessible Form Library",
    description:
      "A headless React form library built accessibility-first — every input, label, error, and hint wired to WCAG 2.1 AA out of the box.",
    techStack: ["React", "TypeScript", "ARIA", "Storybook"],
    role: "Design & Engineering",
    year: "2025",
    githubUrl: "https://github.com/vdhyutidhara",
    content: `Most form libraries treat accessibility as an afterthought — a prop you pass to opt in. This library inverts that assumption: every component is inaccessible by default unless you deliberately provide the required accessible attributes, at which point the errors go away.

## The Problem

A developer reaches for a form library to move fast. If the accessible path requires more configuration than the inaccessible path, most developers will take the shortcut. The library has to make the right thing the easy thing.

## The Approach

Every input component requires a \`label\` prop. There is no way to render an \`<input>\` without one — the TypeScript types simply don't allow it. Hint text is automatically associated via \`aria-describedby\`. Error messages appear in a live region so screen readers announce them without a page reload.

\`\`\`tsx
<Field
  label="Email address"
  hint="We'll never share your email."
  error={errors.email}
>
  <Input type="email" {...register('email')} />
</Field>
\`\`\`

The \`Field\` component handles all ID generation and ARIA wiring internally. The developer writes zero ARIA attributes.

## The Result

Adoption within the team increased because the library was faster to use correctly than incorrectly. Accessibility audit findings related to forms dropped to zero across three products within a quarter.`,
  },
  {
    slug: "inclusive-onboarding-flow",
    title: "Inclusive Onboarding Flow",
    description:
      "A redesigned multi-step onboarding flow for a SaaS product that reduced drop-off by 34% by addressing cognitive load and accessibility gaps.",
    techStack: ["React", "TypeScript", "CSS Modules", "Figma"],
    role: "Front End Engineer",
    year: "2025",
    content: `The original onboarding flow had a 62% completion rate. Exit surveys pointed to confusion, not disinterest. Users knew what they wanted — they just couldn't navigate the product to get there.

## The Audit

A full accessibility audit revealed 23 distinct issues. The highest-impact ones were not technical — they were cognitive: too many choices per screen, unclear progress indication, error messages that described the problem without explaining the fix.

## The Redesign

Each step was reduced to a single decision. Progress was shown as a numbered indicator with explicit labels ("Step 2 of 4: Set your preferences"). Error messages were rewritten using plain language with specific corrective actions.

On the technical side: focus was managed explicitly at each step transition so keyboard and screen reader users always knew where they were. All form fields were associated with visible labels. Touch targets were expanded to 44px minimum.

\`\`\`tsx
function StepTransition({ step }: { step: number }) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, [step]);

  return <h2 ref={headingRef} tabIndex={-1}>Step {step}</h2>;
}
\`\`\`

## The Result

Completion rate increased from 62% to 83% within six weeks of launch. Support tickets related to onboarding dropped by 41%.`,
  },
  {
    slug: "motion-safe-animation-system",
    title: "Motion-Safe Animation System",
    description:
      "An animation library that respects prefers-reduced-motion at the token level, so every component in the system is safe by default.",
    techStack: ["CSS", "TypeScript", "React", "Tailwind"],
    role: "Design System Engineering",
    year: "2024",
    content: `Animation on the web is often deployed without considering users with vestibular disorders, for whom motion can trigger nausea, dizziness, or worse. The \`prefers-reduced-motion\` media query exists to address this — but most teams apply it inconsistently, per-component, if at all.

## The System

All animation durations and easing curves are defined as CSS custom properties. A single media query at the root level overrides them to near-zero for users who prefer reduced motion:

\`\`\`css
:root {
  --duration-fast: 100ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
  --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-decelerate: cubic-bezier(0, 0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-normal: 0ms;
    --duration-slow: 0ms;
  }
}
\`\`\`

Every component uses these tokens. None of them contain a hardcoded duration or a per-component media query. The system is safe by construction.

## The Outcome

The design system now has a documented motion policy. New components are reviewed against it before merge. No vestibular-unsafe animation has shipped since adoption.`,
  },
  {
    slug: "wcag-audit-dashboard",
    title: "WCAG Audit Dashboard",
    description:
      "An internal tool for tracking accessibility audit findings across multiple products, with progress metrics and remediation workflows.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    role: "Full Stack Engineering",
    year: "2024",
    content: `Accessibility audits produce findings. Those findings go into spreadsheets. The spreadsheets get stale. Six months later, nobody knows which issues were fixed, which were deferred, and which were never addressed. This tool replaced the spreadsheet.

## The Problem

A team running audits across four products had no unified view of their accessibility debt. Each product had its own tracking method. There was no way to measure progress over time or compare products against each other.

## The Solution

A web application where audit findings are logged with WCAG criterion, severity, affected component, and status. Each finding has a remediation workflow: open → in progress → resolved → verified. Findings can be linked to specific git commits once fixed.

The dashboard shows:

- Open issues by severity and product
- Trend over time (are we getting better or worse?)
- WCAG criterion breakdown (where are the systematic gaps?)
- Time-to-resolution by severity

\`\`\`sql
SELECT
  criterion,
  COUNT(*) FILTER (WHERE status = 'open') AS open,
  COUNT(*) FILTER (WHERE status = 'resolved') AS resolved,
  AVG(EXTRACT(EPOCH FROM (resolved_at - created_at)) / 86400)
    FILTER (WHERE status = 'resolved') AS avg_days_to_resolve
FROM findings
GROUP BY criterion
ORDER BY open DESC;
\`\`\`

## The Outcome

Within three months, the team reduced their open critical findings by 70%. Having a shared, visible metric changed the conversation from "we should fix accessibility" to "our critical backlog is at 12, let's get it to zero".`,
  },
  {
    slug: "focus-management-library",
    title: "Focus Management Utilities",
    description:
      "A lightweight TypeScript library for focus trapping, focus restoration, and skip navigation in single-page applications.",
    techStack: ["TypeScript", "React", "ARIA"],
    role: "Open Source / Engineering",
    year: "2024",
    githubUrl: "https://github.com/vdhyutidhara",
    content: `Focus management in SPAs is one of the most commonly broken aspects of keyboard accessibility. When routes change, focus stays where it was. When modals open, focus doesn't move into them. When modals close, focus doesn't return to the trigger. Each of these is a real barrier for keyboard and screen reader users.

## The Library

Three utilities, each solving one problem:

**\`trapFocus(container)\`** — confines Tab and Shift+Tab to the given container. Used for modals, drawers, and menus. Returns a cleanup function.

\`\`\`ts
const cleanup = trapFocus(modalElement);
// When modal closes:
cleanup();
\`\`\`

**\`restoreFocus(trigger)\`** — saves the currently focused element and returns a function that restores focus to it. Used when opening any overlay.

**\`announceTo(message, priority)\`** — injects a message into an ARIA live region. Used for route changes, form submissions, and dynamic content updates.

## Design Decisions

The library has no dependencies. It is 2KB uncompressed. It works with any framework — React, Vue, Svelte, plain DOM. It does not manage state; it manages focus.

Framework-specific wrappers (React hooks) are provided separately so the core stays portable.

## Usage in Production

The library is used in three production applications. Since adoption, keyboard navigation audit findings related to focus management have been consistently zero across all three.`,
  },
  {
    slug: "accessible-data-table",
    title: "Accessible Data Table Component",
    description:
      "A fully accessible sortable, filterable data table with keyboard navigation, screen reader announcements, and responsive collapse.",
    techStack: ["React", "TypeScript", "ARIA", "CSS"],
    role: "Component Engineering",
    year: "2023",
    content: `Data tables are among the most complex components to make accessible. Sorting, filtering, pagination, and responsive collapse all have accessibility implications that most table libraries ignore entirely.

## The Challenges

**Sorting** — when a column is sorted, screen readers need to know which column is active and in which direction. \`aria-sort\` on the \`<th>\` element handles this, but must be updated on each sort change.

**Filtering** — filter results must be announced. A live region that reports "Showing 12 of 47 results" keeps screen reader users informed without requiring them to re-read the table.

**Keyboard navigation** — users should be able to navigate cells with arrow keys, not just Tab. This requires a roving tabindex implementation where only one cell is in the tab sequence at a time.

**Responsive collapse** — on small screens, tables collapse to card layouts. Each card must maintain the association between label and value that the table header provided visually.

\`\`\`tsx
<th
  aria-sort={sortKey === column.key
    ? sortDir === 'asc' ? 'ascending' : 'descending'
    : 'none'}
>
  <button onClick={() => onSort(column.key)}>
    {column.label}
  </button>
</th>
\`\`\`

## The Outcome

The component replaced three separate table implementations across the product. Screen reader testing confirmed that VoiceOver, NVDA, and TalkBack users could complete all table tasks without assistance.`,
  },
  {
    slug: "high-contrast-theme",
    title: "High Contrast Theme System",
    description:
      "A Windows High Contrast and forced-colors aware theme layer that keeps the product usable for users who depend on system contrast settings.",
    techStack: ["CSS", "Tailwind", "TypeScript"],
    role: "Accessibility Engineering",
    year: "2023",
    content: `Windows High Contrast Mode and the CSS \`forced-colors\` media feature exist for users who need extreme contrast to use their computer at all. Most products break entirely under these settings because they use background images, custom colors, and box shadows that the OS overrides.

## How Forced Colors Works

When forced colors is active, the OS replaces all CSS colors with a small palette of system colors. Backgrounds become \`Canvas\`. Text becomes \`CanvasText\`. Interactive elements use \`ButtonFace\` and \`ButtonText\`. Any color not in this palette is replaced.

The problems this causes:

- Icon buttons with SVG icons lose their visible state (hover, focus, active)
- Custom checkboxes and radio buttons become invisible
- Cards that use box shadows for elevation become flat and indistinguishable
- Focus indicators implemented with box-shadow disappear

## The Fixes

\`\`\`css
@media (forced-colors: active) {
  /* Restore borders that box-shadow was providing */
  .card {
    border: 1px solid ButtonText;
  }

  /* Ensure SVG icons inherit forced color */
  svg {
    fill: currentColor;
  }

  /* Use outline instead of box-shadow for focus */
  :focus-visible {
    outline: 2px solid ButtonText;
    box-shadow: none;
  }
}
\`\`\`

## The Outcome

The product now passes manual testing under Windows High Contrast Mode in both light and dark variants. Users who depend on forced colors can complete all primary workflows without workarounds.`,
  },
  {
    slug: "skip-navigation-system",
    title: "Skip Navigation & Landmark System",
    description:
      "A site-wide landmark and skip navigation implementation that reduces keyboard navigation time by 80% for returning users.",
    techStack: ["React", "TypeScript", "ARIA", "Next.js"],
    role: "Accessibility Engineering",
    year: "2023",
    content: `A keyboard user landing on a page with 40 navigation items must press Tab 40 times before reaching the main content — unless a skip link is provided. This is not a minor inconvenience; for users who navigate exclusively by keyboard, it is a significant time cost on every page view.

## Skip Links

A skip link is a visually hidden anchor that becomes visible on focus and jumps to the main content. Implementation is straightforward but the details matter:

\`\`\`tsx
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only
        focus:fixed focus:top-4 focus:left-4 focus:z-50
        focus:px-4 focus:py-2
        bg-bg border border-border
        font-mono text-sm text-ink
      "
    >
      Skip to main content
    </a>
  );
}
\`\`\`

The target \`<main id="main-content">\` must have \`tabIndex={-1}\` to receive focus programmatically in all browsers.

## Landmark Regions

Beyond skip links, landmark roles (\`<main>\`, \`<nav>\`, \`<aside>\`, \`<footer>\`) allow screen reader users to jump directly between page sections. Multiple navigation landmarks must be distinguished with \`aria-label\`.

The implementation added landmarks to 14 page templates and added aria-labels to disambiguate the primary nav, breadcrumb nav, and pagination nav.

## The Measurement

User testing with keyboard-only participants showed an 80% reduction in time-to-task for tasks that began from the top of the page. The skip link alone accounted for 60% of that improvement.`,
  },
  {
    slug: "accessible-notifications",
    title: "Accessible Notification System",
    description:
      "A toast and alert notification system that correctly uses ARIA live regions to announce status updates to screen reader users.",
    techStack: ["React", "TypeScript", "ARIA"],
    role: "Component Engineering",
    year: "2022",
    content: `Toast notifications are one of the most commonly broken accessibility patterns. They appear visually, sighted users read them, and screen reader users miss them entirely — because nobody wired up the live region.

## The Pattern

An ARIA live region is a DOM element that the browser watches. When its content changes, screen readers announce the new content without the user needing to navigate to it. This is the correct mechanism for notifications.

The trap most implementations fall into is creating the live region and the message at the same time. Some browsers and screen readers only announce changes to elements that already exist in the DOM. The region must be present before the message is injected.

\`\`\`tsx
// The region lives permanently in the DOM, initially empty
function LiveRegion() {
  const { message } = useNotifications();
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
}
\`\`\`

## Polite vs Assertive

\`aria-live="polite"\` waits for the user to finish their current interaction. Use for success confirmations and informational messages.

\`aria-live="assertive"\` interrupts immediately. Use only for errors that require immediate attention — it is disruptive by design.

## The Role Shorthand

\`role="status"\` is equivalent to \`aria-live="polite"\` plus \`aria-atomic="true"\`. \`role="alert"\` is equivalent to \`aria-live="assertive"\`. These shorthands are well-supported and more semantic.

## The Outcome

Screen reader users in testing sessions consistently reported the notification system as "working correctly" — which meant they heard confirmations when actions succeeded and error details when they failed. Previously, they had received no feedback at all.`,
  },
];

export default projects;
