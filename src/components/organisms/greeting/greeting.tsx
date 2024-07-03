import { Button } from '../../atoms/button/button';
import { Container } from '../../templates/layout/container';

import styles from './greeting.module.css';

export function Greeting() {
  return (
    <section className={styles.greeting}>
      <Container>
        <h1>Any products from famous brands with worldwide delivery</h1>
        <p>We sell smartphones, laptops, clothes, shoes and many other products at low prices</p>
        <Button>Go to shopping</Button>
      </Container>
    </section>
  );
}
