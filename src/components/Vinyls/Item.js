import photo from '../../assets/items/mozzart-requiem.jpg';

import React from 'react';
import classes from './Item.module.css';

import Button from '../UI/Button';

export default function Item(props) {
  return (
    <div className={classes.item}>
      <div className={classes['item-picture']}>
        <img src={photo} alt="Mozzart - Requiem album art" />
      </div>
      <div className={classes['item-title']}></div>
      <div className={classes['item-tag']}></div>
      <div className={classes['item-description']}></div>
      <div className={classes.actions}>
        <Button className={classes.button}>See more</Button>
        <Button className={classes.button}>Add to cart</Button>
      </div>
    </div>
  );
}
