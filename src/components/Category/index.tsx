import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchData, setCategory } from '../../redux/slices/searchSlice';

const Category = () => {
  const dispatch = useDispatch();
  const { category } = useSelector(selectSearchData);

  const onChangeCategory = (event: any) => {
    dispatch(setCategory(event.target.value));
  };
  return (
    <>
      <label htmlFor="categorySelect">Category:</label>
      <select id="categorySelect" name="category" value={category} onChange={onChangeCategory}>
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
    </>
  );
};

export default Category;
