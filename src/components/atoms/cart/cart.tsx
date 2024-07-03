import cartIcon from '../../../assets/images/icons/cart.svg';

import styles from './cart.module.css';

export interface CartProps {
  children: React.ReactNode;
  itemCount: number;
}

export function Cart({ children, itemCount }: CartProps) {
  return (
    <div className={styles.cart}>
      {children}
      {/* <div className={styles.cart__container}>
        <img className={styles.cart__icon} src={cartIcon} alt="cart-icon" />
        <span className={styles.cart__item_count}>{itemCount}</span>
      </div> */}
    </div>
  );
}
