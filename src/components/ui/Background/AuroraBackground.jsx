import AuroraBlobs from "./AuroraBlobs";
import Grid from "./Grid";
import Spotlight from "./Spotlight";
import Stars from "./Stars";

export default function AuroraBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <AuroraBlobs />
      <Spotlight />
      <Grid />
      <Stars />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}