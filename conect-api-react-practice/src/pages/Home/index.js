/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';

const POPULAR_GIFS = ['mrs=maisel', 'susie+myers', 'abe+maisel', 'rose+maisel'];

export default function Home() {
  const [keyword, setKeyword] = useState('');

  const [path, pushLocation] = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`);
    console.log('path y keyword', path, keyword);
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
      </form>
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
