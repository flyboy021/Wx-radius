// Header + search + controls chrome for the Vicinity UI kit.
const { Button, Toggle, SegmentedControl, TextInput } = window.WxRadiusDesignSystem_991f35;

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 13a7.97 7.97 0 0 0 0-2l2.04-1.58a.5.5 0 0 0 .12-.64l-1.93-3.34a.5.5 0 0 0-.6-.22l-2.4.97a8 8 0 0 0-1.73-1l-.36-2.55a.5.5 0 0 0-.5-.43h-3.86a.5.5 0 0 0-.5.43l-.36 2.55a8 8 0 0 0-1.73 1l-2.4-.97a.5.5 0 0 0-.6.22L2.66 8.78a.5.5 0 0 0 .12.64L4.82 11a7.97 7.97 0 0 0 0 2l-2.04 1.58a.5.5 0 0 0-.12.64l1.93 3.34a.5.5 0 0 0 .6.22l2.4-.97a8 8 0 0 0 1.73 1l.36 2.55a.5.5 0 0 0 .5.43h3.86a.5.5 0 0 0 .5-.43l.36-2.55a8 8 0 0 0 1.73-1l2.4.97a.5.5 0 0 0 .6-.22l1.93-3.34a.5.5 0 0 0-.12-.64L19.4 13z" />
    </svg>
  );
}
function GpsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" />
    </svg>
  );
}
function RadarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" />
      <line x1="12" y1="12" x2="12" y2="3" strokeLinecap="round" />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Header({ zulu, timeMode, onToggleTime, onGear }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <h1 style={{ fontSize: "18px", margin: 0, fontWeight: 700, flex: 1, color: "var(--wx-text)" }}>
        Vicinity
      </h1>
      <span
        role="button"
        onClick={onToggleTime}
        style={{
          background: timeMode === "local" ? "var(--wx-amber-soft)" : "var(--wx-panel-2)",
          color: timeMode === "local" ? "var(--wx-amber-ink)" : "#cdd6e0",
          border: timeMode === "local" ? "1px solid var(--wx-amber-soft)" : "1px solid #33405440",
          borderRadius: "var(--wx-radius-pill)",
          padding: "6px 16px",
          fontWeight: 700,
          fontSize: "15px",
          letterSpacing: ".04em",
          fontVariantNumeric: "tabular-nums",
          cursor: "pointer",
          userSelect: "none",
          whiteSpace: "nowrap",
          boxShadow: "var(--wx-shadow-1)",
        }}
      >
        {zulu}
      </span>
      <button
        onClick={onGear}
        title="Settings"
        style={{
          background: "transparent", border: 0, color: "var(--wx-text)", padding: "4px",
          borderRadius: "8px", display: "flex", cursor: "pointer",
        }}
      >
        <GearIcon />
      </button>
    </div>
  );
}

function SearchBar({ value, onChange, onGo, onGps }) {
  return (
    <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
      <TextInput
        uppercase
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onGo()}
        placeholder="Airport id (e.g. JFK) or route: KJFK KORD KDEN"
        style={{ flex: 1 }}
      />
      <Button variant="accent" onClick={onGo}>Go</Button>
      <Button variant="ghost" onClick={onGps} title="Find my location"
        style={{ padding: 0, width: "44px" }}>
        <span style={{ color: "#cdd6e0", display: "flex" }}><GpsIcon /></span>
      </Button>
    </div>
  );
}

function ControlsBar({ radius, onRadius, view, onView, route, onRoute, radar, onRadar, unit, onUnit, windUnit, onWindUnit, mode, onMode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px", flexWrap: "wrap" }}>
      <SegmentedControl
        value={radius} onChange={onRadius}
        options={[{ value: "25", label: "25" }, { value: "50", label: "50" },
                  { value: "100", label: "100" }, { value: "region", label: "Region" }]}
      />
      <Toggle on={route} onClick={onRoute}>Route</Toggle>
      <Toggle on={view === "list"} onClick={onView}>List</Toggle>
      <Toggle on={radar} onClick={onRadar}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}><RadarIcon />Radar</span>
      </Toggle>
      <Toggle on={unit === "F"} accent="amber" onClick={onUnit}>°{unit}</Toggle>
      <Toggle on={windUnit === "MPH"} accent="amber" onClick={onWindUnit} title="Wind speed units (knots / miles per hour)">{windUnit}</Toggle>
      <Toggle on={mode === "plain"} onClick={onMode} title="Show raw or decoded weather">{mode === "plain" ? "Plain" : "Raw"}</Toggle>
    </div>
  );
}

Object.assign(window, { Header, SearchBar, ControlsBar, GpsIcon });
