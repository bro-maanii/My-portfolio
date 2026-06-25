import Navbar             from "./Ui-components/Navbar";
import HeroSection         from "./Ui-components/HeroSection";
import AboutSection        from "./Ui-components/AboutSection";
import WhatIBuild          from "./Ui-components/WhatIBuild";
import SkillsSection       from "./Ui-components/Skills";
import ProfessionalTimeline from "./Ui-components/Timeline";
import Testimonials        from "./Ui-components/Testimonials";
import Certifications      from "./Ui-components/Certifications";
import Portfolio           from "./Ui-components/Work";
import UGCAds              from "./Ui-components/UGCAds";
import Contact             from "./Ui-components/Contact";
import Footer              from "./Ui-components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhatIBuild />
      <SkillsSection />
      <ProfessionalTimeline />
      <Testimonials />
      <Certifications />
      <Portfolio />
      <UGCAds />
      <Contact />
      <Footer />
    </>
  );
}
