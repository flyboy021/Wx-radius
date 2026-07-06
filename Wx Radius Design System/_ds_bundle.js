/* @ds-bundle: {"format":4,"namespace":"WxRadiusDesignSystem_991f35","components":[{"name":"Button","sourcePath":"components/controls/Button.jsx"},{"name":"SegmentedControl","sourcePath":"components/controls/SegmentedControl.jsx"},{"name":"TextInput","sourcePath":"components/controls/TextInput.jsx"},{"name":"Toggle","sourcePath":"components/controls/Toggle.jsx"},{"name":"Legend","sourcePath":"components/feedback/Legend.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Ribbon","sourcePath":"components/feedback/Ribbon.jsx"},{"name":"FLIGHT_CATEGORIES","sourcePath":"components/weather/CategoryPill.jsx"},{"name":"CATEGORY_COLOR","sourcePath":"components/weather/CategoryPill.jsx"},{"name":"CategoryPill","sourcePath":"components/weather/CategoryPill.jsx"},{"name":"Chip","sourcePath":"components/weather/Chip.jsx"},{"name":"StationCard","sourcePath":"components/weather/StationCard.jsx"},{"name":"Tag","sourcePath":"components/weather/Tag.jsx"}],"sourceHashes":{"components/controls/Button.jsx":"e5abc74fc430","components/controls/SegmentedControl.jsx":"6719c694dc93","components/controls/TextInput.jsx":"3ba3886a4ed1","components/controls/Toggle.jsx":"41c148190532","components/feedback/Legend.jsx":"93842dc19dfb","components/feedback/Modal.jsx":"200419b6dd01","components/feedback/Ribbon.jsx":"19128eaaca80","components/weather/CategoryPill.jsx":"f8b65757f4d4","components/weather/Chip.jsx":"1534c9ff8dc9","components/weather/StationCard.jsx":"62e65758f6ff","components/weather/Tag.jsx":"23b45d474024","ui_kits/vicinity-app/App.jsx":"dd49e18cb7ca","ui_kits/vicinity-app/Chrome.jsx":"493749dc08c9","ui_kits/vicinity-app/ListView.jsx":"f0966c945b4b","ui_kits/vicinity-app/MapBackdrop.jsx":"0e9f46a38bec","ui_kits/vicinity-app/stations.js":"a4cca4553e8f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WxRadiusDesignSystem_991f35 = window.WxRadiusDesignSystem_991f35 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/controls/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vicinity button. Three visual variants matching the app's chrome:
 *  - accent  : blue primary action (the "Go" button)
 *  - ghost   : quiet panel-colored secondary
 *  - cta     : amber "Tip the dev" call-to-action
 *  - danger  : red destructive / modal-confirm
 */
