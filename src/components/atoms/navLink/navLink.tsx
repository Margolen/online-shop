import styles from './navLink.module.css';

export interface NavLinkProps extends React.HTMLAttributes<HTMLElement> {}

export function NavLink({ className, children, ...props }: NavLinkProps) {
  const classNames = className ? `${styles.nav} ${className}` : styles.nav;
  return (
    <a {...props} className={classNames}>
      {children}
    </a>
  );
}
