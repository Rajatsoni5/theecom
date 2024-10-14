
import React from "react";
import { useCart } from "../Context/ContextProvider";

function Store() {
    const { addToCart } = useCart();

      const handleAddToCart = (product) => {
        addToCart({ ...product, quantity: 1 });
      };
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <div >
      {productsArr.map(product => (
        <div key={product.title}>
          <h3>{product.title}</h3>
          <img src={product.imageUrl} alt={product.title} />
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
};

export default Store;
