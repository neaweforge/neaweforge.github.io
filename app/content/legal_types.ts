export type LegalDocType = "privacy_policy" | "terms_of_service";

const legalDocTypes: readonly LegalDocType[] = ["privacy_policy", "terms_of_service"];

export function isLegalDocType(value: string): value is LegalDocType {
  return (legalDocTypes as readonly string[]).includes(value);
}

/**
 * One content block within a legal document section. Inline formatting
 * (`<strong>`, `<em>`, `<a>`) is kept as raw HTML on purpose — this is
 * developer-authored legal text, never user input, and re-modeling every
 * bold/italic/link span into structured segments would risk introducing
 * wording drift during a migration that must be word-for-word exact.
 */
export type LegalBlock =
  | { kind: "subtitle"; html: string }
  | { kind: "paragraph"; html: string }
  | { kind: "list"; items: string[] }
  | { kind: "table"; headers?: string[]; rows: string[][] }
  | { kind: "info"; html: string }
  | { kind: "warn"; title: string; html: string };

export interface LegalSection {
  number: string;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDocLanguageContent {
  docTitleLine1: string;
  docTitleLine2: string;
  headerSub: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export interface LegalDoc {
  version: string;
  developer: string;
  application: string;
  en: LegalDocLanguageContent;
  tr: LegalDocLanguageContent;
}
