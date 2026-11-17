# FALU website: design system

The single reference for how falu.com looks and reads. Tokens come from the FALU design system (Claude artifact "FALU", applied in commit 16922b8) and live as CSS variables at the top of `styles/falu.css`. Components use the variable names, never raw values.

Supersedes `BRAND_RULES.md` and `design-system/` (Inter, JetBrains Mono, red buttons, navy `#002e5b`), which describe the June version of the site.

## Shared FALU core (with PMAS)

The machinery site and the PMAS site (pmas.falu.com, `pmas-website/DESIGN.md`) are one family. These rules are the same on both; change them in both files together.

| Rule | Value |
|---|---|
| Brand blue | `#0e2a53` (`--falu-blue`) |
| Dark surface for anything digital | `#06182b` (`--board`) |
| Red | `#ec1c24`, a signal only: it marks the one thing that matters in a view, never decoration. On PMAS it means a machine error |
| Text and labels | Archivo |
| Figures, machine codes, spec values, timestamps | JetBrains Mono with tabular numerals (`.data`, `--font-data`) |
| Corner radius | 4 / 8 / 12 (`--radius-sm`, `--radius`, `--radius-lg`) |
| Copy | English, factual, numbers over adjectives, no en or em dashes, no eyebrows, no unbacked superlatives |
| Cross-links | PMAS in this site's main nav and footer; the FALU logo in the PMAS footer |

Deliberately different: this site is light, left aligned and without motion (a datasheet); PMAS is mostly dark, centers section headlines and uses functional motion (a wallboard).

## Reader and job

- **Reader:** procurement engineers, production managers and plant directors buying capital equipment that runs for 30+ years.
- **Job of every page:** show the machine and its figures, then lead to one action: request a quotation.
- **Feeling:** a Swiss engineering datasheet. Precise, reserved, specific. Datasheet first, marketing second.

## Color

Light theme only. One blue carries the structure, one red marks a single point per view.

| Token | Value | Role |
|---|---|---|
| `--falu-blue` | `#0e2a53` | Primary buttons, blue bands, footer, active nav |
| `--falu-blue-hover` | `#1a3a6b` | Hover and pressed state of blue buttons |
| `--falu-red` | `#ec1c24` | A signal, never decoration: the logo, the current machine in a line diagram, the country under the pointer on the map. At most one red emphasis per view, as a shape or 24px+ bold text |
| `--ink` | `#0e2a53` | Headings and body text. Text is blue, never black |
| `--muted` | `#5b6b80` | Captions, labels, secondary text (5.4:1 on white) |
| `--line` | `#d9dee5` | Hairlines, borders, dividers |
| `--surface` | `#ffffff` | Page background |
| `--surface-tint` | `#f3f5f8` | Alternate bands, image placeholders, table headers |
| `--on-blue` | `#ffffff` | Text and lines on blue |
| `--on-blue-muted` | `#a9b6c8` | Secondary text on blue (6.9:1) |
| `--on-blue-line` | `#2e4262` | Hairlines and arrows on blue |
| `--on-blue-fill` | white at 4% | Quiet panels on blue (line diagrams) |
| `--overlay` | blue at 85% | Caption chips and video controls over media |
| `--overlay-light` | white at 85% | Caption chips over light placeholders |
| `--board` | `#06182b` | Shared with PMAS: dark surface for digital product sections (not used yet) |

Rules:
- No red text on blue, no blue text on red, no red buttons (white on the logo red is 4.4:1, under AA for 14px labels).
- No gradients between brand colors. The only overlay allowed is `--scrim` on photos, to keep white hero text at 4.5:1.
- Components use only these tokens. White text is `--on-blue`, white backgrounds are `--surface`.

## Typography

Archivo (400, 500, 600, 700) for headlines, text and labels; labels that line up use tabular numerals (`.mono`, still Archivo). JetBrains Mono (400 to 600) only for data: figures, machine codes (CB1 4.1, SV-2X), spec table values, timestamps and file sizes (`.data`). Never for labels or running text. Headings are left aligned statements in sentence case.

| Token | Size / line height | Phone | Use |
|---|---|---|---|
| `--fs-display` | 80 / 1.0, -0.035em | 40 to 56 | Hero headline of the home and company pages |
| `--fs-xxl` | 56 / 1.05, -0.03em | 32 to 48 | Machine page h1, large section statements |
| `--fs-xl` | 44 / 1.1, -0.025em | 28 to 36 | Section headlines (h2 default) |
| `--fs-l` | 28 / 1.15 | 24 | Sub-section titles, large figures |
| `--fs-m` | 22 / 1.25 | 20 | Card and row titles (h3 default) |
| `--fs-lead` | 18 / 1.55 | 18 | Lede under a headline |
| `--fs-body` | 16 / 1.55 | 16 | Running text, never smaller |
| `--fs-ui` | 14 / 1.4 | 14 | Nav, buttons, table cells |
| `--fs-label` | 13 / 1.3 | 13 | Labels under figures, captions, footer |

Nine sizes, nothing in between. Weights: 700 headlines, 600 labels and buttons, 400 text. Components set sizes as `fontSize: "var(--fs-xl)"`, never as numbers; the large tokens shrink on phones by themselves. Body lines stay under 75 characters (`max-width: 64ch`, class `.measure`).

## Spacing and layout

