import { NavLink } from '../../atoms/navLink/navLink';
import { Cart } from '../../atoms/cart/cart';

import styles from './nav.module.css';

type NavElement = string | React.ReactNode;

const navList: NavElement[] = [
  'Catalog',
  'FAQ',
  <Cart key="cart" itemCount={1}>
    Cart
  </Cart>,
  'Johnson Smith',
];

export type NavProps = {
  className: string;
};

export function Nav({ className }: NavProps) {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <ul className={styles.navList}>
        {navList.map((nav, navId) => (
          <li key={navId} className={styles.navItem}>
            <NavLink>{nav}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
