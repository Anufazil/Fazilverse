import { TypeAnimation } from "react-type-animation";
import GradientText from "../../ui/GradientText";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

export default function HeroContent() {
  return (
    <div>

      <p className="mb-4 text-cyan-400">
        Hello, I'm 👋
      </p>

      <h1 className="mb-6 text-6xl font-bold lg:text-8xl">
        <GradientText>Fazil</GradientText>
      </h1>

      <TypeAnimation
        sequence={[
          "Computer Science Engineer",
          2000,
          "MERN Stack Developer",
          2000,
          "AI Enthusiast",
          2000,
        ]}
        wrapper="h2"
        speed={50}
        repeat={Infinity}
        className="text-2xl font-semibold text-gray-300"
      />

      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
        I build beautiful, scalable and modern web
        applications with a passion for UI, AI and
        cybersecurity.
      </p>

      <HeroButtons />

      <HeroSocials />

    </div>
  );
}