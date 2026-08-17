export type SkillCategoryKey =
  | "languages"
  | "frameworks"
  | "databases"
  | "tools";

export const skills: Record<SkillCategoryKey, string[]> = {
  languages: ["C", "C#", "Java", "Python", "JavaScript", "Assembly", "HTML", "CSS"],
  frameworks: ["React", "React Native", "REST APIs", "AWS Cloud", "Agile"],
  databases: ["MSSQL", "MongoDB"],
  tools: ["Visual Studio", "VS Code", "Cursor", "GitHub", "Tableau", "GitHub Copilot"],
};
