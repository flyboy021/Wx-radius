import React from "react";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Force-uppercase entry (ICAO identifiers). @default false */
  uppercase?: boolean;
}

/**
 * Search / identifier text input (airport id or route).
 */
export function TextInput(props: TextInputProps): JSX.Element;
