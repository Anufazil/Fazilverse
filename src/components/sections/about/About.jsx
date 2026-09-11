import Container from "../../ui/Container";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import CurrentFocus from "./CurrentFocus";
import Experience from "./Experience";
import Leadership from "./Leadership";

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AboutImage />
          <AboutContent />
        </div>

        <CurrentFocus />
        <Experience />
        <Leadership />
      </Container>
    </section>
  );
}
