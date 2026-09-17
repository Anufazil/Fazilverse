import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

// A grid of vertical lines that drift with simplex noise and bend
// toward the cursor — adapted from a TS/shadcn reference component
// into this project's plain JS setup. Changes from the original:
//
// 1. This layer is `position: fixed` and sized to the viewport, not
//    the full document. An earlier version sized it to the whole
//    page (so the pattern would scroll with content) and that meant
//    computing every point across the *entire* page height every
//    frame — on a ~9,300px page at dense spacing that was tens of
//    thousands of points/frame and dropped well under 10fps. Fixed
//    positioning keeps it visible at any scroll position (which is
//    the actual goal — "waves throughout the page") while bounding
//    the work to what's on screen, regardless of how long the page
//    is. The tradeoff: the pattern doesn't scroll with the page
//    content, it stays anchored to the viewport, like a backdrop.
// 2. Point spacing (14px) is tuned for a dense, woven look while
//    staying well short of the original's 8px default.
// 3. The original's touchmove handler called preventDefault(), which
//    would silently break mobile scrolling on a full-page layer.
//    Dropped — this is mouse-only, and pointer-events: none means it
//    never intercepts touches anyway.
// 4. Segments are drawn as smoothed quadratic-bezier curves through
//    the points instead of straight line segments, so the waves read
//    as smooth curves rather than a jagged polyline.

const X_GAP = 14;
const Y_GAP = 14;

