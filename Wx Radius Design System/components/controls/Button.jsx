import React from "react";

/**
 * Vicinity button. Three visual variants matching the app's chrome:
 *  - accent  : blue primary action (the "Go" button)
 *  - ghost   : quiet panel-colored secondary
 *  - cta     : amber "Tip the dev" call-to-action
 *  - danger  : red destructive / modal-confirm
 */
export function Button({
  variant = "accent",
  size = "md",
  block = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const heights = { sm: "var(--wx-control-md)", md: "var(--wx-control-lg)" };
  const pad = { sm: "0 12px", md: "0 16px" };
  const font = { sm: "var(--wx-text-13)", md: "var(--wx-text-15)" };

  const variants = {
    accent: { background: "var(--wx-accent)", color: "#fff", border: "0" },
    ghost: {
      background: "var(--wx-panel-2)",
      color: "var(--wx-text)",
      border: "1px solid var(--wx-line)",
    },
    cta: {
      background: "var(--wx-amber)",
      color: "var(--wx-amber-ink)",
      border: "0",
    },
    danger: { background: "var(--wx-danger)", color: "#fff", border: "0" },
  };

  return (
    <button
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
        height: heights[size],
        padding: pad[size],
        width: block ? "100%" : "auto",
        borderRadius: "var(--wx-radius-lg)",
        fontFamily: "var(--wx-font-sans)",
        fontSize: font[size],
        fontWeight: variant === "cta" ? "var(--wx-weight-extra)" : "var(--wx-weight-bold)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        whiteSpace: "nowrap",
        transition: "transform .04s ease",
        ...variants[variant],
        ...style,
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(1px)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
      {...rest}
    >
      {children}
    </button>
  );
}
