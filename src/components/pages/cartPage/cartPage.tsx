import { MyCart } from '../../organisms/myCart/myCart';
import { Container } from '../../templates/container/container';
import { MainLayout } from '../../templates/layout/layout';

import styles from './cartPage.module.css';

export function CartPage() {
  return (
    <MainLayout>
      <Container>
        <MyCart />
      </Container>
    </MainLayout>
  );
}
