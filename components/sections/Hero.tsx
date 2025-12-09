/**
 * Hero Section Component
 * Main hero section with background image and CTA
 * Server Component
 */

import { Button } from '@/components/ui/Button';
import styles from './Hero.module.css';

interface HeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  ctaText,
  ctaHref,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroInner}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {ctaText && ctaHref && (
          <Button href={ctaHref} variant="primary">
            {ctaText}
          </Button>
        )}
      </div>
    </section>
  );
}
