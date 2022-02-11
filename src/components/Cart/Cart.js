import React, { useContext } from 'react';
import classes from './Cart.module.css';

import Modal from '../UI/Modal';
import Button from '../UI/Button';
import CartContext from '../../store/cart-context';

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  return (
    <Modal onHideCart={props.onHideCart}>
      <div className={classes.content}>
        {cartCtx.items.map((item) => (
          <div key={item.id} className={classes['product-container']}>
            <div>
              <h3 className={classes['product-name']}>{item.name}</h3>
              <h4 className={classes['product-price']}>{item.price}</h4>
              <p className={classes['product-qty']}>{item.qty}</p>
            </div>
            <div>
              <button className={classes['qty-buttons']}>-</button>
              <button className={classes['qty-buttons']}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.actions}>
        <Button className={classes.cancel} onHideCart={props.onHideCart}>
          Cancel
        </Button>
        <button className={classes.order}>Send order</button>
      </div>
    </Modal>
  );
}
