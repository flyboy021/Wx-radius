import React from "react";

/**
 * Segmented control — a joined row of options with one active segment,
 * used for the 25 / 50 / 100 / Region radius picker and the inline
 * raw/decoded switch. Matches the app's `.seg`.
 *
 * options: [{ value, label }]  ·  value: active value  ·  onChange(value)
 * size: "md" (32px, header) | "sm" (24px, inside cards)
 */
export function SegmentedControl({
  options = [],
  value,
  onChange,
  size = "md",
  style,
}) {
  const h = size === "sm" ? "var(--wx-control-sm)" : "var(--wx-control-md)";
  const pad = size === "sm" ? "0 9px" : "0 12px";
  const fs = size === "sm" ? "var(--wx-text-sm)" : "var(--wx-text-13)";
  const radius = size === "sm" ? "var(--wx-radius-md)" : "var(--wx-radius-lg)";

  return (
    <div
      role="tablist"
      style={{
        display: "inline-flex",
        background: "var(--wx-panel-2)",
        border: "1px solid var(--wx-line)",
        borderRadius: radius,
        overflow: "hidden",
        ...style,
      }}
    >
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(opt.value)}
            style={{
              background: active ? "var(--wx-accent)" : "transparent",
              color: active ? "#fff" : "var(--wx-muted)",
              border: "0",
              height: h,
              padding: pad,
              fontFamily: "var(--wx-font-sans)",
              fontSize: fs,
              fontWeight: "var(--wx-weight-bold)",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
