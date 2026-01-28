import { HeroSection } from "../_components/hero-section/hero-section";
import { Projects } from "../projects/_components/project-page";
import ServicesPage from "../_components/services/services-page";
import { SkillsPage } from "../_components/skills/skills-page";
import { ExperiencePage } from "../_components/work-experience/experience-page";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Projects />
      <ExperiencePage />
      <SkillsPage />
      <ServicesPage />
    </div>
  );
};

export default HomePage;
