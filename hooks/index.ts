'use client';

/**
 * Custom React hooks for shared functionality
 */

import { useEffect, useState, useCallback } from 'react';

/**
 * Hook for managing carousel state
 * Handles slide navigation and auto-play functionality
 */
export function useCarousel(totalSlides: number, autoPlayDelay = 5000) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (index < 0) {
      setCurrentSlide(totalSlides - 1);
    } else if (index >= totalSlides) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Auto-play effect
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const interval = setInterval(nextSlide, autoPlayDelay);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, autoPlayDelay, totalSlides]);

  return {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    setIsPaused,
  };
}

/**
 * Hook for detecting scroll position and direction
 * Useful for header animations and scroll-based effects
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setScrollPosition(currentScroll);
      
      if (currentScroll > lastScroll) {
        setScrollDirection('down');
      } else if (currentScroll < lastScroll) {
        setScrollDirection('up');
      }
      
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollPosition, scrollDirection };
}

/**
 * Hook for managing mobile menu state
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const toggleMenu = useCallback(() => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [isOpen, openMenu, closeMenu]);

  return { isOpen, openMenu, closeMenu, toggleMenu };
}

/**
 * Hook for Intersection Observer
 * Useful for scroll animations and lazy loading
 */
export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);

  return { ref: setRef, isIntersecting };
}
