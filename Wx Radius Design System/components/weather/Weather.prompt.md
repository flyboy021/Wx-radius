Weather-domain primitives: the flight-category color system and the pieces that display station observations.

```jsx
<CategoryPill category="VFR" />
<CategoryPill category="IFR" variant="dot" />
<CategoryPill category="LIFR" variant="text" />

<Tag tone="metar">METAR</Tag>
<Tag tone="taf">TAF</Tag>

<Chip label="KJFK" role="dep" onRemove={() => {}} />

<StationCard
  icao="KTEB" name="Teterboro" distance="8 nm away" category="MVFR"
  raw="METAR KTEB 211951Z 21014G22KT 6SM BR BKN012 18/16 A2988" />
```

CategoryPill is the core semantic element — VFR green, MVFR blue, IFR red, LIFR magenta. Variants: `pill` (solid tab), `dot` (legend), `text` (mono colored). Import `CATEGORY_COLOR` / `FLIGHT_CATEGORIES` for the raw values.
StationCard's left accent bar and pill both follow `category`.
Tag tones: metar (blue), taf (violet), atis (green), neutral.
