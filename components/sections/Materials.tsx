/**
 * Materials Section Component
 * Displays materials grid with icons
 * Server Component
 */

import Image from 'next/image';
import type { Material } from '@/lib/types';
import styles from './Materials.module.css';

interface MaterialsProps {
  materials: Material[];
  title?: string;
  showDescription?: boolean;
}

export function Materials({
  materials,
  title = 'Materiales de Fabricación',
  showDescription = false,
}: MaterialsProps) {
  return (
    <section className={styles.materials}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {materials.map((material) => (
          <div key={material.id} className={styles.materialItem}>
            <div className={styles.iconCircle}>
              <Image
                src={material.icon}
                alt={material.name}
                width={80}
                height={80}
              />
            </div>
            <p className={styles.name}>{material.name}</p>
            {showDescription && material.description && (
              <p className={styles.description}>{material.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
