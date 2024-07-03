import { Logo } from '../../atoms/logo/logo';
import { Nav } from '../../molecules/nav/nav';

import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo}>Goods4you</Logo>
      <Nav className={styles.nav} />
    </header>
  );
}
