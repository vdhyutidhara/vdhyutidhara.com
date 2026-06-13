# Spacing

One unit: **8px**. Every spacing value in the system is a multiple of it. This creates a vertical and horizontal rhythm that the eye reads as calm and intentional — even without noticing why.

## The 90vw rule

Every top-level container uses the same pattern:

```html
<div class="w-[90vw] mx-auto px-4">
```

The `5vw` margin on each side scales with the viewport. At 1440px, that's 72px of breathing room. On mobile at 375px, it's 19px — tight but readable. `px-4` adds an inner 16px guard against the browser's minimum margin. **Never use a fixed pixel margin at the page level.**

## Vertical rhythm

The page has a defined rhythm for section breaks. Every section follows this pattern from top to bottom:

```
Section padding top       py-24    (6rem — 96px at 18px base)
  Label row               mb-3     (0.75rem)
  Thin rule               mb-10    (2.5rem)
  Heading + Show-all row  mb-16    (4rem)
  Card grid
Section padding bottom    py-24
```

For detail pages (resume, blog post, work case study):

```
Page padding top/bottom   py-16    (4rem)
  Back link
  mt-12                            (3rem gap before page header)
  Page header             mb-16    (4rem below header)
  Content sections        space-y-16 between sections
    Section heading        mb-8    (2rem)
    Section items          space-y-10 or space-y-6
```

## Card anatomy

```
article padding            p-8       (2rem — all sides)
Internal element gap       gap-5     (1.25rem)
Minimum card height        280px
Decorative index number    absolute, top-4 right-6
```

## Grid patterns

### Card grids (3-column)

```css
grid grid-cols-3 gap-px bg-border
max-lg:grid-cols-2
max-sm:grid-cols-1
```

The `gap-px bg-border` technique creates 1px visual separators between cards using the gap background colour — not individual card borders. This means the grid lines are consistent regardless of card height or content.

### Data grids (resume, uses)

```css
/* Experience / Education */
grid grid-cols-[1fr_auto] gap-x-8 gap-y-1
max-sm:grid-cols-1

/* Uses page items */
grid grid-cols-[200px_1fr] gap-8
max-sm:grid-cols-1
```

## Rules

**Never use padding to simulate a border.**

- Grid separators → `gap-px bg-border`
- Horizontal rules → `<hr class="thin-rule" />` (`border-top: 1px solid var(--color-border)`)
- Individual card hover borders → `marching-ants` utility (CSS pseudo-elements)

## Nav offset

The fixed nav is `h-14` (3.5rem / 56px). The hero header uses `pt-24` (6rem) to clear the nav height with generous breathing room above the availability badge.
