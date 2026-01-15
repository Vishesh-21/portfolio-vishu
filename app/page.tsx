
import {HeroSection} from "./_components/hero-section/hero-section";
import ServicesPage from "./_components/services/services-page";
import { SkillsPage } from "./_components/skills/skills-page";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection/>
      <SkillsPage />
      <ServicesPage />
    </div>
  );
};

export default HomePage;
