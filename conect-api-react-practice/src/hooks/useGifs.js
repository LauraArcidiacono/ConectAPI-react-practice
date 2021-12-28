/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import getGifs from '../services/getGifs';

export default function useGifs({ keyword } = { keyword: 'null' }) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword })
      .then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        localStorage.setItem('lastKeyword', keyword);
      });
  }, [keyword]);

  return (loading, gifs);
}
