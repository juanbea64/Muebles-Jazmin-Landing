'use client';

/**
 * Carousel Component
 * Image carousel with auto-play and navigation
 * Client Component (requires state and interaction)
 */

import { useCarousel } from '@/hooks';
import Image from 'next/image';
import type { CarouselSlide } from '@/lib/types';
import styles from './Carousel.module.css';

interface CarouselProps {
  slides: CarouselSlide[];
  autoPlayDelay?: number;
}

export function Carousel({ slides, autoPlayDelay = 5000 }: CarouselProps) {
  const { currentSlide, goToSlide, nextSlide, prevSlide, setIsPaused } =
    useCarousel(slides.length, autoPlayDelay);

  return (
    <section
      className={styles.carousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.carouselTrack}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.carouselSlide} ${
              index === currentSlide ? styles.active : ''
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
            <button
              className={`${styles.carouselBtn} ${styles.prev}`}
              onClick={prevSlide}
              aria-label="Anterior"
            >
              <Image
                src="/images/atras.svg"
                alt="Anterior"
                width={30}
                height={30}
              />
            </button>
            <button
              className={`${styles.carouselBtn} ${styles.next}`}
              onClick={nextSlide}
              aria-label="Siguiente"
            >
              <Image
                src="/images/adelante.svg"
                alt="Siguiente"
                width={30}
                height={30}
              />
            </button>
          </div>
        ))}
      </div>

      <div className={styles.carouselDots}>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`${styles.dot} ${
              index === currentSlide ? styles.active : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
