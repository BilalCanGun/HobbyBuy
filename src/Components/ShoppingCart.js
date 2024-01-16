import React from 'react';
import './style.css'; // Stil dosyanızı ekleyin ve özelleştirebilirsiniz

const ShoppingCart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="sepet-root">
      <h2 className="sepet-header">Sepetim</h2>
      <ul className="sepet-container">
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <img className="cart-img" src={item.img} alt={item.name} />
            <span className="cart-name">{item.name}</span>
            <span className="cart-price">${item.price}</span>
            <button className="remove-button" onClick={() => onRemoveFromCart(index)}>
              Kaldır
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
