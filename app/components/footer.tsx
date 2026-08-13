import { siteConfig } from "../lib/site_config";

export function Footer() {
  return (
    <footer>
      <div className="footer_inner">
        <div className="footer_copy">
          <div>© 2026 Neawe Forge · Sait Kaplan</div>
          <div>
            <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          </div>
        </div>
        <div className="footer_social">
          <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true">𝕏</span> Twitter
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
