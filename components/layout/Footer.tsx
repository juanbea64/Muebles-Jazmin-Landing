/**
 * Footer Component
 * Site footer with contact information and branding
 * Server Component
 */

import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS_NAME, BUSINESS_ADDRESS, BUSINESS_YEAR, WHATSAPP_NUMBER } from '@/lib/constants';
import styles from './Footer.module.css';

export function Footer() {
  const formattedPhone = `+57 ${WHATSAPP_NUMBER.slice(2, 5)} ${WHATSAPP_NUMBER.slice(5)}`;

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerItem}>
            <div className={styles.label}>Estamos ubicados</div>
            <div className={styles.text}>{BUSINESS_ADDRESS}</div>
          </div>
        </div>

        <div className={styles.footerCenter}>
          <Link href="/" className={styles.footerLogo} aria-label={BUSINESS_NAME}>
            <Image
              src="/images/logo.png"
              alt={BUSINESS_NAME}
              width={100}
              height={35}
            />
          </Link>
          <div className={styles.copyright}>
            © {BUSINESS_YEAR} {BUSINESS_NAME}
          </div>
        </div>

        <div className={styles.footerRight}>
          <div className={styles.footerItem}>
            <div className={styles.label}>Contáctanos</div>
            <a
              href={`tel:${WHATSAPP_NUMBER}`}
              className={styles.text}
              aria-label="Llamar por teléfono"
            >
              {formattedPhone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
