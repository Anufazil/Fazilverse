import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll position on every route change (e.g. Home -> /projects).
// Without this, the browser keeps whatever scrollY it had on the old
// page, which can land past the end of a shorter new page and look
// blank. Skips when there's a hash — useScrollToHash owns that case.
export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);
}
