# Vicinity — Design System

A design system distilled from **Vicinity**, a free mobile web app (PWA) for pilots.
It shows the latest **METAR/TAF** for every reporting station within 50nm on a map centered
on you, color-coded by **flight category**. Pilots open a link — no install, no app store —
and get instant situational awareness. Data comes from the free FAA Aviation Weather Center
API; radar from RainViewer. Monetization is a simple tip jar ("☕ Tip the dev").

The product is an **electronic-flight-bag (EFB) style** utility: a dark, dense, cockpit-friendly
interface built for glanceability and legibility in bright cabins and dark cockpits alike. It is
one focused product — a single-screen map/list app with a route planner, radar overlay, and
Zulu/local clock.

### Source
- **Codebase:** `wx-radius-web/` (mounted local folder). A single-file PWA — the entire app is
  `index.html` (~2000 lines: Leaflet map, METAR/TAF fetch + decode, route planner, radar). Plus
  `worker.js` / `server.js` (CORS proxies), `manifest.webmanifest`, `sw.js`, and the app icons.
- No Figma, no external component library. **This design system is reverse-engineered from the
  app's own CSS and markup** — every color, radius, size and shadow token is lifted verbatim from
  its `:root` and rules, so the system is a faithful codification, not an approximation.

---

## Content fundamentals

The voice is a **knowledgeable, safety-first co-pilot** — terse, practical, aviation-fluent, and
honest about limits. Never marketing-y.

- **Tone:** direct and functional. Copy is short and information-dense. Labels are single words or
  short phrases ("Route", "List", "Tag: ID", "Nearest IFR:"). No filler, no exclamation except
  genuine warnings.
- **Aviation vocabulary is used plainly, unglossed:** METAR, TAF, ATIS, VFR/MVFR/IFR/LIFR, Zulu,
  density altitude, ceiling, RMK. The audience is pilots; the app trusts them.
- **Person:** mostly impersonal/imperative ("Add at least two waypoints to plan a route.",
  "Tap to switch Zulu / local time"). Occasionally second person in hints. The dev refers to
  themselves only obliquely via the tip jar ("Tip the dev").
- **Casing:** Sentence case for messages and hints; UPPERCASE reserved for identifiers (ICAO ids),
  category codes, tags (METAR/TAF/ATIS) and micro-labels. Numbers use tabular figures.
- **Safety framing is explicit and non-negotiable.** The footer always carries
  *"Situational awareness only — not an official weather briefing."* Switching to local time throws
  a hard modal: *"⚠ Use extreme caution! … Aviation weather is normally read in Zulu — double-check
  before using."* Warnings lead with **⚠** and a red confirm button.
- **Emoji:** used only as **functional accents**, never decoration — **☕** on the tip button, **⚠**
  on caution dialogs. A stray **▸ / ▾ / ▴** marks expand/skip affordances. That's the whole set.
- **Units are first-class and switchable:** °C/°F, KT/MPH, nm, Zulu/local — the app never assumes,
  it lets the pilot choose and labels the active choice in amber.

Example strings (verbatim):
> "Airport id (e.g. JFK) or route: KJFK KORD KDEN"
> "Nearest IFR: KTEB 12 nm NW" · "No IFR in view" · "VFR flight not recommended"
> "Situational awareness only — not an official weather briefing."

---

## Visual foundations

**Overall vibe:** a dark aviation instrument. Deep near-black slate-blue surfaces, a single confident
blue accent, an amber caution channel, and the four flight-category colors doing the semantic heavy
lifting. Flat, high-contrast, dense. No gradients, no glassmorphism, no decoration for its own sake.

- **Color:** Layered dark surfaces `#0d1117` → `#11161f` → `#1c2430` with `#222c39` hairlines. One
  **accent blue `#2b6fff`** for actions/active states. **Amber `#ffb400`** for the tip jar, active
  unit toggles and caution. The semantic core is the **flight-category palette** — VFR green
  `#11a911`, MVFR blue `#2b6fff`, IFR red `#e0152b`, LIFR magenta `#d017d0` — applied to dots, pills,
  card accent bars and map markers. Raw data blocks get tinted type-tags (METAR blue, TAF violet,
  ATIS green). Timestamps highlight in orange `#ff9f1c`.
- **Type:** No webfonts. Native **system sans** (`-apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto…`) for all chrome; **monospace** (`ui-monospace, Menlo, Consolas…`) for raw METAR/TAF/ATIS
  strings and tabular numbers. Compact px scale (9–22px). Weight **800 is heavily used** for ids,
  pills, buttons and emphasis — the UI leans bold. Uppercase micro-labels carry `.04–.05em` tracking.
- **Spacing & density:** tight. The workhorse gap is 8px; panels pad 12px; gaps run 2–12px. Three
  control tiers: 24px (in-card), 32px (toggles/segments), 40px (input & primary buttons). Everything
  is compact for a phone in a cockpit.
- **Corner radii:** modest. 4px (tags), 5px (category pills), 6px (small buttons/inline segments),
  8px (buttons/inputs/toggles/segments), 10px (dropdown panels), 14px (modals & map popups), and a
  full **999px capsule** for the Zulu clock.
