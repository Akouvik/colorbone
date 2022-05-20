import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const deleteItem = (cartItems, productToDelete) => {
  if (productToDelete.quantity === 1) {
    return removeItemFromCart(cartItems, productToDelete);
  } else {
    return cartItems.map((item) =>
      item.id === productToDelete.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};
const removeItemFromCart = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};
const calculateCartTotal = (cartItems) => {
  return cartItems.reduce(
    (total, cartItem) => (total += cartItem.price * cartItem.quantity),
    0
  );
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  cartCount: 0,
  cartTotal: 0,
  setCartCount: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
    setCartTotal(calculateCartTotal(cartItems));
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItems, productToAdd));
  };
  const deleteItemFromCart = (productToDelete) => {
    setCartItem(deleteItem(cartItems, productToDelete));
  };

  const removeProduct = (productToRemove) => {
    setCartItem(removeItemFromCart(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItem,
    addItemToCart,
    cartCount,
    deleteItemFromCart,
    removeProduct,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
