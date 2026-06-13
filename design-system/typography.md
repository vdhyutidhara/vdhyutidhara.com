# Typography

Two typefaces. One rule: **serif for what you feel, mono for what you do.**

## The typefaces

### Ogg Roman
A high-contrast display serif by Signal Type Foundry. Available in variable weight (100–400). Used exclusively for content the reader is meant to *linger on* — the name, section headings, article titles, card titles, the hero bio.

Ogg's contrast between thick and thin strokes gives text a warmth and presence that generic system fonts can't match. At display scale, it feels considered. At heading scale, it anchors sections with quiet authority.

### Apercu Mono
A geometric monospace by Colophon Foundry. Single weight (400). Used for everything the reader *acts on or scans* — navigation, labels, metadata, body prose, CTAs, captions, code.

Choosing mono for body copy is a deliberate register shift. Emotional content (serif) versus informational content (mono) creates a visual hierarchy that doesn't rely on size alone. It also means code blocks in articles feel native — the body is already monospace.

## Hierarchy

In strict priority order:

| Level | Role | Classes |
|-------|------|---------|
| 1 | Hero name | `font-heading font-normal fluid-name` |
| 2 | Page / section titles | `font-heading font-light text-[3rem] max-sm:text-[2rem]` |
| 3 | Card / article titles | `font-heading font-light text-[2rem] max-lg:text-[1.625rem]` |
| 4 | Hero bio / subheadings | `font-heading font-light text-[1.375rem] max-sm:text-[1.125rem]` |
| 5 | Resume sub-headings | `font-heading font-light text-[1.75rem]` |
| 6 | UI copy / descriptions | `font-mono text-sm text-ink-muted` |
| 7 | Body prose | `prose-editorial` class (font-mono, 0.875rem, line-height 1.8) |
| 8 | Labels / metadata | `font-mono text-[0.7rem] uppercase tracking-[0.15em] text-ink-faint` |
| 9 | CTAs / links | `font-mono text-sm border-b border-border` |

## Fluid name

The hero `h1` uses `clamp()` to fill the viewport width without JavaScript:

```css
@utility fluid-name {
  font-size: clamp(2.5rem, 8.5vw, 7rem);
  line-height: 0.95;
  letter-spacing: -0.02em;
}
```

Tight line-height (`0.95`) and negative tracking at this scale are correct — they compensate for the optical spacing that large type introduces. At smaller sizes, restore normal values.

## Forbidden combinations

- **Never** `font-heading font-bold` — light weight (300) only for all display use. Bold Ogg is never used.
- **Never** `font-mono` at heading scale — mono is functional, never monumental.
- **Never** mix `font-heading` and `font-mono` in the same line.
- **Never** use placeholder text as a form label — always a visible `<label>` element with a `for` attribute.
- **Never** use `text-ink-faint` for body copy — AA contrast at this value is only met for text ≥ 18px.

## Prose typography (`.prose-editorial`)

Applied to rendered Markdown content in blog posts and work case studies. Defined as a class (not a Tailwind utility) because it covers child elements.

```
Base       font-mono, 0.875rem, line-height 1.8, text-ink-muted
h2         font-heading, 1.75rem, font-light, text-ink, mt-12 mb-3
h3         font-heading, 1.375rem, font-light, text-ink, mt-10 mb-2
h4         font-mono, 0.75rem, uppercase, tracking-[0.12em], text-ink-faint, mt-8 mb-2
p          mb-6
ul         em-dash bullets (—), no default list-style, custom ::before
ol         decimal, padding-left 1.25rem
li         mb-2
blockquote border-left 1px border-color, padding-left 1.25rem, text-ink-faint
pre        bg-surface, border 1px, padding 1.5rem, font-size 0.75rem, line-height 1.7
code       font-mono (inherits)
a          border-bottom 1px, hover:opacity-50
strong     text-ink, font-weight 500
hr         border-top 1px border-color, my-10
```
