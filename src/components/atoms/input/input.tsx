import './input.module.css';

export interface InputProps {
  text: string;
}

export default function Input({ text }: InputProps) {
  return <input type="search" placeholder="Search by title" value={text} />;
}
