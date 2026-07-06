import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "accent" */
  variant?: "accent" | "ghost" | "cta" | "danger";
  /** Control height. sm = 32px, md = 40px. @default "md" */
  size?: "sm" | "md";
  /** Stretch to full container width. @default false */
  block?: boolean;
  children?: React.ReactNode;
}

/**
 * Primary button used across the Vicinity chrome.
 *
 * @startingPoint section="Controls" subtitle="Accent, ghost, amber CTA & danger buttons" viewport="700x200"
 */
export function Button(props: ButtonProps): JSX.Element;
