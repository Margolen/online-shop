import { Input } from '../../atoms/input/input';
import { Card } from '../../molecules/card/card';
import { Container } from '../../templates/container/container';
import { Button } from '../../atoms/button/button';

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
        <Button className={styles.catalog__show_more}>Show more</Button>
      </Container>
    </section>
  );
}
