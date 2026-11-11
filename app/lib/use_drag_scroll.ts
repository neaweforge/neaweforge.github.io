import { useEffect, type RefObject } from "react";

// Click-and-drag horizontal scrolling for a mouse pointer: press on the
// element and move to pan it. Touch and pen already pan the element
// natively, so those pointer types are left untouched.
//
// Pointer capture is only taken once the pointer has actually moved a few
// pixels, not on pointerdown itself. Capturing immediately on press used to
// redirect the click that follows a plain (no-movement) press away from
// whatever frame button was underneath it — on mouse, clicking a screenshot
// to open the lightbox silently did nothing, while touch (never captured
// here) worked fine. Delaying capture to the first real move keeps a
// stationary click landing on its actual target.
//
// The listeners are attached in an effect, so during prerender the element
// is just a plain overflow scroller; drag panning switches on at hydration
// with no visual change.
export function useDragScroll<T extends HTMLElement>(ref: RefObject<T | null>): void {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const DRAG_THRESHOLD = 4;
    let pending = false;
    let dragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let pointerId = -1;

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pending = true;
      dragging = false;
      startX = e.clientX;
      startScrollLeft = el.scrollLeft;
      pointerId = e.pointerId;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!pending) return;
      if (!dragging) {
        if (Math.abs(e.clientX - startX) < DRAG_THRESHOLD) return;
        dragging = true;
        el.setPointerCapture(pointerId);
        el.classList.add("is_dragging");
      }
      el.scrollLeft = startScrollLeft - (e.clientX - startX);
    };

    const endDrag = (e: PointerEvent) => {
      pending = false;
      if (!dragging) return;
      dragging = false;
      el.classList.remove("is_dragging");
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    };

    // The browser's native image drag would otherwise hijack the gesture
    // the moment the pointer leaves the press point.
    const onDragStart = (e: DragEvent) => e.preventDefault();

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);
    el.addEventListener("dragstart", onDragStart);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
      el.removeEventListener("dragstart", onDragStart);
    };
  }, [ref]);
}
