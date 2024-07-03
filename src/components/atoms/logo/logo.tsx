import styles from './logo.module.css';

export interface LogoProps {
  children: React.ReactNode;
  className: string;
}

export function Logo({ children, className }: LogoProps) {
  return <div className={`${styles.logo} ${className}`}>{children}</div>;
}
