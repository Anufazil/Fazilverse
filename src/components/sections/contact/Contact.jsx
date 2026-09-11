import Container from "../../ui/Container";
import { SITE } from "../../../constants/site";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-sm text-signal">Contact</p>

            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Have an idea worth building?
            </h2>

            <p className="mb-10 max-w-md leading-7 text-muted">
              I'm always interested in building useful products, exploring
              new technologies, and connecting with people working on
              interesting problems.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 rounded-lg bg-signal px-5 py-3 text-sm font-medium text-on-signal"
              >
                <FaEnvelope /> Email Me
              </a>

              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-ink-text hover:border-signal/50"
              >
                <FaLinkedin /> LinkedIn
              </a>

              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-medium text-ink-text hover:border-signal/50"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
