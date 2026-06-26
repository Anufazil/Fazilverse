import Button from "../../ui/Button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex gap-4">

      <Button>
        Explore Projects
      </Button>

      <Button variant="secondary">
        Download Resume
      </Button>

    </div>
  );
}