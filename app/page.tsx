import ServicesPage from "./_components/services/services-page";
import { SkillsPage } from "./_components/skills/skills-page";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div className="h-screen"></div>
      <SkillsPage />
      <ServicesPage />
    </div>
  );
};

export default HomePage;
