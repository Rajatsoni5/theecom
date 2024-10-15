// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../Context/ContextProvider';

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart, products } = useCart(); 

  const product = products.find((prod) => prod.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.imageUrl} alt={product.title} />
      <p>${product.price}</p>
      <button onClick={() => addToCart({ ...product, quantity: 1 })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
