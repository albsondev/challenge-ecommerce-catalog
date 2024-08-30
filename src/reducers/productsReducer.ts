import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ProductActionTypes,
} from '../actions/productsActions';

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

const productsReducer: React.Reducer<ProductsState, ProductActionTypes> = (
  state = initialState,
  action
): ProductsState => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;