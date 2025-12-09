'use client';

/**
 * MobileMenu Component
 * Mobile navigation menu with animation
 * Client Component (requires state and browser events)
 */

import { useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      className={`${styles.mobileNav} ${isOpen ? styles.active : ''}`}
      aria-hidden={!isOpen}
      aria-label="Menú principal móvil"
    >
      <button
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Cerrar menú"
      >
        ×
      </button>
      <ul className={styles.navList}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            {link.variant === 'ghost' ? (
              <Button
                href={link.href}
                variant="ghost"
                onClick={onClose}
              >
                {link.label}
              </Button>
            ) : (
              <Link
                href={link.href}
                className={styles.navLink}
                onClick={onClose}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
