import { gamesCopy, storeCopy } from "../content/site_copy";
import type { LocalizedText } from "../data/games";
import { Localized } from "./localized";
import "../styles/store_buttons.css";

// Official store badges only. Both stores' brand rules forbid using their
// icons on their own in marketing (Apple: "Use only the badge artwork
// provided in these guidelines"; Google: "Don't use the icon in marketing
// materials") and forbid altering a badge in any way (no recolouring,
// cropping or rearranging). So the files in public/img/brand/ are the
// untouched official downloads, one per language, and a store without a
// link yet gets a plain-text "coming soon" line — never a greyed-out badge.
// Apple asks for credit lines wherever the site gives legal notice; they
// live in the footer (storeCopy.trademarks).
type Store = "ios" | "android";

// Intrinsic sizes of the official files, so the browser reserves the right
// width before the image loads (CSS sets the height, the ratio comes from
// these): Apple's SVG viewBoxes and Google's 646x250 PNGs.
const badges: Record<Store, { src: LocalizedText; alt: LocalizedText; name: string; size: { en: [number, number]; tr: [number, number] } }> = {
  ios: {
    src: { en: "/img/brand/app_store_badge_en.svg", tr: "/img/brand/app_store_badge_tr.svg" },
    size: { en: [120, 40], tr: [151, 40] },
    alt: storeCopy.appStoreBadge,
    name: "App Store",
  },
  android: {
    src: { en: "/img/brand/google_play_badge_en.png", tr: "/img/brand/google_play_badge_tr.png" },
    size: { en: [646, 250], tr: [646, 250] },
    alt: storeCopy.googlePlayBadge,
    name: "Play Store",
  },
};

function StoreBadge({ store, url }: { store: Store; url: string | null }) {
  const { src, alt, name, size } = badges[store];
  if (!url) {
    return (
      <span className="store_soon">
        <span className="store_soon_name">{name}</span>
        <Localized inline className="store_soon_note" text={gamesCopy.soon} />
      </span>
    );
  }
  return (
    <a className="store_badge" href={url} target="_blank" rel="noopener noreferrer">
      <img className={`store_badge_img ${store}_en en_content`} src={src.en} alt={alt.en} width={size.en[0]} height={size.en[1]} />
      <img className={`store_badge_img ${store}_tr tr_content`} src={src.tr} alt={alt.tr} width={size.tr[0]} height={size.tr[1]} />
    </a>
  );
}

// One badge pair, used identically on the home card and the game page:
// App Store always left, Google Play always right.
export function StoreButtons({ ios, android }: { ios: string | null; android: string | null }) {
  return (
    <div className="store_buttons">
      <StoreBadge store="ios" url={ios} />
      <StoreBadge store="android" url={android} />
    </div>
  );
}
