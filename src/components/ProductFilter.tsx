import React from 'react';
import { ProductCategory } from '../types/product';

interface ProductFilterProps {
  categories: ProductCategory[];
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex mb-8 mt-5 space-x-2 lg:space-x-5">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 -py-0 h-8 text-xs sm:py-1 rounded-full sm:text-sm ${
            selectedCategory === category ? 'category-active text-white' : 'bg-white text-secondary font-medium'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProductFilter;
