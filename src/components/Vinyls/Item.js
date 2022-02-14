import React, { useContext, useState } from 'react';
import classes from './Item.module.css';
import CartContext from '../../store/cart-context';
import LongDescription from './LongDescription';

export default function Item(props) {
  const [isShowingMore, setIsShowingMore] = useState(false);
  const cartCtx = useContext(CartContext);

  const price = props.price.toLocaleString(navigator.language, {
    style: 'currency',
    currency: 'USD',
  });

  const openSeeMoreHandler = () => {
    setIsShowingMore(true);
  };

  const closeSeeMoreHandler = () => {
    setIsShowingMore(false);
  };

  const addItemHandler = () => {
    cartCtx.addItem({
      id: props.id,
      qty: 1,
      name: props.title,
      price: price,
    });
  };

  return (
    <React.Fragment>
      {isShowingMore && (
        <LongDescription
          longDescription={props.longDescription}
          trackList={props.trackList}
          onClose={closeSeeMoreHandler}
        />
      )}
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
          <button className={classes.button} onClick={openSeeMoreHandler}>
            See more
          </button>
          <button className={classes.button} onClick={addItemHandler}>
            Add to cart
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
