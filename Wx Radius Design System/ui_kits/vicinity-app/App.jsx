// Vicinity — interactive app recreation (orchestrator).
const { Button, Legend, Ribbon, Modal } = window.WxRadiusDesignSystem_991f35;

function Footer({ updated }) {
  return (
    <footer style={{ background: "var(--wx-panel)", padding: "8px 12px",
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px",
      borderTop: "1px solid var(--wx-line)" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2px", minWidth: 0 }}>
        <span style={{ color: "var(--wx-muted)", fontSize: "12px", fontWeight: 600 }}>{updated}</span>
        <span style={{ color: "var(--wx-faint)", fontSize: "10px", display: "flex",
          alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <Legend />
          Situational awareness only — not an official weather briefing.
        </span>
      </div>
      <Button variant="cta">☕ Tip the dev</Button>
    </footer>
  );
}

function SettingsPanel({ onClose }) {
  const rowStyle = { display: "flex", alignItems: "center", justifyContent: "space-between",
    gap: "10px", padding: "6px 2px" };
  return (
    <div style={{ position: "absolute", top: "calc(100% + 8px)", right: "12px",
      background: "var(--wx-panel)", border: "1px solid var(--wx-line)", borderRadius: "10px",
      padding: "12px", minWidth: "230px", boxShadow: "var(--wx-shadow-panel)", zIndex: 1200 }}>
      <div style={rowStyle}>
        <span style={{ fontSize: "13px", color: "var(--wx-text)" }}>Skip opening sequence</span>
        <button style={{ background: "var(--wx-panel-2)", color: "var(--wx-muted)",
          border: "1px solid var(--wx-line)", borderRadius: "8px", height: "32px", padding: "0 12px",
          fontSize: "13px", fontWeight: 700, cursor: "pointer" }}>Off</button>
      </div>
      <div style={rowStyle}>
        <span style={{ fontSize: "13px", color: "var(--wx-text)" }}>
          Location access<br/>
          <span style={{ fontSize: "11px", color: "var(--wx-muted)", fontWeight: 600 }}>Allowed</span>
        </span>
        <button style={{ background: "var(--wx-panel-2)", color: "var(--wx-muted)",
          border: "1px solid var(--wx-line)", borderRadius: "8px", height: "32px", padding: "0 12px",
          fontSize: "13px", fontWeight: 700, cursor: "pointer" }}>Reset</button>
      </div>
      <Button variant="cta" block style={{ marginTop: "8px" }}>☕ Tip the dev</Button>
    </div>
  );
}

function App() {
  const all = window.WX_STATIONS;
  const [radius, setRadius] = React.useState("50");
  const [view, setView] = React.useState("map");
  const [unit, setUnit] = React.useState("C");
  const [windUnit, setWindUnit] = React.useState("KT");
  const [mode, setMode] = React.useState("raw");
  const [radar, setRadar] = React.useState(false);
  const [routeMode, setRouteMode] = React.useState(false);
  const [route, setRoute] = React.useState([{ id: "KTEB" }, { id: "KHPN" }]);
  const [timeMode, setTimeMode] = React.useState("z");
  const [showTimeWarn, setShowTimeWarn] = React.useState(false);
  const [settings, setSettings] = React.useState(false);
  const [openStn, setOpenStn] = React.useState(null);

  const rNm = { "25": 25, "50": 50, "100": 100, region: 999 }[radius];
  const stations = all.filter((s) => s.dist <= rNm);
  const worst = stations.find((s) => s.cat === "IFR" || s.cat === "LIFR");

  const toggleTime = () => {
    if (timeMode === "z") { setTimeMode("local"); setShowTimeWarn(true); }
    else setTimeMode("z");
  };

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column",
      background: "var(--wx-bg)", fontFamily: "var(--wx-font-sans)" }}>
      <header style={{ background: "var(--wx-panel)", padding: "12px 14px 10px", position: "relative" }}>
        <Header zulu={timeMode === "z" ? "19:51Z" : "3:51 PM"} timeMode={timeMode}
          onToggleTime={toggleTime} onGear={() => setSettings((v) => !v)} />
        <div style={{ color: "var(--wx-muted)", fontSize: "12px", marginTop: "6px" }}>
          Teterboro, NJ · {stations.length} stations within {radius === "region" ? "region" : radius + " nm"}
        </div>
        <SearchBar value="" onChange={() => {}} onGo={() => {}} onGps={() => {}} />
        <ControlsBar radius={radius} onRadius={setRadius}
          view={view} onView={() => setView((v) => (v === "map" ? "list" : "map"))}
          route={routeMode} onRoute={() => setRouteMode((v) => !v)}
          radar={radar} onRadar={() => setRadar((v) => !v)}
          unit={unit} onUnit={() => setUnit((u) => (u === "C" ? "F" : "C"))}
          windUnit={windUnit} onWindUnit={() => setWindUnit((w) => (w === "KT" ? "MPH" : "KT"))}
          mode={mode} onMode={() => setMode((m) => (m === "raw" ? "plain" : "raw"))} />
        {settings && <SettingsPanel onClose={() => setSettings(false)} />}
      </header>

      {routeMode && (
        <RoutePanel route={route}
          onRemove={(i) => setRoute((r) => r.filter((_, j) => j !== i))}
          onClear={() => setRoute([])} />
      )}

      {worst ? (
        <Ribbon status="advisory" category={worst.cat}
          message={`${worst.icao} ${worst.dist} nm ${worst.bear}`} />
      ) : (
        <Ribbon status="ok" message="No IFR in view" />
      )}

      {view === "map" ? (
        <MapBackdrop stations={stations} showLabels={radius !== "region"} onPick={() => setView("list")} />
      ) : (
        <StationList stations={stations} open={openStn} mode={mode}
          onToggle={(id) => setOpenStn((o) => (o === id ? null : id))} />
      )}

      <Footer updated="Updated 19:51Z · auto-refresh 5 min" />

      <Modal open={showTimeWarn} title="⚠ Use extreme caution!"
        confirmLabel="I understand" onConfirm={() => setShowTimeWarn(false)}>
        All times on this page are now shown in <b>LOCAL time</b>, not Zulu (UTC).
        Aviation weather is normally read in Zulu — double-check before using.
      </Modal>
    </div>
  );
}

Object.assign(window, { App });
