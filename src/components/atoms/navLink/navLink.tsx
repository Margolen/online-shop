import styles from './navLink.module.css';

export interface NavLinkProps {
  children: React.ReactNode;
}

export function NavLink({ children }: NavLinkProps) {
  return <a className={styles.nav}>{children}</a>;
}
