import React from 'react';
import Modal from '../UI/Modal';
import classes from './LongDescription.module.css';

export default function LongDescription(props) {
  let formattedTracks = props.trackList
    .split('-')
    .map((track) => <li>{track}</li>);

  return (
    <Modal>
      <h4>Description:</h4>
      <p className={classes.description}>{props.longDescription}</p>
      <h4>Track list:</h4>
      <ul className={classes.tracklist}>{formattedTracks}</ul>
      <button type="text" onClick={props.onClose}>
        Close
      </button>
    </Modal>
  );
}
