import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FullBook from './pages/FullBook';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="books/:id" element={<FullBook />} />
      </Route>
    </Routes>
  );
};

export default App;
