/**
 * Materials Page
 * Dedicated page for materials showcase
 */

import { generatePageMetadata } from '@/lib/seo';
import { Hero } from '@/components/sections/Hero';
import { Materials } from '@/components/sections/Materials';
import { Button } from '@/components/ui/Button';
import { MATERIALS } from '@/lib/constants';
import styles from './materials.module.css';

export const metadata = generatePageMetadata({
  title: 'Materiales',
  description:
    'Trabajamos con materiales de alta calidad: Triplex, MDF, Melamina y herrajes premium. Seleccionados cuidadosamente para garantizar durabilidad, estética y funcionalidad.',
  path: '/materiales',
  keywords: [
    'materiales muebles',
    'MDF',
    'melamina',
    'triplex',
    'herrajes',
    'materiales premium',
  ],
});

const benefits = [
  {
    number: '01',
    title: 'Durabilidad Garantizada',
    description:
      'Todos nuestros materiales pasan controles de calidad rigurosos para asegurar que cada mueble durará años sin deteriorarse.',
  },
  {
    number: '02',
    title: 'Acabados Premium',
    description:
      'Ofrecemos acabados de alta calidad que complementan cualquier estilo de decoración, desde clásico hasta contemporáneo.',
  },
  {
    number: '03',
    title: 'Personalización Total',
    description:
      'Nuestros materiales se adaptan a tus necesidades específicas, permitiendo crear diseños verdaderamente únicos.',
  },
  {
    number: '04',
    title: 'Sostenibilidad',
    description:
      'Trabajamos con proveedores comprometidos con prácticas sostenibles, cuidando el medio ambiente en cada paso.',
  },
];

export default function MaterialsPage() {
  return (
    <>
      <Hero
        eyebrow="✦ Calidad Premium ✦"
        title={
          <>
            Materiales de
            <br />
            Fabricación
          </>
        }
        subtitle="Seleccionamos cuidadosamente cada material para garantizar durabilidad, estética y funcionalidad en todos nuestros muebles."
      />

      <section className={styles.intro}>
        <div className={styles.container}>
          <h2 className={styles.introTitle}>Trabajamos con los mejores</h2>
          <p className={styles.introText}>
            Cada material es seleccionado por su calidad y resistencia
          </p>
        </div>
      </section>

      <Materials materials={MATERIALS} title="" showDescription={true} />

      <section className={styles.benefits}>
        <div className={styles.container}>
          <h2 className={styles.benefitsTitle}>
            ¿Por qué elegir nuestros materiales?
          </h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <div key={benefit.number} className={styles.benefit}>
                <div className={styles.benefitNumber}>{benefit.number}</div>
                <div className={styles.benefitContent}>
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>¿Listo para crear tu proyecto?</h2>
          <p className={styles.ctaText}>
            Contáctanos para asesorarte sobre los mejores materiales para tu
            espacio
          </p>
          <Button href="/contacto" variant="primary">
            Solicitar Asesoramiento
          </Button>
        </div>
      </section>
    </>
  );
}
