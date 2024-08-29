import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../types/product';

const mockProduct: Product = {
  id: 1,
  name: 'Air Force 1 Jester XX',
  description: 'Black Sonic Yellow',
  price: 96,
  category: 'Nike',
  image: 'image-1.svg'
};

describe('ProductCard', () => {
  it('should render product details correctly', () => {
    const { getByText, getByAltText } = render(<ProductCard product={mockProduct} />);

    expect(getByAltText(mockProduct.name)).toBeInTheDocument();
    expect(getByText(mockProduct.name)).toBeInTheDocument();
    expect(getByText(mockProduct.description)).toBeInTheDocument();
    expect(getByText('$96.00')).toBeInTheDocument();
  });
});
