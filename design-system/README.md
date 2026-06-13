# Apercu Design System

> A monochrome, typographically-led design system for an inclusive software engineer's portfolio. Built on two typefaces, one spacing unit, and four principles: restraint, legibility, inclusion, and rhythm. There are no decorative colours, no illustrative elements, no gradients. What remains is intentional.

## Principles

1. **Restraint** — every element earns its place; nothing is added without removing something
2. **Legibility** — readability is never sacrificed for aesthetics; contrast and spacing are non-negotiable
3. **Inclusion** — all decisions are tested against WCAG AA minimum; motion is a progressive enhancement
4. **Rhythm** — consistent spacing and type scale create calm; the 8px grid is the heartbeat

## Why "Apercu"

Named after Apercu Mono — the monospace typeface that carries all functional copy on this site. The name also means *a brief survey or sketch* in French, which describes what a portfolio is: a curated glimpse, not a full account.

## How to read these docs

- Token notation: `--color-ink`, `--font-heading` — these are CSS custom properties defined in `app/globals.css`
- Tailwind notation: `text-ink`, `font-heading`, `bg-surface` — generated from the `@theme` block in `globals.css`
- Component refs: `[Card pattern]`, `[Section pattern]` — see `components.md`

## File index

| File | Contents |
|------|----------|
| `color.md` | Monochrome palette, contrast matrix, light/dark token values |
| `tokens.md` | Every design token — typography, spacing, motion, containers |
| `typography.md` | Type scale, font pairing rules, hierarchy, forbidden combinations |
| `spacing.md` | Spacing scale, layout grid, container rules, vertical rhythm |
| `motion.md` | Animation inventory, keyframe catalogue, reduced-motion policy |
| `components.md` | Pattern library: Card, Section, Nav, CTA, Rule, Prose |
| `accessibility.md` | Inclusion principles, WCAG targets, testing checklist, gaps |

## Tech stack context

- **Next.js 16** (App Router, static generation)
- **React 19** (Server Components by default)
- **TypeScript 6** (strict mode)
- **Tailwind 4** (CSS-first config via `@theme` block — no `tailwind.config.js`)
- **CSS custom properties** for runtime theming (light/dark swap via `data-theme` attribute)
- **Base font size**: `112.5%` on `<html>` (18px instead of 16px — all rem values scale up ~12%)