function Button({
  variant = "accent",
  size = "md",
  block = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const heights = {
    sm: "var(--wx-control-md)",
    md: "var(--wx-control-lg)"
  };
  const pad = {
    sm: "0 12px",
    md: "0 16px"
  };
  const font = {
    sm: "var(--wx-text-13)",
    md: "var(--wx-text-15)"
  };
  const variants = {
    accent: {
      background: "var(--wx-accent)",
      color: "#fff",
      border: "0"
    },
    ghost: {
      background: "var(--wx-panel-2)",
      color: "var(--wx-text)",
      border: "1px solid var(--wx-line)"
    },
    cta: {
      background: "var(--wx-amber)",
      color: "var(--wx-amber-ink)",
      border: "0"
    },
    danger: {
      background: "var(--wx-danger)",
      color: "#fff",
      border: "0"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
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
      ...style
    },
    onMouseDown: e => e.currentTarget.style.transform = "translateY(1px)",
    onMouseUp: e => e.currentTarget.style.transform = "",
    onMouseLeave: e => e.currentTarget.style.transform = ""
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Button.jsx", error: String((e && e.message) || e) }); }

// components/controls/SegmentedControl.jsx
try { (() => {
/**
 * Segmented control — a joined row of options with one active segment,
 * used for the 25 / 50 / 100 / Region radius picker and the inline
 * raw/decoded switch. Matches the app's `.seg`.
 *
 * options: [{ value, label }]  ·  value: active value  ·  onChange(value)
 * size: "md" (32px, header) | "sm" (24px, inside cards)
 */
function SegmentedControl({
  options = [],
  value,
  onChange,
  size = "md",
  style
}) {
  const h = size === "sm" ? "var(--wx-control-sm)" : "var(--wx-control-md)";
  const pad = size === "sm" ? "0 9px" : "0 12px";
  const fs = size === "sm" ? "var(--wx-text-sm)" : "var(--wx-text-13)";
  const radius = size === "sm" ? "var(--wx-radius-md)" : "var(--wx-radius-lg)";
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "inline-flex",
      background: "var(--wx-panel-2)",
      border: "1px solid var(--wx-line)",
      borderRadius: radius,
      overflow: "hidden",
      ...style
    }
  }, options.map(opt => {
    const active = opt.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: opt.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(opt.value),
      style: {
        background: active ? "var(--wx-accent)" : "transparent",
        color: active ? "#fff" : "var(--wx-muted)",
        border: "0",
        height: h,
        padding: pad,
        fontFamily: "var(--wx-font-sans)",
        fontSize: fs,
        fontWeight: "var(--wx-weight-bold)",
        cursor: "pointer",
        whiteSpace: "nowrap"
      }
    }, opt.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/controls/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input styled like the app's airport / route search field.
 * Dark panel fill, hairline border, 40px tall. Uppercase entry is
 * common (ICAO ids) so `uppercase` applies the app's autocapitalize hint.
 */
function TextInput({
  uppercase = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    autoCapitalize: uppercase ? "characters" : undefined,
    autoCorrect: "off",
    spellCheck: false,
    style: {
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
      ...style
    },
    onFocus: e => e.currentTarget.style.borderColor = "var(--wx-accent)",
    onBlur: e => e.currentTarget.style.borderColor = "var(--wx-line)"
  }, rest));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/controls/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toggle button — a pill-shaped control that flips between off and on.
 * Off is a quiet panel chip; on fills with the accent (or amber, for the
 * unit/distance toggles). Mirrors the app's `.toggle` / `.toggle.on`.
 */
function Toggle({
  on = false,
  accent = "blue",
  // "blue" | "amber"
  children,
  style,
  ...rest
}) {
  const onFill = accent === "amber" ? {
    background: "var(--wx-amber)",
    color: "var(--wx-amber-ink)",
    borderColor: "var(--wx-amber)"
  } : {
    background: "var(--wx-accent)",
    color: "#fff",
    borderColor: "var(--wx-accent)"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-pressed": on,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      height: "var(--wx-control-md)",
      padding: "0 12px",
      borderRadius: "var(--wx-radius-lg)",
      border: "1px solid var(--wx-line)",
      fontFamily: "var(--wx-font-sans)",
      fontSize: "var(--wx-text-13)",
      fontWeight: "var(--wx-weight-bold)",
      cursor: "pointer",
      whiteSpace: "nowrap",
      background: "var(--wx-panel-2)",
      color: "var(--wx-muted)",
      ...(on ? onFill : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/**
 * Caution modal — the app's centered warning dialog with a scrim.
 * An amber title, body copy, and a single confirm button (danger red by
 * default, matching the "Use extreme caution!" time-mode warning).
 * Mirrors `.modal` / `.modal-box`.
 */
function Modal({
  open = true,
  title,
  children,
  confirmLabel = "I understand",
  onConfirm,
  tone = "danger" // confirm button tone
}) {
  if (!open) return null;
  const confirmBg = tone === "danger" ? "var(--wx-danger)" : "var(--wx-accent)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--wx-scrim)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      padding: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--wx-panel-2)",
      border: "1px solid #4a3526",
      borderRadius: "var(--wx-radius-2xl)",
      padding: "22px",
      maxWidth: "330px",
      textAlign: "center",
      boxShadow: "var(--wx-shadow-modal)",
      fontFamily: "var(--wx-font-sans)"
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--wx-amber-soft)",
      fontSize: "var(--wx-text-lg)",
      fontWeight: "var(--wx-weight-extra)",
      marginBottom: "10px"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--wx-text)",
      fontSize: "var(--wx-text-base)",
      lineHeight: "var(--wx-leading-body)",
      marginBottom: "18px"
    }
  }, children), /*#__PURE__*/React.createElement("button", {
    onClick: onConfirm,
    style: {
      background: confirmBg,
      color: "#fff",
      border: 0,
      borderRadius: "var(--wx-radius-lg)",
      padding: "11px 20px",
      fontWeight: "var(--wx-weight-extra)",
      fontSize: "var(--wx-text-base)",
      cursor: "pointer"
    }
  }, confirmLabel)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/weather/CategoryPill.jsx
try { (() => {
const FLIGHT_CATEGORIES = ["VFR", "MVFR", "IFR", "LIFR"];
const CATEGORY_COLOR = {
  VFR: "var(--wx-vfr)",
  MVFR: "var(--wx-mvfr)",
  IFR: "var(--wx-ifr)",
  LIFR: "var(--wx-lifr)"
};

/**
 * Flight-category pill (VFR / MVFR / IFR / LIFR). The single most
 * important semantic element in Vicinity — a solid color chip that
 * encodes flying conditions at a glance. Mirrors the app's `.taf-pill`
 * (rectangular) and `.chip` (min-width tab beside a station card).
 *
 * variant: "pill" (min-width tab) | "dot" (8px legend dot) | "text"
 */
function CategoryPill({
  category,
  variant = "pill",
  style
}) {
  const cat = (category || "").toUpperCase();
  const color = CATEGORY_COLOR[cat] || "var(--wx-cat-none)";
  if (variant === "dot") {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: color,
        display: "inline-block",
        ...style
      }
    });
  }
  if (variant === "text") {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--wx-font-mono)",
        fontSize: "var(--wx-text-13)",
        fontWeight: "var(--wx-weight-extra)",
        color,
        ...style
      }
    }, cat || "?");
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "46px",
      height: "22px",
      padding: "0 7px",
      borderRadius: "var(--wx-radius-sm)",
      background: color,
      color: "#fff",
      fontFamily: "var(--wx-font-sans)",
      fontSize: "var(--wx-text-sm)",
      fontWeight: "var(--wx-weight-extra)",
      letterSpacing: "0.02em",
      ...style
    }
  }, cat || "?");
}
Object.assign(__ds_scope, { FLIGHT_CATEGORIES, CATEGORY_COLOR, CategoryPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/weather/CategoryPill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Legend.jsx
try { (() => {
/**
 * Flight-category legend — the four-dot key shown in the app footer.
 * Mirrors `.legend`.
 */
function Legend({
  style
}) {
  const items = ["VFR", "MVFR", "IFR", "LIFR"];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      ...style
    }
  }, items.map(cat => /*#__PURE__*/React.createElement("span", {
    key: cat,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "3px",
      fontFamily: "var(--wx-font-sans)",
      fontSize: "var(--wx-text-xs)",
      color: "var(--wx-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CategoryPill, {
    category: cat,
    variant: "dot"
  }), cat)));
}
Object.assign(__ds_scope, { Legend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Legend.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Ribbon.jsx
try { (() => {
/**
 * Advisory ribbon — the thin status strip below the header that surfaces
 * the nearest adverse conditions ("Nearest IFR: KXXX 12 nm NW") or an
 * all-clear. On a route it can carry a "VFR flight not recommended"
 * warning. Mirrors `#ribbon` / `.rb-*`.
 *
 * status: "ok" | "advisory"  ·  when advisory, pass category + message.
 * warn: optional bold red banner text (route "VFR not recommended").
 */
function Ribbon({
  status = "ok",
  category,
  label,
  message,
  warn,
  style
}) {
  const color = __ds_scope.CATEGORY_COLOR[(category || "").toUpperCase()] || "var(--wx-cat-none)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      justifyContent: "space-between",
      background: "var(--wx-panel)",
      borderBottom: "1px solid var(--wx-line)",
      padding: "6px 12px",
      fontFamily: "var(--wx-font-sans)",
      fontSize: "var(--wx-text-13)",
      overflowX: "auto",
      whiteSpace: "nowrap",
      ...style
    }
  }, warn && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--wx-lifr)",
      fontWeight: "var(--wx-weight-extra)"
    }
  }, warn), status === "advisory" ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--wx-muted)",
      fontWeight: "var(--wx-weight-semibold)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color,
      fontWeight: "var(--wx-weight-extra)",
      marginRight: "3px"
    }
  }, label || `Nearest ${(category || "").toUpperCase()}:`), message) : !warn && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--wx-vfr)",
      fontWeight: "var(--wx-weight-bold)"
    }
  }, message || "No IFR in view"));
}
Object.assign(__ds_scope, { Ribbon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Ribbon.jsx", error: String((e && e.message) || e) }); }

// components/weather/Chip.jsx
try { (() => {
/**
 * Waypoint / removable chip — a bold monospace-ish identifier tab with an
 * optional remove button, used in the route planner. Mirrors `.chip-wp`.
 * Set `role` to tint the leading dot dep (green) / dest (red) / via (yellow).
 */
function Chip({
  label,
  role,
  onRemove,
  style
}) {
  const dot = role === "dep" ? "var(--wx-vfr)" : role === "dest" ? "var(--wx-danger)" : role === "via" ? "var(--wx-route)" : null;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      background: "#1b2330",
      border: "1px solid var(--wx-line)",
      borderRadius: "var(--wx-radius-md)",
      padding: onRemove ? "3px 4px 3px 8px" : "3px 8px",
      fontFamily: "var(--wx-font-sans)",
      fontSize: "var(--wx-text-13)",
      fontWeight: "var(--wx-weight-extra)",
      color: "var(--wx-text)",
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: dot,
      flex: "none"
    }
  }), label, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    title: "Remove",
    style: {
      background: "transparent",
      border: "none",
      color: "var(--wx-muted)",
      fontSize: "15px",
      lineHeight: 1,
      cursor: "pointer",
      padding: "0 3px"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/weather/Chip.jsx", error: String((e && e.message) || e) }); }

// components/weather/StationCard.jsx
try { (() => {
/**
 * Station weather card — one reporting station in the list view.
 * A left flight-category accent bar, a category pill, the station id +
 * distance, name, and the raw METAR string in monospace. Mirrors `.card`.
 *
 * Cosmetic recreation: pass the already-formatted `raw` METAR string.
 */
function StationCard({
  icao,
  name,
  distance,
  // e.g. "12 nm away"
  category,
  raw,
  onClick,
  style
}) {
  const cat = (category || "").toUpperCase();
  const color = __ds_scope.CATEGORY_COLOR[cat] || "var(--wx-cat-none)";
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: "flex",
      gap: "10px",
      padding: "10px 12px",
      borderBottom: "1px solid var(--wx-line)",
      borderLeft: `4px solid ${color}`,
      background: "var(--wx-panel)",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CategoryPill, {
    category: cat,
    style: {
      marginTop: "2px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--wx-font-sans)",
      fontSize: "var(--wx-text-md)",
      fontWeight: "var(--wx-weight-extra)",
      letterSpacing: "0.02em",
      color: "var(--wx-text)",
      flex: "none"
    }
  }, icao), distance != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--wx-muted)",
      fontFamily: "var(--wx-font-sans)",
      fontWeight: "var(--wx-weight-medium)",
      fontSize: "var(--wx-text-13)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, distance)), name && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--wx-muted)",
      fontFamily: "var(--wx-font-sans)",
      fontSize: "var(--wx-text-13)",
      margin: "1px 0 5px"
    }
  }, name), raw && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--wx-font-mono)",
      fontSize: "var(--wx-text-13)",
      color: "#cdd6e0",
      lineHeight: "var(--wx-leading-snug)",
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
      marginTop: "3px"
    }
  }, raw)));
}
Object.assign(__ds_scope, { StationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/weather/StationCard.jsx", error: String((e && e.message) || e) }); }

// components/weather/Tag.jsx
try { (() => {
const TONES = {
  metar: {
    background: "var(--wx-metar-bg)",
    color: "var(--wx-metar-fg)"
  },
  taf: {
    background: "var(--wx-taf-bg)",
    color: "var(--wx-taf-fg)"
  },
  atis: {
    background: "var(--wx-atis-bg)",
    color: "var(--wx-atis-fg)"
  },
  neutral: {
    background: "var(--wx-panel-2)",
    color: "var(--wx-muted)"
  }
};

/**
 * Small uppercase data-type tag (METAR / TAF / ATIS). A tiny label pill
 * that prefixes a block of raw aviation data. Mirrors the app's `.tag`.
 */
function Tag({
  tone = "metar",
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      fontFamily: "var(--wx-font-sans)",
      fontSize: "var(--wx-text-xs)",
      fontWeight: "var(--wx-weight-extra)",
      letterSpacing: "var(--wx-tracking-wide)",
      padding: "1px 6px",
      borderRadius: "var(--wx-radius-xs)",
      verticalAlign: "middle",
      ...(TONES[tone] || TONES.neutral),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/weather/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vicinity-app/App.jsx
try { (() => {
// Vicinity — interactive app recreation (orchestrator).
const {
  Button,
  Legend,
  Ribbon,
  Modal
} = window.WxRadiusDesignSystem_991f35;
function Footer({
  updated
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--wx-panel)",
      padding: "8px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "10px",
      borderTop: "1px solid var(--wx-line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--wx-muted)",
      fontSize: "12px",
      fontWeight: 600
    }
  }, updated), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--wx-faint)",
      fontSize: "10px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Legend, null), "Situational awareness only \u2014 not an official weather briefing.")), /*#__PURE__*/React.createElement(Button, {
    variant: "cta"
  }, "\u2615 Tip the dev"));
}
function SettingsPanel({
  onClose
}) {
  const rowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    padding: "6px 2px"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 8px)",
      right: "12px",
      background: "var(--wx-panel)",
      border: "1px solid var(--wx-line)",
      borderRadius: "10px",
      padding: "12px",
      minWidth: "230px",
      boxShadow: "var(--wx-shadow-panel)",
      zIndex: 1200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: rowStyle
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--wx-text)"
    }
  }, "Skip opening sequence"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "var(--wx-panel-2)",
      color: "var(--wx-muted)",
      border: "1px solid var(--wx-line)",
      borderRadius: "8px",
      height: "32px",
      padding: "0 12px",
      fontSize: "13px",
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Off")), /*#__PURE__*/React.createElement("div", {
    style: rowStyle
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--wx-text)"
    }
  }, "Location access", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      color: "var(--wx-muted)",
      fontWeight: 600
    }
  }, "Allowed")), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "var(--wx-panel-2)",
      color: "var(--wx-muted)",
      border: "1px solid var(--wx-line)",
      borderRadius: "8px",
      height: "32px",
      padding: "0 12px",
      fontSize: "13px",
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Reset")), /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    block: true,
    style: {
      marginTop: "8px"
    }
  }, "\u2615 Tip the dev"));
}
function App() {
  const all = window.WX_STATIONS;
  const [radius, setRadius] = React.useState("50");
  const [view, setView] = React.useState("map");
  const [unit, setUnit] = React.useState("C");
  const [windUnit, setWindUnit] = React.useState("KT");
  const [mode, setMode] = React.useState("raw");
  const [radar, setRadar] = React.useState(false);
  const [routeMode, setRouteMode] = React.useState(false);
  const [route, setRoute] = React.useState([{
    id: "KTEB"
  }, {
    id: "KHPN"
  }]);
  const [timeMode, setTimeMode] = React.useState("z");
  const [showTimeWarn, setShowTimeWarn] = React.useState(false);
  const [settings, setSettings] = React.useState(false);
  const [openStn, setOpenStn] = React.useState(null);
  const rNm = {
    "25": 25,
    "50": 50,
    "100": 100,
    region: 999
  }[radius];
  const stations = all.filter(s => s.dist <= rNm);
  const worst = stations.find(s => s.cat === "IFR" || s.cat === "LIFR");
  const toggleTime = () => {
    if (timeMode === "z") {
      setTimeMode("local");
      setShowTimeWarn(true);
    } else setTimeMode("z");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      background: "var(--wx-bg)",
      fontFamily: "var(--wx-font-sans)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      background: "var(--wx-panel)",
      padding: "12px 14px 10px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    zulu: timeMode === "z" ? "19:51Z" : "3:51 PM",
    timeMode: timeMode,
    onToggleTime: toggleTime,
    onGear: () => setSettings(v => !v)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--wx-muted)",
      fontSize: "12px",
      marginTop: "6px"
    }
  }, "Teterboro, NJ \xB7 ", stations.length, " stations within ", radius === "region" ? "region" : radius + " nm"), /*#__PURE__*/React.createElement(SearchBar, {
    value: "",
    onChange: () => {},
    onGo: () => {},
    onGps: () => {}
  }), /*#__PURE__*/React.createElement(ControlsBar, {
    radius: radius,
    onRadius: setRadius,
    view: view,
    onView: () => setView(v => v === "map" ? "list" : "map"),
    route: routeMode,
    onRoute: () => setRouteMode(v => !v),
    radar: radar,
    onRadar: () => setRadar(v => !v),
    unit: unit,
    onUnit: () => setUnit(u => u === "C" ? "F" : "C"),
    windUnit: windUnit,
    onWindUnit: () => setWindUnit(w => w === "KT" ? "MPH" : "KT"),
    mode: mode,
    onMode: () => setMode(m => m === "raw" ? "plain" : "raw")
  }), settings && /*#__PURE__*/React.createElement(SettingsPanel, {
    onClose: () => setSettings(false)
  })), routeMode && /*#__PURE__*/React.createElement(RoutePanel, {
    route: route,
    onRemove: i => setRoute(r => r.filter((_, j) => j !== i)),
    onClear: () => setRoute([])
  }), worst ? /*#__PURE__*/React.createElement(Ribbon, {
    status: "advisory",
    category: worst.cat,
    message: `${worst.icao} ${worst.dist} nm ${worst.bear}`
  }) : /*#__PURE__*/React.createElement(Ribbon, {
    status: "ok",
    message: "No IFR in view"
  }), view === "map" ? /*#__PURE__*/React.createElement(MapBackdrop, {
    stations: stations,
    showLabels: radius !== "region",
    onPick: () => setView("list")
  }) : /*#__PURE__*/React.createElement(StationList, {
    stations: stations,
    open: openStn,
    mode: mode,
    onToggle: id => setOpenStn(o => o === id ? null : id)
  }), /*#__PURE__*/React.createElement(Footer, {
    updated: "Updated 19:51Z \xB7 auto-refresh 5 min"
  }), /*#__PURE__*/React.createElement(Modal, {
    open: showTimeWarn,
    title: "\u26A0 Use extreme caution!",
    confirmLabel: "I understand",
    onConfirm: () => setShowTimeWarn(false)
  }, "All times on this page are now shown in ", /*#__PURE__*/React.createElement("b", null, "LOCAL time"), ", not Zulu (UTC). Aviation weather is normally read in Zulu \u2014 double-check before using."));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vicinity-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vicinity-app/Chrome.jsx
