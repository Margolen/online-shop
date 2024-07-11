import styles from './navLink.module.css';

export interface NavLinkProps {
  children: React.ReactNode;
  className: string;
}

export function NavLink({ children, className }: NavLinkProps) {
  const classNames = className ? `${styles.nav} ${className}` : styles.nav;
  return <a className={classNames}>{children}</a>;
}
