import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Product = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  discountTotal: number;
  category: string;
  quantity: number;
  total: number;
};

export type Products = {
  products: Product[];
  total: number;
};

export type Cart = {
  id: number;
  discountedTotal: number;
  total: number;
  totalProducts: number;
  totalQuantity: number;
  userId: number;
  products: Product[];
};

export type Carts = {
  carts: Carts[];
  total: number;
};

// Define a service using a base URL and expected endpoints
export const dummyJsonApi = createApi({
  reducerPath: 'dummyJsonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: (builder) => ({
    getProductByName: builder.query({
      query: ({ name, skip, limit }) => `products/search/?q=${name}&skip=${skip}&limit=${limit}`,
    }),
    getCartByUserId: builder.query({
      query: (userId: number) => `carts/user/${userId}`,
    }),
  }),
});

export const { useGetProductByNameQuery, useGetCartByUserIdQuery } = dummyJsonApi;
