import Container from "../../ui/Container";
import SectionHeading from "../../ui/headings/SectionHeading";
import { gallery } from "../../../data/gallery";
import CoverflowCarousel from "./CoverflowCarousel";

// Placeholder captions from the starter data shouldn't show up publicly.
const PLACEHOLDER = "Add a caption";

const slides = gallery
  .filter((item) => item.image)
  .map((item, index) => {
    const hasCaption = item.caption && item.caption !== PLACEHOLDER;
    return {
      src: item.image,
      alt: hasCaption ? item.caption : `Gallery photo ${index + 1}`,
      title: hasCaption ? item.caption : undefined,
    };
  });

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden py-28">
      <Container>
        <SectionHeading
          badge="Gallery"
          title="A few photos and interests"
          subtitle="Drifts on its own — hover to pause, drag or use the arrows to flip through."
        />
      </Container>

      <CoverflowCarousel slides={slides} autoplay showCaption showNavigation label="Photo gallery" />
    </section>
  );
}
