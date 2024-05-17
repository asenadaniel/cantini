import React, { createContext, useState, useEffect } from 'react';
import { cantini_list, cantini_list1 } from '../assets/assets';

export const storeContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      if (!Array.isArray(prevCart)) {
        console.error("prevCart is not an array:", prevCart);
        return [];
      }
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      if (!Array.isArray(prevCart)) {
        console.error("prevCart is not an array:", prevCart);
        return [];
      }
      return prevCart.filter(item => item.id !== productId);
    });
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const value = {
    cantini_list,
    cantini_list1,
    cart,
    addToCart,
    removeFromCart,
    getTotalAmount
  };

  return (
    <storeContext.Provider value={value}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;
