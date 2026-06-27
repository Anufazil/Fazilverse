import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updatePosition);

    return () =>
      window.removeEventListener("mousemove", updatePosition);
  }, []);

  return position;
}