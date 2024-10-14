import "./App.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



import React, { useState } from "react";
import { useCart } from "./Context/ContextProvider.jsx";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Cart from "./components/Cart.jsx";
import About from "./components/About.jsx";

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
    <Router>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <NavLink to="/" exact variant="underline">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <button onClick={toggleCartModal}>
          Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
        </button>
        </Container>
      </Navbar>
      {isOpen && <Cart onClose={toggleCartModal} />}
      
      <Routes>
        <Route path="/" element={
          <div className="App">
            {productsArr.map(product => (
            <Product key={product.title} product={product} />
            ))}
          </div>
        } />
         <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
