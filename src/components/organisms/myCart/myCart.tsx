import { Container } from '../../templates/container/container';
import { Button } from '../../atoms/button/button';

import styles from './myCart.module.css';

export function MyCart() {
  return (
    <Container>
      <h1>My Cart</h1>
      <div className={styles.cart__wrapper}>
        <div className={styles.cart__content}>
          <Button className={styles.catalog__show_more}>Show more</Button>
        </div>
        <div className={styles.cart__price}></div>
      </div>
    </Container>
  );
}
