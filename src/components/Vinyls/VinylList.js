import React from 'react';
import classes from './VinylList.module.css';

import Card from '../UI/Card';
import Item from './Item';

export default function VinlyList(props) {
  return (
    <main>
      <Card className={classes.card}>
        <section className={classes.SectionList}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </section>
      </Card>
    </main>
  );
}
