import { useNavigate } from 'react-router-dom';

import styles from './logo.module.css';

export interface LogoProps {
  children: React.ReactNode;
  className: string;
}

export function Logo({ children, className }: LogoProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.logo} ${className}`}
      onClick={() => {
        navigate('/');
      }}
    >
      {children}
    </div>
  );
}
