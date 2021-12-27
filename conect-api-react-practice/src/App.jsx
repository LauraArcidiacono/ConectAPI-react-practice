import { React, useState, useEffect } from 'react';
import './App.css';
import getGifs from './services/getGifs';
import ListOfGifs from './components/ListOfGifs';

export default function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyWord: 'susie+myerson' }).then((gifsArray) => setGifs(gifsArray));
  }, ([]));

  return (
    <div className="App">
      <section className="gif__item">
        <ListOfGifs gifs={gifs} />
      </section>
    </div>
  );
}