export default function Waves({ pointerSize = 0.4 }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const dotRef = useRef(null);

  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    lx: 0,
    ly: 0,
    sx: 0,
    sy: 0,
    v: 0,
    vs: 0,
    a: 0,
    set: false,
  });
  const pathsRef = useRef([]);
  const linesRef = useRef([]);
  const noiseRef = useRef(null);
  const rafRef = useRef(null);
  const boundingRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const svg = svgRef.current;
    if (!container || !svg) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    noiseRef.current = createNoise2D();

    function setSize() {
      // Viewport-sized, deliberately — see note at the top of this
      // file for why this isn't sized to the full document.
      const width = window.innerWidth;
      const height = window.innerHeight;
      boundingRef.current = { width, height, left: 0, top: 0 };
      svg.setAttribute("width", width);
      svg.setAttribute("height", height);
    }

    function setLines() {
      if (!boundingRef.current) return;
      const { width, height } = boundingRef.current;

      pathsRef.current.forEach((p) => p.remove());
      pathsRef.current = [];
      linesRef.current = [];

      const oWidth = width + 200;
      const oHeight = height + 30;
      const totalLines = Math.ceil(oWidth / X_GAP);
      const totalPoints = Math.ceil(oHeight / Y_GAP);
      const xStart = (width - X_GAP * totalLines) / 2;
      const yStart = (height - Y_GAP * totalPoints) / 2;

      for (let i = 0; i < totalLines; i++) {
        const points = [];
        for (let j = 0; j < totalPoints; j++) {
          points.push({
            x: xStart + X_GAP * i,
            y: yStart + Y_GAP * j,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 },
          });
        }

        const path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "currentColor");
        path.setAttribute("stroke-width", "1");
        svg.appendChild(path);

        pathsRef.current.push(path);
        linesRef.current.push(points);
      }
    }

    setSize();
    setLines();

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setSize();
        setLines();
      }, 200);
    };
    window.addEventListener("resize", onResize);

    const updateMousePosition = (x, y) => {
      if (!boundingRef.current) return;
      const mouse = mouseRef.current;
      // Viewport-fixed layer + viewport-relative coordinates —
      // no scrollY offset needed, unlike a page-length layer.
      mouse.x = x - boundingRef.current.left;
      mouse.y = y - boundingRef.current.top;

      if (!mouse.set) {
        mouse.sx = mouse.x;
        mouse.sy = mouse.y;
        mouse.lx = mouse.x;
        mouse.ly = mouse.y;
        mouse.set = true;
      }

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${mouse.sx}px, ${mouse.sy}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseMove = (e) => updateMousePosition(e.clientX, e.clientY);

    if (!reduceMotion) {
      window.addEventListener("mousemove", onMouseMove);
    }

    function movePoints(time) {
      const noise = noiseRef.current;
      const mouse = mouseRef.current;

      linesRef.current.forEach((points) => {
        points.forEach((p) => {
          const move =
            noise(
              (p.x + time * 0.008) * 0.003,
              (p.y + time * 0.003) * 0.002
            ) * 8;

          p.wave.x = Math.cos(move) * 12;
          p.wave.y = Math.sin(move) * 6;

          const dx = p.x - mouse.sx;
          const dy = p.y - mouse.sy;
          const d = Math.hypot(dx, dy);
          const l = Math.max(175, mouse.vs);

          if (d < l) {
            const s = 1 - d / l;
            const f = Math.cos(d * 0.001) * s;
            p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00035;
            p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00035;
          }

          p.cursor.vx += (0 - p.cursor.x) * 0.01;
          p.cursor.vy += (0 - p.cursor.y) * 0.01;
          p.cursor.vx *= 0.95;
          p.cursor.vy *= 0.95;
          p.cursor.x += p.cursor.vx;
          p.cursor.y += p.cursor.vy;
          p.cursor.x = Math.min(50, Math.max(-50, p.cursor.x));
          p.cursor.y = Math.min(50, Math.max(-50, p.cursor.y));
        });
      });
    }

    function moved(point, withCursorForce = true) {
      return {
        x: point.x + point.wave.x + (withCursorForce ? point.cursor.x : 0),
        y: point.y + point.wave.y + (withCursorForce ? point.cursor.y : 0),
      };
    }

    function drawLines() {
      linesRef.current.forEach((points, lIndex) => {
        const path = pathsRef.current[lIndex];
        if (points.length < 2 || !path) return;

        // Smooth the polyline into curves: each point becomes a
        // quadratic-bezier control point, with the curve actually
        // passing through the midpoint between consecutive points.
        // Straight "L" segments between fast-moving points is what
        // reads as sharp/broken; this reads as a smooth flowing line.
        const pts = points.map((p) => moved(p));
        const first = moved(points[0], false);

        let d = `M ${first.x} ${first.y}`;
        for (let i = 0; i < pts.length - 1; i++) {
          const cur = pts[i];
          const next = pts[i + 1];
          const mx = (cur.x + next.x) / 2;
          const my = (cur.y + next.y) / 2;
          d += ` Q ${cur.x} ${cur.y} ${mx} ${my}`;
        }
        const last = pts[pts.length - 1];
        d += ` T ${last.x} ${last.y}`;

        path.setAttribute("d", d);
      });
    }

    function tick(time) {
      const mouse = mouseRef.current;

      mouse.sx += (mouse.x - mouse.sx) * 0.1;
      mouse.sy += (mouse.y - mouse.sy) * 0.1;

      const dx = mouse.x - mouse.lx;
      const dy = mouse.y - mouse.ly;
      const d = Math.hypot(dx, dy);

      mouse.v = d;
      mouse.vs += (d - mouse.vs) * 0.1;
      mouse.vs = Math.min(100, mouse.vs);
      mouse.lx = mouse.x;
      mouse.ly = mouse.y;
      mouse.a = Math.atan2(dy, dx);

      movePoints(time);
      drawLines();

      rafRef.current = requestAnimationFrame(tick);
    }

    const onVisibility = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      } else if (!reduceMotion) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    if (!reduceMotion) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      // Static, gently-varied line positions — no animation loop.
      movePoints(0);
      drawLines();
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden text-signal/25"
    >
      <svg ref={svgRef} className="block h-full w-full" />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 rounded-full bg-signal/40"
        style={{
          width: `${pointerSize}rem`,
          height: `${pointerSize}rem`,
          willChange: "transform",
        }}
      />
    </div>
  );
}
