
import React from "react";
import { Link } from 'react-router-dom';
import { useCart } from "../Context/ContextProvider";


function Store() {
    const { addToCart,products} = useCart();

      const handleAddToCart = (product) => {
        addToCart({ ...product, quantity: 1 });
      };
      
  
  return (
    <div >
      {products.map(product => (
        <div key={product.title}>
          <h3>{product.title}</h3>
          <img src={product.imageUrl} alt={product.title} />
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
};

export default Store;
