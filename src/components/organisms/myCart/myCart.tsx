import { Container } from '../../templates/container/container';
import { CartItem } from '../cartItem/cartItem';

import styles from './myCart.module.css';

export function MyCart() {
  const items = [1, 1, 5];

  return (
    <Container>
      <h1>My Cart</h1>
      <div className={styles.cart__wrapper}>
        <div className={styles.cart__content}>
          {items.map((item, itemId) => (
            <CartItem key={itemId} itemId={itemId} itemCounter={item} />
          ))}
          <CartItem itemId={100} itemCounter={0} />
        </div>
        <div className={styles.cart__price}></div>
      </div>
    </Container>
  );
}
