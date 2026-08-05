import { games } from "../data/games";
import type { LegalDoc, LegalDocType } from "./legal_types";
import { privacyPolicy } from "./words_and_hammers/privacy_policy";
import { termsOfService } from "./words_and_hammers/terms_of_service";

export { isLegalDocType, type LegalDocType } from "./legal_types";

export const legalContent: Record<string, Record<LegalDocType, LegalDoc>> = {
  words_and_hammers: {
    privacy_policy: privacyPolicy,
    terms_of_service: termsOfService,
  },
};

const requiredDocTypes: readonly LegalDocType[] = ["privacy_policy", "terms_of_service"];

/**
 * Every game in games.ts must have both legal docs in `legalContent`,
 * because react-router.config.ts's prerender() generates a real URL for
 * each one unconditionally. Without this check, a missing entry doesn't
 * fail the build — it silently ships a "Not found" page at a URL that
 * might already be submitted to an app store as the privacy policy link.
 * Call this from react-router.config.ts before returning prerender paths.
 */
export function assertLegalContentComplete(): void {
  const missing: string[] = [];
  for (const game of games) {
    const docs = legalContent[game.slug];
    for (const docType of requiredDocTypes) {
      if (!docs || !docs[docType]) {
        missing.push(`${game.slug}/${docType}`);
      }
    }
  }
  if (missing.length > 0) {
    throw new Error(
      `legal_content.ts is missing content for: ${missing.join(", ")}. ` +
        "Every game in app/data/games.ts must have both privacy_policy and " +
        "terms_of_service entries in app/content/legal_content.ts before " +
        "the site can build.",
    );
  }
}
