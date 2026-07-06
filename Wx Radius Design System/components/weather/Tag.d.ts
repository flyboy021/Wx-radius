import React from "react";

export interface TagProps {
  /** Data-type color. @default "metar" */
  tone?: "metar" | "taf" | "atis" | "neutral";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Uppercase micro-label tag prefixing raw METAR / TAF / ATIS data.
 */
export function Tag(props: TagProps): JSX.Element;
