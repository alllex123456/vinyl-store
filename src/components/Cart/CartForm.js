import React, { useRef } from 'react';
import classes from './CartForm.module.css';

export default function CartForm(props) {
  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const phoneInputRef = useRef();

  const submitOrderHandler = async (e) => {
    e.preventDefault();

    const order = {
      name: nameInputRef.current.value,
      address: addressInputRef.current.value,
      phone: phoneInputRef.current.value,
    };

    const response = await fetch();
  };

  return (
    <form onSubmit={submitOrderHandler}>
      <div className={classes['form-control']}>
        <label htmlFor="name">Full name:</label>
        <input id="name" type="text" ref={nameInputRef} />
      </div>
      <div className={classes['form-control']}>
        <label htmlFor="name">Full address:</label>
        <input id="name" type="text" ref={addressInputRef} />
      </div>
      <div className={classes['form-control']}>
        <label htmlFor="name">Contact phone:</label>
        <input id="name" type="text" ref={phoneInputRef} />
      </div>
      <div className={classes.actions}>
        <button
          className={classes.cancel}
          onClick={() => props.onShowForm(false)}
        >
          Cancel
        </button>
        <button className={classes.order}>Submit order</button>
      </div>
    </form>
  );
}
