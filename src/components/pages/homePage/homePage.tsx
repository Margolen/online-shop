import { Greeting } from '../../organisms/greeting/greeting';
import { Catalog } from '../../organisms/catalog/catalog';
import { FAQ } from '../../organisms/faq/faq';

import styles from './homePage.module.css';

export function HomePage() {
  return (
    <div className={styles.home}>
      <Greeting />
      <Catalog />
      <FAQ />
    </div>
  );
}
