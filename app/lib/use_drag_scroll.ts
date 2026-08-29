import { useEffect, type RefObject } from "react";

// Click-and-drag horizontal scrolling for a mouse pointer: press on the
// element and move to pan it, no drag threshold — panning starts on the
// first move. Touch and pen already pan the element natively, so those
// pointer types are left untouched.
//
// The listeners are attached in an effect, so during prerender the element
// is just a plain overflow scroller; drag panning switches on at hydration
// with no visual change.
export function useDragScroll<T extends HTMLElement>(ref: RefObject<T | null>): void {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let dragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      dragging = true;
      startX = e.clientX;
      startScrollLeft = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
      el.classList.add("is_dragging");
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      el.scrollLeft = startScrollLeft - (e.clientX - startX);
    };

    const endDrag = (e: PointerEvent) => {
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
