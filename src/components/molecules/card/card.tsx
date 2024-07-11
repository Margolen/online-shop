import { useState } from 'react';

import { ButtonPanel } from '../buttonPanel/buttonPanel';

import itemImage from '../../../assets/images/item.png';

import styles from './card.module.css';

export function Card({ onClick, ...props }: React.HTMLAttributes<HTMLElement>) {
  const [cardHovered, setCardHovered] = useState(false);
  const [panelHovered, setPanelHovered] = useState(false);

  return (
    <div
      {...props}
      className={styles.card}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      onClick={(event) => {
        if (!panelHovered && onClick) {
          onClick(event);
        }
      }}
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
        <ButtonPanel onHovered={setPanelHovered} />
      </div>
    </div>
  );
}
