import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import type { GameScreenshot } from "../data/games";
import { galleryCopy, gamesCopy } from "../content/site_copy";
import { useDragScroll } from "../lib/use_drag_scroll";
import { Localized, bilingualLabel } from "./localized";
import "../styles/gallery.css";

// Both <img>s point at the same file; only the alt text differs per language,
// and base.css's .en_content / .tr_content toggles which one is shown.
function ShotImg({ shot, eager = false }: { shot: GameScreenshot; eager?: boolean }) {
  const loading = eager ? "eager" : "lazy";
  return (
    <>
      <img className="game_shot en_content" src={shot.src} alt={shot.alt.en} width={620} height={1342} loading={loading} />
      <img className="game_shot tr_content" src={shot.src} alt={shot.alt.tr} width={620} height={1342} loading={loading} />
    </>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  const d = direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7";
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

interface GameGalleryProps {
  shots: GameScreenshot[];
  gameName: string;
}

// Horizontal scroll-snap strip with explicit affordances: arrows, dot
// pagination, a counter, and a click-to-enlarge <dialog> lightbox. Touch
// pans the strip natively; useDragScroll adds mouse drag-panning; the
// arrows and dots make it keyboard-reachable. The <dialog> element gives
// the lightbox focus trapping and Esc-to-close for free.
export function GameGallery({ shots, gameName }: GameGalleryProps) {
  const stripRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pressX = useRef(0);
  // Paging is measured in screenfuls, not frames. Frames are far narrower
  // than the strip, so most frames' start offsets sit past the maximum
  // scroll offset — one dot per frame would leave the middle dots pointing
  // at positions the strip can never rest at.
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  useDragScroll(stripRef);

  const count = shots.length;

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const sync = () => {
      const max = strip.scrollWidth - strip.clientWidth;
      const pageCount = max > 1 ? Math.ceil(strip.scrollWidth / strip.clientWidth) : 1;
      setPages(pageCount);
      setPage(pageCount > 1 ? Math.round((strip.scrollLeft / max) * (pageCount - 1)) : 0);
    };

    sync();
    strip.addEventListener("scroll", sync, { passive: true });
    // How many pages there are depends on the strip's width, which changes
    // with the viewport — the controls have to follow it.
    const observer = new ResizeObserver(sync);
    observer.observe(strip);
    return () => {
      strip.removeEventListener("scroll", sync);
      observer.disconnect();
    };
  }, [count]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open !== null && !dialog.open) dialog.showModal();
    if (open === null && dialog.open) dialog.close();
  }, [open]);

  function scrollToPage(index: number) {
    const strip = stripRef.current;
    if (!strip || pages < 2) return;
    const max = strip.scrollWidth - strip.clientWidth;
    const target = Math.min(pages - 1, Math.max(0, index));
    strip.scrollTo({ left: (max * target) / (pages - 1), behavior: "smooth" });
  }

  function step(delta: number) {
    scrollToPage(page + delta);
  }

  // A mouse drag-pan ends on top of a frame and fires a click — only open
  // the lightbox if the pointer barely moved since it was pressed.
  function handleFrameClick(event: MouseEvent, index: number) {
    if (Math.abs(event.clientX - pressX.current) > 6) return;
    setOpen(index);
  }

  function handleDialogClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) setOpen(null);
  }

  function handleDialogKey(event: KeyboardEvent<HTMLDialogElement>) {
    if (open === null) return;
    if (event.key === "ArrowLeft") setOpen(Math.max(0, open - 1));
    if (event.key === "ArrowRight") setOpen(Math.min(count - 1, open + 1));
  }

  if (count === 0) {
    return (
      <div className="game_shot_frame">
        <div className="game_shot_placeholder">
          <Localized inline text={gamesCopy.screenshotSoon} />
        </div>
      </div>
    );
  }

  const openShot = open !== null ? shots[open] : undefined;

  return (
    <div className="gallery">
      <div
        ref={stripRef}
        className="game_shot_strip"
        role="group"
        aria-label={`${gameName} screenshots`}
        onPointerDown={(event) => {
          pressX.current = event.clientX;
        }}
      >
        {shots.map((shot, index) => (
          <button
            type="button"
            className="game_shot_frame"
            key={shot.src}
            aria-label={`${bilingualLabel(galleryCopy.enlarge)} ${index + 1}/${count}`}
            onClick={(event) => handleFrameClick(event, index)}
          >
            <ShotImg shot={shot} />
          </button>
        ))}
      </div>

      {pages > 1 && (
        <div className="gallery_controls">
          <button
            type="button"
            className="gallery_arrow"
            aria-label={bilingualLabel(galleryCopy.previous)}
            disabled={page === 0}
            onClick={() => step(-1)}
          >
            <Arrow direction="left" />
          </button>
          <div className="gallery_dots" role="group" aria-label={`${gameName} screenshot pages`}>
            {Array.from({ length: pages }, (_, index) => (
              <button
                type="button"
                key={index}
                className={`gallery_dot${index === page ? " active" : ""}`}
                aria-label={`${index + 1} / ${pages}`}
                aria-current={index === page ? "true" : undefined}
                onClick={() => scrollToPage(index)}
              />
            ))}
          </div>
          <span className="gallery_count" aria-hidden="true">
            {page + 1} / {pages}
          </span>
          <button
            type="button"
            className="gallery_arrow"
            aria-label={bilingualLabel(galleryCopy.next)}
            disabled={page === pages - 1}
            onClick={() => step(1)}
          >
            <Arrow direction="right" />
          </button>
        </div>
      )}

      <dialog
        ref={dialogRef}
        className="gallery_dialog"
        aria-label={`${gameName} screenshot`}
        onClose={() => setOpen(null)}
        onClick={handleDialogClick}
        onKeyDown={handleDialogKey}
      >
        {openShot && (
          <div className="gallery_dialog_body">
            <div className="gallery_dialog_frame">
              <ShotImg shot={openShot} eager />
            </div>
            <div className="gallery_dialog_bar">
              <button
                type="button"
                className="gallery_arrow"
                aria-label={bilingualLabel(galleryCopy.previous)}
                disabled={open === 0}
                onClick={() => setOpen(Math.max(0, (open ?? 0) - 1))}
              >
                <Arrow direction="left" />
              </button>
              <span className="gallery_count">
                {(open ?? 0) + 1} / {count}
              </span>
              <button
                type="button"
                className="gallery_arrow"
                aria-label={bilingualLabel(galleryCopy.next)}
                disabled={open === count - 1}
                onClick={() => setOpen(Math.min(count - 1, (open ?? 0) + 1))}
              >
                <Arrow direction="right" />
              </button>
              <button type="button" className="gallery_close" onClick={() => setOpen(null)}>
                <Localized inline text={galleryCopy.close} />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
