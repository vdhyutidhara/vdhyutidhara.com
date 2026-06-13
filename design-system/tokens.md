# Tokens

Complete reference for every design token. All tokens are CSS custom properties defined in `app/globals.css` and aliased into Tailwind via the `@theme` block.

## Typography tokens

```
--font-heading   Ogg Roman, serif         Display use — variable weight 100–400
--font-mono      Apercu Mono, monospace   All functional copy — weight 400 only
```

Tailwind utilities: `font-heading`, `font-mono`

## Type scale

HTML base font size is `112.5%` (18px). All rem values are relative to this.

| Name | Size | Line height | Tracking | Notes |
|------|------|-------------|----------|-------|
| `display` | `clamp(2.5rem, 8.5vw, 7rem)` | `0.95` | `-0.02em` | Hero name only |
| `title` | `3rem` / `2rem` mobile | `1.25` | — | Page/section headings |
| `heading` | `1.75rem` | `1.3` | — | Sub-section headings |
| `subhead` | `1.375rem` | `1.375` | — | Hero bio, intro paragraphs |
| `body` | `0.875rem` | `1.8` | — | Prose articles only |
| `ui` | `0.875rem` | `1.5` | — | All interface copy |
| `meta` | `0.75rem` | `1.5` | `0.15em` | Dates, reading time, counts — uppercase |
| `label` | `0.7rem` | `1.5` | `wide` | Card metadata, section labels — uppercase |

## Spacing scale

One unit: **8px**. Every spacing value is a multiple of it.

| Token | rem | px | Tailwind |
|-------|-----|----|---------|
| `space-1` | `0.25rem` | 4px | `gap-1`, `p-1` |
| `space-2` | `0.5rem` | 8px | `gap-2`, `p-2` |
| `space-3` | `0.75rem` | 12px | `gap-3`, `mb-3` |
| `space-4` | `1rem` | 16px | `gap-4`, `px-4` |
| `space-5` | `1.25rem` | 20px | `gap-5` |
| `space-6` | `1.5rem` | 24px | `gap-6` |
| `space-8` | `2rem` | 32px | `p-8`, `gap-8` |
| `space-10` | `2.5rem` | 40px | `mb-10`, `mt-10` |
| `space-12` | `3rem` | 48px | `mb-12` |
| `space-16` | `4rem` | 64px | `py-16`, `mb-16` |
| `space-24` | `6rem` | 96px | `py-24`, `pt-24` |

## Motion tokens

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | `150ms` | Hover: opacity, color |
| `duration-normal` | `300ms` | Hover: transform, position |
| `duration-slow` | `500ms` | Scroll reveal (fade-in) |
| `duration-border` | `350ms` | Corner-draw border animation |
| `duration-pulse` | `2400ms` | Availability dot loop |
| `duration-bounce` | `1600ms` | Scroll cue bounce loop |
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Enter and exit |
| `ease-in-out` | `ease-in-out` | Loops and pulses |

## Container tokens

| Name | Value | Used on |
|------|-------|---------|
| `main-width` | `w-[90vw] mx-auto px-4` | All top-level sections |
| `prose-width` | `w-[90vw] max-w-[720px] mx-auto px-4` | Articles, resume, uses, not-found |
| `bio-width` | `max-w-[560px]` | Hero bio paragraph |
| `nav-height` | `h-14` (3.5rem) | Nav bar — used for `pt-24` offset in hero |

## Breakpoints

| Name | Value | Effect |
|------|-------|--------|
| `sm` | `640px` | Nav links become visible (`hidden sm:block`) |
| `lg` | `1024px` | Card grid collapses 3→2 columns (`max-lg:grid-cols-2`) |
| `sm` (max) | `< 640px` | Grid goes to 1 column, headings shrink, flex stacks vertically |

## Colour tokens

See `color.md` for full contrast matrix. Tailwind utilities: `text-ink`, `text-ink-muted`, `text-ink-faint`, `bg-bg`, `bg-surface`, `border-border`.
