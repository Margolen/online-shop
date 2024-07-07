import { useMemo, useState } from 'react';

import { Logo } from '../../atoms/logo/logo';
import { NavBar } from '../../molecules/nav/nav';
import { Container } from '../../templates/container/container';
import { NavElement } from '../../molecules/nav/nav';
import { Cart } from '../../atoms/cart/cart';

import styles from './header.module.css';

export function Header() {
  const [numItemsInCart] = useState(1);

  const cart = useMemo(
    () => (
      <Cart key="cart" itemCount={numItemsInCart}>
        Cart
      </Cart>
    ),
    [numItemsInCart]
  );

  const navItems: NavElement[] = useMemo(() => ['Catalog', 'FAQ', cart, 'Johnson Smith'], [cart]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__bar}>
          <Logo className={styles.logo}>Goods4you</Logo>
          <NavBar className={styles.nav} navItems={navItems} />
        </div>
      </Container>
    </header>
  );
}
