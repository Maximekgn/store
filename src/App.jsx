import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [listOfItems, setListOfItems] = useState([]);
  const [notificationPermission, setNotificationPermission] = useState('default');

  const addItems = (item) => {
    setListOfItems([...listOfItems, item]);
  }

  // Request notification permission
  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);
      return permission;
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return 'denied';
    }
  };

  // Send browser notification
  const sendNotification = (message) => {
    if (notificationPermission !== 'granted') return;
    
    try {
      const notification = new Notification('KgnStore', {
        body: message,
        icon: '/favicon.ico' // Use your app favicon or logo
      });
      
      // Auto close after 5 seconds
      setTimeout(() => {
        notification.close();
      }, 5000);
      
      // Handle notification click
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
    } catch (error) {
      console.error('Error creating notification:', error);
    }
  };

  useEffect(() => {
    // Request permission when component mounts
    requestNotificationPermission();
    
    // Set up interval for notifications every 10 seconds
    const intervalId = setInterval(() => {
      const now = new Date();
      sendNotification(`Notification test: ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`);
    }, 10000); // 10 seconds
    
    // Initial notification
    const initialNow = new Date();
    setTimeout(() => {
      sendNotification(`Notification test: ${initialNow.getHours()}:${initialNow.getMinutes().toString().padStart(2, '0')}`);
    }, 1000); // Slight delay to allow permission request to complete
    
    // Clean up interval when component unmounts
    return () => clearInterval(intervalId);
  }, [notificationPermission]);

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
