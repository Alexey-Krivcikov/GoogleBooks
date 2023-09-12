import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchBooks = createAsyncThunk('books, fetchBooksStatus', async (params) => {
  const { searchQuery, selectedCategory, startIndex, maxResults, sort } = params;
  const { data } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}+subject:${selectedCategory}&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${sort}&printType=books&key=AIzaSyANpGowrTgu2N5mKGW0ZbrqOR8ptmabar8`,
  );
  return data;
})
export const fetchNewBooks = createAsyncThunk('books, fetchNewBooksStatus', async (params) => {
  const { searchQuery, selectedCategory, startIndex, maxResults, sort } = params;
  const { data } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}+subject:${selectedCategory}&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${sort}&printType=books&key=AIzaSyANpGowrTgu2N5mKGW0ZbrqOR8ptmabar8`,
  );
  return data;
})

const initialState = {
  totalItems: 0,
  items: [],
  status: 'loading', // loading. success. error
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addItems(state, action) {
      state.items = [...state.items, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload.items;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      })
  },
});

export const selectBooksData = (state) => state.books;

export const { addItems } = booksSlice.actions;

export default booksSlice.reducer;