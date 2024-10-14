import "./App.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from "react";
import { useCart } from "./Context/ContextProvider.jsx";
import { BrowserRouter as Router,Route,Routes,NavLink } from "react-router-dom";
import Cart from "./components/Cart.jsx";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleCartModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <NavLink to="/" exact variant="underline">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/store">STORE</NavLink>
        <button onClick={toggleCartModal}>
          Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
        </button>
        </Container>
      </Navbar>
      {isOpen && <Cart onClose={toggleCartModal} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
}

export default App;
