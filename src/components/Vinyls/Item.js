import React, { useContext } from 'react';
import classes from './Item.module.css';
import CartContext from '../../store/cart-context';

export default function Item(props) {
  const cartCtx = useContext(CartContext);

  const price = props.price.toLocaleString(navigator.language, {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className={classes.item}>
      <div className={classes['item-picture']}>
        <img src={props.picture} alt={props.band} />
      </div>
      <div className={classes['item-title']}>{props.title}</div>
      <div className={classes['item-band']}>{props.band}</div>
      <div className={classes['item-tag']}>{props.genre}</div>
      <div className={classes['item-description']}>{props.description}</div>
      <div className={classes['item-price']}>{price}</div>
      <div className={classes.actions}>
        <button className={classes.button}>See more</button>
        <button className={classes.button} onAddToCart={cartCtx.addItem}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
