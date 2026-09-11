import { useState } from "react";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/headings/SectionHeading";
import { gallery } from "../../../data/gallery";
import GalleryTile from "./GalleryTile";
import GalleryLightbox from "./GalleryLightbox";

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="py-28">
      <Container>
        <SectionHeading
          badge="Gallery"
          title="Beyond the screen"
          subtitle="A few photos and interests outside of code."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <GalleryTile key={item.id} item={item} index={index} onOpen={setActive} />
          ))}
        </div>
      </Container>

      <GalleryLightbox item={active} onClose={() => setActive(null)} />
    </section>
  );
}
