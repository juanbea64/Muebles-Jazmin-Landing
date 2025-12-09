/**
 * Button Component
 * Reusable button with variants for different use cases
 * Server Component by default, can be used in client components
 */

import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const buttonClass = `${styles.btn} ${styles[`btn-${variant}`]} ${className}`;

  // Render as Link if href is provided
  if (href) {
    return (
      <Link href={href} className={buttonClass} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
