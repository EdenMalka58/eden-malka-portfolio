import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { useReveal } from "./hooks/useReveal";
import { useI18n } from "./i18n/context";
import styles from "./App.module.css";

export default function App() {
  const { t } = useI18n();
  const footerRef = useReveal<HTMLElement>({ threshold: 0.2 });

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer ref={footerRef} className={`reveal ${styles.footer}`}>
        <div className="container">
          <p className="reveal-item">{t.footer}</p>
        </div>
      </footer>
    </>
  );
}
