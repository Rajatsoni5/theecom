import React, { useState, useContext} from "react";

import Context from "./CreateContext";

export const Provider = ({children}) =>{
    const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(i => i.title === item.title);
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        return [...prevItems, item];
      }
    });
  };


    return (
        <Context.Provider value={{ cartItems, addToCart }}>
          {children}
        </Context.Provider>
      );
    };

    export const useCart = () => {
        return useContext(Context);
      };
      