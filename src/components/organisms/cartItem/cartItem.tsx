import { ButtonPanel } from '../../molecules/buttonPanel/buttonPanel';
import { NavLink } from '../../atoms/navLink/navLink';
import itemImage from '../../../assets/images/item.png';

import { useNavigate } from 'react-router-dom';
import styles from './cartItem.module.css';

interface CartItemProps {
  itemId: number;
  itemCounter: number;
}

export function CartItem({ itemId, itemCounter }: CartItemProps) {
  const navigate = useNavigate();
  const classNames =
    itemCounter !== 0 ? styles.cart__item : `${styles.cart__item} ${styles.cart__item_deleted}`;

  return (
    <div className={classNames}>
      <div className={styles.cart__item_description}>
        <img className={styles.cart__item_img} loading="lazy" src={itemImage} alt="item" />
        <div className={styles.cart__item_text}>
          <span
            className={styles.cart__item_text_title}
            onClick={() => navigate(`/product/${itemId}`)}
          >
            <b>Essence Mascara Lash Princess</b>
          </span>
          <span>110 $</span>
        </div>
      </div>
      <div className={styles.cart__item_controls}>
        <ButtonPanel initialItemCounter={itemCounter} />
        {itemCounter !== 0 && <NavLink className={styles.cart__item_remove}>Delete</NavLink>}
      </div>
    </div>
  );
}
