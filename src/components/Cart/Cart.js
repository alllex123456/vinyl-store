import React from 'react';
import classes from './Cart.module.css';

import Modal from '../UI/Modal';
import Button from '../UI/Button';

export default function Cart(props) {
  return (
    <Modal onHideCart={props.onHideCart}>
      <div className={classes.content}>CART CONTENT</div>
      <div className={classes.actions}>
        <Button onHideCart={props.onHideCart}>Cancel</Button>
      </div>
    </Modal>
  );
}
