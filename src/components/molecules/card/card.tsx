import { useState } from 'react';
import { Button } from '../../atoms/button/button';

import cartIcon from '../../../assets/images/icons/cart.svg';
import minusIcon from '../../../assets/images/icons/minus.svg';
import plusIcon from '../../../assets/images/icons/plus.svg';
import itemImage from '../../../assets/images/item.png';

import styles from './card.module.css';

export function Card({ ...props }: React.HTMLAttributes<HTMLElement>) {
  const [itemCounter, setItemCounter] = useState(0);
  const [cardHovered, setCardHovered] = useState(false);
  const [panelHovered, setPanelHovered] = useState(false);

  return (
    <div
      {...props}
      className={styles.card}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      <div
        className={
          cardHovered && !panelHovered
            ? `${styles.card__overlay} ${styles.card__overlay__hovered}`
            : styles.card__overlay
        }
      >
        <img loading="lazy" src={itemImage} alt="item" />
      </div>
      <div className={styles.card__description}>
        <span className={styles.card__text}>
          <span
            className={
              cardHovered && !panelHovered
                ? `${styles.card__text_title} ${styles.card__text_title__hovered}`
                : styles.card__text_title
            }
          >
            Essence Mascara Lash Princess
          </span>
          <span>110 $</span>
        </span>
        <span
          className={styles.card__button_panel}
          onMouseEnter={() => setPanelHovered(true)}
          onMouseLeave={() => setPanelHovered(false)}
        >
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
                <img src={minusIcon} alt="minus" />
              </Button>
              <span className={styles.card__button_counter}>
                {itemCounter} {itemCounter > 1 ? 'items' : 'item'}
              </span>
              <Button
                className={styles.card__button}
                onClick={() => setItemCounter((prevCounter) => prevCounter + 1)}
              >
                <img src={plusIcon} alt="plus" />
              </Button>
            </>
          )}
        </span>
      </div>
    </div>
  );
}
