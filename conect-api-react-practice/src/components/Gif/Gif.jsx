/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'wouter';
import './Gif.css';

export default function Gif({ id, title, url }) {
  return (
    <div className="Gif">
      <Link to={`gif/${id}`} className="Gif-link">
        <h3>{ title }</h3>
        <img
          src={url}
          alt={title}
        />
      </Link>
    </div>
  );
}
