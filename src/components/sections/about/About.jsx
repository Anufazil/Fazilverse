import Container from "../../ui/Container";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import AchievementCards from "./AchievementCards";
import JourneyTimeline from "./JourneyTimeline";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32"
    >
      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">
          <AboutImage />
          <AboutContent />
        </div>

        <div className="mt-24 grid gap-16 lg:grid-cols-2 items-start">
            <JourneyTimeline />
            <AchievementCards />
        </div>

      </Container>
    </section>
  );
}