import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../../constants/navigation";
import { toHomeRoute } from "../../../utils/navHref";

export default function FooterLinks() {
  return (
    <div>
      <p className="mb-4 font-mono text-sm text-signal">Navigation</p>

      <div className="flex flex-col gap-2">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            to={toHomeRoute(link.href)}
            className="text-sm text-muted transition-colors duration-200 hover:text-signal"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
