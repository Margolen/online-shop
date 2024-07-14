import styles from './input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  const classNames = className ? `${styles.input} ${className}` : styles.input;
  return <input className={classNames} {...props} />;
}
