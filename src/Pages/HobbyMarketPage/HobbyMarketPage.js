import React, { useState } from 'react';
import ProductCard from '../../Components/ProductCard';
import ShoppingCart from '../../Components/ShoppingCart';
import Navbar from '../../Components/Navbar';
import './HobbyMarket.css'

const HobbyMarketPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const toggleShoppingCart = () => {
    setShowShoppingCart(!showShoppingCart);
  
  };

  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10 , img:'/ItemsPhoto/bahce/eldiven.png'},
    { id: 2, name: 'Product 2', description: 'Description 2', price: 20 ,img:'/ItemsPhoto/bahce/eldiven.png'},
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10 , img:'/ItemsPhoto/bahce/eldiven.png'},
    { id: 2, name: 'Product 2', description: 'Description 2', price: 20 ,img:'/ItemsPhoto/bahce/eldiven.png'},
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10 , img:'/ItemsPhoto/bahce/eldiven.png'},
    { id: 2, name: 'Product 2', description: 'Description 2', price: 20 ,img:'/ItemsPhoto/bahce/eldiven.png'},
    
  ];

  return (
    <div className='root'>
      <Navbar onToggleShoppingCart={toggleShoppingCart} />
      <h2>Hobby Market'e Hoşgeldiniz</h2>
      <div className='product-cardp'>
        {!showShoppingCart &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
      </div>
      {showShoppingCart && <ShoppingCart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />}


    </div>
  );
};

export default HobbyMarketPage;