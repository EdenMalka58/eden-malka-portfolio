export type ProjectLinks = {
  id: string;
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
  videoUrl?: string;
};

/** Edit this file when you have real projects. Copy lives in i18n dictionaries. */
export const projects: ProjectLinks[] = [
  {
    id: "campusflow",
    tech: [
      "React Native",
      "Expo",
      "React",
      "ASP.NET Core",
      "SQL Server",
      "SignalR",
      "YOLOv8",
      "Gemini",
    ],
    repoUrl: "https://github.com/EdenMalka58/CampusFlowFinalProject",
    videoUrl: "https://youtu.be/a9Z2Gb3Foww",
  },
  {
    id: "news-platform",
    tech: [
      "C#",
      "ASP.NET Core Web API",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SQL Server",
      "JWT Authentication",
      "Swagger",
      "Firebase",
      "GitHub",
    ],
    repoUrl: "https://github.com/EdenMalka58/NewsSite",
  },
  {
    id: "insurance-claim-system",
    tech: [
      "AWS Lambda",
      "Amazon API Gateway",
      "Amazon Cognito",
      "Amazon DynamoDB",
      "Amazon S3",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Swagger",
    ],
    repoUrl: "https://github.com/EdenMalka58/InsuranceSystem",
  },
];
