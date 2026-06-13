# Components

Pattern library. Each entry shows the anatomy, usage rules, and which files implement it.

---

## Card

Used for project previews (`ProjectCard`) and blog previews (`BlogCard`). Identical structure — the only difference is the presence of a tech stack row in project cards.

**Anatomy**

```
<Link href={...}>                          group — hover state propagates to children
  <article>                                marching-ants, p-8, flex-col, gap-5, min-h-280
    [Index]    absolute top-4 right-6      aria-hidden, opacity 5%, font-heading 6rem thin
    [Meta]     font-mono label scale       date · reading-time  /  year · role  (uppercase)
    [Title]    font-heading 2rem light     group-hover:translate-x-1, duration-300
    [Body]     font-mono ui scale muted    excerpt / description — mt-auto (pushes CTA down)
    [Stack]    font-mono 0.75rem faint     tech · separated (projects only)
    [CTA]      arrow-cta utility           "View case study →"  /  "Read article →"
  </article>
</Link>
```

**Rules**
- All six zones are required. Never omit the index number or the CTA arrow.
- The index number is always `aria-hidden="true"` — it is decorative, not informational.
- `mt-auto` on the body text pushes the stack and CTA to the bottom regardless of content length, keeping all cards in a row visually aligned.
- Hover border draws in via `marching-ants` on the `<article>` element.

**Files:** `components/Blog/BlogCard.tsx`, `components/Projects/ProjectCard.tsx`

---

## Section

Used for the Work and Writing sections on the home page, and replicated as the header of `/work` and `/blog` index pages.

**Anatomy**

```
<section>                                  w-[90vw] mx-auto py-24 px-4
  <div>                                    flex justify-between mb-3
    <span>  "Work" / "Writing"             font-mono xs faint uppercase tracking-[0.15em]
    <span>  "12 projects"                  font-mono xs faint
  <hr>                                     thin-rule mb-10
  <div>                                    flex justify-between items-end mb-16 flex-wrap
    <h2>    "Things I have made"           font-heading 3rem light / 2rem mobile
    <Link>  "Show all →"                   CTA link pattern
  <div>                                    grid grid-cols-3 gap-px bg-border (responsive)
    <Card /> × n
```

**Rules**
- Always include both the label row and the rule. The label + rule + heading trio is the signature pattern of the system.
- "Show all →" is only shown when the grid is a preview (≤ 3 items). On the full index page, it is omitted.
- Grid uses `gap-px bg-border` — not individual card borders. This creates consistent 1px separators.

**Files:** `components/Projects/Projects.tsx`, `components/Blog/Blog.tsx`, `app/work/page.tsx`, `app/blog/page.tsx`

---

## Nav

Global navigation bar. Fixed to the top. Transparent over the hero, gains background and border after 60px of scroll.

**Anatomy**

```
<nav>                         fixed top-0 z-40, transparent → bg-bg border-b on scroll
  <div>                       w-[90vw] mx-auto px-4 h-14 flex items-center justify-between
    <Link>  "VKG"             Logo pill: px-3 h-9 border rounded-full font-mono text-sm
    <div>                     flex items-center gap-6
      <Link> × 4              font-mono text-sm text-ink-muted hover:text-ink — hidden on mobile
      <button>  ☀/🌙          16×16 SVG, aria-label updates with state
```

**Rules**
- Logo is always a pill (rounded-full + border). Never a plain text link or an image.
- Nav links are hidden on mobile (`hidden sm:block`). The logo remains visible — it is the only nav element on small screens.
- Theme toggle uses SVG icons only — never text labels.
- The scroll threshold is 60px, matching roughly one viewport unit of scroll engagement.

**Files:** `components/Nav/Nav.tsx`

---

## Hero (Header)

Full-viewport section. Flex column, space-between — three zones: availability badge (top), name + bio (middle), social links + scroll cue (bottom).

**Anatomy**

