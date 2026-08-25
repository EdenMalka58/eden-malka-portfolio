import type { Dictionary } from "./types";

export const en: Dictionary = {
  brand: "Eden Malka",
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    role: "Full Stack Developer · Computer Science Graduate",
    headline: "I build reliable full-stack products from the ground up.",
    supporting:
      "Computer Science graduate from Ruppin with a sharp eye for systems, clean interfaces, and codebases that stay understandable as they grow.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
  },
  about: {
    title: "About",
    body: [
      "I’m Eden — a Full Stack developer and Computer Science graduate who enjoys turning messy problems into clear, working software.",
      "I build client and server applications from scratch, dig into complex systems with patience, and keep learning modern tools that make shipping better products possible.",
      "Based in Hadera, Israel. Comfortable collaborating in Hebrew and English.",
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "A practical stack spanning languages, frameworks, data, and delivery tools.",
    categories: {
      languages: "Languages",
      frameworks: "Frameworks & Cloud",
      databases: "Databases",
      tools: "Tools",
    },
  },
  projects: {
    title: "Projects",
    subtitle: "Selected work that shows end-to-end product thinking.",
    repo: "GitHub",
    live: "Live demo",
    video: "Demo video",
    items: [
      {
        id: "campusflow",
        title: "CampusFlow",
        summary:
          "A smart platform for managing academic campus resources — room bookings, real-time occupancy, issue reporting, and staff analytics. Full monorepo: student mobile app, admin web panel, ASP.NET Core API, and a YOLOv8 camera microservice. Final project in Software Systems Development, Ruppin Academic Center (2026).",
      },
      {
        id: "news-platform",
        title: "AI-Powered News Platform",
        summary:
          "Designed and developed a full-stack news platform that aggregates content from external sources while delivering personalized user features, AI-powered capabilities, and content management tools.",
      },
      {
        id: "insurance-claim-system",
        title: "Insurance Claim Management System",
        summary:
          "Built a serverless insurance claim platform on AWS with policy management, claim workflows, administrative dashboards, and secure user authentication.",
      },
    ],
  },

  experience: {
    title: "Experience",
    educationTitle: "Education",
    workTitle: "Work",
    education: {
      degree: "B.Sc. in Computer Science",
      school: "Ruppin Academic Center",
      years: "2023 – 2026",
      highlight: "Dean’s Excellence Recognition — second year of studies",
    },
    work: {
      role: "Registration Center Representative",
      org: "Ruppin Academic Center",
      years: "2021 – 2023",
      bullets: [
        "Guided prospective students through undergraduate registration with clarity and care.",
        "Coordinated advisor meetings and kept communication flowing in a busy environment.",
        "Delivered service-oriented support while multitasking under shifting priorities.",
      ],
    },
  },
  contact: {
    title: "Contact",
    subtitle: "Open to opportunities — let’s talk about what you’re building.",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    github: "GitHub",
    location: "Hadera, Israel",
  },
  footer: "© Eden Malka. Built with care.",
  langToggle: {
    toHebrew: "עברית",
    toEnglish: "EN",
  },
};
