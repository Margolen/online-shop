import { Container } from '../../templates/container/container';
import { ButtonPanel } from '../../molecules/buttonPanel/buttonPanel';
import { NavLink } from '../../atoms/navLink/navLink';
import itemImage from '../../../assets/images/item.png';
import { useNavigate } from 'react-router-dom';

import styles from './myCart.module.css';

interface CartItemProps {
  itemId: number;
  itemCounter: number;
}

function CartItem({ itemId, itemCounter }: CartItemProps) {
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
