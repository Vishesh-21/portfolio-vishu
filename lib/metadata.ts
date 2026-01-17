import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://visheshverma.vercel.app/"),

  title: {
    default:
      "Vishesh Verma - Full Stack Developer | Turning Ideas into Web Experiences",
    template: "%s | Vishesh Verma",
  },

icons: {
    icon: "/favicon_io/favicon.ico",       
    shortcut: "/favicon.ico",   // optional, for browser shortcuts
    apple: "/favicon_io/apple-touch-icon.png",     
  },

  description:
    "Portfolio of Vishesh Verma, a software developer specializing in modern web applications using Next.js, React, and scalable full stack architectures.",

  keywords: [
    "Vishesh Verma",
    "Software Developer",
    "Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
    "JavaScript",
    "TypeScript",
  ],

  authors: [{ name: "Vishesh Verma" }],
  creator: "Vishesh Verma",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visheshverma.vercel.app/",
    title: "Vishesh Verma | Software Developer",
    description:
      "Explore projects, GitHub activity, and technical expertise of Vishesh Verma.",
    siteName: "Portfolio",
    images: [
      {
        url: "/user.png",
        width: 1200,
        height: 630,
        alt: "Vishesh Verma Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vishesh Verma | Software Developer | Full-Stack Developer",
    description:
      "Modern web developer portfolio showcasing projects, GitHub stats, and technical skills.",
    creator: "@VisheshVerma",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
