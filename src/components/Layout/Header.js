import React from 'react';

import classes from './Header.module.css';

import Button from '../UI/Button';
import CartButton from '../UI/CartButton';

export default function Header() {
  return (
    <header>
      <section className={classes.SectionHeader}>
        <h1 className={classes['primary-header']}>
          <span className={classes['header-span-1']}>Vinyl</span>
          <span className={classes['header-span-2']}>Store</span>
        </h1>
        <CartButton />
        {/* <Button>Contact us</Button> */}
      </section>
    </header>
  );
}
