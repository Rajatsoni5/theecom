import React from 'react';

const Cart = ({ onClose }) => {
  const cartElements = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and White Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ];

  const handleRemove = (index) => {
    console.log(`Remove item at index: ${index}`);
  };

  return (
    <div >
      <button onClick={onClose}>Close Cart</button>
      <h2>Your Cart</h2>
      {cartElements.map((product, index) => (
        <div key={index} >
          <img src={product.imageUrl} alt={product.title}/>
          <div>
            <h3>{product.title} (x{product.quantity})</h3>
            <p>Price: {product.price}</p>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
