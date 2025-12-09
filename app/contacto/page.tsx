/**
 * Contact Page
 * Contact form with WhatsApp integration
 */

import { generatePageMetadata } from '@/lib/seo';
import { Hero } from '@/components/sections/Hero';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata = generatePageMetadata({
  title: 'Contacto',
  description:
    '¿Tienes una idea, un proyecto o una consulta? Estamos aquí para ayudarte a crear el mueble perfecto para tu espacio. Contáctanos por WhatsApp.',
  path: '/contacto',
  keywords: [
    'contacto muebles',
    'whatsapp muebles',
    'cotización muebles',
    'presupuesto muebles',
  ],
});

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contáctanos"
        subtitle="¿Tienes una idea, un proyecto o una consulta? Estamos aquí para ayudarte a crear el mueble perfecto para tu espacio."
      />
      <ContactForm />
    </>
  );
}
