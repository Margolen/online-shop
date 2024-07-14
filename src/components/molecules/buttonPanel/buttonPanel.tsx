import { useEffect, useState } from 'react';

import { Button } from '../../atoms/button/button';

import cartIcon from '../../../assets/images/icons/cart.svg';
import minusIcon from '../../../assets/images/icons/minus.svg';
import plusIcon from '../../../assets/images/icons/plus.svg';

import styles from './buttonPanel.module.css';

export interface ButtonPanelProps {
  onHovered?: (status: boolean) => void;
  initialItemCounter?: number;
  className?: string;
}

export function ButtonPanel({ onHovered, initialItemCounter, className }: ButtonPanelProps) {
  const [itemCounter, setItemCounter] = useState(initialItemCounter || 0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (onHovered) {
      onHovered(hovered);
    }
  }, [hovered]);

  const classNames = className
    ? `${styles.card__button_panel} ${className}`
    : styles.card__button_panel;

  return (
    <span
      className={classNames}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
  );
}
