import React from "react";

/**
 * Toggle button — a pill-shaped control that flips between off and on.
 * Off is a quiet panel chip; on fills with the accent (or amber, for the
 * unit/distance toggles). Mirrors the app's `.toggle` / `.toggle.on`.
 */
export function Toggle({
  on = false,
  accent = "blue", // "blue" | "amber"
  children,
  style,
  ...rest
}) {
  const onFill =
    accent === "amber"
      ? { background: "var(--wx-amber)", color: "var(--wx-amber-ink)", borderColor: "var(--wx-amber)" }
      : { background: "var(--wx-accent)", color: "#fff", borderColor: "var(--wx-accent)" };

  return (
    <button
      aria-pressed={on}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        height: "var(--wx-control-md)",
        padding: "0 12px",
        borderRadius: "var(--wx-radius-lg)",
        border: "1px solid var(--wx-line)",
        fontFamily: "var(--wx-font-sans)",
        fontSize: "var(--wx-text-13)",
        fontWeight: "var(--wx-weight-bold)",
        cursor: "pointer",
        whiteSpace: "nowrap",
        background: "var(--wx-panel-2)",
        color: "var(--wx-muted)",
        ...(on ? onFill : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
