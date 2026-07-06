// Faux CARTO-dark map backdrop with station pins, radius circle & pulsing "you" marker.
const { CATEGORY_COLOR } = window.WxRadiusDesignSystem_991f35;

function StationPin({ s, showLabel, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute", left: s.x + "%", top: s.y + "%", transform: "translate(-50%,-50%)",
        display: "flex", alignItems: "center", gap: "3px", whiteSpace: "nowrap", cursor: "pointer", zIndex: 3,
      }}
    >
      <span style={{
        width: "16px", height: "16px", borderRadius: "50%",
        background: CATEGORY_COLOR[s.cat], border: "2px solid #fff",
        boxShadow: "0 0 0 1px #0006", flex: "none",
      }} />
      {showLabel && (
        <span style={{
          fontSize: "12px", fontWeight: 800, color: "#fff",
          textShadow: "0 0 3px #000, 0 1px 2px #000",
        }}>{s.icao}</span>
      )}
    </div>
  );
}

function MapBackdrop({ stations, showLabels, onPick }) {
  return (
    <div style={{ position: "relative", flex: 1, minHeight: 0, overflow: "hidden", background: "var(--wx-map)" }}>
      {/* faint graticule standing in for the CARTO dark basemap */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage:
          "linear-gradient(#5d708822 1px, transparent 1px), linear-gradient(90deg, #5d708822 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />
      {/* a couple of thin "coastline/border" strokes */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="none">
        <path d="M0,40 C120,70 260,30 420,80 S760,60 1000,110" fill="none" stroke="#5d7088" strokeOpacity="0.5" strokeWidth="1" />
        <path d="M120,300 C260,240 380,320 560,270 S820,300 1000,250" fill="none" stroke="#5d7088" strokeOpacity="0.4" strokeWidth="1" />
      </svg>
      {/* radius circle */}
      <div style={{
        position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)",
        width: "62%", aspectRatio: "1", borderRadius: "50%",
        border: "1.5px solid #2b6fff99", background: "#2b6fff10", zIndex: 1,
      }} />
      {/* you marker with pulse */}
      <div style={{
        position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", zIndex: 4,
        width: "16px", height: "16px", borderRadius: "50%", background: "#fff",
        border: "3px solid #0d1117", boxShadow: "0 0 0 2px #ffffff99, 0 0 12px #ffffffcc",
      }}>
        <span style={{
          position: "absolute", left: "50%", top: "50%", width: "16px", height: "16px",
          margin: "-8px 0 0 -8px", borderRadius: "50%", background: "#ffffff66",
          animation: "wxpulse 1.8s ease-out infinite",
        }} />
      </div>
      {stations.map((s) => (
        <StationPin key={s.icao} s={s} showLabel={showLabels} onClick={() => onPick(s)} />
      ))}
      <style>{`@keyframes wxpulse{0%{transform:scale(1);opacity:.7}100%{transform:scale(3.2);opacity:0}}`}</style>
    </div>
  );
}

Object.assign(window, { MapBackdrop });
