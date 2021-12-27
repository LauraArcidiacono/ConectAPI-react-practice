import React, { useState, useEffect } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

export default function ListOfGifs({ keyWord }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyWord })
      .then((gifsArray) => setGifs(gifsArray));
  }, ([keyWord]));

  return (
    gifs.map(({ id, title, url }) => (
      <Gif
        id={id}
        key={id}
        title={title}
        url={url}
      />
    ))
  );
}
