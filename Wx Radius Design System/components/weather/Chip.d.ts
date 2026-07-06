import React from "react";

export interface ChipProps {
  /** Chip label — usually an ICAO id. */
  label: React.ReactNode;
  /** Route role, tints the leading dot. dep=green, dest=red, via=yellow. */
  role?: "dep" | "dest" | "via";
  /** If provided, renders a × remove button and calls this on click. */
  onRemove?: () => void;
  style?: React.CSSProperties;
}

/**
 * Removable waypoint chip used in the route planner.
 */
export function Chip(props: ChipProps): JSX.Element;
