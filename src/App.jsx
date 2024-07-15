import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [listOfItems, setListOfItems] = useState([]);

  const addItems = (item) => {
    setListOfItems([...listOfItems, item]);
  }

  return (
    <Router>
      <Navbar numOfItems={listOfItems.length} />
      <Routes>
        <Route path="/" element={<Home addItems={addItems} />} />
        <Route path="/cart" element={<Cart items={listOfItems} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
