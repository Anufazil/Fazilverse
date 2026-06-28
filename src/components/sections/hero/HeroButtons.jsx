import Button from "../../ui/Button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex gap-4">

      <Button href="#projects">
        Explore Projects
      </Button>

      <Button href="/resume.pdf" variant="secondary">
        Download Resume
      </Button>

    </div>
  );
}