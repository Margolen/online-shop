import { NavLink } from '../../atoms/navLink/navLink';

import styles from './nav.module.css';

export type NavElement = string | React.ReactNode;

export type NavBarProps = {
  className: string;
  navItems: NavElement[];
};

export function NavBar({ className, navItems }: NavBarProps) {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <ul className={styles.navList}>
        {navItems.map((nav, navId) => (
          <li key={navId} className={styles.navItem}>
            <NavLink>{nav}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
