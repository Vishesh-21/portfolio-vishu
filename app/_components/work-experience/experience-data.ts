export interface ExperienceData {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const experience: ExperienceData[] = [
  {
    role: "Full Stack Development Intern",
    company: "Bunch Infotech",
    period: "June 2025 - September 2025",
    description: [
      "A web platform for EV users to access insurance, charging stations, and vehicle info in one place.",
      "Built and integrated backend APIs for core services.",
      "Optimized frontend for smooth UX.",
      "Supported testing and debugging to improve reliability.",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "ThinkNEXT Technologies",
    period: "July 2024 - September 2024",
    description: [
      "Designed and implemented RESTful APIs for dynamic functionality.",
      "Developed scalable MERN stack applications.",
      "Built responsive frontends with React.js & Tailwind CSS.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Acmegrade Pvt Ltd",
    period: "June 2023 - August 2023",
    description: [
      "Integrated frontend & backend with Node.js and Express.js.",
      "Optimized performance and ensured cross-browser support.",
      "Gained practical experience in responsive web development.",
    ],
  },
];
