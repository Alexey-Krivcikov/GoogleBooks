import React from 'react';
import FullBookCard from '../components/FullBookCard';
import axios from 'axios';
import { useParams } from 'react-router';

const FullBook = () => {
  // @ts-ignore
  const [book, setBook] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchBook() {
      try {
        const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBook();
  }, []);

  // @ts-ignore
  return <>{book ? <FullBookCard {...book} /> : <>Загрузка...</>} </>;
};

export default FullBook;
