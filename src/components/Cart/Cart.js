import React, { useState, useContext } from 'react';
import classes from './Cart.module.css';

import Modal from '../UI/Modal';
import Button from '../UI/Button';
import CartContext from '../../store/cart-context';
import CartForm from './CartForm';

export default function Cart(props) {
  const [showForm, setShowForm] = useState(false);

  const cartCtx = useContext(CartContext);

  const submitOrderHandler = () => {
    setShowForm(true);
  };

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
              <button
                className={classes['qty-buttons']}
                onClick={() => {
                  cartCtx.removeItem(item.id);
                }}
              >
                -
              </button>
              <button
                className={classes['qty-buttons']}
                onClick={() => {
                  cartCtx.addItem({ ...item, qty: 1 });
                }}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      {showForm && <CartForm onShowForm={setShowForm} />}
      {!showForm && (
        <div className={classes.actions}>
          <Button className={classes.cancel} onHideCart={props.onHideCart}>
            Cancel
          </Button>
          <button className={classes.order} onClick={submitOrderHandler}>
            Order
          </button>
        </div>
      )}
    </Modal>
  );
}
