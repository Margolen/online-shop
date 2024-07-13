import { useState, useMemo } from 'react';

import { useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll';

import { Input } from '../../atoms/input/input';
import { Card } from '../../molecules/card/card';
import { Container } from '../../templates/container/container';
import { Button } from '../../atoms/button/button';

import { useGetProductByNameQuery, Product } from '../../../services/product';

import styles from './catalog.module.css';

export function Catalog() {
  const navigate = useNavigate();

  const [searchField, setSearchField] = useState('');

  const { data } = useGetProductByNameQuery(searchField);
  const products = useMemo(() => (data?.products || []) as Product[], [data]);

  return (
    <Element name="catalog">
      <Container>
        <div className={styles.catalog__inner}>
          <h1>Catalog</h1>
          <Input
            type="search"
            placeholder="Search by title"
            defaultValue={searchField}
            onChange={(event) => setSearchField(event.target.value)}
          />
          <div className={styles.catalog__table}>
            {products.map((product) => (
              <Card
                key={product.id}
                product={product}
                onClick={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </div>
          <Button className={styles.catalog__show_more}>Show more</Button>
        </div>
      </Container>
    </Element>
  );
}
