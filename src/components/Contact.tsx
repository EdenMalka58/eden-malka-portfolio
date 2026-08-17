import { type CSSProperties } from "react";
import { contact } from "../data/contact";
import { useI18n } from "../i18n/context";
import { Section } from "./Section";
import styles from "./Contact.module.css";

export function Contact() {
  const { t } = useI18n();

  const items = [
    {
      label: t.contact.email,
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      label: t.contact.phone,
      value: contact.phone,
      href: contact.phoneHref,
    },
    {
      label: t.contact.linkedin,
      value: "LinkedIn",
      href: contact.linkedin,
    },
    {
      label: t.contact.github,
      value: "GitHub",
      href: contact.github,
    },
  ];

  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <div className={`stagger ${styles.block}`} style={{ "--stagger-base": "80" } as CSSProperties}>
        <p className={styles.location} style={{ "--i": 0 } as CSSProperties}>
          {t.contact.location}
        </p>
        <ul className={styles.list} style={{ "--i": 1 } as CSSProperties}>
          {items.map((item) => (
            <li key={item.label} className={styles.item}>
              <span className={styles.label}>{item.label}</span>
              <a
                className={styles.value}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
