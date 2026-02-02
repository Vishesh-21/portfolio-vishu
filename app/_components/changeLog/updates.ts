export interface ChangelogItem {
  year: string | number;
  items: ChangelogEntry[];
}

interface ChangelogEntry {
  title: string;
  description: string;
}

export const lifeChangelog: ChangelogItem[] = [
  {
    year: 2026,
    items: [
      {
        title: "Actively Preparing for Senior Frontend Roles 🚀",
        description:
          "Deeply focused on React, Next.js, performance optimization, system design for frontend, and interview preparation.",
      },
      {
        title: "Advanced Next.js & App Router Mastery ⚡",
        description:
          "Worked extensively with App Router, Server Components, Server Actions, ISR, and modern data-fetching patterns.",
      },
    ],
  },
  {
    year: 2025,
    items: [
      {
        title: "Built Production-Grade React & Next.js Projects 🧠",
        description:
          "Developed scalable applications with clean architecture, reusable components, and real-world state management.",
      },
      {
        title: "Strong Grip on JavaScript Internals 🔍",
        description:
          "Mastered closures, promises, async/await, event loop, debouncing, throttling, and memory optimization.",
      },
      {
        title: "Interview-Focused Learning 🎯",
        description:
          "Prepared extensively for frontend interviews with real-world questions, edge cases, and performance trade-offs.",
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        title: "Transitioned into a Confident Frontend Developer 🌱",
        description:
          "Moved beyond basics and started thinking in terms of performance, scalability, and maintainability.",
      },
      {
        title: "React Ecosystem Deep Dive ⚛️",
        description:
          "Worked with hooks, context, Redux, memoization, lazy loading, Suspense, and component optimization.",
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        title: "Built Multiple Personal Projects 💻",
        description:
          "Created portfolio-level projects showcasing real-world UI patterns, API integration, and clean UX.",
      },
      {
        title: "Hands-on with Modern Tooling 🛠️",
        description:
          "Used Git, GitHub, ESLint, Prettier, REST APIs, and modern build tools in daily development.",
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        title: "Started Frontend Development Journey 🚀",
        description:
          "Began learning HTML, CSS, JavaScript, and React with a strong focus on fundamentals.",
      },
      {
        title: "First React Applications 🎉",
        description:
          "Built small React apps and understood component-based architecture for the first time.",
      },
    ],
  },
  {
    year: 2021,
    items: [
      {
        title: "Programming Fundamentals & Logic Building 🧩",
        description:
          "Focused on core programming concepts, problem-solving, and logical thinking.",
      },
    ],
  },
  {
    year: 2020,
    items: [
      {
        title: "Introduced to Web & Technology 🌐",
        description:
          "Discovered interest in software development and how the web works.",
      },
    ],
  },
  {
    year: 2019,
    items: [
      {
        title: "College / Academic Foundation 📘",
        description:
          "Started formal education that laid the groundwork for analytical thinking and problem-solving.",
      },
    ],
  },
  {
    year: 2018,
    items: [
      {
        title: "First Exposure to Coding 💡",
        description:
          "Wrote first programs and realized interest in building things with code.",
      },
    ],
  },
  {
    year: "2000s",
    items: [
      {
        title: "Curiosity for Computers 💻",
        description:
          "Explored computers, internet, and technology from an early age.",
      },
    ],
  },
  {
    year: "Birth",
    items: [
      {
        title: "A Developer Was Born in India 🇮🇳 👶",
        description: "The journey officially began.",
      },
    ],
  },
];
