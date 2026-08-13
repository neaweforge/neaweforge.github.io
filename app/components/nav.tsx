import { useEffect, useRef, useState } from "react";
import { Link, useMatches } from "react-router";
import { founderPath, founderRouteId, homePath, legalPageRouteId } from "../lib/paths";
import { SettingsControls } from "./settings_controls";

export function Nav() {
  const matches = useMatches();
  const [panelOpen, setPanelOpen] = useState(false);
  const panelWrapRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  // Legal pages must stay minimal — brand + controls only, no nav links —
  // so they render cleanly when opened standalone inside an app's webview.
  // The founder page's own nav shouldn't link back to itself either.
  const hideNavCenter = matches.some(
    (match) => match.id === legalPageRouteId || match.id === founderRouteId,
  );

  useEffect(() => {
    if (!panelOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!panelWrapRef.current?.contains(event.target as Node)) {
        setPanelOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPanelOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [panelOpen]);

  return (
    <nav className="nav" aria-label="Main navigation / Ana gezinme">
      <Link to={homePath} className="nav_logo">
        Neawe <span className="forge">Forge</span>
      </Link>
      {!hideNavCenter && (
        <>
          <span className="nav_divider" />
          <div className="nav_center">
            <Link className="nav_link" to={founderPath}>
              <span className="en_inline">Founder</span>
              <span className="tr_inline">Kurucu</span>
            </Link>
          </div>
        </>
      )}
      <div className="nav_right">
        {/* Desktop: controls sit directly in the bar, labeled so the two
            "Auto" buttons are distinguishable. Hidden below the breakpoint
            in nav.css — there's no room to spare and no 44px touch target
            to give them there. */}
        <div className="settings_inline">
          <SettingsControls />
        </div>
        {/* Mobile: same controls, collected behind one button so the nav
            stays a single row and each control gets a real touch target
            once it's expanded into the panel below. */}
        <div className="settings_popover_wrap" ref={panelWrapRef}>
          <button
            ref={toggleRef}
            type="button"
            className="settings_toggle"
            aria-expanded={panelOpen}
            aria-haspopup="dialog"
            aria-controls="nav_settings_panel"
            aria-label="Settings / Ayarlar"
            onClick={() => setPanelOpen((open) => !open)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
          {panelOpen && (
            <div id="nav_settings_panel" className="settings_panel" role="dialog" aria-label="Settings / Ayarlar">
              <SettingsControls />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
