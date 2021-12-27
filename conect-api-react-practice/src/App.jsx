import { React } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

export default function App() {
  return (
    <div className="App">
      <section className="gif__item">
        <ListOfGifs keyWord="mrs+maisel" />
      </section>
    </div>
  );
}
