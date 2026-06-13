export interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: string;
}

const blogs: Blog[] = [
  {
    slug: "building-with-nextjs-app-router",
    title: "Building with the Next.js App Router",
    excerpt:
      "The App Router changes how you think about layouts, data fetching, and rendering. Here's what I learned migrating a real project.",
    date: "2026-05-20",
    readingTime: "5 min read",
    content: `The Next.js App Router introduced in version 13 and stabilised in 14 is not just a new file convention — it's a fundamentally different mental model.

## Layouts are composable

In the Pages Router, every page owned its own layout logic. With the App Router, layouts are nested by the filesystem. A \`layout.tsx\` at \`app/blog/layout.tsx\` wraps every route under \`/blog\` automatically. This means you define chrome once and it never re-mounts when navigating between children.

## Server Components by default

Every component in the App Router is a React Server Component unless you opt in with \`"use client"\`. This matters for performance: server components never ship their JavaScript to the browser. Data fetching lives right inside the component via \`async/await\` — no \`useEffect\`, no loading state boilerplate for the initial render.

## Static generation with generateStaticParams

For dynamic routes like \`/blog/[slug]\`, \`generateStaticParams\` replaces \`getStaticPaths\`. The API is simpler: return an array of param objects, and Next.js pre-renders each one at build time.

\`\`\`ts
export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}
\`\`\`

## What to watch out for

Context providers must be client components. If your state library or theme system uses React context, wrap it in a client component and import it into your root layout — exactly the pattern used in this portfolio's \`ThemeProvider\`.

The migration is worth it. Build times are faster, the developer experience is cleaner, and the output is leaner.`,
  },
  {
    slug: "css-custom-properties-for-theming",
    title: "CSS Custom Properties for Runtime Theming",
    excerpt:
      "Tailwind utility classes are great — but for themes that change at runtime, CSS custom properties are the right primitive.",
    date: "2026-04-10",
    readingTime: "4 min read",
    content: `Tailwind 4 introduced a CSS-first configuration model. Instead of a JavaScript config file, you write \`@theme\` blocks in CSS. That's a step in the right direction, but it doesn't solve runtime theming on its own.

## The problem with static tokens

Tailwind generates utility classes at build time. A class like \`bg-zinc-900\` is resolved to a fixed hex value. There is no mechanism to change what that class means after the CSS is shipped.

## CSS custom properties change at runtime

CSS custom properties (also called CSS variables) are re-evaluated by the browser on every paint. You can redefine them on any element and all descendants pick up the change instantly — no JavaScript re-render required.

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

Setting \`document.documentElement.dataset.theme = 'dark'\` is all it takes to flip the entire page.

## Bridging with Tailwind 4

In Tailwind 4, the \`@theme\` block can reference CSS variables:

\`\`\`css
@theme {
  --color-ink: var(--color-ink);
}
\`\`\`

This registers the token so \`text-ink\` is a valid utility class, and its resolved value comes from the custom property at runtime. You get Tailwind's ergonomics and runtime flexibility without a theme library.

## The anti-flash pattern

One catch: on initial load, React has not run yet. If you set the theme in a \`useEffect\`, users see a flash of the wrong theme. The fix is a tiny inline \`<script>\` in \`<head>\` that reads \`localStorage\` and sets the \`data-theme\` attribute synchronously, before the first paint.`,
  },
  {
    slug: "marching-ants-css-animation",
    title: "Marching Ants Borders in Pure CSS",
    excerpt:
      "That animated dashed border you see on hover? No canvas, no SVG, no JavaScript. Just four CSS gradients and a keyframe.",
    date: "2026-03-02",
    readingTime: "3 min read",
    content: `The "marching ants" effect — a dashed border whose dashes animate along the perimeter — looks like it requires SVG or canvas. It doesn't. Four CSS \`background-image\` gradients and one \`@keyframes\` rule are all you need.

## How it works

CSS \`background-image\` accepts multiple values. Each gradient paints one side of the border:

- Two \`linear-gradient(90deg, ...)\` gradients for top and bottom edges
- Two \`linear-gradient(180deg, ...)\` gradients for left and right edges

Each gradient alternates between the border color and transparent at a fixed interval, creating a dashed pattern:

\`\`\`css
background-image:
  linear-gradient(90deg, #000 50%, transparent 0),  /* top */
  linear-gradient(90deg, #000 50%, transparent 0),  /* bottom */
  linear-gradient(180deg, #000 50%, transparent 0), /* left */
  linear-gradient(180deg, #000 50%, transparent 0); /* right */
background-size: 30px 1px, 30px 1px, 1px 30px, 1px 30px;
background-position: 0 0, 0 100%, 0 0, 100% 0;
background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
\`\`\`

## Animating the march

Shift the \`background-position\` by exactly one dash interval and the dashes appear to march:

\`\`\`css
@keyframes marchingAnts {
  to {
    background-position: 30px 0, -30px 100%, 0 -30px, 100% 30px;
  }
}
\`\`\`

Note the directions: top moves right (+30px), bottom moves left (-30px), left moves up, right moves down. This makes the ants appear to travel clockwise around the perimeter.

## Pause on idle, run on hover

\`\`\`css
animation: marchingAnts 0.4s linear infinite;
animation-play-state: paused;

&:hover {
  animation-play-state: running;
}
\`\`\`

## Dark mode

Because the gradient color is hardcoded in the CSS, it won't respond to a \`data-theme\` attribute. The fix is to use a CSS custom property instead of a literal color:

\`\`\`css
linear-gradient(90deg, var(--color-border) 50%, transparent 0)
\`\`\`

Now the border color is controlled by the same token system as the rest of the design.`,
  },
  {
    slug: "accessibility-beyond-compliance",
    title: "Accessibility Beyond Compliance",
    excerpt:
      "WCAG conformance is a floor, not a ceiling. Here's how to build experiences that genuinely include everyone.",
    date: "2026-02-15",
    readingTime: "6 min read",
    content: `Most teams treat accessibility as a checklist. Run the audit, fix the contrast ratios, add the aria labels, close the ticket. The site is now "accessible." Except it isn't — not really.

## The Compliance Trap

WCAG 2.1 AA is the legal minimum in most jurisdictions. It covers perceivability, operability, understandability, and robustness. These are good principles. But they were written to be testable by automated tools, which means they describe the floor, not the ceiling.

A button with an aria-label passes WCAG. A button labeled "Click here" with an aria-label of "submit form" also passes. One of these is usable by a screen reader user; the other requires them to hold context in working memory that sighted users get visually for free.

## Cognitive Load is Accessibility

The most underserved population in accessibility work is people with cognitive disabilities. WCAG has a section on it — Understanding Success Criterion 3.3 — but it's vague and hard to audit automatically.

Concretely: write shorter sentences. Use plain language. Break long forms into steps. Don't rely on color alone to convey state. Provide undo. These are not nice-to-haves for users with cognitive disabilities — they are blockers.

## Motion and Vestibular Disorders

The \`prefers-reduced-motion\` media query has been supported in every major browser since 2019. Yet the majority of production sites ignore it.

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

For users with vestibular disorders, parallax effects and entry animations are not aesthetic choices — they are barriers that cause physical symptoms.

## The Right Mental Model

Accessibility is not a feature you add. It is a quality of the work itself. The same way you wouldn't ship a button that doesn't respond to keyboard input, you shouldn't ship motion that ignores user preferences or forms that fail under a screen reader.

Build it in from the start. It is always cheaper than retrofitting.`,
  },
  {
    slug: "keyboard-navigation-done-right",
    title: "Keyboard Navigation Done Right",
    excerpt:
      "Most keyboard navigation is an afterthought. Getting it right requires understanding focus management, not just tab order.",
    date: "2026-01-28",
    readingTime: "5 min read",
    content: `Tab through your product right now. If you have never done this, you will be surprised. Focus indicators disappear mid-flow. Modals trap focus. Dropdowns require a mouse. The keyboard experience is usually broken in ways that don't show up in automated audits.

## Focus Indicators

The first thing most design systems do is \`outline: none\`. The reasoning is that the default blue ring is ugly. The effect is that keyboard users lose their location on the page entirely.

The fix is not to restore the default — it's to design a focus indicator that works with your visual system:

\`\`\`css
:focus-visible {
  outline: 2px solid var(--color-ink);
  outline-offset: 3px;
}
\`\`\`

\`:focus-visible\` only shows the indicator when the browser determines the user is navigating by keyboard, so mouse users never see it. This eliminates the "ugly ring on click" problem without removing keyboard support.

## Focus Management in Dynamic UI

When a modal opens, focus must move into it. When it closes, focus must return to the trigger. When a route changes in a SPA, focus must move to the new page content.

None of this happens automatically. You have to manage it explicitly:

\`\`\`ts
const triggerRef = useRef<HTMLButtonElement>(null);
const modalRef = useRef<HTMLDivElement>(null);

function openModal() {
  setOpen(true);
  // Focus moves into modal on next render
  requestAnimationFrame(() => modalRef.current?.focus());
}

function closeModal() {
  setOpen(false);
  // Return focus to trigger
  triggerRef.current?.focus();
}
\`\`\`

## Skip Links

A skip link is a visually hidden anchor at the top of the page that becomes visible on focus and jumps to the main content. Without it, keyboard users must tab through every nav item on every page load.

This is a ten-line implementation with significant impact. There is no reason not to have one.`,
  },
  {
    slug: "screen-reader-testing-workflow",
    title: "My Screen Reader Testing Workflow",
    excerpt:
      "You don't need to be a screen reader power user to catch the most common issues. Here's a practical testing routine.",
    date: "2025-12-10",
    readingTime: "4 min read",
    content: `Automated accessibility tools catch about 30% of issues. The rest require manual testing. Screen reader testing sounds intimidating if you haven't done it before — but a basic workflow catches the vast majority of problems.

## The Setup

On macOS, VoiceOver is built in. Turn it on with Cmd+F5. On Windows, NVDA is free and widely used. For mobile, iOS VoiceOver and Android TalkBack are both free.

I test primarily with VoiceOver on Safari on macOS. This is the most common screen reader + browser combination among blind users on desktop. Chrome + NVDA on Windows is a close second and worth checking for anything complex.

## What I Test

**Reading order** — turn off the display with VoiceOver's Curtain (VO+Shift+F11) and navigate the page. Does it make sense without visual context? Does the reading order match the visual order?

**Form labels** — tab to every input. Does VoiceOver announce the label? Does it announce the error state when validation fails?

**Images** — every meaningful image needs descriptive alt text. Decorative images need \`alt=""\`. Icons used as buttons need an accessible name.

**Dynamic content** — when content updates without a page reload (modals, toasts, live regions), does VoiceOver announce it? Use \`aria-live\` for status messages.

## The Shortcut

The single highest-value thing you can do is run through your critical user flows with a screen reader once per sprint. Not every component, not every page — just the flows that matter: sign up, log in, complete the core action.

Most issues cluster in these flows. Fixing them covers the majority of real-world impact.`,
  },
  {
    slug: "color-contrast-in-practice",
    title: "Color Contrast in Practice",
    excerpt:
      "The 4.5:1 ratio is just the start. Here's how to build a color system that stays accessible across themes and states.",
    date: "2025-11-03",
    readingTime: "4 min read",
    content: `WCAG requires a 4.5:1 contrast ratio for normal text and 3:1 for large text. These numbers are widely known. What's less discussed is how to build a token system that enforces them across light mode, dark mode, hover states, and disabled states without manual checking.

## The Problem with Hardcoded Colors

If your button uses \`color: #666\` on \`background: #fff\`, that's a 5.7:1 ratio — passing. But if that same button appears on a \`#f5f5f5\` surface, the ratio drops to 4.1:1 — failing. Hardcoded colors require you to manually verify every combination.

## Token-Based Contrast Guarantees

The solution is to define your palette in terms of contrast relationships, not absolute values:

- \`--color-ink\` is always the primary text color
- \`--color-ink-muted\` passes 4.5:1 against \`--color-bg\`
- \`--color-ink-faint\` passes 3:1 against \`--color-bg\` (large text only)

When these relationships are defined once and enforced by your token system, every component that uses them inherits the guarantee. Dark mode works automatically because you're redefining the tokens, not the colors.

## Checking Your Work

\`\`\`ts
function contrastRatio(l1: number, l2: number): number {
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}
\`\`\`

Tools like Colour Contrast Analyser (free, desktop) let you pick colors directly from the screen. Run it on your muted text against every background it appears on, not just the primary background.

## Don't Forget States

Focus indicators, hover states, error messages, and placeholder text all need to meet contrast requirements. Placeholder text is the most commonly missed — browsers default it to a gray that frequently fails.`,
  },
  {
    slug: "semantic-html-still-matters",
    title: "Semantic HTML Still Matters",
    excerpt:
      "Before ARIA, before JavaScript, the right HTML element is always the best accessibility tool you have.",
    date: "2025-10-12",
    readingTime: "3 min read",
    content: `Every time I audit a codebase, I find \`<div>\` elements doing jobs that HTML already has elements for. Divs styled as buttons. Spans used as links. Custom dropdown menus built from scratch. Each one requires extra ARIA, extra JavaScript, and extra testing to reach the baseline that the native element provides for free.

## The First Rule of ARIA

The W3C's first rule of ARIA use is: don't use ARIA if you can use a native HTML element instead. This is not a style preference — it's because native elements come with built-in accessibility semantics, keyboard behavior, and browser support that ARIA can only approximate.

A \`<button>\` is focusable by default. It fires on Enter and Space. It has an implicit role of \`button\`. It announces its label to screen readers. A \`<div role="button" tabindex="0">\` can replicate this, but you have to wire up the keyboard events yourself, and you will miss edge cases.

## The Elements Worth Knowing

**\`<main>\`** — landmark region for primary content. Screen reader users can jump directly to it.

**\`<nav>\`** — landmark for navigation. Multiple \`<nav>\` elements should have \`aria-label\` to distinguish them.

**\`<article>\`** — self-contained content that makes sense in isolation. Blog posts, cards, comments.

**\`<section>\`** — thematic grouping within a page. Should have a heading.

**\`<button>\`** — anything that triggers an action. Not \`<a>\` (that's navigation), not \`<div>\`.

**\`<label>\`** — always associate form inputs with a label. Not placeholder text — a label.

## The Test

Disable CSS entirely and look at your page. Does it still make structural sense? Can you tell what the page is about, what the navigation options are, where the main content is? If not, the HTML structure needs work.`,
  },
  {
    slug: "inclusive-design-system-tokens",
    title: "Building an Inclusive Design System",
    excerpt:
      "How to bake accessibility into a design system at the token level, so every component inherits it by default.",
    date: "2025-09-05",
    readingTime: "6 min read",
    content: `A design system that doesn't address accessibility is a system that scales exclusion. Every component built on inaccessible foundations multiplies the problem. The right time to solve it is at the token layer — before a single component is written.

## Tokens as Contracts

Design tokens are not just a way to share values between design and engineering. They are contracts. A token named \`--color-text-primary\` makes a promise: this color is legible as primary text. If the token system enforces contrast requirements, every component that uses it inherits the guarantee.

This means defining your token set not by visual appearance, but by semantic role:

\`\`\`ts
const tokens = {
  // These pass 4.5:1 against surface-primary
  'text-primary': '#111111',
  'text-secondary': '#444444',

  // This passes 3:1 — large text or UI components only
  'text-tertiary': '#666666',

  // Never use for text — decorative only
  'text-disabled': '#999999',
} as const;
\`\`\`

## Spacing and Touch Targets

WCAG 2.5.5 requires interactive elements to be at least 44×44 CSS pixels. Most design systems define spacing tokens but don't enforce minimum touch target sizes.

Add a \`touch-target\` token:

\`\`\`css
--size-touch-target: 44px;
\`\`\`

And apply it as a minimum to all interactive components. On desktop where mouse precision is higher, visual size can be smaller — use padding to meet the minimum without changing appearance.

## Motion Tokens

Define animation durations and easing as tokens, and pair them with a motion preference check:

\`\`\`css
:root {
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-normal: 0ms;
  }
}
\`\`\`

Every component that uses these tokens automatically respects the user's motion preference. No per-component media queries.`,
  },
  {
    slug: "writing-accessible-react",
    title: "Writing Accessible React Components",
    excerpt:
      "Patterns for building React components that work for everyone — from focus management to live regions.",
    date: "2025-08-20",
    readingTime: "5 min read",
    content: `React doesn't make your app accessible. It gives you the tools to build accessible UIs, but the accessibility work is still yours. These are the patterns I reach for most.

## Use the Right Element

Start with the right HTML. A button component should render a \`<button>\`. A link component should render an \`<a>\`. This sounds obvious, but component abstractions frequently get this wrong — especially when the same component needs to behave as either a button or a link depending on context.

\`\`\`tsx
interface ActionProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
}

export function Action({ href, onClick, children }: ActionProps) {
  if (href) {
    return <a href={href}>{children}</a>;
  }
  return <button onClick={onClick}>{children}</button>;
}
\`\`\`

## Managing Focus in Modals

When a dialog opens, focus must move inside it and be trapped there. When it closes, focus returns to the trigger. The \`inert\` attribute is now well-supported and is the cleanest way to trap focus:

\`\`\`tsx
useEffect(() => {
  if (!open) return;
  const previouslyFocused = document.activeElement as HTMLElement;
  dialogRef.current?.focus();

  return () => {
    previouslyFocused?.focus();
  };
}, [open]);
\`\`\`

## Live Regions for Dynamic Content

When content updates without a page reload — a form submission confirmation, a cart count change, a toast notification — screen readers don't announce it unless you explicitly tell them to.

\`\`\`tsx
<div aria-live="polite" aria-atomic="true" className="sr-only">
  {statusMessage}
</div>
\`\`\`

\`aria-live="polite"\` waits for the user to finish their current interaction before announcing. \`aria-live="assertive"\` interrupts immediately — use only for genuine errors or time-sensitive information.

## The sr-only Utility

Some content should be available to screen readers but not visible. A classic example: icon-only buttons need a text label that assistive technology can read.

\`\`\`css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
\`\`\``,
  },
  {
    slug: "performance-as-accessibility",
    title: "Performance is an Accessibility Issue",
    excerpt:
      "Slow sites exclude users on low-end devices and slow networks. Performance work is inclusion work.",
    date: "2025-07-14",
    readingTime: "4 min read",
    content: `When we talk about web accessibility, we usually mean disability-related access needs. Screen readers, keyboard navigation, color contrast. These matter enormously. But there is another dimension of accessibility that gets less attention: performance.

## Who Slow Websites Exclude

A user on a flagship phone with a 5G connection in a major city experiences the web very differently from a user on a three-year-old mid-range Android on a 3G network in a rural area. Both are real users. Both deserve a usable experience.

The global average page load time on mobile is over 8 seconds. For users in emerging markets, that number is higher. For users with data caps, every kilobyte has a cost. Shipping a 2MB JavaScript bundle is not a neutral technical decision — it is a choice about who can use your product.

## The Core Web Vitals as Accessibility Metrics

Google's Core Web Vitals measure three things: loading performance (LCP), interactivity (INP), and visual stability (CLS). Each of these has an accessibility dimension.

**LCP** — a slow LCP means the main content isn't visible for seconds. For users with cognitive disabilities who need to orient quickly, this creates unnecessary cognitive load.

**INP** — high interaction delay means the UI feels broken. For users with motor disabilities who use switch access or other assistive technology, an unresponsive interface is actively unusable.

**CLS** — layout shifts cause users to lose their place or accidentally activate the wrong element. For users with motor disabilities, activating the wrong element can require significant effort to undo.

## Practical Steps

Audit your JavaScript bundle. Remove unused dependencies. Lazy-load below-the-fold content. Compress images. Use a CDN. These are not advanced optimizations — they are basic hygiene that disproportionately helps your most constrained users.

\`\`\`ts
// Before: loads entire library upfront
import { format } from 'date-fns';

// After: dynamic import, loads only when needed
const { format } = await import('date-fns');
\`\`\`

Performance work and accessibility work serve the same goal: making your product usable by the broadest possible range of people. They should be treated as one practice.`,
  },
  {
    slug: "aria-labels-and-descriptions",
    title: "ARIA Labels and Descriptions: When to Use Which",
    excerpt:
      "aria-label, aria-labelledby, aria-describedby — they all add accessible names but serve different purposes.",
    date: "2025-06-22",
    readingTime: "4 min read",
    content: `ARIA has three attributes for adding accessible names and descriptions to elements: \`aria-label\`, \`aria-labelledby\`, and \`aria-describedby\`. They're often used interchangeably, but they mean different things and screen readers present them differently.

## aria-label

Provides an accessible name directly as a string. Use when there's no visible text to reference and you can't add visible text for design reasons.

\`\`\`html
<button aria-label="Close dialog">
  <svg>...</svg>
</button>
\`\`\`

The string replaces what the element would normally be called. Screen readers announce "Close dialog, button" instead of just "button".

## aria-labelledby

References another element's text as the accessible name. Use when there is visible text that should serve as the label.

\`\`\`html
<h2 id="billing-heading">Billing address</h2>
<section aria-labelledby="billing-heading">
  ...
</section>
\`\`\`

This is stronger than \`aria-label\` for two reasons: the label is visible (so sighted users and screen reader users get the same information), and it stays in sync automatically when the referenced element's text changes.

## aria-describedby

Provides supplementary information — a description, not a name. Screen readers announce it after the element's name and role, often after a pause.

\`\`\`html
<input
  id="email"
  type="email"
  aria-describedby="email-hint"
/>
<p id="email-hint">We'll never share your email with anyone.</p>
\`\`\`

Use \`aria-describedby\` for hint text, error messages, and additional context. Use \`aria-labelledby\` or a \`<label>\` for the primary name.

## The Priority Order

When multiple naming mechanisms are present, browsers follow a priority order: \`aria-labelledby\` > \`aria-label\` > native semantics (like \`<label>\`) > \`title\` attribute. Understanding this prevents surprises where your label is silently overridden.

The default should always be a visible \`<label>\` element with a \`for\` attribute. ARIA is for situations where that's not possible.`,
  },
];

export default blogs;
