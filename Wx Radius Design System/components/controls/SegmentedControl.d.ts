import React from "react";

export interface SegmentedOption {
  value: string;
  label: React.ReactNode;
}

export interface SegmentedControlProps {
  /** Ordered segments. */
  options: SegmentedOption[];
  /** Currently active value. */
  value: string;
  /** Called with the new value on click. */
  onChange?: (value: string) => void;
  /** md = 32px header control, sm = 24px in-card control. @default "md" */
  size?: "md" | "sm";
  style?: React.CSSProperties;
}

/**
 * Joined single-select control (radius picker, raw/decoded switch).
 */
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
