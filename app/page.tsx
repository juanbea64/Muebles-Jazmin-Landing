/**
 * Home Page
 * Main landing page with all sections
 * Server Component
 */

import { Hero } from '@/components/sections/Hero';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { Carousel } from '@/components/sections/Carousel';
import { Materials } from '@/components/sections/Materials';
import { Stats } from '@/components/sections/Stats';
import { Procedure } from '@/components/sections/Procedure';
import {
  MATERIALS,
  STATS,
  PROCEDURE_STEPS,
  CAROUSEL_SLIDES,
} from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Diseños exclusivos, creados a la medida"
        title={
          <>
            No Fabricamos En Serie,
            <br />
            Creamos Experiencias
            <br />
            Personalizadas
          </>
        }
        subtitle="Muebles hechos a medida con materiales seleccionados y acabados premium."
        ctaText="Contacto"
        ctaHref="/contacto"
      />

      <BeforeAfter
        beforeImage="/images/antes1.jpg"
        afterImage="/images/despues1.jpg"
        title={
          <>
            Transformamos tus
            <br />
            espacios por completo
          </>
        }
        description="Hacemos posible un cambio real en tus ambientes, pasando de lo común a lo sofisticado. Cada transformación es un proceso cuidado en cada detalle, donde la personalización, la creatividad y la exclusividad se unen para dar vida a un resultado único. Creemos que cada espacio tiene un antes y un después, y nuestro propósito es llevarlo a su mejor versión: un lugar que no solo se ve diferente, sino que también se siente distinto, reflejando tu estilo y creando una experiencia irrepetible."
      />

      <Carousel slides={CAROUSEL_SLIDES} />

      <Materials materials={MATERIALS} />

      <Stats stats={STATS} />

      <Procedure steps={PROCEDURE_STEPS} />
    </>
  );
}
