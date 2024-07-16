import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
  carts: Cart[];
  total: number;
};

export const getCartsByUserId = createAsyncThunk<Carts, number>(
  'cart/getCartsByUserId',
  async (userId) =>
    await fetch(`https://dummyjson.com/carts/user/${userId}`).then((data) => data.json())
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: [] as Cart[],
    total: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartsByUserId.fulfilled, (state, { payload }) => {
      Object.assign(state, payload);
    });
  },
});

export const cartReducer = cartSlice.reducer;

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
  }),
});

export const { useGetProductByNameQuery } = dummyJsonApi;
