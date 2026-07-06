import React from "react";
import { FlightCategory } from "./CategoryPill";

export interface StationCardProps {
  /** ICAO identifier, e.g. "KJFK". */
  icao: string;
  /** Airport name. */
  name?: string;
  /** Distance/bearing caption, e.g. "12 nm away". */
  distance?: string;
  /** Flight category — sets the left accent bar + pill color. */
  category?: FlightCategory | string;
  /** Raw METAR string (already formatted) shown in monospace. */
  raw?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/**
 * A single reporting station row in the list view.
 *
 * @startingPoint section="Weather" subtitle="Station METAR list card" viewport="700x150"
 */
export function StationCard(props: StationCardProps): JSX.Element;
