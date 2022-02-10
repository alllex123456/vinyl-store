import React from 'react';
import classes from './CartButton.module.css';

import CartIcon from '../../assets/CartIcon';

export default function CartButton(props) {
  return (
    <button className={classes.button}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span className={classes.text}>YOUR CART</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}
