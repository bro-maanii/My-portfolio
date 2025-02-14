import AboutSection from "./Ui-components/AboutSection";
import HeroSection from "./Ui-components/HeroSection";
import Navbar from "./Ui-components/Navbar";
import SkillsSection from "./Ui-components/Skills";
import ProfessionalTimeline from "./Ui-components/Timeline";
import Portfolio from "./Ui-components/Work";
import Contact from "./Ui-components/Contact";
import Footer from "./Ui-components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProfessionalTimeline />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
