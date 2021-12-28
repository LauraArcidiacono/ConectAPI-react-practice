/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Spinner from '../../components/Spinner/Spinner';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import useGifs from '../../hooks/useGifs';

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  console.log('loadin g y gifs', loading, gifs);

  return (
    <>
      {loading
        ? <Spinner />
        : <ListOfGifs gifs={gifs} />}
    </>
  );
}
