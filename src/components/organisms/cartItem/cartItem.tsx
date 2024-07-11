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

  return (
    <div className={styles.cart__item}>
      <img className={styles.cart__item_img} loading="lazy" src={itemImage} alt="item" />
      <div className={styles.cart__item_text}>
        <span
          className={styles.cart__item_text_title}
          onClick={() => navigate(`/product/${itemId}`)}
        >
          Essence Mascara Lash Princess
        </span>
        <span>110 $</span>
      </div>
      <ButtonPanel initialItemCounter={itemCounter} />
      <NavLink className={styles.cart__item_remove}>Delete</NavLink>
    </div>
  );
}
