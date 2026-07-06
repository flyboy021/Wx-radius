import React from "react";

export type FlightCategory = "VFR" | "MVFR" | "IFR" | "LIFR";

export const FLIGHT_CATEGORIES: FlightCategory[];
export const CATEGORY_COLOR: Record<FlightCategory, string>;

export interface CategoryPillProps {
  /** Flight category. Unknown values fall back to a neutral gray. */
  category?: FlightCategory | string;
  /** pill = solid tab, dot = 8px legend dot, text = mono colored label. @default "pill" */
  variant?: "pill" | "dot" | "text";
  style?: React.CSSProperties;
}

/**
 * Flight-category indicator — the core semantic color system.
 *
 * @startingPoint section="Weather" subtitle="VFR/MVFR/IFR/LIFR category pills" viewport="700x140"
 */
export function CategoryPill(props: CategoryPillProps): JSX.Element;
