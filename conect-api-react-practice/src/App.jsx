/* eslint-disable react/jsx-no-constructed-context-values */
import { React } from 'react';
import './App.css';
import { Route, Link } from 'wouter';
import Detail from './pages/Detail/index';
import Home from './pages/Home/index';
import SearchResults from './pages/SearchResults';
import Context from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

export default function App() {
  return (
    <Context.Provider value={{
      name: 'lau',
      suscribirse: true
    }}
    >
      <div className="App">
        <section className="App-content">
          <h1>Connect React + API practice</h1>
          <Link to="/">
            <img className="App-logo" src="/logo.png" alt="Giffy Logo" />
          </Link>
          <GifsContextProvider>
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
          </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}