try { (() => {
// Header + search + controls chrome for the Vicinity UI kit.
const {
  Button,
  Toggle,
  SegmentedControl,
  TextInput
} = window.WxRadiusDesignSystem_991f35;
function GearIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 13a7.97 7.97 0 0 0 0-2l2.04-1.58a.5.5 0 0 0 .12-.64l-1.93-3.34a.5.5 0 0 0-.6-.22l-2.4.97a8 8 0 0 0-1.73-1l-.36-2.55a.5.5 0 0 0-.5-.43h-3.86a.5.5 0 0 0-.5.43l-.36 2.55a8 8 0 0 0-1.73 1l-2.4-.97a.5.5 0 0 0-.6.22L2.66 8.78a.5.5 0 0 0 .12.64L4.82 11a7.97 7.97 0 0 0 0 2l-2.04 1.58a.5.5 0 0 0-.12.64l1.93 3.34a.5.5 0 0 0 .6.22l2.4-.97a8 8 0 0 0 1.73 1l.36 2.55a.5.5 0 0 0 .5.43h3.86a.5.5 0 0 0 .5-.43l.36-2.55a8 8 0 0 0 1.73-1l2.4.97a.5.5 0 0 0 .6-.22l1.93-3.34a.5.5 0 0 0-.12-.64L19.4 13z"
  }));
}
function GpsIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.6",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "22"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "5",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "19",
    y1: "12",
    x2: "22",
    y2: "12"
  }));
}
function RadarIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "15",
    height: "15",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "12",
    x2: "12",
    y2: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "8",
    r: "1.5",
    fill: "currentColor",
    stroke: "none"
  }));
}
function Header({
  zulu,
  timeMode,
  onToggleTime,
  onGear
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "18px",
      margin: 0,
      fontWeight: 700,
      flex: 1,
      color: "var(--wx-text)"
    }
  }, "Vicinity"), /*#__PURE__*/React.createElement("span", {
    role: "button",
    onClick: onToggleTime,
    style: {
      background: timeMode === "local" ? "var(--wx-amber-soft)" : "var(--wx-panel-2)",
      color: timeMode === "local" ? "var(--wx-amber-ink)" : "#cdd6e0",
      border: timeMode === "local" ? "1px solid var(--wx-amber-soft)" : "1px solid #33405440",
      borderRadius: "var(--wx-radius-pill)",
      padding: "6px 16px",
      fontWeight: 700,
      fontSize: "15px",
      letterSpacing: ".04em",
      fontVariantNumeric: "tabular-nums",
      cursor: "pointer",
      userSelect: "none",
      whiteSpace: "nowrap",
      boxShadow: "var(--wx-shadow-1)"
    }
  }, zulu), /*#__PURE__*/React.createElement("button", {
    onClick: onGear,
    title: "Settings",
    style: {
      background: "transparent",
      border: 0,
      color: "var(--wx-text)",
      padding: "4px",
      borderRadius: "8px",
      display: "flex",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(GearIcon, null)));
}
function SearchBar({
  value,
  onChange,
  onGo,
  onGps
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      marginTop: "10px"
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    uppercase: true,
    value: value,
    onChange: e => onChange(e.target.value),
    onKeyDown: e => e.key === "Enter" && onGo(),
    placeholder: "Airport id (e.g. JFK) or route: KJFK KORD KDEN",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: onGo
  }, "Go"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onGps,
    title: "Find my location",
    style: {
      padding: 0,
      width: "44px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#cdd6e0",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(GpsIcon, null))));
}
function ControlsBar({
  radius,
  onRadius,
  view,
  onView,
  route,
  onRoute,
  radar,
  onRadar,
  unit,
  onUnit,
  windUnit,
  onWindUnit,
  mode,
  onMode
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginTop: "10px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    value: radius,
    onChange: onRadius,
    options: [{
      value: "25",
      label: "25"
    }, {
      value: "50",
      label: "50"
    }, {
      value: "100",
      label: "100"
    }, {
      value: "region",
      label: "Region"
    }]
  }), /*#__PURE__*/React.createElement(Toggle, {
    on: route,
    onClick: onRoute
  }, "Route"), /*#__PURE__*/React.createElement(Toggle, {
    on: view === "list",
    onClick: onView
  }, "List"), /*#__PURE__*/React.createElement(Toggle, {
    on: radar,
    onClick: onRadar
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px"
    }
  }, /*#__PURE__*/React.createElement(RadarIcon, null), "Radar")), /*#__PURE__*/React.createElement(Toggle, {
    on: unit === "F",
    accent: "amber",
    onClick: onUnit
  }, "\xB0", unit), /*#__PURE__*/React.createElement(Toggle, {
    on: windUnit === "MPH",
    accent: "amber",
    onClick: onWindUnit,
    title: "Wind speed units (knots / miles per hour)"
  }, windUnit), /*#__PURE__*/React.createElement(Toggle, {
    on: mode === "plain",
    onClick: onMode,
    title: "Show raw or decoded weather"
  }, mode === "plain" ? "Plain" : "Raw"));
}
Object.assign(window, {
  Header,
  SearchBar,
  ControlsBar,
  GpsIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vicinity-app/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vicinity-app/ListView.jsx
try { (() => {
// List view + expandable decoded detail + route planner panel.
const {
  StationCard,
  CategoryPill,
  Tag,
  Chip,
  Ribbon
} = window.WxRadiusDesignSystem_991f35;
function DecodedGrid({
  s
}) {
  const row = (k, v) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "15px",
      color: "var(--wx-text)",
      margin: "2px 0"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--wx-muted)",
      fontWeight: 600,
      marginRight: "8px",
      fontSize: "11px",
      textTransform: "uppercase",
      letterSpacing: ".04em"
    }
  }, k), v);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 12px 12px 26px",
      background: "var(--wx-panel)",
      borderBottom: "1px solid var(--wx-line)",
      borderLeft: `4px solid ${{
        VFR: "#11a911",
        MVFR: "#2b6fff",
        IFR: "#e0152b",
        LIFR: "#d017d0"
      }[s.cat]}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      alignItems: "center",
      padding: "2px 0 8px"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "metar"
  }, "METAR"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--wx-font-mono)",
      fontSize: "12px",
      color: "#8a97a6"
    }
  }, "decoded")), row("Wind", s.wind), row("Visibility", s.vis), row("Sky", s.sky), row("Temp", `${s.temp}  ·  Dew ${s.dew}`), row("Altimeter", s.alt));
}
function StationList({
  stations,
  open,
  onToggle,
  mode = "raw"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflow: "auto"
    }
  }, stations.map(s => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.icao
  }, /*#__PURE__*/React.createElement(StationCard, {
    icao: s.icao,
    name: s.name,
    category: s.cat,
    distance: `${s.dist} nm ${s.bear}`,
    raw: mode === "raw" ? s.raw : undefined,
    onClick: () => onToggle(s.icao)
  }), (mode === "plain" || open === s.icao) && /*#__PURE__*/React.createElement(DecodedGrid, {
    s: s
  }))));
}
function RoutePanel({
  route,
  onRemove,
  onClear
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--wx-panel)",
      borderBottom: "1px solid var(--wx-line)",
      padding: "8px 12px",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      flexWrap: "wrap",
      flex: 1
    }
  }, route.map((wp, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: wp.id
  }, /*#__PURE__*/React.createElement(Chip, {
    label: wp.id,
    role: i === 0 ? "dep" : i === route.length - 1 ? "dest" : "via",
    onRemove: () => onRemove(i)
  }), i < route.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--wx-muted)",
      fontSize: "13px"
    }
  }, "\u2192"))), !route.length && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--wx-muted)",
      fontSize: "13px"
    }
  }, "Type ids in the search box, e.g. KTEB KHPN")), /*#__PURE__*/React.createElement("button", {
    onClick: onClear,
    style: {
      background: "transparent",
      color: "var(--wx-muted)",
      border: "1px solid var(--wx-line)",
      borderRadius: "7px",
      padding: "6px 11px",
      fontSize: "13px",
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Clear")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--wx-muted)",
      fontSize: "12px"
    }
  }, "Use the radius buttons above for corridor width"));
}
Object.assign(window, {
  StationList,
  RoutePanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vicinity-app/ListView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vicinity-app/MapBackdrop.jsx
try { (() => {
// Faux CARTO-dark map backdrop with station pins, radius circle & pulsing "you" marker.
const {
  CATEGORY_COLOR
} = window.WxRadiusDesignSystem_991f35;
function StationPin({
  s,
  showLabel,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      position: "absolute",
      left: s.x + "%",
      top: s.y + "%",
      transform: "translate(-50%,-50%)",
      display: "flex",
      alignItems: "center",
      gap: "3px",
      whiteSpace: "nowrap",
      cursor: "pointer",
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "16px",
      height: "16px",
      borderRadius: "50%",
      background: CATEGORY_COLOR[s.cat],
      border: "2px solid #fff",
      boxShadow: "0 0 0 1px #0006",
      flex: "none"
    }
  }), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 800,
      color: "#fff",
      textShadow: "0 0 3px #000, 0 1px 2px #000"
    }
  }, s.icao));
}
function MapBackdrop({
  stations,
  showLabels,
  onPick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      minHeight: 0,
      overflow: "hidden",
      background: "var(--wx-map)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(#5d708822 1px, transparent 1px), linear-gradient(90deg, #5d708822 1px, transparent 1px)",
      backgroundSize: "64px 64px"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    },
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,40 C120,70 260,30 420,80 S760,60 1000,110",
    fill: "none",
    stroke: "#5d7088",
    strokeOpacity: "0.5",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120,300 C260,240 380,320 560,270 S820,300 1000,250",
    fill: "none",
    stroke: "#5d7088",
    strokeOpacity: "0.4",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      width: "62%",
      aspectRatio: "1",
      borderRadius: "50%",
      border: "1.5px solid #2b6fff99",
      background: "#2b6fff10",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      zIndex: 4,
      width: "16px",
      height: "16px",
      borderRadius: "50%",
      background: "#fff",
      border: "3px solid #0d1117",
      boxShadow: "0 0 0 2px #ffffff99, 0 0 12px #ffffffcc"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: "16px",
      height: "16px",
      margin: "-8px 0 0 -8px",
      borderRadius: "50%",
      background: "#ffffff66",
      animation: "wxpulse 1.8s ease-out infinite"
    }
  })), stations.map(s => /*#__PURE__*/React.createElement(StationPin, {
    key: s.icao,
    s: s,
    showLabel: showLabels,
    onClick: () => onPick(s)
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes wxpulse{0%{transform:scale(1);opacity:.7}100%{transform:scale(3.2);opacity:0}}`));
}
Object.assign(window, {
  MapBackdrop
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vicinity-app/MapBackdrop.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vicinity-app/stations.js
try { (() => {
// Sample station data for the Vicinity UI kit (NYC area, ~fictional current obs).
// Shape mirrors what the real app derives from the AWC METAR feed.
window.WX_STATIONS = [{
  icao: "KTEB",
  name: "Teterboro",
  dist: 8,
  bear: "N",
  cat: "MVFR",
  x: 44,
  y: 34,
  raw: "METAR KTEB 211951Z 21014G22KT 6SM BR BKN012 18/16 A2988",
  wind: "210° at 14 kt, gusts 22 kt",
  vis: "6 sm",
  sky: "Broken 1,200 ft",
  temp: "18°C",
  dew: "16°C",
  alt: '29.88" Hg'
}, {
  icao: "KEWR",
  name: "Newark Liberty Intl",
  dist: 12,
  bear: "SW",
  cat: "IFR",
  x: 33,
  y: 58,
  raw: "METAR KEWR 211951Z 18016G26KT 2SM +RA OVC008 17/16 A2985",
  wind: "180° at 16 kt, gusts 26 kt",
  vis: "2 sm",
  sky: "Overcast 800 ft",
  temp: "17°C",
  dew: "16°C",
  alt: '29.85" Hg'
}, {
  icao: "KLGA",
  name: "LaGuardia",
  dist: 14,
  bear: "E",
  cat: "VFR",
  x: 66,
  y: 44,
  raw: "METAR KLGA 211951Z 20010KT 10SM FEW045 21/12 A2991",
  wind: "200° at 10 kt",
  vis: "10 sm",
  sky: "Few 4,500 ft",
  temp: "21°C",
  dew: "12°C",
  alt: '29.91" Hg'
}, {
  icao: "KJFK",
  name: "John F Kennedy Intl",
  dist: 19,
  bear: "SE",
  cat: "VFR",
  x: 74,
  y: 66,
  raw: "METAR KJFK 211951Z 20012KT 10SM FEW250 21/12 A2991",
  wind: "200° at 12 kt",
  vis: "10 sm",
  sky: "Few 25,000 ft",
  temp: "21°C",
  dew: "12°C",
  alt: '29.91" Hg'
}, {
  icao: "KHPN",
  name: "Westchester County",
  dist: 22,
  bear: "NE",
  cat: "LIFR",
  x: 72,
  y: 20,
  raw: "METAR KHPN 211951Z 16008KT 1/2SM FG OVC003 16/16 A2987",
  wind: "160° at 8 kt",
  vis: "1/2 sm",
  sky: "Overcast 300 ft",
  temp: "16°C",
  dew: "16°C",
  alt: '29.87" Hg'
}, {
  icao: "KCDW",
  name: "Essex County",
  dist: 16,
  bear: "W",
  cat: "VFR",
  x: 20,
  y: 40,
  raw: "METAR KCDW 211951Z 22009KT 10SM SCT050 20/13 A2990",
  wind: "220° at 9 kt",
  vis: "10 sm",
  sky: "Scattered 5,000 ft",
  temp: "20°C",
  dew: "13°C",
  alt: '29.90" Hg'
}, {
  icao: "KFRG",
  name: "Republic",
  dist: 31,
  bear: "E",
  cat: "MVFR",
  x: 88,
  y: 54,
  raw: "METAR KFRG 211951Z 19011KT 5SM HZ BKN030 22/14 A2990",
  wind: "190° at 11 kt",
  vis: "5 sm",
  sky: "Broken 3,000 ft",
  temp: "22°C",
  dew: "14°C",
  alt: '29.90" Hg'
}, {
  icao: "KMMU",
  name: "Morristown Muni",
  dist: 27,
  bear: "W",
  cat: "VFR",
  x: 10,
  y: 52,
  raw: "METAR KMMU 211951Z 23008KT 10SM CLR 21/11 A2991",
  wind: "230° at 8 kt",
  vis: "10 sm",
  sky: "Sky clear",
  temp: "21°C",
  dew: "11°C",
  alt: '29.91" Hg'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vicinity-app/stations.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Legend = __ds_scope.Legend;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Ribbon = __ds_scope.Ribbon;

__ds_ns.FLIGHT_CATEGORIES = __ds_scope.FLIGHT_CATEGORIES;

__ds_ns.CATEGORY_COLOR = __ds_scope.CATEGORY_COLOR;

__ds_ns.CategoryPill = __ds_scope.CategoryPill;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.StationCard = __ds_scope.StationCard;

__ds_ns.Tag = __ds_scope.Tag;

})();
