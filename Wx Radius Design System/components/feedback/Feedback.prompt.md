Feedback & status surfaces: the caution modal, the advisory ribbon and the category legend.

```jsx
<Modal title="⚠ Use extreme caution!" confirmLabel="I understand" onConfirm={close}>
  All times are now shown in <b>LOCAL time</b>, not Zulu (UTC).
</Modal>

<Ribbon status="advisory" category="IFR" message="KTEB 12 nm NW" />
<Ribbon status="ok" message="No IFR in view" />
<Ribbon warn="VFR flight not recommended" status="advisory" category="LIFR" message="KXYZ 40 nm in" />

<Legend />
```

Modal: amber title, centered, dark scrim; confirm button `tone="danger"` (red) or `"accent"`.
Ribbon: `ok` shows a green all-clear; `advisory` shows a category-colored nearest-hazard line; `warn` prepends a red banner.
Legend: the fixed VFR/MVFR/IFR/LIFR footer key.
