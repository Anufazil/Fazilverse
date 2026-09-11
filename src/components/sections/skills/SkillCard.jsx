import MouseSpotlightCard from "../../ui/cards/MouseSpotlightCard";

export default function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <MouseSpotlightCard className="flex items-center gap-4 p-5">
      <Icon className="text-2xl text-signal" />

      <span className="font-medium text-ink-text">
        {skill.name}
      </span>
    </MouseSpotlightCard>
  );
}
