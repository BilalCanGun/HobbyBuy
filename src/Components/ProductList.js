// ProductList.js

import React from 'react';
import ProductCard from './ProductCard';
import './style.css'
const ProductList = ({ products, onAddToCart }) => {
  return (
    <div>
      
    <div className="product-list" >
    
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
    </div>
  );
};

export default ProductList;