```
<header>                      relative min-h-screen w-[90vw] mx-auto pt-24 pb-8 px-4
                              flex flex-col justify-between

  [Top]                       self-end — availability badge
    <span>  pulse-dot
    <span>  "Available for work"  font-mono xs faint

  [Middle]                    flex-1 flex flex-col justify-center py-16
    <h1>    Name              fluid-name font-heading font-normal
    <hr>                      thin-rule my-6
    <div>                     flex justify-between — role left, location right
    <p>     Bio               font-heading 1.375rem light max-w-[560px]

  [Bottom]                    flex items-end justify-between
    <nav>   Social links      Email | GitHub | LinkedIn — icons + labels
    <ScrollCue />
```

**Rules**
- The hero is always full-viewport height (`min-h-screen`). Never shorter.
- Name uses the `fluid-name` utility — never a fixed font size.
- The thin rule between name and role is mandatory — it is the visual beat that separates identity from function.
- Social links use inline SVG icons (not CDN images) with visible text labels for accessibility.

**Files:** `components/Header/Header.tsx`, `components/ScrollCue/ScrollCue.tsx`

---

## CTA Link

The standard interactive text link used throughout the site.

```html
<a class="font-mono text-sm text-ink border-b border-border pb-px hover:opacity-50 transition-opacity">
  Label →
</a>
```

**Rules**
- Hover interaction is always **opacity fade** (1 → 0.5). Never a colour change.
- Underline is a 1px `border-bottom` using the border token — not `text-decoration`.
- `pb-px` creates a 1px gap between text baseline and the underline.
- Arrow (`→`) is appended inline as text, never as an SVG or pseudo-element.
- For "Show all" and "Resume →" style CTAs, use the same pattern at `text-sm`.

---

## Rule

```html
<hr class="thin-rule" />
```

```css
@utility thin-rule {
  border: none;
  border-top: 1px solid var(--color-border);
}
```

Rules appear in exactly three contexts:
1. Above section headings (between label row and heading)
2. In the hero — between the name and the role/location row
3. In the footer — above the hire CTA section, and above the copyright bar

**Never** use a thick rule, a coloured rule, or a decorative divider. One weight, one colour.

---

## Prose (`prose-editorial`)

Applied to rendered Markdown in blog posts and work case studies via `dangerouslySetInnerHTML`.

```html
<article class="prose-editorial">
  <!-- rendered HTML from marked.parse() -->
</article>
```

Defined as a CSS class (not a Tailwind utility) because it must style descendant elements. Full element coverage in `app/globals.css`: `h2`, `h3`, `h4`, `p`, `ul` (em-dash bullets), `ol`, `li`, `blockquote`, `pre`, `code`, `a`, `strong`, `hr`.

See `typography.md` for the full specification.

**Files:** `app/blog/[slug]/page.tsx`, `app/work/[slug]/page.tsx`, `app/globals.css`

---

## Footer

Two zones: hire CTA section and bottom bar.

**Anatomy**

```
<footer>                      w-[90vw] mx-auto py-24 px-4

  [Hire section]              mb-16
    <hr>                      thin-rule mb-12
    <div>                     flex items-end justify-between flex-wrap
      <p>  "Interested in hiring?"   font-heading 3.5rem light / 2.25rem mobile
      <Link>  "Resume →"             CTA link pattern

  [Bottom bar]
    <hr>                      thin-rule mb-8
    <div>                     flex justify-end
      <p>  "© 2026 Vinay Kumar Gupta"   font-mono xs faint
```

**Files:** `components/Footer/Footer.tsx`

---

## FadeIn

Wrapper component for scroll-triggered fade-in animation.

```tsx
<FadeIn delay={0}>      {/* default — triggers immediately on intersection */}
<FadeIn delay={100}>    {/* 100ms stagger offset */}
```

Uses `IntersectionObserver` with 10% threshold. Sets `data-visible="true"` on the wrapper div, which activates the `fade-in` CSS utility:

```css
@utility fade-in {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 500ms ease-out, transform 500ms ease-out;

  &[data-visible="true"] {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Observer disconnects after first trigger — elements only animate in once, never out.

**Files:** `components/FadeIn/FadeIn.tsx`
