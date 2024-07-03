import styles from './button.module.css';

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <button className={styles.button}>{children}</button>;
}
