import React from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { name, description, price, imageUrl } = product;
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>${price.toFixed(2)}</p>
      <p>{description}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
