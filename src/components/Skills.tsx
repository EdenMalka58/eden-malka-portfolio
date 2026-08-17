import { type CSSProperties } from "react";
import { skills, type SkillCategoryKey } from "../data/skills";
import { useI18n } from "../i18n/context";
import { Section } from "./Section";
import styles from "./Skills.module.css";

const order: SkillCategoryKey[] = ["languages", "frameworks", "databases", "tools"];

export function Skills() {
  const { t } = useI18n();

  return (
    <Section id="skills" title={t.skills.title} subtitle={t.skills.subtitle}>
      <div className={`${styles.grid} stagger`} style={{ "--stagger-base": "100" } as CSSProperties}>
        {order.map((key, index) => (
          <div key={key} className={styles.group} style={{ "--i": index } as CSSProperties}>
            <h3 className={styles.groupTitle}>{t.skills.categories[key]}</h3>
            <ul className={styles.list}>
              {skills[key].map((skill) => (
                <li key={skill} className={styles.item}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
