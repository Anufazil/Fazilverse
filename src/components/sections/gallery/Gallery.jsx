import { useEffect, useState } from "react";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/headings/SectionHeading";
import { gallery } from "../../../data/gallery";
import ImageSphere from "./ImageSphere";

function useResponsiveSize() {
  const [size, setSize] = useState(() =>
    typeof window === "undefined" ? 400 : Math.min(520, window.innerWidth - 64)
  );

  useEffect(() => {
    const onResize = () => setSize(Math.min(520, window.innerWidth - 64));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return size;
}

export default function Gallery() {
  const containerSize = useResponsiveSize();

  return (
    <section id="gallery" className="relative py-28">
      <Container>
        <SectionHeading
          badge="Gallery"
          title="A few photos and interests"
          subtitle="Drag to spin the sphere — a mix of photos and interests outside of code."
        />

        <div className="flex justify-center">
          <ImageSphere
            images={gallery}
            containerSize={containerSize}
            sphereRadius={containerSize * 0.42}
            autoRotate
            autoRotateSpeed={0.15}
            dragSensitivity={0.6}
          />
        </div>
      </Container>
    </section>
  );
}
