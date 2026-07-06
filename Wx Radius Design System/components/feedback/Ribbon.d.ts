import React from "react";
import { FlightCategory } from "../weather/CategoryPill";

export interface RibbonProps {
  /** "ok" (all-clear green) or "advisory" (nearest adverse station). @default "ok" */
  status?: "ok" | "advisory";
  /** Category driving the bold color when advisory. */
  category?: FlightCategory | string;
  /** Bold lead label. Defaults to `Nearest <CATEGORY>:`. */
  label?: string;
  /** Trailing detail, e.g. "KTEB 12 nm NW". */
  message?: string;
  /** Optional bold red banner (route "VFR flight not recommended"). */
  warn?: string;
  style?: React.CSSProperties;
}

/**
 * Situational-awareness advisory ribbon under the header.
 */
export function Ribbon(props: RibbonProps): JSX.Element;
