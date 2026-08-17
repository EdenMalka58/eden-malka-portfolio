import { type CSSProperties } from "react";
import { useI18n } from "../i18n/context";
import { Section } from "./Section";
import styles from "./Experience.module.css";

export function Experience() {
  const { t } = useI18n();
  const { education, work } = t.experience;

  return (
    <Section id="experience" title={t.experience.title}>
      <div className={`${styles.grid} stagger`} style={{ "--stagger-base": "100" } as CSSProperties}>
        <div style={{ "--i": 0 } as CSSProperties}>
          <h3 className={styles.columnTitle}>{t.experience.educationTitle}</h3>
          <article className={styles.entry}>
            <p className={styles.years}>{education.years}</p>
            <h4 className={styles.role}>{education.degree}</h4>
            <p className={styles.org}>{education.school}</p>
            <p className={styles.highlight}>{education.highlight}</p>
          </article>
        </div>

        <div style={{ "--i": 1 } as CSSProperties}>
          <h3 className={styles.columnTitle}>{t.experience.workTitle}</h3>
          <article className={styles.entry}>
            <p className={styles.years}>{work.years}</p>
            <h4 className={styles.role}>{work.role}</h4>
            <p className={styles.org}>{work.org}</p>
            <ul className={styles.bullets}>
              {work.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </Section>
  );
}
