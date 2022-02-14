import React from 'react';
import classes from './Footer.module.css';

export default function Footer(props) {
  return (
    <footer>
      <section className={classes.SectionFooter}>
        &copy; {new Date().getFullYear()} The Vinyl Store
      </section>
    </footer>
  );
}
