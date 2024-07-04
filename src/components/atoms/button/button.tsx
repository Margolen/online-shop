import styles from './button.module.css';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className }: ButtonProps) {
  const classNames = className ? `${styles.button} ${className}` : styles.button;
  return <button className={classNames}>{children}</button>;
}
