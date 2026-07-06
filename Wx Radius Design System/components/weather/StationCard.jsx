import React from "react";
import { CategoryPill, CATEGORY_COLOR } from "./CategoryPill.jsx";

/**
 * Station weather card — one reporting station in the list view.
 * A left flight-category accent bar, a category pill, the station id +
 * distance, name, and the raw METAR string in monospace. Mirrors `.card`.
 *
 * Cosmetic recreation: pass the already-formatted `raw` METAR string.
 */
export function StationCard({
  icao,
  name,
  distance, // e.g. "12 nm away"
  category,
  raw,
  onClick,
  style,
}) {
  const cat = (category || "").toUpperCase();
  const color = CATEGORY_COLOR[cat] || "var(--wx-cat-none)";

  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        gap: "10px",
        padding: "10px 12px",
        borderBottom: "1px solid var(--wx-line)",
        borderLeft: `4px solid ${color}`,
        background: "var(--wx-panel)",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
    >
      <CategoryPill category={cat} style={{ marginTop: "2px" }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              fontFamily: "var(--wx-font-sans)",
              fontSize: "var(--wx-text-md)",
              fontWeight: "var(--wx-weight-extra)",
              letterSpacing: "0.02em",
              color: "var(--wx-text)",
              flex: "none",
            }}
          >
            {icao}
          </span>
          {distance != null && (
            <span
              style={{
                color: "var(--wx-muted)",
                fontFamily: "var(--wx-font-sans)",
                fontWeight: "var(--wx-weight-medium)",
                fontSize: "var(--wx-text-13)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {distance}
            </span>
          )}
        </div>
        {name && (
          <div
            style={{
              color: "var(--wx-muted)",
              fontFamily: "var(--wx-font-sans)",
              fontSize: "var(--wx-text-13)",
              margin: "1px 0 5px",
            }}
          >
            {name}
          </div>
        )}
        {raw && (
          <div
            style={{
              fontFamily: "var(--wx-font-mono)",
              fontSize: "var(--wx-text-13)",
              color: "#cdd6e0",
              lineHeight: "var(--wx-leading-snug)",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              marginTop: "3px",
            }}
          >
            {raw}
          </div>
        )}
      </div>
    </div>
  );
}
