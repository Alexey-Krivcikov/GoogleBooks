import React from 'react';
import axios from 'axios';
import './App.css';
import BookCard from './components/BookCard';

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedSort, setSelectedSort] = React.useState('relevance');
  const [startIndex, setStartIndex] = React.useState(0);
  const [maxResults] = React.useState(30);
  const [items, setItems] = React.useState([]);

  const onChangeSearch = (event: any) => {
    setSearchQuery(event.target.value);
  };
  const onChangeCategory = (event: any) => {
    setSelectedCategory(event.target.value);
  };
  const onChangeSort = (event: any) => {
    setSelectedSort(event.target.value);
  };

  type getBooksProps = {
    searchQuery: string;
    selectedSort: string;
    startIndex: number;
    maxResults: number;
  };

  const getBooks = async ({ searchQuery, selectedSort, startIndex, maxResults }: getBooksProps) => {
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${selectedSort}&printType=books&key=AIzaSyANpGowrTgu2N5mKGW0ZbrqOR8ptmabar8`,
      );
      return data.items;
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const allBooks = await getBooks({
      searchQuery,
      selectedSort,
      startIndex,
      maxResults,
    });

    // const filteredBooks =
    //   selectedCategory === 'all'
    //     ? allBooks
    //     : allBooks.filter((book: any) => {
    //         const categories = book.volumeInfo.categories || [];
    //         console.log(categories);
    //         return categories.some(
    //           (category: string) => category.toLowerCase() === selectedCategory.toLowerCase(),
    //         );
    //       });
    // console.log(filteredBooks);
    setItems(allBooks);
  };

  const loadMoreBooks = async () => {
    const nextPage = startIndex + 1;
    setStartIndex(nextPage);
    const nextIndex = nextPage * maxResults;
    const allBooks = await getBooks({
      searchQuery,
      selectedSort,
      startIndex: nextIndex,
      maxResults,
    });
    // @ts-ignore
    setItems((prevItems) => [...prevItems, ...allBooks]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search for books</h1>
        <form id="bookSearchForm">
          <div>
            <input
              onChange={onChangeSearch}
              type="text"
              id="searchInput"
              name="searchQuery"
              placeholder="Введите название книги..."
              required
            />
            <button type="submit" onClick={onSubmit} />
          </div>

          <label htmlFor="categorySelect">Category:</label>
          <select
            id="categorySelect"
            name="category"
            value={selectedCategory}
            onChange={onChangeCategory}>
            <option value="all" selected>
              All
            </option>
            <option value="art">Art</option>
            <option value="biography">Biography</option>
            <option value="computers">Computers</option>
            <option value="history">History</option>
            <option value="medical">Medical</option>
            <option value="poetry">Poetry</option>
          </select>

          <label htmlFor="sortSelect">Sort By:</label>
          <select id="sortSelect" name="sort" value={selectedSort} onChange={onChangeSort}>
            <option value="relevance" selected>
              relevance
            </option>
            <option value="newest">newest</option>
          </select>
        </form>
      </header>
      <main>
        <div>
          {items.map((obj) => (
            // @ts-ignore
            <BookCard {...obj} />
          ))}
        </div>
        <button onClick={loadMoreBooks}>Load more</button>
      </main>
    </div>
  );
};

export default App;
