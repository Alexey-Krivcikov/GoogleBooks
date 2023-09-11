import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FullBook from './pages/FullBook';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:id" element={<FullBook />} />
    </Routes>
  );
};

export default App;
