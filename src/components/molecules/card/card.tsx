import { useState } from 'react';
import { Button } from '../../atoms/button/button';

import cartIcon from '../../../assets/images/icons/cart.svg';
import minusIcon from '../../../assets/images/icons/minus.svg';
import plusIcon from '../../../assets/images/icons/plus.svg';
import itemImage from '../../../assets/images/item.png';

import styles from './card.module.css';

export function Card() {
  const [itemCounter, setItemCounter] = useState(0);

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={itemImage} alt="item image" />
      <div className={styles.card__description}>
        <span className={styles.card__text}>
          <span className={styles.card__text_title}>Essence Mascara Lash Princess</span>
          <span>110 $</span>
        </span>
        <span className={styles.card__button_panel}>
          {itemCounter === 0 ? (
            <Button
              className={styles.card__button}
              onClick={() => setItemCounter((prevCounter) => prevCounter + 1)}
            >
              <img src={cartIcon} alt="cart" />
            </Button>
          ) : (
            <>
              <Button
                className={styles.card__button}
                onClick={() => setItemCounter((prevCounter) => prevCounter - 1)}
              >
                <img src={minusIcon} alt="cart" />
              </Button>
              <span className={styles.card__button_counter}>
                {itemCounter} {itemCounter > 1 ? 'items' : 'item'}
              </span>
              <Button
                className={styles.card__button}
                onClick={() => setItemCounter((prevCounter) => prevCounter + 1)}
              >
                <img src={plusIcon} alt="cart" />
              </Button>
            </>
          )}
        </span>
      </div>
    </div>
  );
}
