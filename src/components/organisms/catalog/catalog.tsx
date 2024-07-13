import { useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll';

import { Input } from '../../atoms/input/input';
import { Card } from '../../molecules/card/card';
import { Container } from '../../templates/container/container';
import { Button } from '../../atoms/button/button';

import styles from './catalog.module.css';

export function Catalog() {
  const navigate = useNavigate();
  const items = [...Array(12)];

  return (
    <Element name="catalog">
      <Container>
        <div className={styles.catalog__inner}>
          <h1>Catalog</h1>
          <Input />
          <div className={styles.catalog__table}>
            {items.map((_, itemId) => (
              <Card key={itemId} onClick={() => navigate(`/product/${itemId}`)} />
            ))}
          </div>
          <Button className={styles.catalog__show_more}>Show more</Button>
        </div>
      </Container>
    </Element>
  );
}
