/**
 * Portfolio Page
 * Displays project portfolio with modal gallery
 */

import { generatePageMetadata } from '@/lib/seo';
import { Hero } from '@/components/sections/Hero';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import type { Project } from '@/lib/types';

export const metadata = generatePageMetadata({
  title: 'Portafolio',
  description:
    'Conoce nuestros proyectos más destacados en diseño y fabricación de muebles a medida. Acabados premium, materiales de calidad y soluciones pensadas para cada espacio.',
  path: '/portafolio',
  keywords: ['portafolio muebles', 'proyectos muebles', 'galería muebles'],
});

// Project data
const projects: Project[] = [
  {
    id: 1,
    title: 'Proyecto 1',
    thumbnail: '/images/img1.jpeg',
    images: [
      '/images/img1.jpeg',
      '/images/img2.jpeg',
      '/images/img3.jpeg',
      '/images/img4.jpeg',
    ],
  },
  {
    id: 2,
    title: 'Proyecto 2',
    thumbnail: '/images/img2.jpeg',
    images: ['/images/img2.jpeg', '/images/img5.jpeg', '/images/img6.jpeg'],
  },
  {
    id: 3,
    title: 'Proyecto 3',
    thumbnail: '/images/img3.jpeg',
    images: [
      '/images/img3.jpeg',
      '/images/img7.jpeg',
      '/images/img8.jpeg',
      '/images/img1.jpeg',
    ],
  },
  {
    id: 4,
    title: 'Proyecto 4',
    thumbnail: '/images/img4.jpeg',
    images: ['/images/img4.jpeg', '/images/img2.jpeg', '/images/img6.jpeg'],
  },
  {
    id: 5,
    title: 'Proyecto 5',
    thumbnail: '/images/img5.jpeg',
    images: [
      '/images/img5.jpeg',
      '/images/img3.jpeg',
      '/images/img7.jpeg',
      '/images/img1.jpeg',
    ],
  },
  {
    id: 6,
    title: 'Proyecto 6',
    thumbnail: '/images/img6.jpeg',
    images: ['/images/img6.jpeg', '/images/img4.jpeg', '/images/img8.jpeg'],
  },
  {
    id: 7,
    title: 'Proyecto 7',
    thumbnail: '/images/img7.jpeg',
    images: [
      '/images/img7.jpeg',
      '/images/img5.jpeg',
      '/images/img1.jpeg',
      '/images/img3.jpeg',
    ],
  },
  {
    id: 8,
    title: 'Proyecto 8',
    thumbnail: '/images/img8.jpeg',
    images: [
      '/images/img8.jpeg',
      '/images/img6.jpeg',
      '/images/img2.jpeg',
      '/images/img4.jpeg',
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Hero
        eyebrow="Desktop & mobile"
        title="Descarga nuestro portafolio"
        subtitle="Conoce nuestros proyectos más destacados en diseño y fabricación de muebles a medida. Acabados premium, materiales de calidad y soluciones pensadas para cada espacio."
        ctaText="📥 Descargar Portafolio (PDF)"
        ctaHref="#projects"
      />
      <ProjectsGrid projects={projects} />
    </>
  );
}
