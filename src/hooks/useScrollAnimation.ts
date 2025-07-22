import { useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options;

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
      rootMargin,
    });

    // Observe all elements with fade-in-up class
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold, rootMargin]);
};

export const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-parallax') || '0.5');
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};