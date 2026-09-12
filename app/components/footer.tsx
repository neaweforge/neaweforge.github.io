import { ContactEmail } from "./contact_email";

// Deliberately minimal: the studio has no social accounts of its own, and
// the founder's personal links live on the founder page rather than in
// site-wide chrome. Email is the only contact channel the site offers.
export function Footer() {
  return (
    <footer>
      <div className="footer_inner">
        <div>© 2026 Neawe Forge</div>
        <ContactEmail />
      </div>
    </footer>
  );
}
