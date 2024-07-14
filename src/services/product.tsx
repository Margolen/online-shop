import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Product = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  category: string;
};

// Define a service using a base URL and expected endpoints
export const dummyJsonApi = createApi({
  reducerPath: 'dummyJsonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: (builder) => ({
    getProductByName: builder.query({
      query: (name: string) => `products/search/?q=${name}&limit=${12}`,
    }),
    getCartByUserId: builder.query({
      query: (userId: number) => `carts/user/${userId}`,
    }),
  }),
});

export const { useGetProductByNameQuery, useGetCartByUserIdQuery } = dummyJsonApi;
