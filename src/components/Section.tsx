import { type CSSProperties, type ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";
import styles from "./Section.module.css";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className }: SectionProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${styles.section}${className ? ` ${className}` : ""}`}
    >
      <div className="container">
        <header
          className={`${styles.header} reveal-item`}
          style={{ "--reveal-delay": "0" } as CSSProperties}
        >
          <h2 className={styles.title}>{title}</h2>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
