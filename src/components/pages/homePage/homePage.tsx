import { Greeting } from '../../organisms/greeting/greeting';
import { Catalog } from '../../organisms/catalog/catalog';
import { FAQ } from '../../organisms/faq/faq';
import { Container } from '../../templates/container/container';

import styles from './homePage.module.css';

export function HomePage() {
  return (
    <div>
      <div className={styles.bar__container}>
        <Container>
          <div className={styles.bar}></div>
        </Container>
      </div>
      <Greeting />
      <Catalog />
      <FAQ />
    </div>
  );
}
