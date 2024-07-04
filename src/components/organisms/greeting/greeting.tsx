import { Button } from '../../atoms/button/button';
import { Container } from '../../templates/container/container';

import styles from './greeting.module.css';

export function Greeting() {
  return (
    <section className={styles.greeting}>
      <Container className={styles.greeting__container}>
        <h1 className={styles.greeting__title}>
          Any products from famous brands with worldwide delivery
        </h1>
        <p className={styles.greeting__text}>
          We sell smartphones, laptops, clothes, shoes and many other products at low prices
        </p>
        <Button className={styles.greeting__button}>Go to shopping</Button>
      </Container>
    </section>
  );
}
