import { HeroSection } from "@/app/_components/hero-section/hero-section";
import ServicesPage from "@/app/_components/services/services-page";
import { SkillsPage } from "@/app/_components/skills/skills-page";
import { ExperiencePage } from "@/app/_components/work-experience/experience-page";
import { Projects } from "../projects/_components/project-page";
import { LifeUpdates } from "@/app/_components/changeLog/life-updates";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Projects />
      <ExperiencePage />
      <SkillsPage />
      <ServicesPage />
      <LifeUpdates />
    </div>
  );
};

export default HomePage;
