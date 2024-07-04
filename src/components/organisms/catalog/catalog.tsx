import { Input } from '../../atoms/input/input';
import { Card } from '../../molecules/card/card';
import { Container } from '../../templates/container/container';

import styles from './catalog.module.css';

export function Catalog() {
  const items = [...Array(12)];

  return (
    <section>
      <Container className={styles.catalog}>
        <h1>Catalog</h1>
        <Input />
        <div className={styles.catalog__table}>
          {items.map((item) => (
            <Card key={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
