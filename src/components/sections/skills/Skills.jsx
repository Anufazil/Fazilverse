import Container from "../../ui/Container";
import SectionHeading from "../../ui/headings/SectionHeading";
import SkillsGrid from "./SkillsGrid";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <Container>
        <SectionHeading
          badge="Tech stack"
          title="Technologies I work with"
          subtitle="Organized by where they fit in the stack — from interface to infrastructure to security."
        />

        <SkillsGrid />
      </Container>
    </section>
  );
}
