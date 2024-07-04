import { Greeting } from '../../organisms/greeting/greeting';
import { Catalog } from '../../organisms/catalog/catalog';
import { MainLayout } from '../../templates/layout/layout';

import styles from './home.module.css';
import { FAQ } from '../../organisms/faq/faq';

export function HomePage() {
  return (
    <MainLayout className={styles.home}>
      <Greeting />
      <Catalog />
      <FAQ />
    </MainLayout>
  );
}
