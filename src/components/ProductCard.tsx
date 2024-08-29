import React from 'react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formattedPrice = parseFloat(product.price.toFixed(1)).toString();

  return (
    <div className="border rounded-lg p-4 lg:mb-6 shadow hover:shadow-lg transition-shadow duration-200 ease-in-out bg-white h-60 sm:w-11/12 lg:h-80 mb-0 w-full">
      <div
        className="w-full h-20 sm:h-40 bg-contain bg-center bg-no-repeat rounded-md"
        style={{ backgroundImage: `url(/products/${product.image})` }}
      ></div>
      <div className="flex flex-col mt-2">
        <h2 className="text-lg font-semibold mt-2 mb-2 text-left">{product.name}</h2>
        <p className="text-gray-500 text-xs truncate-2-lines lg:text-sm">{product.description}</p>
        <p className="text-secondary font-bold mt-3">${formattedPrice}</p>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
