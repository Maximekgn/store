import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8 mt-auto'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h2 className='text-2xl font-bold italic mb-4'>KgnStore</h2>
            <p className='text-sm'>Your one-stop shop for all your needs.</p>
          </div>
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><Link to="/" className='hover:text-gray-300'>Home</Link></li>
              <li><Link to="/products" className='hover:text-gray-300'>Products</Link></li>
              <li><Link to="/about" className='hover:text-gray-300'>About Us</Link></li>
              <li><Link to="/contact" className='hover:text-gray-300'>Contact</Link></li>
            </ul>
          </div>
          <div className='w-full md:w-1/3'>
            <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a href="#" className='text-2xl hover:text-gray-300'><FaFacebook /></a>
              <a href="#" className='text-2xl hover:text-gray-300'><FaTwitter /></a>
              <a href="#" className='text-2xl hover:text-gray-300'><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-700 text-center'>
          <p>&copy; {new Date().getFullYear()} KgnStore. All rights reserved.</p>
          <p className='mt-2'>Made with ❤️ by @MaximeKGN</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer