import styles from './input.module.css';

export interface InputProps {
  text?: string;
  className?: string;
}

export function Input({ text, className }: InputProps) {
  return (
    <input
      className={styles.input}
      type="search"
      placeholder="Search by title"
      defaultValue={text || ''}
    />
  );
}
