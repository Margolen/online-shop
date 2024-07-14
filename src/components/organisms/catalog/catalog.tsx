import { useState, useMemo } from 'react';

import { useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll';

import { debounce } from 'lodash';

import { Input } from '../../atoms/input/input';
import { Card } from '../../molecules/card/card';
import { Container } from '../../templates/container/container';
import { Button } from '../../atoms/button/button';

import { useGetProductByNameQuery, Products } from '../../../services/product';

import styles from './catalog.module.css';

export function Catalog() {
  const navigate = useNavigate();

  const itemToShow = 12;

  const [searchField, setSearchField] = useState('');
  const [limit, setLimit] = useState(itemToShow);

  const { data } = useGetProductByNameQuery({
    name: searchField,
    skip: 0,
    limit,
  });

  const response = useMemo(
    () =>
      (data || {
        products: [],
        total: 0,
      }) as Products,
    [data]
  );

  const handleChangeSearchField = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
  }, 500);

  return (
    <Element name="catalog">
      <Container>
        <div className={styles.catalog__inner}>
          <h1>Catalog</h1>
          <Input
            type="search"
            placeholder="Search by title"
            defaultValue={searchField}
            onChange={handleChangeSearchField}
          />
          <div className={styles.catalog__table}>
            {response.products.map((product) => (
              <Card
                key={product.id}
                product={product}
                onClick={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </div>
          {response.products.length < response.total && (
            <Button
              className={styles.catalog__show_more}
              onClick={() => setLimit((prevLimit) => prevLimit + itemToShow)}
            >
              Show more
            </Button>
          )}
        </div>
      </Container>
    </Element>
  );
}
