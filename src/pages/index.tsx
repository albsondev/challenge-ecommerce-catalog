import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../features/productsSlice';
import { RootState, AppDispatch } from '../store';
import { ProductCategory, PRODUCT_CATEGORIES } from '../types/product'; // Importação correta
import '../app/globals.css';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('Todos');

  // Usando useDispatch e useSelector para interagir com o Redux
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector((state: RootState) => state.products);

  // Hook useEffect para buscar produtos quando a categoria selecionada mudar
  useEffect(() => {
    dispatch(fetchProducts(selectedCategory));
  }, [dispatch, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-16 max-w-screen-lg">
      <Header />
      <ProductFilter
        categories={PRODUCT_CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading products</p>
      ) : (
        <ProductList products={products || []} />
      )}
    </div>
  );
};

export default Home;
