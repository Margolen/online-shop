import { Logo } from '../../atoms/logo/logo';
import { NavBar } from '../../molecules/nav/nav';
import { Container } from '../../templates/container/container';
import { NavElement } from '../../molecules/nav/nav';

import styles from './header.module.css';

const navItems: NavElement[] = [
  { path: '/', name: 'catalog', content: 'Catalog' },
  { path: '/', name: 'faq', content: 'FAQ' },
];

export function Header() {
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
