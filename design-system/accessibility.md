# Accessibility

This portfolio is the work of an **Inclusive Software Engineer**. The accessibility of the site itself is a demonstration of the values it describes.

## The six rules

Every design and engineering decision on this site is evaluated against these six rules:

1. **Every interactive element is reachable by keyboard** and has a visible focus indicator
2. **Every meaningful image has descriptive alt text**; decorative images use `alt=""`
3. **Color is never the only way information is conveyed** — text or shape always accompanies it
4. **Motion can be disabled** — no information is lost when all animation is removed
5. **Reading order matches visual order** — the DOM sequence is the logical sequence
6. **Text has sufficient contrast** in both light and dark modes — WCAG AA at minimum

## WCAG 2.1 AA targets

| Token | Value | Contrast vs bg | Level | Use |
|-------|-------|---------------|-------|-----|
| `--color-ink` | `#111111` | 18.1:1 | **AAA** | Primary text |
| `--color-ink-muted` | `#444444` | 9.7:1 | **AAA** | Body / UI copy |
| `--color-ink-faint` | `#666666` | 5.74:1 | **AA** | Metadata only (≥ 18px) |

> `--color-ink-faint` at 5.74:1 meets AA only for **large text** (≥ 18px normal or ≥ 14px bold at 18px base). Never use it for body copy or any text below this threshold.

Dark mode contrast ratios: `#ededed` (17.2:1), `#bbbbbb` (11.1:1), `#888888` (5.9:1) — same structure, same rules.

## What is implemented

### Semantic HTML
- `<header>` — hero and page headers
- `<nav>` — global navigation bar, social links (with `aria-label="Social links"`)
- `<main>` — wraps Projects and Blog sections on the home page
- `<section>` — thematic groupings with descriptive headings
- `<article>` — card components, blog post content, work case study content
- `<footer>` — site footer

### ARIA
- `aria-hidden="true"` on all decorative elements: large index numbers, the 404 digit, pipe separators, decorative SVGs, the scroll cue
- `aria-label` on the nav landmark and the theme toggle button
- `aria-label` updates dynamically on the theme toggle to reflect the current state

### Keyboard accessibility
- All interactive elements use native `<a>` and `<button>` elements — keyboard access is built-in
- No `tabindex` manipulation except where intentional (e.g., `tabIndex={-1}` for programmatic focus)
- Theme toggle and nav links are all natively focusable

### Dark / light mode
- Theme is set synchronously before first paint (inline `<script>` in `<head>`) — no flash of wrong theme
- Preference is persisted in `localStorage` and falls back to `prefers-color-scheme`

### Logical reading order
- DOM order matches visual order on all pages — no CSS-only reordering that would confuse screen readers

## Known gaps (flagged for next iteration)

### 1. Skip link — missing
Keyboard users must Tab through the entire nav (4 links + theme toggle) on every page load before reaching main content. A skip link should be the first focusable element:

```tsx
<a href="#main-content" className="sr-only focus:not-sr-only ...">
  Skip to main content
</a>
```

### 2. `prefers-reduced-motion` — not implemented at global level
All animations run regardless of the user's OS motion preference. The fix is a single rule in `globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 3. Custom focus indicator — relies on browser default
The browser's default `:focus-visible` ring is present but unstyled. For full design control and guaranteed visibility across browsers:

```css
:focus-visible {
  outline: 2px solid var(--color-ink);
  outline-offset: 3px;
  border-radius: 2px;
}
```

### 4. No `aria-live` regions
Dynamic content (theme changes, any future toasts or form submissions) is not announced to screen readers. Status messages should use:

```html
<div role="status" aria-live="polite" aria-atomic="true" class="sr-only">
  {statusMessage}
</div>
```

### 5. Card grid keyboard navigation
Sighted keyboard users must Tab through every card in sequence. Arrow key navigation within the grid would significantly reduce interaction cost. Requires a roving `tabindex` implementation.

## Testing checklist

Run before every deploy:

- [ ] Tab through every page without a mouse — can all primary actions be completed?
- [ ] Test with VoiceOver on Safari (macOS) — reading order correct? Dynamic content announced?
- [ ] Test at 200% browser zoom — no horizontal scroll, no broken layouts?
- [ ] Enable Windows High Contrast Mode (or `forced-colors: active`) — are borders and icons still visible?
- [ ] Run Lighthouse accessibility audit — target score ≥ 95
- [ ] Toggle OS `prefers-reduced-motion` setting — verify no layout shifts occur and UI remains usable

## The `sr-only` pattern

For content that should be available to screen readers but invisible visually:

```css
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
```

This is not currently in `globals.css` but should be added when skip links or live regions are implemented.
