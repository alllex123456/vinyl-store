import React from 'react';
import classes from './Button.module.css';

export default function Button(props) {
  return (
    <button
      className={`${props.className} ${classes.button}`}
      onClick={props.onHideCart}
    >
      {props.children}
    </button>
  );
}
