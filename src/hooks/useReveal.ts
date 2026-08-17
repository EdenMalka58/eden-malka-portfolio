import { useEffect, useRef } from "react";

type RevealOptions = {
  threshold?: number;
  rootMargin?: string;
};

/** Observes an element and adds `is-visible` once it enters the viewport. */
export function useReveal<T extends HTMLElement>(options: RevealOptions = {}) {
  const ref = useRef<T>(null);
  const { threshold = 0.12, rootMargin = "0px 0px -8% 0px" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
