import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AnimatedCounter({
  end,
  suffix = "",
  className = "",
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      {inView && (
        <CountUp
          end={end}
          duration={2}
          suffix={suffix}
          className={className}
        />
      )}
    </div>
  );
}