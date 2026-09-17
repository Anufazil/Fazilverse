import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import useMousePosition from "../../../hooks/useMousePosition";
import Waves from "./Waves";

export default function FlowingBackground({ children }) {
  const { x, y } = useMousePosition();
  const prefersReducedMotion = useReducedMotion();

  const rawX = useMotionValue(x);
  const rawY = useMotionValue(y);

  const springX = useSpring(rawX, { stiffness: 45, damping: 22, mass: 0.6 });
  const springY = useSpring(rawY, { stiffness: 45, damping: 22, mass: 0.6 });

  useEffect(() => {
    rawX.set(x);
    rawY.set(y);
  }, [x, y, rawX, rawY]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-ink-text">
      {/* Slow, autonomous drift — gives the whole page a living, "flowing" feel */}
      <div className="pointer-events-none absolute -left-[10%] -top-[15%] h-[60vw] w-[60vw] max-h-[560px] max-w-[560px] rounded-full bg-flow1/25 blur-[120px] animate-drift-a" />
      <div className="pointer-events-none absolute -right-[12%] top-[15%] h-[50vw] w-[50vw] max-h-[480px] max-w-[480px] rounded-full bg-flow2/20 blur-[130px] animate-drift-b" />
      <div className="pointer-events-none absolute bottom-[-18%] left-[25%] h-[55vw] w-[55vw] max-h-[520px] max-w-[520px] rounded-full bg-flow3/15 blur-[130px] animate-drift-c" />

      {/* Cursor-reactive wave-line grid — fixed to the viewport, so it
          stays visible throughout the page regardless of scroll or
          page length (see Waves.jsx for why). */}
      <Waves />

      {/* Cursor-reactive glow */}
      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none fixed h-[420px] w-[420px] rounded-full bg-flow1/10 blur-[110px]"
          style={{
            left: springX,
            top: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
