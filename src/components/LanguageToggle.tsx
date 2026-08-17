import { useI18n } from "../i18n/context";
import styles from "./LanguageToggle.module.css";

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div className={styles.toggle} role="group" aria-label="Language">
      <button
        type="button"
        className={`${styles.btn}${locale === "en" ? ` ${styles.active}` : ""}`}
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
      >
        {t.langToggle.toEnglish}
      </button>
      <button
        type="button"
        className={`${styles.btn}${locale === "he" ? ` ${styles.active}` : ""}`}
        onClick={() => setLocale("he")}
        aria-pressed={locale === "he"}
      >
        {t.langToggle.toHebrew}
      </button>
    </div>
  );
}
