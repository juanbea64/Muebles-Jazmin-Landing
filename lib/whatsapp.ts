/**
 * Utility functions for WhatsApp integration
 */

import type { ContactFormData } from './types';
import { WHATSAPP_NUMBER } from './constants';

/**
 * Formats contact form data into a WhatsApp message
 */
export function formatWhatsAppMessage(data: ContactFormData): string {
  return `*Nuevo mensaje desde la web* 🏠

*Nombre:* ${data.nombre}
*Email:* ${data.email}
*Teléfono:* ${data.telefono}

*Mensaje:*
${data.mensaje}`;
}

/**
 * Generates WhatsApp URL with pre-filled message
 */
export function generateWhatsAppURL(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
}

/**
 * Opens WhatsApp in a new window with the provided message
 */
export function sendToWhatsApp(data: ContactFormData): void {
  const message = formatWhatsAppMessage(data);
  const url = generateWhatsAppURL(message);
  window.open(url, '_blank');
}
