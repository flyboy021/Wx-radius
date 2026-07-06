---
name: vicinity-design
description: Use this skill to generate well-branded interfaces and assets for Vicinity, the pilots' METAR/TAF weather PWA, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Brand:** Vicinity — a dark, dense electronic-flight-bag (EFB) weather app for pilots. Voice is a terse, safety-first co-pilot. Aviation terms used plainly (METAR, TAF, VFR/MVFR/IFR/LIFR, Zulu).
- **Tokens:** `styles.css` imports `tokens/{colors,typography,spacing}.css`. Link `styles.css` and use CSS custom properties (`--wx-*`). The semantic core is the flight-category palette: VFR `#11a911`, MVFR `#2b6fff`, IFR `#e0152b`, LIFR `#d017d0`.
- **Type:** native system sans for chrome, monospace for raw weather strings. Weight 800 is used heavily. No webfonts.
- **Components** (`components/<group>/`): controls (Button, Toggle, SegmentedControl, TextInput), weather (CategoryPill, StationCard, Tag, Chip), feedback (Modal, Ribbon, Legend). Import from `window.WxRadiusDesignSystem_991f35` after loading `_ds_bundle.js`.
- **UI kit:** `ui_kits/vicinity-app/` — a full interactive app recreation to copy from.
- **Iconography:** hand-tuned inline stroke SVGs (1.6–2px, round caps). Emoji only functionally: ☕ tip, ⚠ caution. See `guidelines/brand-iconography.card.html` for exact paths.
- **Assets:** `assets/icon-{192,512,1024}.png` (the radar-ring app mark). No wordmark exists — set "Vicinity" in bold system sans.
