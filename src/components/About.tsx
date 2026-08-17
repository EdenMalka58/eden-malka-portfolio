import { type CSSProperties } from "react";
import { useI18n } from "../i18n/context";
import { Section } from "./Section";
import styles from "./About.module.css";

export function About() {
  const { t } = useI18n();

  return (
    <Section id="about" title={t.about.title}>
      <div className={`${styles.body} stagger`} style={{ "--stagger-base": "80" } as CSSProperties}>
        {t.about.body.map((paragraph, index) => (
          <p key={paragraph} style={{ "--i": index } as CSSProperties}>
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
