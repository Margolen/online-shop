import { Greeting } from '../../organisms/greeting/greeting';
import { Catalog } from '../../organisms/catalog/catalog';
import { FAQ } from '../../organisms/faq/faq';

export function HomePage() {
  return (
    <>
      <Greeting />
      <Catalog />
      <FAQ />
    </>
  );
}
