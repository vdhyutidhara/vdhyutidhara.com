# Motion

## Principle

**Motion is a progressive enhancement. Content is fully usable with all animation disabled.**

This is not just a rule for `prefers-reduced-motion` users — it is the design philosophy. Stillness is the default state. Every animation reveals or confirms; none conceal or distract. If removing an animation breaks comprehension of the UI, the animation is doing too much work.

## Duration scale

| Name | Value | Usage |
|------|-------|-------|
| `duration-fast` | `150ms` | Hover: opacity fades, colour transitions |
| `duration-normal` | `300ms` | Hover: transforms, position changes |
| `duration-slow` | `500ms` | Scroll reveal (fade-in on intersection) |
| `duration-border` | `350ms` | Corner-draw border animation |
| `duration-pulse` | `2400ms` | Availability dot ring expansion loop |
| `duration-bounce` | `1600ms` | Scroll cue vertical bounce loop |

## Easing vocabulary

| Name | Value | Usage |
|------|-------|-------|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Enter and exit — feels natural |
| `ease-out` | `ease-out` | Elements decelerating to rest |
| `ease-in-out` | `ease-in-out` | Looping animations, pulses |
| `linear` | `linear` | Opacity-only transitions |

## Full animation inventory

| Pattern | Property | Duration | Easing | Trigger |
|---------|----------|----------|--------|---------|
| Link hover | `opacity` 1 → 0.5 | 150ms | linear | `:hover` |
| Icon hover | `color` → `--color-ink` | 150ms | linear | `:hover` |
| Card title slide | `translateX` 0 → 1px | 300ms | ease-out | group hover |
| Arrow reveal | `opacity` 0→1, `translateX` -4px→0 | 200ms | ease | group hover |
| Border corner-draw | `scaleX/Y` 0 → 1 | 350ms | ease-standard | `:hover` |
| Scroll fade-in | `opacity` 0→1, `translateY` 16px→0 | 500ms | ease-out | IntersectionObserver (10% threshold) |
| Nav bg reveal | `background-color`, `border-color` | 300ms | ease | `scrollY > 60px` |
| Scroll cue fade | `opacity` 1 → 0 | 500ms | ease | IntersectionObserver (sentinel at hero bottom) |
| Availability pulse | `box-shadow` ring expand/fade | 2400ms | ease-in-out | infinite loop |
| Scroll cue bounce | `translateY` 0 → 6px | 1600ms | ease-in-out | infinite loop |
| Stagger (page sections) | `fade-in` with delay offset | 500ms | ease-out | IntersectionObserver + delay prop |

## Keyframe catalogue

```css
/* Availability dot — expanding ring */
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5); }
  50%       { box-shadow: 0 0 0 5px rgba(34, 197, 94, 0); }
}

/* Scroll indicator — gentle vertical bounce */
@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(6px); }
}
```

## Hover pattern: corner-draw border (`marching-ants`)

Cards use a corner-draw border on hover — four pseudo-element edges that scale in from zero simultaneously:

```css
@utility marching-ants {
  position: relative;

  &::before {       /* top + bottom edges */
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    transform: scaleX(0);
    transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::after {        /* left + right edges */
    border-left: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
    transform: scaleY(0);
    transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::before { transform: scaleX(1); }
  &:hover::after  { transform: scaleY(1); }
}
```

## Hover pattern: arrow slide-in (`arrow-cta`)

CTA links have an arrow (`→`) that slides in from -4px on group hover:

```css
@utility arrow-cta {
  & .arrow {
    opacity: 0;
    transform: translateX(-4px);
    transition: opacity 200ms ease, transform 200ms ease;
  }
}

/* In JSX — triggered by parent group-hover via inline style or class */
```

## Staggered page reveals

The home page uses `FadeIn` with delay props to stagger section appearances:

```tsx
<FadeIn>             {/* Projects — 0ms delay */}
<FadeIn delay={100}> {/* Blog — 100ms delay */}
<FadeIn delay={150}> {/* Footer — 150ms delay */}
```

## Reduced-motion policy

**Currently flagged as a gap in the implementation.** The following should be added to `app/globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

This collapses all durations to near-zero system-wide. No per-component media queries needed. The content remains fully usable — no information is conveyed through motion alone.
