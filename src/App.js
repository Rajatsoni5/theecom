import "./App.css";

import React, { useState } from "react";
import Cart from "./components/Cart.jsx";
import { useCart } from "./Context/ContextProvider.jsx";

const Product = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div key={product.title}>
      <h3>{product.title}</h3>
      <img src={product.imageUrl} alt={product.title} />
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleCartModal = () => {
    setIsOpen(!isOpen);
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
    <>
      <button onClick={toggleCartModal}>
        Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
      </button>
      {isOpen && <Cart onClose={toggleCartModal} />}
      <div className="App">
      {productsArr.map(product => (
          <Product key={product.title} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
