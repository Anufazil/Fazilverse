import Container from "../../ui/Container";
import SectionHeading from "../../ui/headings/SectionHeading";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <Container>

        <SectionHeading
          badge="CONTACT"
          title="Let's Build Something Amazing"
          subtitle="Have an idea, project or opportunity? I'd love to hear from you."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          <ContactInfo />

          <ContactForm />

        </div>

      </Container>
    </section>
  );
}