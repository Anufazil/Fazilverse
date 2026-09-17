import { Outlet } from "react-router-dom";

import FlowingBackground from "../ui/Background/FlowingBackground";
import ScrollProgress from "../ui/ScrollProgress";
import BackToTop from "../ui/BackToTop";
import Navbar from "./Navbar";
import Footer from "./footer/Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export default function Layout() {
  useScrollToTop();

  return (
    <FlowingBackground>
      <ScrollProgress />

      <Navbar />

      <main className="pt-20">
        <Outlet />
      </main>

      <Footer />

      <BackToTop />
    </FlowingBackground>
  );
}
