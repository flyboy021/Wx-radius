import React from "react";

/**
 * Text input styled like the app's airport / route search field.
 * Dark panel fill, hairline border, 40px tall. Uppercase entry is
 * common (ICAO ids) so `uppercase` applies the app's autocapitalize hint.
 */
export function TextInput({ uppercase = false, style, ...rest }) {
  return (
    <input
      autoCapitalize={uppercase ? "characters" : undefined}
      autoCorrect="off"
      spellCheck={false}
      style={{
        background: "var(--wx-panel-2)",
        border: "1px solid var(--wx-line)",
        color: "var(--wx-text)",
        borderRadius: "var(--wx-radius-lg)",
        height: "var(--wx-control-lg)",
        padding: "0 12px",
        fontFamily: "var(--wx-font-sans)",
        fontSize: "var(--wx-text-15)",
        outline: "none",
        minWidth: 0,
        ...style,
      }}
      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--wx-accent)")}
      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--wx-line)")}
      {...rest}
    />
  );
}
