/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function Detail({ params }) {
  console.log('params.id', params.id);
  return (
    <h2>
      GIF con id:
      {' '}
      { params.id }
    </h2>
  );
}
