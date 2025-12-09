'use client';

/**
 * ContactForm Component
 * Contact form with WhatsApp integration
 * Client Component (requires form state and validation)
 */

import { useState, FormEvent } from 'react';
import { sendToWhatsApp } from '@/lib/whatsapp';
import type { ContactFormData } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    sendToWhatsApp(formData);

    // Reset form
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: '',
    });
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <div className={styles.field}>
            <label htmlFor="nombre" className={styles.label}>
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`${styles.input} ${errors.nombre ? styles.error : ''}`}
              required
              aria-required="true"
              aria-invalid={!!errors.nombre}
              aria-describedby={errors.nombre ? 'nombre-error' : undefined}
            />
            {errors.nombre && (
              <span id="nombre-error" className={styles.errorMessage}>
                {errors.nombre}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email ? styles.error : ''}`}
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" className={styles.errorMessage}>
                {errors.email}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="telefono" className={styles.label}>
              Número de contacto
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className={`${styles.input} ${errors.telefono ? styles.error : ''}`}
              required
              aria-required="true"
              aria-invalid={!!errors.telefono}
              aria-describedby={errors.telefono ? 'telefono-error' : undefined}
            />
            {errors.telefono && (
              <span id="telefono-error" className={styles.errorMessage}>
                {errors.telefono}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="mensaje" className={styles.label}>
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              value={formData.mensaje}
              onChange={handleChange}
              className={`${styles.textarea} ${errors.mensaje ? styles.error : ''}`}
              required
              aria-required="true"
              aria-invalid={!!errors.mensaje}
              aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
            />
            {errors.mensaje && (
              <span id="mensaje-error" className={styles.errorMessage}>
                {errors.mensaje}
              </span>
            )}
          </div>

          <Button type="submit" variant="primary">
            Enviar por WhatsApp
          </Button>
        </form>
      </div>
    </section>
  );
}
