import React, { useEffect, useState } from 'react';
import classes from './VinylList.module.css';

import Card from '../UI/Card';
import Item from './Item';

export default function VinlyList(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        'https://vinyl-store-24847-default-rtdb.firebaseio.com/items.json'
      );
      const data = await response.json();
      let fetchedItems = [];
      for (const key in data) {
        fetchedItems.push({
          id: key,
          band: data[key].band,
          title: data[key].title,
          picture: data[key].picture,
          genre: data[key].genre,
          description: data[key].description,
          longDescription: data[key].longDescription,
          price: data[key].price,
          tracklist: data[key].tracklist,
        });
      }
      setItems(fetchedItems);
    };
    fetchItems();
  }, []);

  return (
    <main>
      <Card>
        <section className={classes.SectionList}>
          {items.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              genre={item.genre}
              price={item.price}
              description={item.description}
              longDescription={item.longDescription}
              trackList={item.trackList}
              picture={item.picture}
              band={item.band}
            />
          ))}
        </section>
      </Card>
    </main>
  );
}
