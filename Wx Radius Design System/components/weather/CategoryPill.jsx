import React from "react";

export const FLIGHT_CATEGORIES = ["VFR", "MVFR", "IFR", "LIFR"];

export const CATEGORY_COLOR = {
  VFR: "var(--wx-vfr)",
  MVFR: "var(--wx-mvfr)",
  IFR: "var(--wx-ifr)",
  LIFR: "var(--wx-lifr)",
};

/**
 * Flight-category pill (VFR / MVFR / IFR / LIFR). The single most
 * important semantic element in Vicinity — a solid color chip that
 * encodes flying conditions at a glance. Mirrors the app's `.taf-pill`
 * (rectangular) and `.chip` (min-width tab beside a station card).
 *
 * variant: "pill" (min-width tab) | "dot" (8px legend dot) | "text"
 */
export function CategoryPill({ category, variant = "pill", style }) {
  const cat = (category || "").toUpperCase();
  const color = CATEGORY_COLOR[cat] || "var(--wx-cat-none)";

  if (variant === "dot") {
    return (
      <span
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: color,
          display: "inline-block",
          ...style,
        }}
      />
    );
  }

  if (variant === "text") {
    return (
      <span
        style={{
          fontFamily: "var(--wx-font-mono)",
          fontSize: "var(--wx-text-13)",
          fontWeight: "var(--wx-weight-extra)",
          color,
          ...style,
        }}
      >
        {cat || "?"}
      </span>
    );
  }

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "46px",
        height: "22px",
        padding: "0 7px",
        borderRadius: "var(--wx-radius-sm)",
        background: color,
        color: "#fff",
        fontFamily: "var(--wx-font-sans)",
        fontSize: "var(--wx-text-sm)",
        fontWeight: "var(--wx-weight-extra)",
        letterSpacing: "0.02em",
        ...style,
      }}
    >
      {cat || "?"}
    </span>
  );
}
