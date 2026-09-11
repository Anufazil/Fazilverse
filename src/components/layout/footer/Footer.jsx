import Container from "../../ui/Container";
import { SITE } from "../../../constants/site";

import FooterLinks from "./FooterLinks";
import FooterServices from "./FooterServices";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-line">
      <Container>
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">

          <div>
            <h2 className="font-mono text-lg font-semibold text-ink-text">
              {SITE.name}
            </h2>

            <p className="mt-2 text-sm text-muted">
              {SITE.role}
            </p>

            <p className="mt-1 text-sm text-muted">
              {SITE.focus}
            </p>

            <FooterSocials />
          </div>

          <FooterLinks />

          <FooterServices />

        </div>

        <div className="border-t border-line py-6">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {SITE.name}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
