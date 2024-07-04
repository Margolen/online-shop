import styles from './input.module.css';

export interface InputProps {
  text?: string;
  className?: string;
}

export function Input({ text, className }: InputProps) {
  const classNames = className ? `${styles.input} ${className}` : styles.input;

  return (
    <input
      className={classNames}
      type="search"
      placeholder="Search by title"
      defaultValue={text || ''}
    />
  );
}
