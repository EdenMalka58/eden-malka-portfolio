import { useI18n } from "../i18n/context";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-brand">
      <div className={styles.atmosphere} aria-hidden="true">
        <div className={styles.wave} />
        <div className={styles.glow} />
      </div>

      <div className={`container ${styles.content} hero-animate`}>
        <p className={styles.role}>{t.hero.role}</p>
        <h1 id="hero-brand" className={styles.brand}>
          {t.brand}
        </h1>
        <span className={styles.brandAccent} aria-hidden="true" />
        <p className={styles.headline}>{t.hero.headline}</p>
        <p className={styles.supporting}>{t.hero.supporting}</p>
        <div className={styles.ctas}>
          <a className="btn btn-primary" href="#projects">
            {t.hero.ctaProjects}
          </a>
          <a className="btn btn-secondary" href="#contact">
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}
