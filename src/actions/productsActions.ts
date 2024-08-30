import { Dispatch } from 'redux';
import {Product} from '../types/product';

// Definindo constantes de tipos de ação
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// Definindo interfaces para cada tipo de ação
interface FetchProductsRequestAction {
  type: typeof FETCH_PRODUCTS_REQUEST;
}

interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: string;
}

// Definindo o tipo de todas as ações
export type ProductActionTypes =
  | FetchProductsRequestAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction;

// Criando ações para despachar
export const fetchProductsRequest = (): FetchProductsRequestAction => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products: Product[]): FetchProductsSuccessAction => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error: string): FetchProductsFailureAction => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

// Thunk para buscar produtos com base na categoria
export const fetchProducts = (category: string = 'Todos') => {
  return async (dispatch: Dispatch<ProductActionTypes>) => {
    dispatch(fetchProductsRequest());

    try {
      // Verifica se a categoria é 'Todos' e modifica a URL de fetch de acordo
      const url =
        category === 'Todos'
          ? 'http://localhost:8000/produtos'
          : `http://localhost:8000/produtos?category=${category}`;

      const response = await fetch(url);
      const data: Product[] = await response.json();
      dispatch(fetchProductsSuccess(data));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};
