// List view + expandable decoded detail + route planner panel.
const { StationCard, CategoryPill, Tag, Chip, Ribbon } = window.WxRadiusDesignSystem_991f35;

function DecodedGrid({ s }) {
  const row = (k, v) => (
    <div style={{ fontSize: "15px", color: "var(--wx-text)", margin: "2px 0" }}>
      <b style={{ color: "var(--wx-muted)", fontWeight: 600, marginRight: "8px", fontSize: "11px",
        textTransform: "uppercase", letterSpacing: ".04em" }}>{k}</b>{v}
    </div>
  );
  return (
    <div style={{ padding: "0 12px 12px 26px", background: "var(--wx-panel)",
      borderBottom: "1px solid var(--wx-line)", borderLeft: `4px solid ${
        ({VFR:"#11a911",MVFR:"#2b6fff",IFR:"#e0152b",LIFR:"#d017d0"})[s.cat]}` }}>
      <div style={{ display: "flex", gap: "8px", alignItems: "center", padding: "2px 0 8px" }}>
        <Tag tone="metar">METAR</Tag>
        <span style={{ fontFamily: "var(--wx-font-mono)", fontSize: "12px", color: "#8a97a6" }}>
          decoded
        </span>
      </div>
      {row("Wind", s.wind)}
      {row("Visibility", s.vis)}
      {row("Sky", s.sky)}
      {row("Temp", `${s.temp}  ·  Dew ${s.dew}`)}
      {row("Altimeter", s.alt)}
    </div>
  );
}

function StationList({ stations, open, onToggle, mode = "raw" }) {
  return (
    <div style={{ flex: 1, minHeight: 0, overflow: "auto" }}>
      {stations.map((s) => (
        <React.Fragment key={s.icao}>
          <StationCard
            icao={s.icao} name={s.name} category={s.cat}
            distance={`${s.dist} nm ${s.bear}`} raw={mode === "raw" ? s.raw : undefined}
            onClick={() => onToggle(s.icao)}
          />
          {(mode === "plain" || open === s.icao) && <DecodedGrid s={s} />}
        </React.Fragment>
      ))}
    </div>
  );
}

function RoutePanel({ route, onRemove, onClear }) {
  return (
    <div style={{ background: "var(--wx-panel)", borderBottom: "1px solid var(--wx-line)",
      padding: "8px 12px", display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", flex: 1 }}>
          {route.map((wp, i) => (
            <React.Fragment key={wp.id}>
              <Chip label={wp.id}
                role={i === 0 ? "dep" : i === route.length - 1 ? "dest" : "via"}
                onRemove={() => onRemove(i)} />
              {i < route.length - 1 && (
                <span style={{ color: "var(--wx-muted)", fontSize: "13px" }}>→</span>
              )}
            </React.Fragment>
          ))}
          {!route.length && (
            <span style={{ color: "var(--wx-muted)", fontSize: "13px" }}>
              Type ids in the search box, e.g. KTEB KHPN
            </span>
          )}
        </div>
        <button onClick={onClear} style={{ background: "transparent", color: "var(--wx-muted)",
          border: "1px solid var(--wx-line)", borderRadius: "7px", padding: "6px 11px",
          fontSize: "13px", fontWeight: 700, cursor: "pointer" }}>Clear</button>
      </div>
      <span style={{ color: "var(--wx-muted)", fontSize: "12px" }}>
        Use the radius buttons above for corridor width
      </span>
    </div>
  );
}

Object.assign(window, { StationList, RoutePanel });
