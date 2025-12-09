/**
 * Stats Section Component
 * Displays business statistics with animated numbers
 * Server Component
 */

import type { Stat } from '@/lib/types';
import styles from './Stats.module.css';

interface StatsProps {
  stats: Stat[];
  title?: string;
}

export function Stats({
  stats,
  title = 'Transformamos tus espacios por completo',
}: StatsProps) {
  return (
    <section className={styles.stats} aria-label="Estadísticas de la empresa">
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.right} role="list">
          {stats.map((stat, index) => (
            <div key={index} className={styles.stat} role="listitem">
              <div className={styles.number}>{stat.number}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
