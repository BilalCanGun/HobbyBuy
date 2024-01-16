import React, { useState } from 'react';
import ProductCard from '../../Components/ProductCard';
import ShoppingCart from '../../Components/ShoppingCart';
import Navbar from '../../Components/Navbar';
import './HobbyMarket.css'
import products from '../../Data/Data'
import { Footer } from '../../Components/Footer';
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

 

  return (
    <div className='h-root'>
      <Navbar onToggleShoppingCart={toggleShoppingCart} />

      <div className='starter-container'>
        <h2 className='starter-header'> Sepetim </h2>
    </div>

      <div className='product-cardp'>
      
        {!showShoppingCart &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
      </div>
      {showShoppingCart && <ShoppingCart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />}

      <Footer/>     
    </div>
  );
};

export default HobbyMarketPage;