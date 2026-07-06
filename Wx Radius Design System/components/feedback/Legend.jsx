import React from "react";
import { CategoryPill } from "../weather/CategoryPill.jsx";

/**
 * Flight-category legend — the four-dot key shown in the app footer.
 * Mirrors `.legend`.
 */
export function Legend({ style }) {
  const items = ["VFR", "MVFR", "IFR", "LIFR"];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        ...style,
      }}
    >
      {items.map((cat) => (
        <span
          key={cat}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "3px",
            fontFamily: "var(--wx-font-sans)",
            fontSize: "var(--wx-text-xs)",
            color: "var(--wx-muted)",
          }}
        >
          <CategoryPill category={cat} variant="dot" />
          {cat}
        </span>
      ))}
    </span>
  );
}