- 8px base. Scale: `--space-half` 4, `--space-1` 8, `--space-1-5` 12, `--space-2` 16, `--space-3` 24, `--space-4` 32, `--space-6` 48, `--space-8` 64, `--space-12` 96. The 4 and 12 steps are for tight UI (chips, label gaps).
- Sections: `--section-y`, 96px vertical on desktop, 64px under 760px. Every section uses it; no section sets its own px padding.
- Large cards and panels: `--card-pad`, 48px on desktop, 24px on phones.
- Container: 1280px max, 32px gutter (20px on phones).
- Grids: two columns for text and image (text 1fr, image 1.2fr), four for figures. Rows alternate image side; nothing is centered except the final CTA band.

## Shape and depth

- Radius scale, shared with PMAS:
  - `--radius-sm` 4px: chips, tooltips, small controls.
  - `--radius` 8px: buttons, inputs, cards, tables, hairline grids, dropdowns, the burger button.
  - `--radius-lg` 12px: images, video, the map, large panels.
- Square: full-width bands and sections, table rows, list rows. The datasheet character lives there.
- A box that holds other boxes clips them (`overflow: hidden`) and sets `--slot-radius: 0px`, so an image inside a card is not rounded twice.
- Hairline grids (cells sharing lines) get a full border and radius on the wrapper; cells carry right and bottom lines and `margin: 0 -1px -1px 0` so the outer lines tuck under the wrapper's border.
- No shadows on the page. Separation comes from hairlines (`1px solid var(--line)`) and tinted bands. Floating UI only (dropdowns, tooltips) gets `--shadow-float`.

## Components

**Buttons** (`.btn`, 14px / 600, padding 12px 20px; `--lg` 16px text, padding 16px 28px):
- `--primary`: blue fill, white label. One per view.
- `--ghost`: blue 1px outline on light backgrounds.
- `--ghost-inverse`: light outline and white label on blue bands (the phone number next to a white button).
- `--minimal`: a text link with a 1px underline drawn as an inset shadow, square, for "View CB1 specification" style links.
- `--inverse`: white fill, blue label, only on blue bands.
- Hover, the same everywhere: filled buttons shift their fill one step (`--falu-blue-hover`, `--surface-tint`), outline buttons get a faint fill (`--hover-fill`, `--on-blue-hover-fill`), text links thicken the underline to 2px, and the arrow moves 3px right. 120ms ease. A hover never changes size, border width or padding, so nothing on the page moves.
- Focus: 2px blue outline, 2px offset (white on blue bands). Disabled: `--muted` label, `--line` border, no hover.
- Labels name the destination. One primary action across the site: **Request a quotation**. Secondary: **Browse machinery**, or the phone number. No "Learn more".

**Navigation:** sticky white header, 84px (68px on phones), hairline below. Machinery · Services · About · Careers · PMAS (links to pmas.falu.com). Phone and the primary button on the right; on phones the primary button stays visible next to the burger.

**Figures:** a large number in `--fs-l` or `--fs-xl`, set in `.data`, with a `--fs-label` caption below. Swiss separators: `3'100`, `1'000`. Units tight: `3'100/min`.

**Cards and rows:** no fill on white pages, `--surface-tint` fill on white when they need grouping, hairline between list items. Never three identical cards in a row as decoration.

**Footer:** blue band, four columns, `--fs-label` text in `--on-blue-muted`, legal line with UID.

## Imagery and icons

- Real machine and factory photography only: machines at 3/4 front, details close up, the Rüti floor wide. No stock, no illustrations of people, no renders that are not a FALU machine.
- Hero photo uses `--scrim` from the bottom so the headline passes 4.5:1.
- Placeholders until the shoot: a flat `--surface-tint` block with the photo brief as caption. Slot codes (`HOME-01`) and stripes show only in development builds.
- The world map colors only countries with installations, listed in `FALU_COUNTRIES` (`components/HomepageB.jsx`, 74 countries), in `--on-blue-muted`; the country under the pointer turns red. The "70+" figure in the copy must stay true to that list; change both together.
- Icons: none decorative. A thin arrow on links and buttons; 1.5px stroke icons at 16px for download and external links only.

## Copy

- English, factual, engineering led. Short declarative sentences, numbers over adjectives.
- Never an en dash or em dash. Use a colon, comma, new sentence, or "to" for ranges.
- No eyebrows above headlines. Labels in sentence case, no all caps, no wide tracking.
- No index numbering as decoration: no "01" to "04", "A" to "D", "S-01", "F · 01", "Phase 01" or "Step 01" above titles. Order on the page already shows a sequence. Numbers appear only where they are facts (figures, machine codes) or where the reader must refer to them.
- "Machinery", never "Solutions". Production planning is a service, kept apart from the three machinery families.
- Claims need a source on the page: "market leader" or "lowest total cost of ownership" only next to the figure that backs them. No invented customers, counts or certifications.

## Page basics

- Every route sets its own title ("Cotton swab machinery · FALU") and meta description: static pages in `PAGE_META` in `components/FaluRouter.jsx`, machine pages from `code`, `name` and `lede` in `machines-data.jsx`. A new route gets an entry there.
- `index.html` holds the home defaults for crawlers without JavaScript, the share image `public/og-image.png` (1200 × 630, logo and headline on falu-blue; replace with a machine photo once one exists) and 32px and 180px icons.
- The Open Graph URLs are absolute and point at the GitHub Pages host; change them when the site moves to falu.com.
