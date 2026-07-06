import React from "react";

const TONES = {
  metar: { background: "var(--wx-metar-bg)", color: "var(--wx-metar-fg)" },
  taf: { background: "var(--wx-taf-bg)", color: "var(--wx-taf-fg)" },
  atis: { background: "var(--wx-atis-bg)", color: "var(--wx-atis-fg)" },
  neutral: { background: "var(--wx-panel-2)", color: "var(--wx-muted)" },
};

/**
 * Small uppercase data-type tag (METAR / TAF / ATIS). A tiny label pill
 * that prefixes a block of raw aviation data. Mirrors the app's `.tag`.
 */
export function Tag({ tone = "metar", children, style }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--wx-font-sans)",
        fontSize: "var(--wx-text-xs)",
        fontWeight: "var(--wx-weight-extra)",
        letterSpacing: "var(--wx-tracking-wide)",
        padding: "1px 6px",
        borderRadius: "var(--wx-radius-xs)",
        verticalAlign: "middle",
        ...(TONES[tone] || TONES.neutral),
        ...style,
      }}
    >
      {children}
    </span>
  );
}
