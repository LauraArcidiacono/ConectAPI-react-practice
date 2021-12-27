import { React } from 'react';
import './App.css';
import { Route, Link } from 'wouter';
import Detail from './pages/Detail/index';
import Home from './pages/Home/index';
import SearchResults from './pages/SearchResults';

export default function App() {
  return (
    <div className="App">
      <section className="App__listOfGifs">
        <h1>Connect React + API practice</h1>
        <Link to="/">
          <img src="/logo.png" alt="Giffy Logo" />
        </Link>
        <Route
          component={Home}
          path="/"
        />
        <Route
          component={SearchResults}
          path="/search/:keyword"
        />
        <Route
          component={Detail}
          path="/gif/:id"
        />
      </section>
    </div>
  );
}
