import { Link, useMatches } from "react-router";
import { useThemeLang } from "../lib/theme_lang_context";

export function Nav() {
  const { theme, lang, setTheme, setLang } = useThemeLang();
  const matches = useMatches();
  // Legal pages must stay minimal — brand + controls only, no nav links —
  // so they render cleanly when opened standalone inside an app's webview.
  const isLegalPage = matches.some((match) => match.id === "routes/legal_page");

  return (
    <nav className="nav">
      <Link to="/" className="nav_logo">
        Neawe <span className="forge">Forge</span>
      </Link>
      {!isLegalPage && (
        <>
          <span className="nav_divider" />
          <div className="nav_center">
            <Link className="nav_link" to="/founder">
              <span className="en_inline">Founder</span>
              <span className="tr_inline">Kurucu</span>
            </Link>
          </div>
        </>
      )}
      <div className="nav_right">
        <button
          type="button"
          className={`ctrl_btn${lang === "auto" ? " active" : ""}`}
          onClick={() => setLang("auto")}
          title="Auto (Browser)"
        >
          Auto
        </button>
        <button
          type="button"
          className={`ctrl_btn${lang === "en" ? " active" : ""}`}
          onClick={() => setLang("en")}
        >
          EN
        </button>
        <button
          type="button"
          className={`ctrl_btn${lang === "tr" ? " active" : ""}`}
          onClick={() => setLang("tr")}
        >
          TR
        </button>
        <div className="ctrl_divider" />
        <button
          type="button"
          className={`ctrl_btn${theme === "auto" ? " active" : ""}`}
          onClick={() => setTheme("auto")}
          title="Auto (OS)"
        >
          Auto
        </button>
        <button
          type="button"
          className={`ctrl_btn ctrl_icon${theme === "dark" ? " active" : ""}`}
          onClick={() => setTheme("dark")}
          title="Dark"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
        <button
          type="button"
          className={`ctrl_btn ctrl_icon${theme === "light" ? " active" : ""}`}
          onClick={() => setTheme("light")}
          title="Light"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="4.5" />
            <line x1="12" y1="1.5" x2="12" y2="3.8" />
            <line x1="12" y1="20.2" x2="12" y2="22.5" />
            <line x1="4.9" y1="4.9" x2="6.5" y2="6.5" />
            <line x1="17.5" y1="17.5" x2="19.1" y2="19.1" />
            <line x1="1.5" y1="12" x2="3.8" y2="12" />
            <line x1="20.2" y1="12" x2="22.5" y2="12" />
            <line x1="4.9" y1="19.1" x2="6.5" y2="17.5" />
            <line x1="17.5" y1="6.5" x2="19.1" y2="4.9" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
