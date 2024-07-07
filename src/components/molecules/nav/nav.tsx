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
      <ul className={styles.nav__list}>
        {navItems.map((nav, navId) => (
          <li key={navId} className={styles.nav__item}>
            <NavLink>{nav}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
