import { useState } from 'react';

import { ButtonPanel } from '../buttonPanel/buttonPanel';
import { Product } from '../../../services/product';

import styles from './card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  product: Product;
}

export function Card({ onClick, product, ...props }: CardProps) {
  const [cardHovered, setCardHovered] = useState(false);
  const [panelHovered, setPanelHovered] = useState(false);
  const price = product.price * (1.0 - product.discountPercentage * 0.01);

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
        <img loading="lazy" src={product.thumbnail} alt="item" />
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
            {product.title}
          </span>
          <span>{price.toFixed(2)} $</span>
        </span>
        <ButtonPanel onHovered={setPanelHovered} />
      </div>
    </div>
  );
}
