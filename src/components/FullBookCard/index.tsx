import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
const FullBookCard = ({ volumeInfo }) => {
  return (
    <div>
      <h3>{volumeInfo.title}</h3>
      <img src={volumeInfo.imageLinks?.thumbnail} alt={volumeInfo.title} />
      {volumeInfo.categories && <p>Категории: {volumeInfo.categories}</p>}
      {volumeInfo.authors && <p>Авторы: {volumeInfo.authors}</p>}
      <p>Описание: {volumeInfo.description}</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default FullBookCard;
