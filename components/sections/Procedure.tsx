/**
 * Procedure Section Component
 * Shows the step-by-step process with icons
 * Server Component
 */

import Image from 'next/image';
import type { ProcedureStep } from '@/lib/types';
import styles from './Procedure.module.css';

interface ProcedureProps {
  steps: ProcedureStep[];
  title?: string;
}

export function Procedure({
  steps,
  title = 'Nuestro procedimiento',
}: ProcedureProps) {
  return (
    <section className={styles.procedure}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        {steps.map((step, index) => (
          <div key={step.id}>
            <div className={styles.step}>
              <div className={`${styles.shapeWrapper} ${styles[step.shape]}`}>
                <div className={styles.shapeBack} />
                <div className={styles.shapeFront}>
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={60}
                    height={60}
                  />
                </div>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
            {index < steps.length - 1 && <div className={styles.separator} />}
          </div>
        ))}
      </div>
    </section>
  );
}
