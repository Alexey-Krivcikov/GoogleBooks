import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: 'all',
  sort: 'relevance',
  searchQuery: '',
  startIndex: 0,
  maxResults: 30,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload
    },
    setStartIndex(state, action) {
      state.startIndex = action.payload
    }
  }
})

export const selectSearchData = (state) => state.search;

export const { setCategory, setSort, setSearchQuery, setStartIndex } = searchSlice.actions;

export default searchSlice.reducer;