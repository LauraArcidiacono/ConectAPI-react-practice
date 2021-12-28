/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import useGlobalGifs from '../../hooks/useGlobalGifs';
import Gif from '../../components/Gif/Gif';

export default function Detail({ params }) {
  const gifs = useGlobalGifs();

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  return (
    <Gif
      id={gif.id}
      url={gif.url}
      title={gif.title}
    />
  );
}
