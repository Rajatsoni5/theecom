// ContextProvider.js
import React, { useState, useContext } from "react";
import Context from "./CreateContext";

const initialProducts = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const TourData = [
  {date: "JUL 16",
      area : "DETROIT, MI",
      location : "DTE ENERGY MUSIC THEATRE"
  },
  {date: "JUL 19",
      area : "TORONTO, ON",
      location : "BUDWEISER STAGE"
  },
  {date: "JUL 22",
      area : "BRISTOW, VA",
      location : "JIGGY LUBE LIVE"
  },
  {date: "JUL 29",
      area : "PHOENIX, AZ",
      location : "AK-CHIN PAVILION"
  },
  {date: "AUG 02",
      area : "LAS VEGAS, NV",
      location : "T-MOBILE ARENA"
  }
]
export const Provider = ({ children }) => {
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
    <Context.Provider value={{ 
      cartItems, addToCart, 
      products: initialProducts,
      TourData: TourData 
      }}>
      {children}
    </Context.Provider>
  );
};

export const useCart = () => {
  return useContext(Context);
};
