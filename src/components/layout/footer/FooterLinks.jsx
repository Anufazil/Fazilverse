const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Contact",
];

export default function FooterLinks() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-8">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="
            text-gray-400
            transition-all
            duration-300
            hover:text-cyan-300
          "
        >
          {link}
        </a>
      ))}
    </div>
  );
}