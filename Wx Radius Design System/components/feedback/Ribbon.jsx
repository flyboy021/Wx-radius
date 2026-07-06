import React from "react";
import { CATEGORY_COLOR } from "../weather/CategoryPill.jsx";

/**
 * Advisory ribbon — the thin status strip below the header that surfaces
 * the nearest adverse conditions ("Nearest IFR: KXXX 12 nm NW") or an
 * all-clear. On a route it can carry a "VFR flight not recommended"
 * warning. Mirrors `#ribbon` / `.rb-*`.
 *
 * status: "ok" | "advisory"  ·  when advisory, pass category + message.
 * warn: optional bold red banner text (route "VFR not recommended").
 */
export function Ribbon({ status = "ok", category, label, message, warn, style }) {
  const color = CATEGORY_COLOR[(category || "").toUpperCase()] || "var(--wx-cat-none)";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        justifyContent: "space-between",
        background: "var(--wx-panel)",
        borderBottom: "1px solid var(--wx-line)",
        padding: "6px 12px",
        fontFamily: "var(--wx-font-sans)",
        fontSize: "var(--wx-text-13)",
        overflowX: "auto",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {warn && (
        <span
          style={{
            color: "var(--wx-lifr)",
            fontWeight: "var(--wx-weight-extra)",
          }}
        >
          {warn}
        </span>
      )}
      {status === "advisory" ? (
        <span style={{ color: "var(--wx-muted)", fontWeight: "var(--wx-weight-semibold)" }}>
          <b style={{ color, fontWeight: "var(--wx-weight-extra)", marginRight: "3px" }}>
            {label || `Nearest ${(category || "").toUpperCase()}:`}
          </b>
          {message}
        </span>
      ) : (
        !warn && (
          <span style={{ color: "var(--wx-vfr)", fontWeight: "var(--wx-weight-bold)" }}>
            {message || "No IFR in view"}
          </span>
        )
      )}
    </div>
  );
}
