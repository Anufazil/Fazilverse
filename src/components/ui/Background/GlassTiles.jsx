import { useEffect, useRef } from "react";

// A field of small glass tiles that ripple outward from the cursor,
// like light moving across a mosaic of glass panes. Pure DOM/rAF —
// no per-frame React re-renders, so it stays smooth with hundreds
// of tiles on screen.

const TILE_SIZE = 40; // px, per tile (including its gap)
const RIPPLE_RADIUS = 4.5; // in tile units
const WAVE_LENGTH = 1.6;
const WAVE_SPEED = 0.0045; // per ms

export default function GlassTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let cols = 0;
    let rows = 0;
    let tiles = [];
    let lit = new Map(); // idx -> tile, currently-animated tiles

    const mouse = { col: -999, row: -999, active: false };

    function buildGrid() {
      const rect = container.getBoundingClientRect();
      cols = Math.ceil(rect.width / TILE_SIZE) + 1;
      rows = Math.ceil(rect.height / TILE_SIZE) + 1;

      container.style.gridTemplateColumns = `repeat(${cols}, ${TILE_SIZE}px)`;
      container.style.gridTemplateRows = `repeat(${rows}, ${TILE_SIZE}px)`;

      container.innerHTML = "";
      lit.clear();

      const frag = document.createDocumentFragment();
      const total = cols * rows;
      tiles = new Array(total);

      for (let i = 0; i < total; i++) {
        const tile = document.createElement("div");
        tile.className = "glass-tile";

        const glow = document.createElement("div");
        glow.className = "glass-tile-glow";
        tile.appendChild(glow);

        frag.appendChild(tile);
        tiles[i] = { el: tile, glow };
      }

      container.appendChild(frag);
    }

    buildGrid();

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(buildGrid, 200);
    };

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.col = (e.clientX - rect.left) / TILE_SIZE;
      mouse.row = (e.clientY - rect.top) / TILE_SIZE;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("resize", onResize);

    if (!reducedMotion) {
      window.addEventListener("mousemove", onMouseMove);
      container.addEventListener("mouseleave", onMouseLeave);
    }

    function resetTile(tileObj) {
      tileObj.glow.style.opacity = 0;
      tileObj.el.style.transform = "";
    }

    let rafId;
    function tick(t) {
      if (mouse.active && !reducedMotion) {
        const minC = Math.max(0, Math.floor(mouse.col - RIPPLE_RADIUS));
        const maxC = Math.min(cols - 1, Math.ceil(mouse.col + RIPPLE_RADIUS));
        const minR = Math.max(0, Math.floor(mouse.row - RIPPLE_RADIUS));
        const maxR = Math.min(rows - 1, Math.ceil(mouse.row + RIPPLE_RADIUS));

        const nextLit = new Map();

        for (let r = minR; r <= maxR; r++) {
          for (let c = minC; c <= maxC; c++) {
            const dx = c - mouse.col;
            const dy = r - mouse.row;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > RIPPLE_RADIUS) continue;

            const idx = r * cols + c;
            const tileObj = tiles[idx];
            if (!tileObj) continue;

            const falloff = 1 - dist / RIPPLE_RADIUS;
            const wave = Math.sin(dist * WAVE_LENGTH - t * WAVE_SPEED);
            const intensity = Math.max(0, falloff * (0.35 + 0.65 * wave));

            tileObj.glow.style.opacity = intensity;
            const lift = intensity * 5;
            const scale = 1 + intensity * 0.1;
            tileObj.el.style.transform = `translateY(${-lift}px) scale(${scale})`;

            nextLit.set(idx, tileObj);
          }
        }

        // Fade out tiles that were lit last frame but are no longer in range.
        for (const [idx, tileObj] of lit) {
          if (!nextLit.has(idx)) resetTile(tileObj);
        }

        lit = nextLit;
      } else if (lit.size) {
        for (const tileObj of lit.values()) resetTile(tileObj);
        lit.clear();
      }

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="glass-tiles pointer-events-none absolute inset-0 grid"
    />
  );
}
