import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Contact from './pages/Contact';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [listOfItems, setListOfItems] = useState([]);

  const addItems = (item) => {
    setListOfItems([...listOfItems, item]);
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar numOfItems={listOfItems.length} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addItems={addItems} />} />
            <Route path="/cart" element={<Cart items={listOfItems} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
