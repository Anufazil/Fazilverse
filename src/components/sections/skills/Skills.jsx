import Container from "../../ui/Container";
import SectionHeading from "../../ui/headings/SectionHeading";
import SkillsGrid from "./SkillsGrid";
import FloatingTechIcons from "./FloatingTechIcons";

export default function Skills() {
  return (
    <section
  id="skills"
  className="relative overflow-hidden py-32"
>
  <FloatingTechIcons />

  <Container>

    <SectionHeading
      badge="TECH STACK"
      title="Technology Stack"
      subtitle="Technologies I use to design, build and deploy modern applications."
    />

    <SkillsGrid />

  </Container>
</section>
  );
}