import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchData, setSort } from '../../redux/slices/searchSlice';
const Sort = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector(selectSearchData);
  const onChangeSort = (event: any) => {
    dispatch(setSort(event.target.value));
  };
  return (
    <>
      <label htmlFor="sortSelect">Sort By:</label>
      <select id="sortSelect" name="sort" value={sort} onChange={onChangeSort}>
        <option value="relevance" selected>
          relevance
        </option>
        <option value="newest">newest</option>
      </select>
    </>
  );
};
export default Sort;
