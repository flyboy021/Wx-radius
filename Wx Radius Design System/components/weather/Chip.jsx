import React from "react";

/**
 * Waypoint / removable chip — a bold monospace-ish identifier tab with an
 * optional remove button, used in the route planner. Mirrors `.chip-wp`.
 * Set `role` to tint the leading dot dep (green) / dest (red) / via (yellow).
 */
export function Chip({ label, role, onRemove, style }) {
  const dot =
    role === "dep"
      ? "var(--wx-vfr)"
      : role === "dest"
      ? "var(--wx-danger)"
      : role === "via"
      ? "var(--wx-route)"
      : null;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        background: "#1b2330",
        border: "1px solid var(--wx-line)",
        borderRadius: "var(--wx-radius-md)",
        padding: onRemove ? "3px 4px 3px 8px" : "3px 8px",
        fontFamily: "var(--wx-font-sans)",
        fontSize: "var(--wx-text-13)",
        fontWeight: "var(--wx-weight-extra)",
        color: "var(--wx-text)",
        ...style,
      }}
    >
      {dot && (
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: dot,
            flex: "none",
          }}
        />
      )}
      {label}
      {onRemove && (
        <button
          onClick={onRemove}
          title="Remove"
          style={{
            background: "transparent",
            border: "none",
            color: "var(--wx-muted)",
            fontSize: "15px",
            lineHeight: 1,
            cursor: "pointer",
            padding: "0 3px",
          }}
        >
          ×
        </button>
      )}
    </span>
  );
}
