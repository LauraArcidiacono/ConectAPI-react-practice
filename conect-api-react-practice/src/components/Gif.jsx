/* eslint-disable react/prop-types */
import React from 'react';

export default function Gif({ id, title, url }) {
  return (
    <div>
      <h3>{ title }</h3>
      <small>
        {id}
        {' '}
      </small>
      <img
        src={url}
        alt={title}
        className="gif__item"
      />
    </div>
  );
}
