import { React, useState, useEffect } from 'react';
import './App.css';
import getGifs from './services/getGifs';
import Gif from './components/Gif';

export default function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyWord: 'susie+myerson' }).then((gifsArray) => setGifs(gifsArray));
  }, ([]));

  return (
    <div className="App">
      <section className="gif__item">
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
      </section>
    </div>
  );
}
