import { useEffect, useState } from "react";
import { useI18n } from "../i18n/context";
import { LanguageToggle } from "./LanguageToggle";
import styles from "./Nav.module.css";

export function Nav() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className={`${styles.header}${scrolled ? ` ${styles.scrolled}` : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} onClick={() => setOpen(false)}>
          {t.brand}
        </a>

        <nav
          id="mobile-nav"
          className={`${styles.nav}${open ? ` ${styles.navOpen}` : ""}`}
          aria-label="Primary"
        >
          <ul className={styles.list}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileToggle}>
            <LanguageToggle />
          </div>
        </nav>

        <div className={styles.desktopToggle}>
          <LanguageToggle />
        </div>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.bar}${open ? ` ${styles.barOpen}` : ""}`} />
          <span className={`${styles.bar}${open ? ` ${styles.barOpen}` : ""}`} />
        </button>
      </div>
    </header>
  );
}
