import React from 'react';
import axios from 'axios';
import './App.css';
import BookCard from './components/BookCard';

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [items, setItems] = React.useState([]);

  const onChangeInput = (event: any) => {
    setSearchQuery(event.target.value);
    console.log(searchQuery);
  };

  const getBooks = async (searchQuery: any) => {
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=30&key=AIzaSyANpGowrTgu2N5mKGW0ZbrqOR8ptmabar8`,
      );
      console.log(data);
      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    getBooks(searchQuery);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search for books</h1>
        <form id="bookSearchForm">
          <div>
            <input
              onChange={onChangeInput}
              type="text"
              id="searchInput"
              name="searchQuery"
              placeholder="Введите название книги..."
              required
            />
            <button type="submit" onClick={onSubmit} />
          </div>

          <label htmlFor="categorySelect">Category:</label>
          <select id="categorySelect" name="category">
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
          <select id="sortSelect" name="sort">
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
      </main>
    </div>
  );
};

export default App;
