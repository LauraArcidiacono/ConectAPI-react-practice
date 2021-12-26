import { React, useState, useEffect } from 'react';
import './App.css';
import getGifs from './services/getGifs';

export default function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyWord: 'susie+myerson' }).then((gifsArray) => setGifs(gifsArray));
  }, ([]));

  return (
    <section className="gif__item">
      {gifs.map((singleGif) => (
        <img
          src={singleGif}
          alt=""
          className="gif__item"
        />
      ))}
    </section>
  );
}
