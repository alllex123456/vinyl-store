import React from 'react';

import classes from './Header.module.css';

import CartButton from '../UI/CartButton';

export default function Header(props) {
  return (
    <header>
      <section className={classes.SectionHeader}>
        <h1 className={classes['primary-header']}>
          <span className={classes['header-span-1']}>Vinyl</span>
          <span className={classes['header-span-2']}>Store</span>
        </h1>
        <CartButton onShowCart={props.onShowCart} />
      </section>
    </header>
  );
}
