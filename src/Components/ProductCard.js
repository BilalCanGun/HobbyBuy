import React from 'react';
import './style.css'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card-container">
      <div className="product-card">
<img className='product-card-img' src={process.env.PUBLIC_URL + product.img} alt={product.name} />
      <h3 className='product-card-name'>{product.name}</h3>
      <p className='product-card-desc'>{product.description}</p>
      <p className='product-card-price'>Fiyat: {product.price}₺</p>
      <button className='product-card-btn' onClick={() => onAddToCart(product)}>Sepete Ekle</button>
      </div>
    </div>
  );
};

export default ProductCard;
