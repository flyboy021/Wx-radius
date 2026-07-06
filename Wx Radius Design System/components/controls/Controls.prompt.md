Buttons, toggles, segmented controls and the search input — the Vicinity chrome primitives. Use these for any action, view switch, unit toggle or identifier entry.

```jsx
<Button variant="accent">Go</Button>
<Button variant="ghost">Clear</Button>
<Button variant="cta">☕ Tip the dev</Button>

<Toggle on>List</Toggle>
<Toggle on accent="amber">°F</Toggle>

<SegmentedControl
  options={[{value:"25",label:"25"},{value:"50",label:"50"},{value:"100",label:"100"},{value:"region",label:"Region"}]}
  value="50" onChange={setR} />

<TextInput uppercase placeholder="Airport id (e.g. JFK) or route: KJFK KORD KDEN" />
```

Button variants: `accent` (blue primary), `ghost` (quiet secondary), `cta` (amber tip jar), `danger` (red). Sizes `sm` (32px) / `md` (40px).
Toggle: `on` fills accent; `accent="amber"` is used for the unit switches (°C/°F, KT/MPH).
SegmentedControl: `size="sm"` (24px) for the in-card raw/decoded switch; `md` for the header radius picker.
