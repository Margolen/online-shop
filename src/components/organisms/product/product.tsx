import styles from './product.module.css';

export function Product() {
  return (
    <div className={styles.product__container}>
      <div className={styles.product__gallery}></div>
      <div className={styles.product__info}>
        <p className={styles.product__title}></p>
        <p className={styles.product__meta}>
          <p className={styles.product__score}>
            <p className={styles.stars}>
              <span className={styles.scale}></span>
              <span className={styles.rating}></span>
              <span className={styles.hidden}>Rating: 4 out of 5 stars</span>
            </p>
          </p>
          <p className={styles.product__categories}></p>
        </p>
      </div>
    </div>
  );
}
