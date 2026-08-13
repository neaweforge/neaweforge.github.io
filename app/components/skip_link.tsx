import { mainContentId } from "../lib/paths";

// Must be the first focusable element in the document — rendered before
// <Nav> in root.tsx's body. Off-screen via transform (not display:none,
// which would make it unfocusable) until it receives keyboard focus.
export function SkipLink() {
  return (
    <a href={`#${mainContentId}`} className="skip_link">
      <span className="en_inline">Skip to content</span>
      <span className="tr_inline">İçeriğe geç</span>
    </a>
  );
}
