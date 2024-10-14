import "./App.css";

import React, { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [isOpen, setIsOpen] = useState(false);

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
      <button onClick={toggleCartModal}>Cart</button>
      {isOpen && <Cart onClose={toggleCartModal}/>}
      <div className="App">
        {productsArr.map((product, index) => (
          <div key={index}>
            <h3>{product.title}</h3>
            <img src={product.imageUrl}  alt={product.title}/>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
