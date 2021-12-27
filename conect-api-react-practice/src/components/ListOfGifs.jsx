/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

export default function ListOfGifs({ params }) {
  const [loading, setLoading] = useState(false);

  const { keyword } = params;

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword })
      .then((gifsArray) => setGifs(gifsArray));
    setLoading(false);
  }, ([keyword]));

  if (loading) return <i>Loading...</i>;

  return (
    <div>
      {
        gifs.map(({ id, title, url }) => (
          <Gif
            id={id}
            key={id}
            title={title}
            url={url}
          />
        ))
      }
    </div>
  );
}
