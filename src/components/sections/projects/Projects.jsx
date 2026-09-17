import { useState } from "react";

import Container from "../../ui/Container";
import SectionHeading from "../../ui/headings/SectionHeading";
import Button from "../../ui/Button";

import FeaturedProject from "./FeaturedProject";
import ProjectCaseStudy from "./ProjectCaseStudy";

import { featuredProjects } from "../../../data/projects";

export default function Projects() {
  const [caseStudy, setCaseStudy] = useState(null);

  return (
    <section id="projects" className="py-28">
      <Container>
        <SectionHeading
          badge="Portfolio"
          title="Featured projects"
          subtitle="The work that best shows where full-stack development meets security thinking."
        />

        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.id}
              project={project}
              onOpenCaseStudy={setCaseStudy}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button href="/projects" variant="secondary">
            Explore All Projects
          </Button>
        </div>
      </Container>

      <ProjectCaseStudy project={caseStudy} onClose={() => setCaseStudy(null)} />
    </section>
  );
}
