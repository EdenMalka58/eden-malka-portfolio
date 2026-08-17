import { type CSSProperties } from "react";
import { projects } from "../data/projects";
import { useI18n } from "../i18n/context";
import { Section } from "./Section";
import styles from "./Projects.module.css";

export function Projects() {
  const { t } = useI18n();

  return (
    <Section id="projects" title={t.projects.title} subtitle={t.projects.subtitle}>
      <div className={`${styles.list} stagger`} style={{ "--stagger-base": "100" } as CSSProperties}>
        {t.projects.items.map((item, index) => {
          const meta = projects.find((p) => p.id === item.id);
          if (!meta) return null;

          return (
            <article
              key={item.id}
              className={styles.item}
              style={{ "--i": index } as CSSProperties}
            >
              <div className={styles.copy}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.summary}>{item.summary}</p>
                <ul className={styles.tech}>
                  {meta.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.links}>
                <a
                  href={meta.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.projects.repo}
                </a>
                {meta.liveUrl ? (
                  <a
                    href={meta.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.projects.live}
                  </a>
                ) : null}
                {meta.videoUrl ? (
                  <a
                    href={meta.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.projects.video}
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
