import { Product } from '../types/product';

const API_BASE_URL = 'http://localhost:8000';

// Função para buscar todos os produtos
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/produtos`);
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }
    const data = await response.json();
    console.log('Products fetched:', data);
    return data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
};

// Função para buscar produtos por categoria
export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    let url = `${API_BASE_URL}/produtos`;
    if (category !== 'Todos') {
      url += `?category=${encodeURIComponent(category)}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos por categoria');
    }
    const data = await response.json();
    console.log('Filtered products:', data);
    return data;
  } catch (error) {
    console.error('Erro ao buscar produtos por categoria:', error);
    return [];
  }
};
