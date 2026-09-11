import Container from "../../ui/Container";
import CurrentlyLearning from "./CurrentlyLearning";
import AIAssistedDevelopment from "./AIAssistedDevelopment";

export default function Growth() {
  return (
    <section className="py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <CurrentlyLearning />
          <AIAssistedDevelopment />
        </div>
      </Container>
    </section>
  );
}
