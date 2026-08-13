import type { Route } from "./+types/founder";
import { siteConfig } from "../lib/site_config";
import { mainContentId } from "../lib/paths";
import "../styles/founder.css";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Sait Kaplan — Founder, Neawe Forge" },
    {
      name: "description",
      content: "Sait Kaplan — founder and lead developer of Neawe Forge, an independent game studio.",
    },
  ];
}

export default function Founder() {
  return (
    <main className="content" id={mainContentId} tabIndex={-1}>
      <div className="section_eyebrow">
        <span className="en_inline">The Founder</span>
        <span className="tr_inline">Kurucu</span>
      </div>

      <div className="founder_main">
        <div>
          <h1 className="founder_name">Sait Kaplan</h1>
          <div className="founder_role">
            <span className="en_inline">Founder · Software Developer · Game Dev</span>
            <span className="tr_inline">Kurucu · Yazılım Geliştirici · Oyun Geliştirici</span>
          </div>
        </div>

        <div className="kor_hatti_h" />

        <p className="founder_bio en_content">
          I see software not just as a profession, but as a passion. I studied Electrical-Electronics Engineering,
          but felt far more drawn to software and app development — so I followed that path and founded Neawe
          Forge. I specialize in Flutter &amp; Dart, work daily with Supabase, and I'm always chasing the next
          technology worth mastering.
        </p>
        <p className="founder_bio tr_content">
          Yazılımı sadece meslek değil, tutku olarak görüyorum. Elektrik-Elektronik Mühendisliği okudum, fakat
          kendimi yazılım ve uygulama geliştirme tarafına çok daha yakın hissettiğim için yolumu bu alana çevirdim
          ve Neawe Forge'u kurdum. Flutter ve Dart'ta uzmanlaşıyor, Supabase ile çalışıyor ve her zaman öğrenmeye
          değer yeni teknolojilerin peşinden gidiyorum.
        </p>

        <div>
          <h2 className="label_eyebrow">
            <span className="en_inline">Find Me</span>
            <span className="tr_inline">Bana Ulaş</span>
          </h2>
          <div className="social_links">
            <a className="social_btn" href={siteConfig.social.x} target="_blank" rel="noopener noreferrer">
              <span className="social_icon" aria-hidden="true">
                𝕏
              </span>{" "}
              X / Twitter{" "}
              <span className="social_arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a className="social_btn" href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="social_icon" aria-hidden="true">
                in
              </span>{" "}
              LinkedIn{" "}
              <span className="social_arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a className="social_btn" href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
              <span className="social_icon" aria-hidden="true">
                ⬡
              </span>{" "}
              GitHub{" "}
              <span className="social_arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a className="social_btn" href={`mailto:${siteConfig.contactEmail}`}>
              <span className="social_icon" aria-hidden="true">
                @
              </span>{" "}
              Email{" "}
              <span className="social_arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div>
          <h2 className="founder_currently_label">
            <span className="en_inline">Now</span>
            <span className="tr_inline">Şu An</span>
          </h2>
          <p className="founder_currently_text en_content">{siteConfig.studioStatus.en}</p>
          <p className="founder_currently_text tr_content">{siteConfig.studioStatus.tr}</p>
        </div>
      </div>
    </main>
  );
}
