import { createContext, useEffect, useState } from "react";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import CartItem from "../cart-item/cart-item.component";

const addCartItems = (cartItems, productToAdd) => {
  // find if cartItems contains prodcutToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id == productToAdd.id
  );

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id == productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified cartItem / new cart Item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, cartItemToRemove) => {
  // if the const item to remonve
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id == cartItemToRemove.id
  );
  // check if the quantity is eqaul  to 1 , if it is remonve that item from cart
  if (existingCartItem.quantity == 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  //  return back cartItems with matching cart with reduced quanitty
  return cartItems.map((cartItem) =>
    cartItem.id == cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>{
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeCartItem: () => {},
  clearCartFromItem: () => {},
  cartCount: 0,
});

export const CartProdvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setcartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setcartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd));
  };
  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const clearCartFromItem = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearCartFromItem,
    cartItems,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
