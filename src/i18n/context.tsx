import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en } from "./en";
import { he } from "./he";
import type { Dictionary, Locale } from "./types";

const STORAGE_KEY = "eden-portfolio-locale";

type I18nContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const dictionaries: Record<Locale, Dictionary> = { en, he };

const I18nContext = createContext<I18nContextValue | null>(null);

function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "he") return stored;
  } catch {
    /* ignore */
  }
  return "en";
}

function applyDocumentLocale(locale: Locale) {
  document.documentElement.lang = locale === "he" ? "he" : "en";
  document.documentElement.dir = locale === "he" ? "rtl" : "ltr";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    return readStoredLocale();
  });
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    applyDocumentLocale(locale);
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState((prev) => {
      if (prev === next) return prev;
      setFadeKey((k) => k + 1);
      return next;
    });
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "he" : "en");
  }, [locale, setLocale]);

  const value = useMemo(
    () => ({
      locale,
      t: dictionaries[locale],
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale],
  );

  return (
    <I18nContext.Provider value={value}>
      <div key={fadeKey} className="lang-fade">
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
