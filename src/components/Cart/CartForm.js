import React, { useRef, useState, useContext } from 'react';
import classes from './CartForm.module.css';
import CartContext from '../../store/cart-context';

export default function CartForm(props) {
  const [formIsValid, setFormIsValid] = useState(true);

  const cartCtx = useContext(CartContext);

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const phoneInputRef = useRef();

  const submitOrderHandler = async (e) => {
    e.preventDefault();

    const nameIsValid = nameInputRef.current.value.trim() !== '';
    const addressIsValid = addressInputRef.current.value.trim() !== '';
    const phoneIsValid = !isNaN(phoneInputRef.current.value);

    if (nameIsValid && addressIsValid && phoneIsValid) {
      const order = {
        cart: cartCtx.items,
        name: nameInputRef.current.value,
        address: addressInputRef.current.value,
        phone: phoneInputRef.current.value,
      };

      const response = await fetch(
        'https://vinyl-store-24847-default-rtdb.firebaseio.com/orders.json',
        {
          method: 'POST',
          body: JSON.stringify(order),
        }
      );

      props.onSubmitted(true);
      cartCtx.clearCart();
    } else {
      setFormIsValid(false);
    }
  };

  return (
    <form onSubmit={submitOrderHandler}>
      <div className={classes['form-control']}>
        <label htmlFor="name">Full name:</label>
        <input id="name" type="text" ref={nameInputRef} />
      </div>
      <div className={classes['form-control']}>
        <label htmlFor="address">Full address:</label>
        <input id="address" type="text" ref={addressInputRef} />
      </div>
      <div className={classes['form-control']}>
        <label htmlFor="phone">Contact phone:</label>
        <input id="phone" type="text" ref={phoneInputRef} />
      </div>
      {!formIsValid && (
        <p className={classes.failed}>
          Submission failed. All fields are mandatory.
        </p>
      )}
      <div className={classes.actions}>
        <button
          className={classes.cancel}
          onClick={() => props.onShowForm(false)}
        >
          Cancel
        </button>
        <button type="submit" className={classes.order}>
          Submit order
        </button>
      </div>
    </form>
  );
}
