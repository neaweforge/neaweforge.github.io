import { storeCopy } from "../content/site_copy";
import { ContactEmail } from "./contact_email";
import { Localized } from "./localized";

// Deliberately minimal: the studio has no social accounts of its own, and
// personal accounts don't belong in site-wide chrome. Email is the only
// contact channel the site offers. The trademark line is the credit the
// app stores ask for wherever their badges are used (see store_buttons.tsx).
export function Footer() {
  return (
    <footer>
      <div className="footer_inner">
        <div>© 2026 Neawe Forge</div>
        <ContactEmail />
        <Localized className="footer_trademarks" text={storeCopy.trademarks} />
      </div>
    </footer>
  );
}
