import React, { useState } from 'react';
// import axios from 'axios';
import Main from '../components/Main';
import Search from '../components/Search';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Search for books</h1>
        <Search />
      </header>
      <Main />
    </div>
  );
};

export default Home;
