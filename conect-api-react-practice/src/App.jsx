import { React } from 'react';
import './App.css';
import { Route, Link } from 'wouter';
import ListOfGifs from './components/ListOfGifs';

export default function App() {
  return (
    <div className="App">
      <section className="App__listOfGifs">
        <h1>Connect React + API practice</h1>
        <Link to="/gif/mrs+maisel">Mrs Maisel</Link>
        <Link to="/gif/susie+myerson">Susie</Link>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword"
        />
      </section>
    </div>
  );
}
