import React, { useState } from 'react';
import Header from '../components/Header';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import { useProducts } from '../hooks/useProducts';
import { ProductCategory, PRODUCT_CATEGORIES } from '../types/product';
import '../app/globals.css';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('Todos');
  const { products, isLoading, isError } = useProducts(selectedCategory);

  return (
    <div className="container mx-auto px-4 py-16 max-w-screen-lg">
      <Header />
      <ProductFilter
        categories={PRODUCT_CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error loading products</p>
      ) : (
        <ProductList products={products || []} />
      )}
    </div>
  );
};

export default Home;
