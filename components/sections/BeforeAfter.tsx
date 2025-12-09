'use client';

/**
 * BeforeAfter Component
 * Interactive before/after image slider
 * Client Component (requires mouse/touch interaction)
 */

import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './BeforeAfter.module.css';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title?: React.ReactNode;
  description?: string;
}

export function BeforeAfter({
  beforeImage,
  afterImage,
  title,
  description,
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {title && (
          <div className={styles.textContent}>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}
          </div>
        )}
        <div
          ref={containerRef}
          className={styles.baWrapper}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          <div className={styles.baContainer}>
            <Image
              src={beforeImage}
              alt="Antes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className={styles.beforeImg}
            />
            <Image
              src={afterImage}
              alt="Después"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: 'cover',
                clipPath: `inset(0 ${100 - position}% 0 0)`,
              }}
              className={styles.afterImg}
            />
            <div
              className={styles.handle}
              style={{ left: `${position}%` }}
              aria-label="Control deslizante"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
