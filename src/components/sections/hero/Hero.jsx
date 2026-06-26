import Container from "../../ui/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>
      </Container>
    </section>
  );
}