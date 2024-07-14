import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar numOfItems={5}/>
      <Home/>
      <Footer/>
    </>
  );
};

export default App;
