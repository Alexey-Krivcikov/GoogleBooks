import React from 'react';
import BookCard from '../BookCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, selectBooksData, setItems } from '../../redux/slices/booksSlice';
import { selectSearchData } from '../../redux/slices/searchSlice';

const Main = () => {
  const dispatch = useDispatch();
  const { items, status, totalItems } = useSelector(selectBooksData);
  const { searchQuery, sort, maxResults, startIndex, category } = useSelector(selectSearchData);
  // const loadMoreBooks = async () => {
  //   const nextPage = startIndex + 1;
  //   const nextIndex = nextPage * maxResults;

  //   const selectedCategory = category === 'all' ? '' : category;

  //   const allBooks = dispatch(
  //     // @ts-ignore
  //     fetchBooks({
  //       searchQuery,
  //       sort,
  //       startIndex: nextIndex,
  //       maxResults,
  //       selectedCategory,
  //     }),
  //   );
  //   // @ts-ignore
  //   setItems((prevItems) => [...prevItems, ...allBooks]);
  // };
  return (
    <main>
      <p>Total items: {totalItems}</p>
      <div>
        {status === 'success' ? (
          items.map((obj: any) => (
            <Link to={`/books/${obj.id}`} key={obj.id}>
              <BookCard {...obj} />
            </Link>
          ))
        ) : (
          <p>Список пуст</p>
        )}
      </div>
      {/* <button onClick={loadMoreBooks}>Load more</button> */}
    </main>
  );
};

export default Main;
