import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../types/product';

interface ProductsState {
  loading: boolean;
  products: Product[];
  error: string | null;
}

const initialState: ProductsState = {
  loading: false,
  products: [],
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[], string>(
  'products/fetchProducts',
  async (category) => {
    const url = category === 'Todos' ? 'http://localhost:8000/produtos' : `http://localhost:8000/produtos?category=${category}`;
    const response = await fetch(url);
    return response.json();
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export default productsSlice.reducer;
