import React from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="app-header">
      <h1>My Online Store</h1>
      <div className="cart-info">
        🛒 Cart ({cartCount})
      </div>
    </header>
  );
}
