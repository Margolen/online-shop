import styles from './input.module.css';

export interface InputProps {
  text?: string;
}

export function Input({ text }: InputProps) {
  return <input type="search" placeholder="Search by title" defaultValue={text || ''} />;
}
