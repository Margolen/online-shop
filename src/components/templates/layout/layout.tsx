import { Header } from '../../organisms/header/header';

import styles from './layout.module.css';

export interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
  const classNames = className ? `${styles.layout} ${className}` : styles.layout;

  return (
    <main className={classNames}>
      <Header />
      {children}
    </main>
  );
}
