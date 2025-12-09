'use client';

/**
 * Header Component
 * Main site header with navigation and mobile menu
 * Client Component (requires state for mobile menu)
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS, BUSINESS_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';
import styles from './Header.module.css';

interface HeaderProps {
  variant?: 'default' | 'dark';
}

export function Header({ variant = 'default' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `${styles.header} ${
    variant === 'dark' ? styles.dark : ''
  } ${isScrolled ? styles.scrolled : ''}`;

  return (
    <header className={headerClass}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo} aria-label={BUSINESS_NAME}>
          <Image
            src="/images/logo.png"
            alt={BUSINESS_NAME}
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Mobile menu toggle */}
        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.hidden : ''}`}
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
        >
          <Image
            src="/images/burger.png"
            alt="Menú"
            width={30}
            height={30}
          />
        </button>

        {/* Desktop navigation */}
        <nav className={styles.desktopNav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                {link.variant === 'ghost' ? (
                  <Button href={link.href} variant="ghost">
                    {link.label}
                  </Button>
                ) : (
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu */}
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
}
