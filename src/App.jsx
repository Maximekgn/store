import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='mx-10'>

      <Navbar/>
      <Home/>
    </div>
  );
};

export default App;
