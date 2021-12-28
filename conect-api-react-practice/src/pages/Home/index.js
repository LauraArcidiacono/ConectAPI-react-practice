/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import useGifs from '../../hooks/useGifs';

const POPULAR_GIFS = ['mrs+maisel', 'susie+myers', 'abe+maisel', 'rose+maisel'];

export default function Home() {
  const [keyword, setKeyword] = useState('');

  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();

  const handleSubmit = (event) => {
    event.preventDefault();
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={keyword}
          placeholder="Search a gif here"
        />
        <button type="submit">Buscar</button>
      </form>
      <h3 className="App-title">Última búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los Gifs mas populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>
              {' '}
              Gif de
              {' '}
              {popularGif}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
