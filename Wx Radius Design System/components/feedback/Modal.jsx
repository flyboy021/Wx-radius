import React from "react";

/**
 * Caution modal — the app's centered warning dialog with a scrim.
 * An amber title, body copy, and a single confirm button (danger red by
 * default, matching the "Use extreme caution!" time-mode warning).
 * Mirrors `.modal` / `.modal-box`.
 */
export function Modal({
  open = true,
  title,
  children,
  confirmLabel = "I understand",
  onConfirm,
  tone = "danger", // confirm button tone
}) {
  if (!open) return null;
  const confirmBg =
    tone === "danger" ? "var(--wx-danger)" : "var(--wx-accent)";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--wx-scrim)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "var(--wx-panel-2)",
          border: "1px solid #4a3526",
          borderRadius: "var(--wx-radius-2xl)",
          padding: "22px",
          maxWidth: "330px",
          textAlign: "center",
          boxShadow: "var(--wx-shadow-modal)",
          fontFamily: "var(--wx-font-sans)",
        }}
      >
        {title && (
          <div
            style={{
              color: "var(--wx-amber-soft)",
              fontSize: "var(--wx-text-lg)",
              fontWeight: "var(--wx-weight-extra)",
              marginBottom: "10px",
            }}
          >
            {title}
          </div>
        )}
        <div
          style={{
            color: "var(--wx-text)",
            fontSize: "var(--wx-text-base)",
            lineHeight: "var(--wx-leading-body)",
            marginBottom: "18px",
          }}
        >
          {children}
        </div>
        <button
          onClick={onConfirm}
          style={{
            background: confirmBg,
            color: "#fff",
            border: 0,
            borderRadius: "var(--wx-radius-lg)",
            padding: "11px 20px",
            fontWeight: "var(--wx-weight-extra)",
            fontSize: "var(--wx-text-base)",
            cursor: "pointer",
          }}
        >
          {confirmLabel}
        </button>
      </div>
    </div>
  );
}
