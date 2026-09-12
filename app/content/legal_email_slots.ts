import { contactEmailAddress } from "../lib/contact";
import type { LegalBlock, LegalDoc, LegalDocLanguageContent, LegalSection } from "./legal_types";

/**
 * Replaces the contact address with an empty placeholder span everywhere in
 * a legal document, leaving the wording otherwise byte-identical.
 *
 * This runs in the route's loader, not the view, on purpose: the loader's
 * return value is what gets serialized into the prerendered HTML and the
 * `_.data` payload beside it. Sanitizing at render time cleans the visible
 * markup but leaves the address sitting in that serialized copy, which is
 * just as scrapeable. components/legal_doc_view.tsx fills the placeholders
 * with a real mailto link after hydration, so a visitor sees no difference.
 *
 * The source text under app/content/<game>/ is never modified — this is a
 * delivery-mechanism change, not a content change.
 */
export const emailSlotHtml = '<span class="email_slot"></span>';

function slot(text: string): string {
  return text.split(contactEmailAddress()).join(emailSlotHtml);
}

function slotBlock(block: LegalBlock): LegalBlock {
  switch (block.kind) {
    case "subtitle":
    case "paragraph":
    case "info":
      return { ...block, html: slot(block.html) };
    case "warn":
      return { ...block, title: slot(block.title), html: slot(block.html) };
    case "list":
      return { ...block, items: block.items.map(slot) };
    case "table":
      return { ...block, rows: block.rows.map((row) => row.map(slot)) };
  }
}

function slotSection(section: LegalSection): LegalSection {
  return { ...section, title: slot(section.title), blocks: section.blocks.map(slotBlock) };
}

function slotContent(content: LegalDocLanguageContent): LegalDocLanguageContent {
  return { ...content, sections: content.sections.map(slotSection) };
}

export function withEmailSlots(doc: LegalDoc): LegalDoc {
  return { ...doc, en: slotContent(doc.en), tr: slotContent(doc.tr) };
}
