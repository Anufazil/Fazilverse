import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the element matching the URL hash after navigation
// (e.g. arriving at "/#about" from a different route).
export function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

    function computeTarget(el) {
      const scrollPaddingTop =
        parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      return el.getBoundingClientRect().top + window.scrollY - scrollPaddingTop;
    }

    function scrollToTarget(el) {
      // Deliberately not el.scrollIntoView(): that walks the full
      // ancestor chain for scrollable containers, and an
      // overflow-hidden layout wrapper (used elsewhere for clipping
      // decorative background elements) can register as one — some
      // of the scroll distance then goes into that container's own
      // invisible internal offset instead of the actual page scroll,
      // which was causing scrolling to stall partway there.
      // Computing the window scroll target directly avoids the
      // ancestor chain entirely.
      window.scrollTo({ top: computeTarget(el), behavior: "smooth" });

      // Sections further down the page can still be a handful of
      // pixels short after the animation "finishes" — late-loading
      // web fonts reflow text height slightly, shifting everything
      // below, and that drift compounds the further down the target
      // is. One correction pass a moment later closes any gap.
      setTimeout(() => {
        const drift = computeTarget(el) - window.scrollY;
        if (Math.abs(drift) > 2) {
          window.scrollTo({ top: computeTarget(el), behavior: "smooth" });
        }
      }, 500);
    }

    const immediate = document.getElementById(id);
    if (immediate) {
      requestAnimationFrame(() => scrollToTarget(immediate));
      return;
    }

    // Arriving here from a different route (e.g. /projects -> /#skills)
    // can land on a fresh Home mount where this section is still behind
    // a lazy-loaded Suspense boundary and doesn't exist in the DOM yet.
    // Watch for it instead of giving up after one immediate check.
    const observer = new MutationObserver(() => {
      const el = document.getElementById(id);
      if (el) {
        observer.disconnect();
        scrollToTarget(el);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const giveUp = setTimeout(() => observer.disconnect(), 4000);

    return () => {
      observer.disconnect();
      clearTimeout(giveUp);
    };
  }, [hash]);
}
