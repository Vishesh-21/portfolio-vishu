export interface ProjectData {
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
  stack: string[];
  image?: string;
  learning: string;
}

export const projectsData: ProjectData[] = [
  {
    title: "BIZGEN – Business Name Generator",
    description:
      "Business name generator that helps you find a unique and catchy name for your business with real-time .com domain availability.",
    liveLink: "https://business-name-generator-hazel.vercel.app/",
    githubLink: "https://github.com/Vishesh-21/Business_Name_Generator",
    stack: ["Next.js", "TypeScript", "ShadCn UI", "Tailwind CSS", "Vercel"],
    image: "/user.png",
    learning:
      "AI integration, Next.js architecture, UI/UX design, API handling",
  },
  {
    title: "Job Portal Application",
    description:
      "A MERN stack job portal with separate recruiter and candidate modules.",
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Redux",
      "Node.js",
      "Tailwind CSS",
    ],
    learning:
      "REST API design, authentication, database schema design, role-based access control",
    githubLink: "https://github.com/Vishesh-21/Job_Portal_Application",
    image: "/user.png",
  },
  {
    title: "VisionAI – Personal Career Growth Assistant",
    description:
      "AI-powered career assistant to help users prepare for interviews and build resumes.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini",
      "Vercel",
      "PostgreSQL",
    ],
    learning:
      "Product thinking, AI feature design, user-centric development, PostgreSQL integration",
    githubLink:
      "https://github.com/Vishesh-21/VisionAI---Your-Personal-Career-Growth-Assistant",
    image: "/user.png",
  },
  {
    title: "VisionAI – Personal Career Growth Assistant",
    description:
      "AI-powered career assistant to help users prepare for interviews and build resumes.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini",
      "Vercel",
      "PostgreSQL",
    ],
    learning:
      "Product thinking, AI feature design, user-centric development, PostgreSQL integration",
    githubLink:
      "https://github.com/Vishesh-21/VisionAI---Your-Personal-Career-Growth-Assistant",
    image: "/user.png",
  },
  {
    title: "VisionAI – Personal Career Growth Assistant",
    description:
      "AI-powered career assistant to help users prepare for interviews and build resumes.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini",
      "Vercel",
      "PostgreSQL",
    ],
    learning:
      "Product thinking, AI feature design, user-centric development, PostgreSQL integration",
    githubLink:
      "https://github.com/Vishesh-21/VisionAI---Your-Personal-Career-Growth-Assistant",
    image: "/user.png",
  },
  {
    title: "VisionAI – Personal Career Growth Assistant",
    description:
      "AI-powered career assistant to help users prepare for interviews and build resumes.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini",
      "Vercel",
      "PostgreSQL",
    ],
    learning:
      "Product thinking, AI feature design, user-centric development, PostgreSQL integration",
    githubLink:
      "https://github.com/Vishesh-21/VisionAI---Your-Personal-Career-Growth-Assistant",
    image: "/user.png",
  },
  {
    title: "SQL Agent",
    description:
      "AI-driven SQL assistant that converts natural language queries into SQL statements.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Google AI SDK", "Vercel"],
    learning:
      "AI-powered query generation, usability-focused design, Next.js advanced features",
    image: "/user.png",
    liveLink: "https://sql-database-agent.vercel.app/",
    githubLink: "https://github.com/Vishesh-21/SQL-Database-Agent",
  },
];
