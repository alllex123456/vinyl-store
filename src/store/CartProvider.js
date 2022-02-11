import React, { useReducer } from 'react';
import CartContext from './cart-context';

const initialState = {};

export default function CartProvider(props) {
  const addToCartHandler = (item) => {};
  const removeFromCartHandler = (id) => {};

  return (
    <CartContext.Provider
      value={{
        items: [],
        totalAmount: 0,
        addItem: addToCartHandler,
        removeItem: removeFromCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
