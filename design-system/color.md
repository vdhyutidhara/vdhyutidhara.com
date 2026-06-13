# Color

Pure monochrome. No accent colour. Hierarchy is achieved entirely through type size, weight, and opacity. The single non-neutral element is the availability pulse dot (`#22c55e`) — one deliberate exception that conveys status, not decoration.

## Light mode

| Token | Value | Role | Contrast vs bg |
|-------|-------|------|---------------|
| `--color-bg` | `#ffffff` | Page background | — |
| `--color-surface` | `#f5f5f5` | Card / code block background | 1.05:1 |
| `--color-ink` | `#111111` | Primary text | **18.1:1 ✓ AAA** |
| `--color-ink-muted` | `#444444` | Secondary / body text | **9.7:1 ✓ AAA** |
| `--color-ink-faint` | `#666666` | Tertiary — metadata and labels only | **5.74:1 ✓ AA** |
| `--color-border` | `#000000` | Rules, borders, grid separators | — |
| `--color-stripe` | `rgba(0,0,0,0.2)` | Diagonal stripe pattern (decorative) | — |

## Dark mode (`[data-theme="dark"]`)

| Token | Value | Contrast vs `#0a0a0a` bg |
|-------|-------|--------------------------|
| `--color-bg` | `#0a0a0a` | — |
| `--color-surface` | `#1a1a1a` | — |
| `--color-ink` | `#ededed` | **17.2:1 ✓ AAA** |
| `--color-ink-muted` | `#bbbbbb` | **11.1:1 ✓ AAA** |
| `--color-ink-faint` | `#888888` | **5.9:1 ✓ AA** |
| `--color-border` | `#ededed` | — |
| `--color-stripe` | `rgba(255,255,255,0.15)` | — |

## Contrast rules

- `--color-ink-faint` passes AA at 5.74:1 — **but only for text ≥ 18px normal or ≥ 14px bold**. Never use it for body copy. Use only for metadata labels, captions, and decorative text.
- `--color-surface` is not intended for text backgrounds — its contrast against `--color-ink` is insufficient for body copy. Use only for code blocks and card backgrounds where no small text appears on the surface colour directly.
- All body copy must use `--color-ink-muted` or stronger.

## Theme switching

Themes are switched by setting `data-theme="light"` or `data-theme="dark"` on `<html>`. CSS custom properties update instantly — no JavaScript re-render.

```css
:root                  { --color-bg: #ffffff; --color-ink: #111111; }
[data-theme="dark"]    { --color-bg: #0a0a0a; --color-ink: #ededed; }
```

Theme preference is persisted in `localStorage` and falls back to `prefers-color-scheme`. An anti-flash inline `<script>` in `<head>` sets the attribute before first paint.

## The one exception

`#22c55e` (Tailwind `green-500`) is used exclusively for the availability pulse dot in the hero header. It is never used elsewhere. It conveys a binary status (available / not available) and is not the only indicator — the text "Available for work" accompanies it.
