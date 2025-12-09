/**
 * Application constants
 * Centralized configuration values and static data
 */

import type { Material, Stat, ProcedureStep, NavLink, CarouselSlide } from './types';

// Business contact information
export const WHATSAPP_NUMBER = '573142018144';
export const BUSINESS_ADDRESS = 'Dirección';
export const BUSINESS_NAME = 'Muebles Jazmín';
export const BUSINESS_YEAR = '2025';

// Navigation links
export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Inicio' },
  { href: '/portafolio', label: 'Portafolio' },
  { href: '/materiales', label: 'Materiales' },
  { href: '/contacto', label: 'Contacto', variant: 'ghost' },
];

// Materials data
export const MATERIALS: Material[] = [
  {
    id: 'triplex',
    name: 'Triplex',
    icon: '/images/triplex.png',
    description: 'Material versátil y resistente, ideal para estructuras con excelente durabilidad.',
  },
  {
    id: 'mdf-melamina',
    name: 'MDF / MELAMINA',
    icon: '/images/MDF-Melamina.png',
    description: 'Acabado premium con múltiples opciones de colores y texturas elegantes.',
  },
  {
    id: 'mdf-crudo',
    name: 'MDF CRUDO',
    icon: '/images/MDF-crudo.png',
    description: 'Base versátil para aplicar diferentes acabados según tus preferencias.',
  },
  {
    id: 'herrajes',
    name: 'Herrajes',
    icon: '/images/herrajes.png',
    description: 'Componentes de alta calidad para un funcionamiento óptimo y duradero.',
  },
];

// Statistics data
export const STATS: Stat[] = [
  { number: '+20', label: 'años de experiencia' },
  { number: '+500', label: 'proyecto entregados' },
  { number: '95%', label: 'clientes satisfechos' },
  { number: '100%', label: 'de garantía en todos nuestros trabajos' },
];

// Procedure steps data
export const PROCEDURE_STEPS: ProcedureStep[] = [
  {
    id: 1,
    title: 'Diseño y Personalización',
    description: 'Creamos muebles únicos adaptados a tus espacios y necesidades. Nuestro equipo diseña con atención al detalle, buscando siempre la combinación perfecta entre funcionalidad, estilo y comodidad.',
    icon: '/images/tabla.png',
    shape: 'triangle',
  },
  {
    id: 2,
    title: 'Fabricación e Instalación',
    description: 'Trabajamos con materiales de alta calidad y técnicas modernas para asegurar la durabilidad de cada mueble. Además, nos encargamos de la instalación para que recibas un producto listo para usar.',
    icon: '/images/icon2.png',
    shape: 'circle',
  },
  {
    id: 3,
    title: 'Servicio y Garantía',
    description: 'No solo entregamos muebles, entregamos confianza. Brindamos soporte, mantenimiento y asesoría para garantizar que cada pieza conserve su belleza y funcionalidad con el paso del tiempo.',
    icon: '/images/engranaje.png',
    shape: 'square',
  },
];

// Carousel slides data
export const CAROUSEL_SLIDES: CarouselSlide[] = [
  { id: 1, image: '/images/img1.jpeg', alt: 'Proyecto de muebles 1' },
  { id: 2, image: '/images/img2.jpeg', alt: 'Proyecto de muebles 2' },
  { id: 3, image: '/images/img3.jpeg', alt: 'Proyecto de muebles 3' },
  { id: 4, image: '/images/img4.jpeg', alt: 'Proyecto de muebles 4' },
  { id: 5, image: '/images/img5.jpeg', alt: 'Proyecto de muebles 5' },
  { id: 6, image: '/images/img6.jpeg', alt: 'Proyecto de muebles 6' },
];
