/**
 * Core TypeScript types for the application
 * Defines interfaces for data structures used throughout the app
 */

export interface Material {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface ProcedureStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  shape: 'triangle' | 'circle' | 'square';
}

export interface Project {
  id: number;
  title: string;
  thumbnail: string;
  images: string[];
}

export interface CarouselSlide {
  id: number;
  image: string;
  alt: string;
}

export interface NavLink {
  href: string;
  label: string;
  variant?: 'default' | 'ghost';
}

export interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}
