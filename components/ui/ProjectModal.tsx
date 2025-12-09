'use client';

/**
 * ProjectModal Component
 * Modal with image carousel for project details
 * Client Component (requires state and interaction)
 */

import { useEffect } from 'react';
import Image from 'next/image';
import { useCarousel } from '@/hooks';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
}

export function ProjectModal({
  isOpen,
  onClose,
  title,
  images,
}: ProjectModalProps) {
  const { currentSlide, goToSlide, nextSlide, prevSlide } = useCarousel(
    images.length,
    0
  );

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyNav = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyNav);
    return () => window.removeEventListener('keydown', handleKeyNav);
  }, [isOpen, nextSlide, prevSlide]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ×
        </button>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.carousel}>
          <div className={styles.carouselTrack}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.slide} ${
                  index === currentSlide ? styles.active : ''
                }`}
              >
                <Image
                  src={image}
                  alt={`${title} - Imagen ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <>
              <button
                className={`${styles.navBtn} ${styles.prev}`}
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
                className={`${styles.navBtn} ${styles.next}`}
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
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className={styles.dots}>
            {images.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === currentSlide ? styles.active : ''
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
