/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import getGifs from '../../services/getGifs';

export default function SearchResults({ params }) {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, steGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword })
      .then((gifs) => {
        steGifs(gifs);
        setLoading(false);
      });
  }, [keyword]);

  return (
    <section>
      {loading
        ? <Spinner />
        : <ListOfGifs gifs={gifs} />}
    </section>
  );
}
