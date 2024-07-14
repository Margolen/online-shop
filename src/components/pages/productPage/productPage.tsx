import { Product } from '../../organisms/product/product';
import { MainLayout } from '../../templates/layout/layout';

export function ProductPage() {
  return (
    <MainLayout>
      <Product />
    </MainLayout>
  );
}
