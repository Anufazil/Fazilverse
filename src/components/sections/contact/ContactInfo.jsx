import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

import ContactCard from "./ContactCard";

import SocialIcons from "./SocialIcons";

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      <ContactCard
        icon={<FaEnvelope />}
        title="Email"
        value="anufazil08@email.com"
        href="mailto:your@email.com"
      />

      <ContactCard
        icon={<FaMapMarkerAlt />}
        title="Location"
        value="Malappuram, Kerala, India"
      />

      <ContactCard
        icon={<FaGithub />}
        title="GitHub"
        value="github.com/Anufazil"
        href="https://github.com/Anufazil"
      />

      <ContactCard
        icon={<FaLinkedin />}
        title="LinkedIn"
        value="linkedin.com/in/anufazilp"
        href="https://linkedin.com/in/anufazilp"
      />

      <ContactCard
        icon={<FaFileDownload />}
        title="Resume"
        value="Download CV"
        href="/resume.pdf"
      />
      
      <SocialIcons />

    </div>
  );
}