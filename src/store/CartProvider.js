import React, { useReducer } from 'react';
import CartContext from './cart-context';

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const updatedTotalAmount =
        state.totalAmount + action.item.qty * action.item.price;
      const updatedItems = state.items.concat(action.item);
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case 'REMOVE': {
      const removedItemIndex = state.items.findIndex(
        state.item.id === action.id
      );
      const removedItem = state.items[removedItemIndex];
      const updatedItems = state.items.filter(
        (item) => item.id !== removedItem.id
      );
      const updatedTotalAmount = state.totalAmount - removedItem.price;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    default:
      return initialState;
  }
};

export default function CartProvider(props) {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addToCartHandler = (item) => {
    dispatch({ type: 'ADD', item: item });
  };
  const removeFromCartHandler = (id) => {
    dispatch({ type: 'REMOVE', id: id });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addToCartHandler,
        removeItem: removeFromCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
