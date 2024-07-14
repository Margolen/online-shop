import styles from './button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  appearance?: string;
}

export function Button({ appearance, children, className, ...props }: ButtonProps) {
  const classNames = className ? `${styles.button} ${className}` : styles.button;

  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  );
}
