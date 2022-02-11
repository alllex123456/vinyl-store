import React, { useContext } from 'react';
import classes from './CartButton.module.css';

import CartIcon from '../../assets/CartIcon';
import CartContext from '../../store/cart-context';

export default function CartButton(props) {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((acc, item) => acc + item.qty, 0);

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span className={classes.text}>YOUR CART</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}
