import GradientText from "../../ui/GradientText";
import Container from "../../ui/Container";

import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-white/5 backdrop-blur-xl">

      <Container>

        <div className="py-20 text-center">

          <h2 className="text-4xl font-bold">
            <GradientText>
              FazilVerse
            </GradientText>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Building modern web experiences with
            MERN, Artificial Intelligence and
            Cybersecurity.
          </p>

          <FooterSocials />

          <FooterLinks />

          <div className="my-10 h-px bg-white/10" />

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Fazil.
            Built with React, Tailwind CSS &
            Framer Motion.
          </p>

        </div>

      </Container>

    </footer>
  );
}