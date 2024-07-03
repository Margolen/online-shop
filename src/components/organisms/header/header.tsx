import { Logo } from '../../atoms/logo/logo';
import { Nav } from '../../molecules/nav/nav';
import { Container } from '../../templates/layout/container';

import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__bar}>
          <Logo className={styles.logo}>Goods4you</Logo>
          <Nav className={styles.nav} />
        </div>
      </Container>
    </header>
  );
}
