# Vicinity — App UI Kit

An interactive recreation of the Vicinity PWA: a mobile-first, dark EFB app that shows
METAR/TAF for reporting stations within a chosen radius, on a map or as a list, with a
route-planner corridor and radar toggle.

Open `index.html` — it renders inside a 420×760 phone frame.

## What's interactive
- **Radius picker** (25 / 50 / 100 / Region) filters the visible stations.
- **List / Map** toggle swaps the map backdrop for the scrollable station list. Tapping a map
  pin jumps to the list; tapping a list card expands a decoded-weather grid.
- **Route** opens the corridor planner with removable waypoint chips (dep/via/dest).
- **°C / °F** and **Radar** toggles; **Zulu clock** taps to local time and fires the caution modal.
- **Settings gear** opens the dropdown (skip-intro, location access, tip jar).
- The **advisory ribbon** auto-surfaces the nearest IFR/LIFR station in view, or an all-clear.

## Files
- `index.html` — mounts the app inside a phone frame; loads the DS bundle + the JSX below.
- `stations.js` — sample NYC-area station data (`window.WX_STATIONS`).
- `Chrome.jsx` — `Header`, `SearchBar`, `ControlsBar` and the inline stroke-SVG icons.
- `MapBackdrop.jsx` — faux CARTO-dark map with radius circle, pulsing "you" marker, station pins.
- `ListView.jsx` — `StationList` (+ decoded grid) and `RoutePanel`.
- `App.jsx` — state orchestration, header/footer, settings panel, caution modal.

## Composition
Chrome and content are built from the design-system components:
`Button`, `Toggle`, `SegmentedControl`, `TextInput` (controls); `StationCard`, `CategoryPill`,
`Tag`, `Chip` (weather); `Modal`, `Ribbon`, `Legend` (feedback). The real app uses Leaflet for
the map; here it's a static styled backdrop — everything else mirrors the source visuals.
