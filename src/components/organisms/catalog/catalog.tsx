import { Input } from '../../atoms/input/input';
import { Card } from '../../molecules/card/card';
import { Container } from '../../templates/layout/container';

export function Catalog() {
  return (
    <section>
      <Container>
        <h1>Catalog</h1>
        <Input />
        <Card />
      </Container>
    </section>
  );
}
