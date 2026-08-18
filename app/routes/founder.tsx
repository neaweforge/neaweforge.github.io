import type { Route } from "./+types/founder";
import { siteConfig } from "../lib/site_config";
import { mainContentId, founderPath } from "../lib/paths";
import { buildMeta } from "../lib/seo";
import { usePageTitle } from "../lib/use_page_title";
import "../styles/founder.css";

const title = {
  en: "Sait Kaplan — Founder, Neawe Forge",
  tr: "Sait Kaplan — Neawe Forge Kurucusu",
};
const description = {
  en: "Sait Kaplan — founder and lead developer of Neawe Forge, an independent game studio.",
  tr: "Bağımsız oyun stüdyosu Neawe Forge'un kurucusu ve geliştiricisi Sait Kaplan.",
};

export function meta({ matches }: Route.MetaArgs) {
  return buildMeta({ matches, path: founderPath, title: title.en, description: description.en });
}

export default function Founder() {
  usePageTitle({ title, description });
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
            <a className="reach_link" href={siteConfig.social.x} target="_blank" rel="noopener noreferrer">
              <span className="reach_icon" aria-hidden="true">
                𝕏
              </span>{" "}
              X / Twitter{" "}
              <span className="reach_arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a className="reach_link" href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="reach_icon" aria-hidden="true">
                in
              </span>{" "}
              LinkedIn{" "}
              <span className="reach_arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a className="reach_link" href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
              <span className="reach_icon" aria-hidden="true">
                ⬡
              </span>{" "}
              GitHub{" "}
              <span className="reach_arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a className="reach_link" href={`mailto:${siteConfig.contactEmail}`}>
              <span className="reach_icon" aria-hidden="true">
                @
              </span>{" "}
              Email{" "}
              <span className="reach_arrow" aria-hidden="true">
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
