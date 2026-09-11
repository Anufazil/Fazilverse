import { FaRobot } from "react-icons/fa";

export default function AIAssistedDevelopment() {
  return (
    <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
      <div className="mb-4 flex items-center gap-3">
        <FaRobot className="text-xl text-signal" />
        <h3 className="text-xl font-bold text-ink-text">
          AI-Assisted Development
        </h3>
      </div>

      <p className="leading-7 text-muted">
        I use AI as a development tool for learning, debugging,
        prototyping, documentation, code exploration, and
        problem-solving. I use it to accelerate development while
        continuing to understand the concepts, architecture, and
        technologies behind the applications I build.
      </p>
    </div>
  );
}
