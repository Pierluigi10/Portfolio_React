import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Custom hook to trigger animations when elements come into view
 * Uses Intersection Observer API for performance
 */
export function useScrollAnimation(
  options: UseScrollAnimationOptions = {}
): [React.RefObject<HTMLElement>, boolean] {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    triggerOnce = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef, isVisible];
}

/**
 * Hook to observe multiple elements for scroll animations
 */
export function useScrollAnimations(
  options: UseScrollAnimationOptions = {}
): [(element: HTMLElement | null) => void, Map<HTMLElement, boolean>] {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    triggerOnce = true,
  } = options;

  const [visibleElements, setVisibleElements] = useState<
    Map<HTMLElement, boolean>
  >(new Map());

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        setVisibleElements((prev) => {
          const newMap = new Map(prev);
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              newMap.set(entry.target as HTMLElement, true);
              if (triggerOnce && observerRef.current) {
                observerRef.current.unobserve(entry.target);
              }
            } else if (!triggerOnce) {
              newMap.set(entry.target as HTMLElement, false);
            }
          });
          return newMap;
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  const observeElement = (element: HTMLElement | null) => {
    if (!element || !observerRef.current) return;

    observerRef.current.observe(element);
  };

  return [observeElement, visibleElements];
}

