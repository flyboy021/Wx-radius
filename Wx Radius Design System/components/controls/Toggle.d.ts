import React from "react";

export interface ToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the toggle is active. @default false */
  on?: boolean;
  /** Active fill color. Blue for view controls, amber for unit switches. @default "blue" */
  accent?: "blue" | "amber";
  children?: React.ReactNode;
}

/**
 * Stateful toggle button (Route / List / Radar / °C / KT etc.).
 */
export function Toggle(props: ToggleProps): JSX.Element;
