import Button from "../../ui/Button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <Button href="#projects">
        View My Work
      </Button>

      <Button href="#contact" variant="secondary">
        Let's Connect
      </Button>

    </div>
  );
}
