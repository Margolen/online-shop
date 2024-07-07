import mainImage from '../../../assets/images/main.png';
import { Button } from '../../atoms/button/button';
import { Container } from '../../templates/container/container';

import styles from './product.module.css';

export function Product() {
  const items = [...Array(6)];

  return (
    <Container>
      <div className={styles.product__container}>
        <div className={styles.product__images}>
          <img src={mainImage} alt="item" />
          <div className={styles.product__gallery}>
            {items.map((_, itemId) => (
              <img key={itemId} src={mainImage} alt="item" />
            ))}
          </div>
        </div>
        <div className={styles.product__info}>
          <h1 className={styles.product__title}>Essence Mascara Lash Princess</h1>
          <p className={styles.product__meta}>
            <p className={styles.product__score}>
              <p className={styles.stars}>
                <span className={styles.scale}></span>
                <span className={styles.rating}></span>
                <span className={styles.hidden}>Rating: 4 out of 5 stars</span>
              </p>
            </p>
            <p className={styles.product__categories}>electronics, selfie accessories</p>
          </p>
          <p className={styles.product__availability}>In Stock - Only 5 left!</p>
          <p className={styles.product__description}>
            The Essence Mascara Lash Princess is a popular mascara known for its volumizing and
            lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free
            formula.
          </p>
          <p className={styles.product__other_info}>
            <p>1 month warranty </p>
            <p>Ships in 1 month</p>
          </p>
          <p className={styles.product__buy}>
            <p className={styles.product__price}>
              <p className={styles.product__price_info}>
                <p>7.17$</p>
                <p>9.99$</p>
              </p>
              <p>
                Your discount: <b>14.5%</b>
              </p>
            </p>
            <Button className={styles.product__add}>Add to cart</Button>
          </p>
        </div>
      </div>
    </Container>
  );
}
