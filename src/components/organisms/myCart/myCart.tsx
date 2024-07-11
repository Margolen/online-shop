import { Container } from '../../templates/container/container';
import { CartItem } from '../cartItem/cartItem';

import styles from './myCart.module.css';

export function MyCart() {
  const items = [1, 1, 5];

  return (
    <div className={styles.cart__wrapper}>
      <h1>My Cart</h1>
      <div className={styles.cart__inner}>
        <div className={styles.cart__content}>
          {items.map((item, itemId) => (
            <CartItem key={itemId} itemId={itemId} itemCounter={item} />
          ))}
          <CartItem itemId={100} itemCounter={0} />
        </div>
        <div className={styles.cart__price}>
          <div className={styles.cart__price_count}>
            <span className={styles.cart__price_count_text}>Total count</span>
            <span className={styles.cart__price_count_number}>3 items</span>
          </div>
          <div className={styles.cart__price_without_discount}>
            <span className={styles.cart__price_count_text}>Price without discount</span>
            <span className={styles.cart__price_count_number}>700$</span>
          </div>
          <div className={styles.cart__price_total}>
            <span className={styles.cart__price_count_text}>Total price</span>
            <span className={styles.cart__price_count_number}>590$</span>
          </div>
        </div>
      </div>
    </div>
  );
}
