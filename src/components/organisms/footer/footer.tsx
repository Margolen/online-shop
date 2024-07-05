import { Logo } from '../../atoms/logo/logo';
import { NavBar } from '../../molecules/nav/nav';
import { Container } from '../../templates/container/container';
import { NavElement } from '../../molecules/nav/nav';

import styles from './footer.module.css';

const navItems: NavElement[] = ['Catalog', 'FAQ'];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__bar}>
          <Logo className={styles.logo}>Goods4you</Logo>
          <NavBar className={styles.nav} navItems={navItems} />
        </div>
      </Container>
    </footer>
  );
}
