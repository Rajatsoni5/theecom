import React from 'react';
import { useCart } from '../Context/ContextProvider';


const Cart = ({ onClose }) => {
    const { cartItems } = useCart();

  return (
    <div >
      <button onClick={onClose}>Close Cart</button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((product, index) => (
        <div key={index} >
          <img src={product.imageUrl} alt={product.title}/>
          <div>
            <h3>{product.title} (x{product.quantity})</h3>
            <p>Price: {product.price}</p>
          </div>
        </div>
      ))
    )}
    </div>
  );
};

export default Cart;
