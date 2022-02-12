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

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingItem = state.items[existingItemIndex];
      let updatedItem;
      let updatedItems;
      if (existingItem) {
        updatedItem = {
          ...existingItem,
          qty: existingItem.qty + action.item.qty,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItem = { ...action.item };
        updatedItems = state.items.concat(updatedItem);
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case 'REMOVE': {
      const removedItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const removedItem = state.items[removedItemIndex];
      const updatedTotalAmount = state.totalAmount - removedItem.price;

      let updatedItems;
      if (removedItem.qty === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = { ...removedItem, qty: removedItem.qty - 1 };
        updatedItems = [...state.items];
        updatedItems[removedItemIndex] = updatedItem;
      }
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
