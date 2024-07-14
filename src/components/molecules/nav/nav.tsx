import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { NavLink } from '../../atoms/navLink/navLink';
import { Cart } from '../../atoms/cart/cart';

import { useGetCartByUserIdQuery } from '../../../services/product';

import styles from './nav.module.css';

export interface NavElement {
  name: string;
  path: string;
  content: string | React.ReactNode;
}

export type NavBarProps = {
  className: string;
  navItems: NavElement[];
};

export function NavBar({ className, navItems }: NavBarProps) {
  const [numItemsInCart] = useState(1);
  const navigate = useNavigate();

  const navigateAndScroll = (path: string, name: string) => {
    navigate(path, { replace: true });
    setTimeout(() => {
      scroller.scrollTo(name, {
        duration: 500,
        smooth: true,
      });
    }, 100);
  };

  return (
    <nav className={`${styles.nav} ${className}`}>
      <ul className={styles.nav__list}>
        {navItems.map((nav) => (
          <li key={nav.name} className={styles.nav__item}>
            <NavLink key={nav.name} onClick={() => navigateAndScroll(nav.path, nav.name)}>
              {nav.content}
            </NavLink>
          </li>
        ))}
        <NavLink onClick={() => navigateAndScroll('/cart', 'cart')}>
          <Cart itemCount={numItemsInCart}>Cart</Cart>
        </NavLink>
        <NavLink>Johnson Smith</NavLink>
      </ul>
    </nav>
  );
}
