import Container from "../../ui/Container";
import SectionHeading from "../../ui/headings/SectionHeading";
import JourneyTimeline from "./JourneyTimeline";

export default function Journey() {
  return (
    <section id="journey" className="py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            badge="Journey"
            title="Build. Learn. Secure. Grow."
            subtitle="How I got from writing my first lines of code to combining development with security."
          />

          <JourneyTimeline />
        </div>
      </Container>
    </section>
  );
}
