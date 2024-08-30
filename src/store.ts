import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/productsSlice'; // Verifique o caminho do seu slice de produtos

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
