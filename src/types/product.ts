export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export type ProductCategory = 'Todos' | 'Nike' | 'Converse' | 'New Balance' | 'Asics';

export const PRODUCT_CATEGORIES: ProductCategory[] = ['Todos', 'Nike', 'Converse', 'New Balance', 'Asics'] ;
