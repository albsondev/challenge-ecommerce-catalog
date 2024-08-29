// hooks/useProducts.ts
import { useEffect, useState } from 'react';
import { fetcher } from '../utils/fetcher';
import { Product } from '../types/product';

export const useProducts = (category: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetcher(`http://localhost:8000/produtos?category=${category}`)
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [category]);

  return { products, isLoading, isError };
};
