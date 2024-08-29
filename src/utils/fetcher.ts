import { fetchProducts, fetchProductsByCategory } from '../services/productService';

export const fetcher = async (url: string) => {
  const urlObj = new URL(url);
  const category = urlObj.searchParams.get('category') || 'Todos';
  
  if (category === 'Todos') {
    return fetchProducts();
  } else {
    return fetchProductsByCategory(category);
  }
};
