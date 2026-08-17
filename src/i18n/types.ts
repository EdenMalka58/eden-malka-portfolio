export type Locale = "en" | "he";

export type Dictionary = {
  brand: string;
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    role: string;
    headline: string;
    supporting: string;
    ctaProjects: string;
    ctaContact: string;
  };
  about: {
    title: string;
    body: string[];
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      languages: string;
      frameworks: string;
      databases: string;
      tools: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    repo: string;
    live: string;
    video: string;
    items: {
      id: string;
      title: string;
      summary: string;
    }[];
  };
  experience: {
    title: string;
    educationTitle: string;
    workTitle: string;
    education: {
      degree: string;
      school: string;
      years: string;
      highlight: string;
    };
    work: {
      role: string;
      org: string;
      years: string;
      bullets: string[];
    };
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    location: string;
  };
  footer: string;
  langToggle: {
    toHebrew: string;
    toEnglish: string;
  };
};
