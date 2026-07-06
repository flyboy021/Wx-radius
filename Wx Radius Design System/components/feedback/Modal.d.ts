import React from "react";

export interface ModalProps {
  /** Whether the modal is shown. @default true */
  open?: boolean;
  /** Amber title line. */
  title?: React.ReactNode;
  /** Body copy. */
  children?: React.ReactNode;
  /** Confirm button text. @default "I understand" */
  confirmLabel?: string;
  onConfirm?: () => void;
  /** Confirm button color. @default "danger" */
  tone?: "danger" | "accent";
}

/**
 * Centered caution dialog with a dark scrim.
 */
export function Modal(props: ModalProps): JSX.Element | null;
