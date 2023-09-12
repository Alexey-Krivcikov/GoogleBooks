import React from 'react';
import styles from './BookCard.module.scss';
// @ts-ignore
const BookCard = ({ volumeInfo }) => {
  const firstCategory =
    volumeInfo.categories && volumeInfo.categories.length > 0 ? volumeInfo.categories[0] : '';

  return (
    <div className={styles.bookCard}>
      <h3>{volumeInfo.title}</h3>
      <img src={volumeInfo.imageLinks?.thumbnail} alt={volumeInfo.title} />
      {firstCategory && <p>Категория: {firstCategory}</p>}
      {volumeInfo.authors && <p>Автор: {volumeInfo.authors}</p>}
    </div>
  );
};
export default BookCard;
