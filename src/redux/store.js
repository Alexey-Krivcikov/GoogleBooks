import { configureStore } from "@reduxjs/toolkit";
import search from './slices/searchSlice';
import books from './slices/booksSlice';

export const store = configureStore({
  reducer: {
    search,
    books
  }
});