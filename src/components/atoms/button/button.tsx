import { useCallback } from 'react';
import styles from './button.module.css';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ children, className, onClick }: ButtonProps) {
  const dummyClick = useCallback(() => {}, []);
  const classNames = className ? `${styles.button} ${className}` : styles.button;

  return (
    <button className={classNames} onClick={onClick || dummyClick}>
      {children}
    </button>
  );
}
