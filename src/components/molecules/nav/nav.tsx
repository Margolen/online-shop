import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { NavLink } from '../../atoms/navLink/navLink';
import { Cart } from '../../atoms/cart/cart';

import { useDispatch, useSelector } from 'react-redux';
import { getCartsByUserId } from '../../../services/api';
import { RootState, AppDispatch } from '../../../app/store';

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
  const [numItemsInCart, setNumItemsInCart] = useState(0);
  const [userId] = useState(33);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { carts, total } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(getCartsByUserId(userId));
  }, [userId]);

  useEffect(() => {
    const firstCart = total !== 0 ? carts[0] : null;
    if (firstCart) {
      setNumItemsInCart(firstCart.totalProducts);
    }
  }, [carts, total]);

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
