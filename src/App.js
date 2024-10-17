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
import ContactUs from "./components/ContactUs.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Login from "./LogINOut/Login.jsx";
import {  signOut } from "firebase/auth";
import {auth} from './Auth/firebase.js';



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleCartModal = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
          console.log("Signed out successfully")
      }).catch((error) => {
      console.log(error);
      });
  }


  return (
    <Router>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <NavLink to="/" >HOME</NavLink>
        <NavLink to="/store">STORE</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/contact">CONTACT US</NavLink>
        <NavLink to="/login">LOGIN</NavLink>
        
        <button onClick={handleLogout}>
          LOGOUT
        </button>
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
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Product/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