- **Borders:** ubiquitous 1px `#222c39` hairlines define every raised control and panel. Station list
  cards carry a **4px left border** in the flight-category color.
- **Shadows:** restrained and deep-but-soft on the dark ground. A subtle `inset 0 0 0 1px #ffffff0a`
  top-highlight on the clock; popups `0 6px 24px #0009`; settings panel `0 10px 30px #000a`; modals
  `0 12px 44px #000a`. Elevation is communicated more by surface lightness than by shadow.
- **Backgrounds:** solid dark fills only. The "imagery" is the **map** — a CARTO dark basemap with
  thin `#5d7088` country/state borders and colored station markers. No photography, no illustration,
  no textures or patterns.
- **Animation:** almost none — this is an instrument, not a showpiece. The single motion is a **pulse**
  on the "you" location marker (`scale(1)→scale(3.2)`, opacity fade, 1.8s ease-out infinite). No page
  transitions, no easing curves on controls.
- **States:** hover is subtle (`#ffffff14` wash on icon buttons where hover exists; the app is
  touch-first). **Press** nudges `translateY(1px)`. Active toggles fill accent-blue (or amber for unit
  switches). Disabled drops opacity.
- **Transparency & blur:** minimal. A `rgba(0,0,0,.6)` scrim behind modals; low-alpha fills for the
  radius circle (`#2b6fff` at 6%) and route corridor (`#ffd23f` at 7%). No backdrop blur.
- **Cards:** flat dark `#11161f` panels separated by hairlines, distinguished by a **4px category
  color bar** on the left — not by rounding or shadow. Dense, list-style, tap-to-expand.

---

## Iconography

- **System:** hand-tuned **inline SVG line icons**, drawn in `currentColor` with `fill="none"`,
  **1.6–2px** strokes and round caps/joins on a `0 0 24 24` viewBox. There is **no icon font and no
  raster icon set** — each icon is authored inline where it's used.
- **The set is small and purpose-built:** a settings **gear** (sw 1.8), a **GPS crosshair** "find me"
  (sw 2, round caps), a **radar** sweep (sw 1.6), and the dynamically-drawn **wind barb** (rotated to
  wind direction, with 50/10/5-kt barbs). Map markers are CSS circles (`.pin`), not icons.
- **Emoji as functional glyphs only:** **☕** (tip), **⚠** (caution). Unicode triangles **▸ ▾ ▴** mark
  skip/expand affordances. Nothing decorative.
- **In this system:** the exact SVG markup is preserved in `guidelines/brand-iconography.card.html`;
  reuse those paths rather than redrawing. Copy them from there when building screens.

### Assets
- `assets/icon-192.png`, `assets/icon-512.png`, `assets/icon-1024.png` — the app mark (the only brand
  imagery the source provides): a blue radar ring with crosshair ticks over a green station dot and a
  white wind barb.
- **No wordmark/logotype exists** in the source. Render the brand name as **"Vicinity"** in bold
  system sans wherever a logotype would go (as the app's `<h1>` does).

---

## Index / manifest

**Root**
- `styles.css` — global entry point (imports only). Consumers link this.
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` — the token layer.
- `readme.md` — this file. `SKILL.md` — Agent-Skills wrapper.
- `assets/` — app icons.

**Foundation cards** (`guidelines/*.card.html`) — Colors (Flight Categories, Surfaces & Text, Accent
& Amber, Data-type Inks), Type (Font Families, Type Scale, Raw Data Specimen), Spacing (Corner Radii,
Spacing & Control Heights, Elevation & Shadows), Brand (App Mark, Iconography).

**Components** (`components/<group>/`)
- `controls/` — **Button**, **Toggle**, **SegmentedControl**, **TextInput**
- `weather/` — **CategoryPill**, **StationCard**, **Tag**, **Chip**
- `feedback/` — **Modal**, **Ribbon**, **Legend**

Each component is `<Name>.jsx` + `<Name>.d.ts`, with a per-group `*.prompt.md` and `@dsCard` HTML.
Import via `const { Button } = window.WxRadiusDesignSystem_991f35` after loading `_ds_bundle.js`.
`CATEGORY_COLOR` and `FLIGHT_CATEGORIES` are exported alongside `CategoryPill` for raw values.

**UI kit** (`ui_kits/vicinity-app/`) — an interactive recreation of the app: header/search/controls,
advisory ribbon, station list and route planner. See its `index.html` and `README.md`.

### Notes & intentional decisions
- Component inventory is drawn **from the app's own CSS classes** (`.seg`, `.toggle`, `.chip`,
  `.tag`, `.card`, `.taf-pill`, `.modal`, `#ribbon`, `.legend`), not a generic UI kit. Nothing was
  added that the source doesn't use.
- `StationCard` and the map popup share the same data; the kit uses `StationCard` for the list view.
- The map itself (Leaflet) is out of scope for reusable components — it's shown as a static styled
  backdrop in the UI kit.
